<?php
/**
 * AI Chat Assets Loader
 *
 * Injects the AI Chat chat assistant module on ALL ExactMetrics admin pages
 * (both Vue 2 and Vue 3 pages).
 *
 * @package exactmetrics
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class ExactMetrics_AI_Charlie_Assets
 */
class ExactMetrics_AI_Charlie_Assets {

	/**
	 * Script handle for AI Chat.
	 */
	const SCRIPT_HANDLE = 'exactmetrics-ai-charlie';

	/**
	 * Vue 3 manifest data cache.
	 *
	 * @var array|null
	 */
	private static $manifest_data = null;

	/**
	 * Version path (pro or lite).
	 *
	 * @var string
	 */
	private $version_path;

	/**
	 * Constructor.
	 */
	public function __construct() {
		// Load AJAX handlers for chat persistence.
		require_once plugin_dir_path( __FILE__ ) . 'ai-charlie-ajax.php';

		$this->version_path = exactmetrics_is_pro_version() ? 'pro' : 'lite';

		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_assets' ), 15 );
		add_filter( 'exactmetrics_localize_script_data', array( $this, 'add_ai_chat_config' ) );

		// Add type="module" for ES modules.
		global $wp_version;
		if ( version_compare( $wp_version, '6.4', '>=' ) ) {
			add_filter( 'wp_script_attributes', array( $this, 'set_script_type_module' ), 99999 );
		} else {
			add_filter( 'script_loader_tag', array( $this, 'script_loader_tag' ), 99999, 3 );
		}
	}

	/**
	 * Enqueue AI Chat assets on all ExactMetrics admin pages.
	 *
	 * @return void
	 */
	public function enqueue_assets() {
		// Only load on ExactMetrics admin pages.
		if ( ! $this->is_exactmetrics_page() ) {
			return;
		}

		$this->load_manifest_data();
		$this->enqueue_script();

		// CSS is injected by Vite in dev mode, only enqueue in production.
		if ( ! $this->is_dev_mode() ) {
			$this->enqueue_styles();
		}
	}

	/**
	 * Check if current page is a ExactMetrics admin page.
	 *
	 * @return bool
	 */
	private function is_exactmetrics_page() {
		$page = isset( $_GET['page'] ) ? sanitize_key( wp_unslash( $_GET['page'] ) ) : '';

		// Only load on reports pages (Vue 2 and Vue 3).
		$allowed_pages = array(
			'exactmetrics_reports',          // Vue 2 reports
			'exactmetrics_overview_report',  // Vue 3 overview report
		);

		return in_array( $page, $allowed_pages, true );
	}

	/**
	 * Enqueue the AI Chat script.
	 *
	 * @return void
	 */
	private function enqueue_script() {
		$script_url = $this->get_script_url();

		if ( empty( $script_url ) ) {
			return;
		}

		wp_register_script(
			self::SCRIPT_HANDLE,
			$script_url,
			array( 'wp-i18n' ),
			exactmetrics_get_asset_version(),
			true
		);

		wp_enqueue_script( self::SCRIPT_HANDLE );

		// Inject bearer token and AI chat config directly so it is available on ALL
		// ExactMetrics admin pages, including Vue 2 pages where the
		// exactmetrics_localize_script_data filter never fires.
		$bearer_token_data = ExactMetrics_API_Token::get_token( is_network_admin() );
		$bearer_token      = '';
		$bearer_expires    = 0;
		if ( ! is_wp_error( $bearer_token_data ) ) {
			$bearer_token   = $bearer_token_data['token'];
			$bearer_expires = $bearer_token_data['expires_at'];
		}

		$ai_chat_api_url = apply_filters( 'exactmetrics_ai_chat_api_url', 'https://ai-api.exactmetrics.com' );
		$version_path    = exactmetrics_is_pro_version() ? 'pro' : 'lite';
		$assets_url      = apply_filters( 'exactmetrics_vue3_assets_url', plugins_url( $version_path . '/assets/vue3', EXACTMETRICS_PLUGIN_FILE ) );
		$wizard_url      = exactmetrics_can_install_plugins() ? exactmetrics_get_onboarding_url() : '';
		$settings_url    = is_network_admin()
			? network_admin_url( 'admin.php?page=exactmetrics_network' )
			: admin_url( 'admin.php?page=exactmetrics_settings' );

		// Use ||= semantics so values set by wp_localize_script (Vue 3 pages) take precedence.
		$inline = sprintf(
			'window.exactmetrics=window.exactmetrics||{};' .
			'if(!window.exactmetrics.bearer_token){window.exactmetrics.bearer_token=%s;}' .
			'if(!window.exactmetrics.bearer_expires){window.exactmetrics.bearer_expires=%d;}' .
			'if(!window.exactmetrics.ai_chat_api_url){window.exactmetrics.ai_chat_api_url=%s;}' .
			'if(!window.exactmetrics.assets_url){window.exactmetrics.assets_url=%s;}' .
			'if(!window.exactmetrics.wizard_url){window.exactmetrics.wizard_url=%s;}' .
			'if(!window.exactmetrics.settings_url){window.exactmetrics.settings_url=%s;}',
			wp_json_encode( $bearer_token ),
			$bearer_expires,
			wp_json_encode( $ai_chat_api_url ),
			wp_json_encode( $assets_url ),
			wp_json_encode( $wizard_url ),
			wp_json_encode( $settings_url )
		);
		wp_add_inline_script( self::SCRIPT_HANDLE, $inline, 'before' );

		// Load translations.
		$text_domain = exactmetrics_is_pro_version() ? 'exactmetrics-premium' : 'google-analytics-dashboard-for-wp';
		wp_set_script_translations( self::SCRIPT_HANDLE, $text_domain );
	}

	/**
	 * Enqueue AI Chat CSS.
	 *
	 * @return void
	 */
	private function enqueue_styles() {
		$entry_key = 'src/modules/ai-charlie/main.js';

		if ( empty( self::$manifest_data[ $entry_key ]['css'] ) ) {
			return;
		}

		$base_url = $this->get_base_url();

		foreach ( self::$manifest_data[ $entry_key ]['css'] as $index => $css_file ) {
			wp_enqueue_style(
				self::SCRIPT_HANDLE . '-style-' . $index,
				$base_url . ltrim( $css_file, '/' ),
				array(),
				exactmetrics_get_asset_version()
			);
		}
	}

	/**
	 * Get the script URL (dev or production).
	 *
	 * @return string
	 */
	private function get_script_url() {
		// Dev mode: Load from Vite dev server.
		if ( $this->is_dev_mode() ) {
			return trailingslashit( $this->get_dev_url() ) . 'src/modules/ai-charlie/main.js';
		}

		// Production: Load from manifest.
		$entry_key = 'src/modules/ai-charlie/main.js';

		if ( empty( self::$manifest_data[ $entry_key ]['file'] ) ) {
			return '';
		}

		// Under SCRIPT_DEBUG the loaded manifest is manifest.dev.json, so this
		// already points at the unminified build (see load_manifest_data).
		$file = self::$manifest_data[ $entry_key ]['file'];

		return $this->get_base_url() . ltrim( $file, '/' );
	}

	/**
	 * Get config data for wp_localize_script.
	 *
	 * @return array
	 */
	/**
	 * Filter callback: merge AI chat config into the exactmetrics localize data.
	 *
	 * Hooked into 'exactmetrics_localize_script_data' so the AI chat API URL
	 * and bearer token are available on window.exactmetrics on every MI page.
	 *
	 * @param array $data The existing localize script data.
	 * @return array
	 */
	public function add_ai_chat_config( $data ) {
		$bearer_token_data = ExactMetrics_API_Token::get_token( is_network_admin() );
		$bearer_token      = '';
		$bearer_expires    = 0;
		if ( ! is_wp_error( $bearer_token_data ) ) {
			$bearer_token   = $bearer_token_data['token'];
			$bearer_expires = $bearer_token_data['expires_at'];
		}

		$data['ai_chat_api_url'] = apply_filters( 'exactmetrics_ai_chat_api_url', 'https://ai-api.exactmetrics.com' );
		$data['bearer_token']    = $bearer_token;
		$data['bearer_expires']  = $bearer_expires;

		return $data;
	}

	/**
	 * Check if Vue 3 dev mode is enabled.
	 *
	 * @return bool
	 */
	private function is_dev_mode() {
		return defined( 'EXACTMETRICS_V3_DEV_URL' ) && EXACTMETRICS_V3_DEV_URL;
	}

	/**
	 * Get dev server URL.
	 *
	 * @return string
	 */
	private function get_dev_url() {
		return defined( 'EXACTMETRICS_V3_DEV_URL' ) ? EXACTMETRICS_V3_DEV_URL : '';
	}

	/**
	 * Get base URL for production assets.
	 *
	 * @return string
	 */
	private function get_base_url() {
		return plugins_url( $this->version_path . '/assets/vue3/', EXACTMETRICS_PLUGIN_FILE );
	}

	/**
	 * Load Vue 3 manifest data.
	 *
	 * @return void
	 */
	private function load_manifest_data() {
		if ( self::$manifest_data !== null ) {
			return;
		}

		$plugin_path = plugin_dir_path( EXACTMETRICS_PLUGIN_FILE );
		$base        = $plugin_path . $this->version_path . '/assets/vue3/';

		// Under SCRIPT_DEBUG prefer the unminified build's manifest.dev.json
		// (its filenames hash differently from the production build, so they
		// can't be derived from the .min names); fall back to manifest.json.
		$manifest_path = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG && file_exists( $base . 'manifest.dev.json' ) )
			? $base . 'manifest.dev.json'
			: $base . 'manifest.json';

		if ( ! file_exists( $manifest_path ) ) {
			self::$manifest_data = array();
			return;
		}

		$contents            = file_get_contents( $manifest_path ); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
		self::$manifest_data = json_decode( $contents, true );

		if ( ! is_array( self::$manifest_data ) ) {
			self::$manifest_data = array();
		}
	}

	/**
	 * Set script type to module (WP 6.4+).
	 *
	 * @param array $attrs Script attributes.
	 * @return array
	 */
	public function set_script_type_module( $attrs ) {
		if ( isset( $attrs['id'] ) && str_replace( '-js', '', $attrs['id'] ) === self::SCRIPT_HANDLE ) {
			$attrs['type'] = 'module';
		}
		return $attrs;
	}

	/**
	 * Set script type to module (WP < 6.4).
	 *
	 * @param string $tag    Script tag.
	 * @param string $handle Script handle.
	 * @param string $src    Script URL.
	 * @return string
	 */
	public function script_loader_tag( $tag, $handle, $src ) {
		if ( $handle !== self::SCRIPT_HANDLE ) {
			return $tag;
		}

		return str_replace( '></script>', ' type="module"></script>', $tag );
	}
}

new ExactMetrics_AI_Charlie_Assets();
