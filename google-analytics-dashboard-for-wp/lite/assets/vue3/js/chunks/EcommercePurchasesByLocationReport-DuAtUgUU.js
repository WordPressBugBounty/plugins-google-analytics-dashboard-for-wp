import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, b as createVNode, u as unref, m as computed } from "./toastStore-sH51RcCX.js";
import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { u as useOverviewReportStore, b as buildApiFilters } from "../reports-CaiFcwwu.js";
import { c as fetchPurchasesByLocationData } from "./ecommerceReports-DsXJaoPv.js";
import { u as useReportPermissions } from "./useReportPermissions-BGwVQAy9.js";
import { u as useReport } from "./useReport-6Zw_p6BE.js";
import { d as generatePurchasesByLocationSample } from "./ecommerceSampleData-CfcmM5cV.js";
import { a as formatCurr, f as formatPct, b as formatNum } from "./overviewTableFormatters-Bc6bK3SS.js";
import { a as aggregateDateEntityRows } from "./aggregateDateEntityRows-i7QMgwng.js";
import { g as getCompareDateLabels } from "./compareDateLabels-B56Y3XjZ.js";
import { s as shouldHideNotSetValue } from "./reportValues-Ckt09zwt.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CwPke8hY.js";
import { _ as _sfc_main$1 } from "./ReportDataTable-T-NlvWy1.js";
import "./TheAppHeader-51M_NUwz.js";
import "./ajax-2wfIeviZ.js";
import "./AppOverlays-BO6Mjp3d.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./dateIntervals-BPoui_3H.js";
import "./addons-CsEzvEzl.js";
import "./useNotices-hr94Odsg.js";
import "./Modal-DdttPho6.js";
import "./Icon-Cg43wlAV.js";
import "./useAuthGate-BtD0Zsbw.js";
import "./flatpickr-DYNmg7pa.js";
import "./useFeatureGate-C0SiaHQU.js";
import "./UniversallyPromo-BPT5Wy-b.js";
import "./reportCache-DPSaUyPa.js";
import "./settings-Dlq_FiwT.js";
import "./ReAuthModal-CFu-8z-7.js";
import "./auth-Bb25iND9.js";
import "./LoadingSpinnerInline-Cx1PqN-5.js";
import "./ReportTableModal-CSXhNuZh.js";
const _sfc_main = {
  __name: "EcommercePurchasesByLocationReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "pro" });
    const columns = [
      { key: "location", label: __("Location", "google-analytics-dashboard-for-wp"), sortable: true },
      { key: "transactions", label: __("Transactions", "google-analytics-dashboard-for-wp"), sortable: true },
      { key: "pctTransactions", label: __("% of Transactions", "google-analytics-dashboard-for-wp"), sortable: true, totalType: "average" },
      { key: "revenue", label: __("Revenue", "google-analytics-dashboard-for-wp"), sortable: true },
      { key: "pctRevenue", label: __("% of Revenue", "google-analytics-dashboard-for-wp"), sortable: true, totalType: "average" },
      { key: "avgOrderValue", label: __("Avg. Order Value", "google-analytics-dashboard-for-wp"), sortable: true, totalType: "average" }
    ];
    const aggregatedLocation = computed(
      () => aggregateDateEntityRows(rawData.value?.purchases_location_table?.rows, {
        metricCount: 3,
        avgIndices: [2],
        weightIndex: 0
      })
    );
    function periodTotals(vals) {
      return {
        totalTransactions: vals.reduce((sum, v) => sum + (v[0] || 0), 0),
        totalRevenue: vals.reduce((sum, v) => sum + (v[1] || 0), 0)
      };
    }
    function formatLocationRow(dims, vals, totals) {
      const transactions = vals[0] || 0;
      const revenue = vals[1] || 0;
      const pctTx = totals.totalTransactions > 0 ? transactions / totals.totalTransactions * 100 : 0;
      const pctRev = totals.totalRevenue > 0 ? revenue / totals.totalRevenue * 100 : 0;
      return {
        location: String(dims[0] || "").trim() || "(not set)",
        transactions: formatNum(transactions),
        pctTransactions: formatPct(pctTx),
        revenue: formatCurr(revenue),
        pctRevenue: formatPct(pctRev),
        avgOrderValue: formatCurr(vals[2] || 0)
      };
    }
    const tableRows = computed(() => {
      const totals = periodTotals(aggregatedLocation.value.map((entity) => entity.current));
      return aggregatedLocation.value.filter((entity) => !shouldHideNotSetValue(entity.dims[0])).map((entity) => formatLocationRow(entity.dims, entity.current, totals));
    });
    const compareRows = computed(() => {
      const prev = aggregateDateEntityRows(rawData.value?.purchases_location_table_prev?.rows, {
        metricCount: 3,
        avgIndices: [2],
        weightIndex: 0
      });
      if (prev.length === 0) return [];
      const totals = periodTotals(prev.map((entity) => entity.current));
      return prev.filter((entity) => !shouldHideNotSetValue(entity.dims[0])).map((entity) => formatLocationRow(entity.dims, entity.current, totals));
    });
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    const { rawData, loading } = useReport({
      fetch: () => fetchPurchasesByLocationData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generatePurchasesByLocationSample("country", dateRange.value),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "pro",
        "upsell-feature": "ecommerce-purchases-by-location",
        "required-addon": "ecommerce"
      }, {
        table: withCtx(() => [
          createVNode(_sfc_main$1, {
            title: unref(__)("Purchases by Geography", "google-analytics-dashboard-for-wp"),
            columns,
            rows: tableRows.value,
            "compare-rows": compareRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            "empty-message": unref(__)("No orders tracked during this time period.", "google-analytics-dashboard-for-wp"),
            "required-addon": "ecommerce",
            "required-addon-name": "eCommerce"
          }, null, 8, ["title", "rows", "compare-rows", "compare-date-labels", "loading", "empty-message"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
