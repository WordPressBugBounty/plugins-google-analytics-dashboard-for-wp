<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Remove various options used in the plugin.
 */
function exactmetrics_uninstall_remove_options() {

	// Remove usage tracking options.
	delete_option( 'exactmetrics_usage_tracking_config' );
	delete_option( 'exactmetrics_usage_tracking_last_checkin' );

	// Remove version options.
	delete_option( 'exactmetrics_db_version' );
	delete_option( 'exactmetrics_version_upgraded_from' );

	// Remove other options used for display.
	delete_option( 'exactmetrics_email_summaries_infoblocks_sent' );
	delete_option( 'exactmetrics_float_bar_hidden' );
	delete_option( 'exactmetrics_frontend_tracking_notice_viewed' );
	delete_option( 'exactmetrics_admin_menu_tooltip' );
	delete_option( 'exactmetrics_review' );

	// Remove Ads addon-notice dismissal option (and any legacy transient from
	// before the option-based persistence).
	delete_option( 'exactmetrics_ads_addon_installed_notice_dismissed' );
	delete_transient( 'exactmetrics_ads_addon_installed_notice_dismissed' );

	// Delete addons transient.
	delete_transient( 'exactmetrics_addons' );

}
