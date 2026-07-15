<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class ExactMetrics_Welcome
 */
class ExactMetrics_Welcome {

	/**
	 * ExactMetrics_Welcome constructor.
	 */
	public function __construct() {

		// If we are not in admin or admin ajax, return
		if ( ! is_admin() ) {
			return;
		}

		// If user is in admin ajax or doing cron, return
		if ( ( defined( 'DOING_AJAX' ) && DOING_AJAX ) || ( defined( 'DOING_CRON' ) && DOING_CRON ) ) {
			return;
		}

		// If user is not logged in, return
		if ( ! is_user_logged_in() ) {
			return;
		}

		// If user cannot manage_options, return
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		add_action( 'admin_init', array( $this, 'maybe_redirect' ), 9999 );
	}

	/**
	 * Auto-redirect first-time activations to the externally-hosted setup
	 * wizard.
	 *
	 * The bundled Vue 2 welcome screen and `exactmetrics-getting-started`
	 * dashboard page were retired during the Vue 3 migration. Net-new sites
	 * still benefit from being walked through setup, so we keep the
	 * activation transient and just send users straight to
	 * `exactmetrics_get_onboarding_url()`.
	 */
	public function maybe_redirect() {

		// Bail if no activation redirect.
		if ( ! get_transient( '_exactmetrics_activation_redirect' ) || isset( $_GET['exactmetrics-redirect'] ) ) {
			return;
		}

		// Delete the redirect transient.
		delete_transient( '_exactmetrics_activation_redirect' );

		// Bail if activating from network, or bulk.
		if ( isset( $_GET['activate-multi'] ) ) {
			return;
		}

		$upgrade            = get_option( 'exactmetrics_version_upgraded_from', false );
		$skip_wizard        = get_option( 'exactmetrics_skip_wizard', false );
		// If this is an upgrade (a version_from is present) or skip_wizard is set, skip the redirect.
		$run_wizard         = ! ( $skip_wizard || false !== $upgrade );
		$do_redirect        = apply_filters( 'exactmetrics_enable_onboarding_wizard', $run_wizard );
		if ( $do_redirect ) {
			// Use `wp_redirect()` (not `wp_safe_redirect()`) because the
			// onboarding URL points to a different host
			// (e.g. connect.exactmetrics.com).
			wp_redirect( esc_url_raw( exactmetrics_get_onboarding_url() ) );
			exit;
		}
	}
}

new ExactMetrics_Welcome();
