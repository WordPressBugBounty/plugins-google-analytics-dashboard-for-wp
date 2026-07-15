import { k as getMiGlobal, O as getExactMetricsUrl, j as ref, a1 as storeToRefs, C as watch, y as onMounted, o as openBlock, E as createBlock, D as withCtx, b as createVNode, u as unref, m as computed } from "./toastStore-CjmlShHI.js";
import { _ as __$1 } from "./default-i18n-KrIlCc2E.js";
import { u as useOverviewReportStore } from "../reports-DMcJDRGZ.js";
import { u as useReportPermissions } from "./useReportPermissions-_eyKnlni.js";
import { a as formatCurr, f as formatPct, b as formatNum } from "./overviewTableFormatters-CC_6ogRL.js";
import { s as shouldHideNotSetValue } from "./reportValues-WD297wEw.js";
import { R as ReportPageLayout } from "./ReportPageLayout-C4sDdqO7.js";
import { _ as _sfc_main$2 } from "./ReportChartSection-W3cI7Zby.js";
import { _ as _sfc_main$1 } from "./ReportDataTable-BRD0H1Zv.js";
import "./TheAppHeader-BI_ZrtNW.js";
import "./ajax-Uw5S1uqk.js";
import "./AppOverlays-GGnrWZ9e.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./dateIntervals-BPoui_3H.js";
import "./addons-DcCBQDEz.js";
import "./useNotices-BosR4uY_.js";
import "./Modal-CzneZfPu.js";
import "./Icon-BKVJ2HHT.js";
import "./DatePicker-0IkGB934.js";
import "./flatpickr-rZFU0y0u.js";
import "./useFeatureGate-Cpz_XvaQ.js";
import "./UniversallyPromo-lKsveXRx.js";
import "./useAuthGate-Ci3sAzws.js";
import "./auth-Rcit4ziJ.js";
import "./settings-BVkGy_Cz.js";
import "./ApexLineChart-Df-zujYW.js";
import "./vue3-apexcharts-ErQ4EB6K.js";
import "./useChartColors-DfB5TXg7.js";
import "./LoadingSpinnerInline-CEN6fdH3.js";
import "./SiteNotes-DTNIQUYd.js";
import "./siteNotes-DsF95A7r.js";
import "./useOverviewChartData-DE1ommJa.js";
import "./ReportTableModal-BsCwm9nW.js";
const { __ } = wp.i18n;
const fetchReportData = (report, start, end, compareDateOptions = null) => {
  return new Promise((resolve, reject) => {
    const ajaxData = {
      action: "exactmetrics_vue_get_report_data",
      nonce: getMiGlobal("nonce", ""),
      report,
      start,
      end
    };
    if (compareDateOptions?.compareReport) {
      ajaxData.compare_report = true;
      ajaxData.compare_start = compareDateOptions.compareStart;
      ajaxData.compare_end = compareDateOptions.compareEnd;
    }
    wp.ajax.post(ajaxData).done((response) => {
      resolve(response);
    }).fail((error) => {
      const support_url = getExactMetricsUrl(
        "admin-notices",
        "error-reports-api",
        "https://www.exactmetrics.com/my-account/support"
      );
      const errorDetails = {
        title: __("Error loading report data", "exactmetrics"),
        message: error || "AJAX request failed",
        // status: error.status,
        support_url,
        isAjaxError: true
      };
      reject(errorDetails);
    });
  });
};
function useReportFetch(reportName, options = {}) {
  const { transformData } = options;
  const data = ref(null);
  const rawData = ref(null);
  const loading = ref(false);
  const error = ref(null);
  let loadId = 0;
  async function fetchReport(dateRange, compareDateOptions = null) {
    loading.value = true;
    error.value = null;
    const currentLoadId = ++loadId;
    const compareOptions = compareDateOptions || (dateRange?.compareReport ? {
      compareReport: dateRange.compareReport,
      compareStart: dateRange.compareStart,
      compareEnd: dateRange.compareEnd
    } : null);
    try {
      const response = await fetchReportData(
        reportName,
        dateRange.start,
        dateRange.end,
        compareOptions
      );
      if (currentLoadId !== loadId) {
        return null;
      }
      rawData.value = response;
      data.value = transformData ? transformData(response) : response;
      return data.value;
    } catch (err) {
      if (currentLoadId !== loadId) {
        return null;
      }
      error.value = err?.message || err?.title || __$1("Error loading report data.", "google-analytics-dashboard-for-wp");
      return null;
    } finally {
      if (currentLoadId === loadId) {
        loading.value = false;
      }
    }
  }
  function refresh(dateRange, compareDateOptions = null) {
    return fetchReport(dateRange, compareDateOptions);
  }
  return {
    data,
    rawData,
    loading,
    error,
    fetchReport,
    refresh
  };
}
const _sfc_main = {
  __name: "EcommerceProductFeedReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "pro" });
    const { rawData, loading, error, fetchReport } = useReportFetch("ecommerce_product_feed");
    const activeChartTab = ref("sessions");
    const chartTabs = [
      { id: "sessions", label: __$1("Sessions", "google-analytics-dashboard-for-wp"), icon: "users" },
      { id: "pageviews", label: __$1("Pageviews", "google-analytics-dashboard-for-wp"), icon: "view" }
    ];
    const isCompareActive = computed(
      () => !!(dateRange.value?.compareReport && dateRange.value?.compareStart && dateRange.value?.compareEnd)
    );
    const chartData = computed(() => {
      const chart = rawData.value?.sessions_chart;
      if (!chart?.categories?.length) return { categories: [], series: [] };
      const isSessionsTab = activeChartTab.value === "sessions";
      const primaryColor = "#6528F5";
      const compareColor = "#A0AEC0";
      const series = [{
        name: isSessionsTab ? "Sessions" : "Pageviews",
        data: isSessionsTab ? chart.sessions || [] : chart.page_views || []
      }];
      const colors = [primaryColor];
      const strokeDashArray = [0];
      const compare = rawData.value?.sessions_compare_chart;
      if (isCompareActive.value && compare) {
        series.push({
          name: "Previous Period",
          data: isSessionsTab ? compare.sessions || [] : compare.page_views || []
        });
        colors.push(compareColor);
        strokeDashArray.push(5);
      }
      return { categories: chart.categories, series, colors, strokeDashArray };
    });
    const columns = [
      { key: "landingPage", label: __$1("Landing Page", "google-analytics-dashboard-for-wp"), sortable: true },
      { key: "sessions", label: __$1("Sessions", "google-analytics-dashboard-for-wp"), sortable: true },
      { key: "engagedSessions", label: __$1("Engaged Sessions", "google-analytics-dashboard-for-wp"), sortable: true },
      { key: "pagesPerSession", label: __$1("Pages / Sessions", "google-analytics-dashboard-for-wp"), sortable: true },
      { key: "purchases", label: __$1("Purchases", "google-analytics-dashboard-for-wp"), sortable: true },
      { key: "conversionRate", label: __$1("Conversion Rate", "google-analytics-dashboard-for-wp"), sortable: true },
      { key: "revenue", label: __$1("Revenue", "google-analytics-dashboard-for-wp"), sortable: true }
    ];
    const tableRows = computed(() => {
      const table = rawData.value?.landing_pages_table;
      const rows = Array.isArray(table) ? table : Array.isArray(table?.rows) ? table.rows : [];
      if (rows.length === 0) return [];
      return rows.filter((row) => !shouldHideNotSetValue(row?.landing_page)).map((row) => {
        const landingPage = row?.landing_page != null && String(row.landing_page).trim() !== "" ? String(row.landing_page) : __$1("(not set)", "google-analytics-dashboard-for-wp");
        return {
          landingPage,
          sessions: formatNum(row.sessions),
          engagedSessions: formatNum(row.engaged_sessions),
          pagesPerSession: (Number(row.pages_per_sessions) || 0).toFixed(2),
          purchases: formatNum(row.purchases),
          // conversion_rate is already a percentage value (e.g. 5 → "5.0%").
          conversionRate: formatPct(row.conversion_rate),
          revenue: formatCurr(row.revenue)
        };
      });
    });
    async function loadData() {
      if (!dateRange.value?.start || !dateRange.value?.end) return;
      if (isBlocked.value) return;
      await fetchReport(dateRange.value);
    }
    watch(dateRange, () => loadData(), { deep: true });
    onMounted(() => loadData());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "pro",
        "upsell-feature": "ecommerce"
      }, {
        chart: withCtx(() => [
          createVNode(_sfc_main$2, {
            tabs: chartTabs,
            "active-tab": activeChartTab.value,
            "chart-data": chartData.value,
            loading: unref(loading),
            error: unref(error),
            "show-site-notes": !unref(isBlocked),
            "date-range": unref(overviewStore).dateRange,
            "onUpdate:activeTab": _cache[0] || (_cache[0] = ($event) => activeChartTab.value = $event),
            onSiteNotesSaved: loadData
          }, null, 8, ["active-tab", "chart-data", "loading", "error", "show-site-notes", "date-range"])
        ]),
        table: withCtx(() => [
          createVNode(_sfc_main$1, {
            title: unref(__$1)("Top Product Feeds", "google-analytics-dashboard-for-wp"),
            columns,
            rows: tableRows.value,
            loading: unref(loading),
            searchable: "",
            "empty-message": unref(__$1)("No data currently for the Product Feed report.", "google-analytics-dashboard-for-wp")
          }, null, 8, ["title", "rows", "loading", "empty-message"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
