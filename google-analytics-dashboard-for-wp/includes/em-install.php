<?php
/**
 * ExactMetrics Installation and Automatic Upgrades.
 *
 * This file handles setting up new
 * ExactMetrics installs as well as performing
 * behind the scene upgrades between
 * ExactMetrics versions.
 *
 * @package ExactMetrics
 * @subpackage Install/Upgrade
 * @since 1.0.0
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * ExactMetrics Install.
 *
 * This class handles a new MI install
 * as well as automatic (non-user initiated)
 * upgrade routines.
 *
 * @since 1.0.0
 * @access public
 */
class ExactMetrics_Install {

	/**
	 * MI Settings.
	 *
	 * @since 6.0.0
	 * @access public
	 * @var array $new_settings When the init() function starts, initially
	 *                        contains the original settings. At the end
	 *                        of init() contains the settings to save.
	 */
	public $new_settings = array();

	/**
	 * Install/Upgrade routine.
	 *
	 * This function is what is called to actually install MI data on new installs and to do
	 * behind the scenes upgrades on MI upgrades. If this function contains a bug, the results
	 * can be catastrophic. This function gets the highest priority in all of MI for unit tests.
	 *
	 * @return void
	 * @since 6.0.0
	 * @access public
	 *
	 */
	public function init() {

		// Get a copy of the current MI settings.
		$this->new_settings = get_option( exactmetrics_get_option_name() );

		$version = get_option( 'exactmetrics_current_version', false );
		$cachec  = false; // have we forced an object cache to be cleared already (so we don't clear it unnecessarily)

		if ( ! $version ) {

			$this->new_install();

			// set db version (Do not increment! See below large comment)
			update_option( 'exactmetrics_db_version', '1.0.0' );

		} else { // if existing install

			if ( version_compare( $version, '6.1.0', '<' ) ) {
				$this->v610_upgrades();
			}

			if ( version_compare( $version, '6.1.1', '<' ) ) {
				$this->v611_upgrades();
			}

			if ( version_compare( $version, '6.2.0', '<' ) ) {
				$this->v620_upgrades();
			}

			if ( version_compare( $version, '6.3.0', '<' ) ) {
				$this->v630_upgrades();
			}

			if ( version_compare( $version, '6.3.1', '<' ) ) {
				$this->v631_upgrades();
			}

			if ( version_compare( $version, '6.4.0', '<' ) ) {
				$this->v640_upgrades();
			}

			if ( version_compare( $version, '6.5.0', '<' ) ) {
				$this->v650_upgrades();
			}

			// Do not use. See exactmetrics_after_install_routine comment below.
			do_action( 'exactmetrics_after_existing_upgrade_routine', $version );
			$version = get_option( 'exactmetrics_current_version', $version );
			update_option( 'exactmetrics_version_upgraded_from', $version );
		}

		// This hook is used primarily by the Pro version to run some Pro
		// specific install stuff. Please do not use this hook. It is not
		// considered a public hook by MI's dev team and can/will be removed,
		// relocated, and/or altered without warning at any time. You've been warned.
		// As this hook is not for public use, we've intentionally not docbloc'd this
		// hook to avoid developers seeing it future public dev docs.
		do_action( 'exactmetrics_after_install_routine', $version );

		// This is the version of MI installed
		update_option( 'exactmetrics_current_version', EXACTMETRICS_VERSION );

		// This is where we save MI settings
		update_option( exactmetrics_get_option_name(), $this->new_settings );

		// There's no code for this function below this. Just an explanation
		// of the MI core options.

		/**
		 * Explanation of ExactMetrics core options
		 *
		 * By now your head is probably spinning trying to figure
		 * out what all of these version options are for. Note, I've abbreviated
		 * "exactmetrics" to "mi" in the options names to make this table easier
		 * to read.
		 *
		 * Here's a basic rundown:
		 *
		 * mi_current_version:  This starts with the actual version MI was
		 *                        installed on. We use this version to
		 *                        determine whether or not a site needs
		 *                        to run one of the behind the scenes
		 *                        MI upgrade routines. This version is updated
		 *                        every time a minor or major background upgrade
		 *                        routine is run. Generally lags behind the
		 *                        EXACTMETRICS_VERSION constant by at most a couple minor
		 *                        versions. Never lags behind by 1 major version
		 *                        or more generally.
		 *
		 * mi_db_version:        This is different from mi_current_version.
		 *                        Unlike the former, this is used to determine
		 *                        if a site needs to run a *user* initiated
		 *                        upgrade routine (incremented in MI_Upgrade class). This
		 *                        value is only update when a user initiated
		 *                        upgrade routine is done. Because we do very
		 *                        few user initiated upgrades compared to
		 *                        automatic ones, this version can lag behind by
		 *                        2 or even 3 major versions. Generally contains
		 *                        the current major version.
		 *
		 * mi_settings:            Returned by exactmetrics_get_option_name(), this
		 *                        is actually "exactmetrics_settings" for both pro
		 *                        and lite version. However we use a helper function to
		 *                        retrieve the option name in case we ever decide down the
		 *                        road to maintain seperate options for the Lite and Pro versions.
		 *                        If you need to access MI's settings directly, (as opposed to our
		 *                        exactmetrics_get_option helper which uses the option name helper
		 *                        automatically), you should use this function to get the
		 *                        name of the option to retrieve.
		 *
		 * Therefore you should never increment exactmetrics_db_version in this file and always increment exactmetrics_current_version.
		 */
	}


	/**
	 * New ExactMetrics Install routine.
	 *
	 * This function installs all of the default
	 * things on new MI installs. Flight 5476 with
	 * non-stop service to a whole world of
	 * possibilities is now boarding.
	 *
	 * @return void
	 * @since 6.0.0
	 * @access public
	 *
	 */
	public function new_install() {

		$this->new_settings = $this->get_exactmetrics_default_values();

		$this->maybe_import_thirstyaffiliates_options();

		$data = array(
			'installed_version' => EXACTMETRICS_VERSION,
			'installed_date'    => time(),
			'installed_pro'     => exactmetrics_is_pro_version() ? time() : false,
			'installed_lite'    => exactmetrics_is_pro_version() ? false : time(),
		);

		update_option( 'exactmetrics_over_time', $data, false );

		// Let addons + MI Pro/Lite hook in here. @todo: doc as nonpublic
		do_action( 'exactmetrics_after_new_install_routine', EXACTMETRICS_VERSION );
	}

	public function get_exactmetrics_default_values() {
		$admin_email       = get_option( 'admin_email' );
		$admin_email_array = array(
			array(
				'email' => $admin_email,
			),
		);

		return array(
			'enable_affiliate_links'                   => true,
			'affiliate_links'                          => array(
				array(
					'path'  => '/go/',
					'label' => 'affiliate',
				),
				array(
					'path'  => '/recommend/',
					'label' => 'affiliate',
				)
			),
			'demographics'                             => 1,
			'ignore_users'                             => array( 'administrator', 'editor' ),
			'dashboards_disabled'                      => 0,
			'anonymize_ips'                            => 0,
			'extensions_of_files'                      => 'doc,pdf,ppt,zip,xls,docx,pptx,xlsx',
			'subdomain_tracking'                       => '',
			'link_attribution'                         => true,
			'tag_links_in_rss'                         => true,
			'allow_anchor'                             => 0,
			'add_allow_linker'                         => 0,
			'save_settings'                            => array( 'administrator' ),
			'view_reports'                             => array( 'administrator', 'editor' ),
			'events_mode'                              => 'js',
			'tracking_mode'                            => 'gtag', // Default new users to gtag.
			'gtagtracker_compatibility_mode'           => true,
			'email_summaries'                          => 'on',
			'summaries_html_template'                  => 'yes',
			'summaries_email_addresses'                => $admin_email_array,
			'exception_alert_email_addresses'          => $admin_email_array,
			'automatic_updates'                        => 'all',
			'popular_posts_inline_theme'               => 'alpha',
			'popular_posts_widget_theme'               => 'alpha',
			'popular_posts_products_theme'             => 'alpha',
			'popular_posts_inline_placement'           => 'manual',
			'popular_posts_widget_theme_columns'       => '2',
			'popular_posts_products_theme_columns'     => '2',
			'popular_posts_widget_count'               => '4',
			'popular_posts_products_count'             => '4',
			'popular_posts_widget_theme_meta_author'   => 'on',
			'popular_posts_widget_theme_meta_date'     => 'on',
			'popular_posts_widget_theme_meta_comments' => 'on',
			'popular_posts_products_theme_meta_price'  => 'on',
			'popular_posts_products_theme_meta_rating' => 'on',
			'popular_posts_products_theme_meta_image'  => 'on',
			'popular_posts_inline_after_count'         => '150',
			'popular_posts_inline_multiple_number'     => '3',
			'popular_posts_inline_multiple_distance'   => '250',
			'popular_posts_inline_multiple_min_words'  => '100',
			'popular_posts_inline_post_types'          => array( 'post' ),
			'popular_posts_widget_post_types'          => array( 'post' ),
		);
	}

	/**
	 * Check if ThirstyAffiliates plugin is installed and use the link prefix value in the affiliate settings.
	 *
	 * @return void
	 */
	public function maybe_import_thirstyaffiliates_options() {

		// Check if ThirstyAffiliates is installed.
		if ( ! function_exists( 'ThirstyAffiliates' ) ) {
			return;
		}

		$link_prefix = get_option( 'ta_link_prefix', 'recommends' );

		if ( $link_prefix === 'custom' ) {
			$link_prefix = get_option( 'ta_link_prefix_custom', 'recommends' );
		}

		if ( ! empty( $link_prefix ) ) {

			// Check if prefix exists.
			$prefix_set = false;
			foreach ( $this->new_settings['affiliate_links'] as $affiliate_link ) {
				if ( $link_prefix === trim( $affiliate_link['path'], '/' ) ) {
					$prefix_set = true;
					break;
				}
			}

			if ( ! $prefix_set ) {
				$this->new_settings['affiliate_links'][] = array(
					'path'  => '/' . $link_prefix . '/',
					'label' => 'affiliate',
				);
			}
		}
	}

	/**
	 * Upgrade routine for version 6.1.0
	 */
	public function v610_upgrades() {

		if ( empty( $this->new_settings['email_summaries'] ) ) {
			$admin_email                                     = get_option( 'admin_email' );
			$admin_email_array                               = array(
				array(
					'email' => $admin_email,
				),
			);
			$this->new_settings['email_summaries']           = 'on';
			$this->new_settings['summaries_html_template']   = 'yes';
			$this->new_settings['summaries_email_addresses'] = $admin_email_array; // Not using wp_json_encode for backwards compatibility.
		}

	}

	/**
	 * Upgrade routine for version 6.1.1
	 */
	public function v611_upgrades() {
		if ( wp_next_scheduled( 'exactmetrics_email_summaries_cron' ) ) {
			// Clear existing schedule.
			wp_clear_scheduled_hook( 'exactmetrics_email_summaries_cron' );

			// Schedule again.
			$schedule           = array();
			$schedule['day']    = rand( 0, 1 );
			$schedule['hour']   = rand( 0, 23 );
			$schedule['minute'] = rand( 0, 59 );
			$schedule['second'] = rand( 0, 59 );
			$schedule['offset'] = ( $schedule['day'] * DAY_IN_SECONDS ) +
								  ( $schedule['hour'] * HOUR_IN_SECONDS ) +
								  ( $schedule['minute'] * MINUTE_IN_SECONDS ) +
								  $schedule['second'];
			$next_run           = strtotime( 'next saturday' ) + $schedule['offset'];
			wp_schedule_event( $next_run, 'weekly', 'exactmetrics_email_summaries_cron' );
		}
	}

	/**
	 * Upgrade routine for version 6.2.0
	 */
	public function v620_upgrades() {
		// Make sure the default for automatic updates is reflected correctly in the settings.
		if ( empty( $this->new_settings['automatic_updates'] ) ) {
			$this->new_settings['automatic_updates'] = 'none';
		}
	}

	/**
	 * Upgrade routine for version 6.3.0
	 */
	public function v630_upgrades() {

		// Set default values for popular posts.
		$popular_posts_defaults = array(
			'popular_posts_inline_theme'               => 'alpha',
			'popular_posts_widget_theme'               => 'alpha',
			'popular_posts_products_theme'             => 'alpha',
			'popular_posts_inline_placement'           => 'manual',
			'popular_posts_widget_theme_columns'       => '2',
			'popular_posts_products_theme_columns'     => '2',
			'popular_posts_widget_count'               => '4',
			'popular_posts_products_count'             => '4',
			'popular_posts_widget_theme_meta_author'   => 'on',
			'popular_posts_widget_theme_meta_date'     => 'on',
			'popular_posts_widget_theme_meta_comments' => 'on',
			'popular_posts_products_theme_meta_price'  => 'on',
			'popular_posts_products_theme_meta_rating' => 'on',
			'popular_posts_products_theme_meta_image'  => 'on',
			'popular_posts_inline_after_count'         => '150',
			'popular_posts_inline_multiple_number'     => '3',
			'popular_posts_inline_multiple_distance'   => '250',
			'popular_posts_inline_multiple_min_words'  => '100',
			'popular_posts_inline_post_types'          => array( 'post' ),
			'popular_posts_widget_post_types'          => array( 'post' ),
		);

		foreach ( $popular_posts_defaults as $key => $value ) {
			if ( empty( $this->new_settings[ $key ] ) ) {
				$this->new_settings[ $key ] = $value;
			}
		}

		// Contextual education cleanup.
		$option_name             = 'exactmetrics_notifications';
		$notifications           = get_option( $option_name, array() );
		$dismissed_notifications = isset( $notifications['dismissed'] ) ? $notifications['dismissed'] : array();

		if ( is_array( $dismissed_notifications ) && ! empty( $dismissed_notifications ) ) {
			foreach ( $dismissed_notifications as $key => $dismiss_notification ) {
				$title   = isset( $dismiss_notification['title'] ) ? $dismiss_notification['title'] : '';
				$content = isset( $dismiss_notification['content'] ) ? $dismiss_notification['content'] : '';

				if ( empty( $title ) || empty( $content ) ) {
					unset( $dismissed_notifications[ $key ] );
				}
			}

			update_option(
				$option_name,
				array(
					'update'    => $notifications['update'],
					'feed'      => $notifications['feed'],
					'events'    => $notifications['events'],
					'dismissed' => $dismissed_notifications,
				)
			);
		}
	}

	/**
	 * Upgrade routine for version 6.3.1
	 */
	public function v631_upgrades() {
		// Delete transient for GA data with wrong expiration date.
		delete_transient( 'exactmetrics_popular_posts_ga_data' );
	}


	/**
	 * Upgrade routine for version 64.0
	 */
	public function v640_upgrades() {

		// Clear notification cron events no longer used.
		$cron = get_option( 'cron' );

		foreach ( $cron as $timestamp => $cron_array ) {
			if ( ! is_array( $cron_array ) ) {
				continue;
			}
			foreach ( $cron_array as $cron_key => $cron_data ) {
				if ( 0 === strpos( $cron_key, 'exactmetrics_notification_' ) ) {
					wp_unschedule_event( $timestamp, $cron_key, array() );
				}
			}
		}

		// Delete existing year in review report option.
		delete_option( 'exactmetrics_report_data_yearinreview' );
	}

	/**
	 * Upgrade routine for version 6.5.0
	 */
	public function v650_upgrades() {
		// Enable gtag compatibility mode by default.
		if ( empty( $this->new_settings['gtagtracker_compatibility_mode'] ) ) {
			$this->new_settings['gtagtracker_compatibility_mode'] = true;
		}
	}
}
