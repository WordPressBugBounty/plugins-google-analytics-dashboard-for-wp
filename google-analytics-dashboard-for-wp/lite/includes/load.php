<?php

add_action('init', function () {
	if ( is_admin() ) {
		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/tools.php';
		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/metaboxes.php';

		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/woocommerce-marketing.php';
	}

	if ( is_admin() || ( defined( 'DOING_CRON' ) && DOING_CRON ) ) {

		$overview_report = new ExactMetrics_Report_Overview();
		ExactMetrics()->reporting->add_report( $overview_report );

		$site_summary = new ExactMetrics_Report_Site_Summary();
		ExactMetrics()->reporting->add_report( $site_summary );

		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/reports/report-publisher.php';
		$publisher_report = new ExactMetrics_Lite_Report_Publisher();
		ExactMetrics()->reporting->add_report( $publisher_report );

		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/reports/report-ecommerce.php';
		$ecommerce_report = new ExactMetrics_Lite_Report_eCommerce();
		ExactMetrics()->reporting->add_report( $ecommerce_report );

		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/reports/report-queries.php';
		$queries_report = new ExactMetrics_Lite_Report_Queries();
		ExactMetrics()->reporting->add_report( $queries_report );

		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/reports/report-dimensions.php';
		$dimensions_report = new ExactMetrics_Lite_Report_Dimensions();
		ExactMetrics()->reporting->add_report( $dimensions_report );

		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/reports/report-forms.php';
		$forms_report = new ExactMetrics_Lite_Report_Forms();
		ExactMetrics()->reporting->add_report( $forms_report );

		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/reports/report-realtime.php';
		$realtime_report = new ExactMetrics_Lite_Report_RealTime();
		ExactMetrics()->reporting->add_report( $realtime_report );

		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/reports/report-year-in-review.php';
		$year_in_review = new ExactMetrics_Lite_Report_YearInReview();
		ExactMetrics()->reporting->add_report( $year_in_review );

		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/reports/report-summaries.php';
		$summaries = new ExactMetrics_Report_Summaries();
		ExactMetrics()->reporting->add_report( $summaries );

		// Email summaries related classes
		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/emails/summaries-infoblocks.php';
		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/emails/summaries.php';
		new ExactMetrics_Email_Summaries();

		// Load API classes
		require_once EXACTMETRICS_PLUGIN_DIR . 'includes/api/class-exactmetrics-api-error.php';
		require_once EXACTMETRICS_PLUGIN_DIR . 'includes/api/class-exactmetrics-api.php';
		require_once EXACTMETRICS_PLUGIN_DIR . 'includes/api/class-exactmetrics-api-reports.php';
		require_once EXACTMETRICS_PLUGIN_DIR . 'includes/api/class-exactmetrics-api-tracking.php';
	}

	if ( is_admin() ) {
		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/dashboard-widget.php';
		new ExactMetrics_Dashboard_Widget();

		// Load the Welcome class.
		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/welcome.php';

		// Load the ExactMetrics Connect class.

		if ( isset( $_GET['page'] ) && 'exactmetrics-onboarding' === $_GET['page'] ) { // phpcs:ignore -- CSRF ok, input var ok.
			// Only load the Onboarding wizard if the required parameter is present.
			require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/onboarding-wizard.php';
		}

		//  Common Site Health logic
		require_once EXACTMETRICS_PLUGIN_DIR . 'includes/admin/wp-site-health.php';

		//  Lite-only Site Health logic.
		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/wp-site-health.php';

		// Helper functions specific to this version of the plugin.
		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/helpers.php';

		// Initialize User Journey.
		require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/admin/user-journey/init.php';
	}

	if ( is_admin() || ( defined( 'DOING_CRON' ) && DOING_CRON ) ) {
		// SharedCounts functionality.
		require_once EXACTMETRICS_PLUGIN_DIR . 'includes/admin/sharedcount.php';
	}

	// Popular posts.
	require_once EXACTMETRICS_PLUGIN_DIR . 'includes/popular-posts/class-popular-posts-themes.php';
	require_once EXACTMETRICS_PLUGIN_DIR . 'includes/popular-posts/class-popular-posts.php';
	require_once EXACTMETRICS_PLUGIN_DIR . 'includes/popular-posts/class-popular-posts-helper.php';
	// Lite popular posts specific.
	require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/popular-posts/class-popular-posts-inline.php';
	require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/popular-posts/class-popular-posts-cache.php';
	require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/popular-posts/class-popular-posts-widget.php';
	require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/popular-posts/class-popular-posts-widget-sidebar.php';
	require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/popular-posts/class-popular-posts-ajax.php';
// Lite Gutenberg blocks.
	require_once EXACTMETRICS_PLUGIN_DIR . 'lite/includes/gutenberg/frontend.php';
	require_once EXACTMETRICS_PLUGIN_DIR . 'includes/connect.php';

	// Run hook to load ExactMetrics addons.
	do_action( 'exactmetrics_load_plugins' ); // the updater class for each addon needs to be instantiated via `exactmetrics_updater`
}, 0 );
