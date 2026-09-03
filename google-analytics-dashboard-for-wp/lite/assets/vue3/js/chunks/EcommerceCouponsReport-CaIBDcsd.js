import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, b as createVNode, u as unref, m as computed } from "./toastStore-nTGs-rGm.js";
import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { u as useOverviewReportStore, b as buildApiFilters } from "../reports-B_hJZd5_.js";
import { a as fetchEcommerceCouponsData } from "./ecommerceReports-D8kccHM9.js";
import { u as useReportPermissions } from "./useReportPermissions-C-5w1M_B.js";
import { u as useReport } from "./useReport-CJ8HnJaY.js";
import { a as generateCouponsSample } from "./ecommerceSampleData-CfcmM5cV.js";
import { a as formatCurr, b as formatNum } from "./overviewTableFormatters-WylMWTgV.js";
import { a as aggregateDateEntityRows } from "./aggregateDateEntityRows-i7QMgwng.js";
import { g as getCompareDateLabels } from "./compareDateLabels-B56Y3XjZ.js";
import { s as shouldHideNotSetValue } from "./reportValues-CwoL1n2L.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CBYZQCOK.js";
import { _ as _sfc_main$1 } from "./ReportDataTable-Ch2ZlKeA.js";
import "./TheAppHeader-CFXTPXse.js";
import "./ajax-BSXoXmkG.js";
import "./AppOverlays-CN9fyc8o.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./dateIntervals-BPoui_3H.js";
import "./addons-lB_nbVC5.js";
import "./useNotices-CjxoPqYP.js";
import "./Modal-BA3yRruc.js";
import "./Icon-DCHfi1CL.js";
import "./useAuthGate-C38dssHK.js";
import "./flatpickr-CiH3DK8V.js";
import "./useFeatureGate-DGK8kkz6.js";
import "./UniversallyPromo-DwkunMwK.js";
import "./reportCache-BKxm938n.js";
import "./settings-CS8pUWIR.js";
import "./ReAuthModal-DQO2Zyk1.js";
import "./auth-BFsUdqe0.js";
import "./LoadingSpinnerInline-ByF9Uqaj.js";
import "./ReportTableModal-CxLTfNiB.js";
const _sfc_main = {
  __name: "EcommerceCouponsReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "pro" });
    const columns = [
      { key: "couponName", label: __("Coupon Name", "google-analytics-dashboard-for-wp"), sortable: true },
      { key: "revenue", label: __("Revenue", "google-analytics-dashboard-for-wp"), sortable: true },
      { key: "transactions", label: __("Transactions", "google-analytics-dashboard-for-wp"), sortable: true },
      { key: "avgOrderValue", label: __("Avg. Order Value", "google-analytics-dashboard-for-wp"), sortable: true, totalType: "average" }
    ];
    const aggregatedCoupons = computed(
      () => aggregateDateEntityRows(rawData.value?.coupons_table?.rows, {
        metricCount: 3,
        avgIndices: [2],
        weightIndex: 1
      })
    );
    function formatCouponRow(dims, vals) {
      const name = dims[0] != null && String(dims[0]).trim() !== "" ? String(dims[0]) : "(not set)";
      return {
        couponName: name,
        revenue: formatCurr(vals[0] || 0),
        transactions: formatNum(vals[1] || 0),
        avgOrderValue: formatCurr(vals[2] || 0)
      };
    }
    const tableRows = computed(
      () => aggregatedCoupons.value.filter((entity) => !shouldHideNotSetValue(entity.dims[0])).map((entity) => formatCouponRow(entity.dims, entity.current))
    );
    const compareRows = computed(
      () => aggregateDateEntityRows(rawData.value?.coupons_table_prev?.rows, {
        metricCount: 3,
        avgIndices: [2],
        weightIndex: 1
      }).filter((entity) => !shouldHideNotSetValue(entity.dims[0])).map((entity) => formatCouponRow(entity.dims, entity.current))
    );
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    const { rawData, loading } = useReport({
      fetch: () => fetchEcommerceCouponsData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generateCouponsSample(dateRange.value),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "pro",
        "upsell-feature": "ecommerce-coupons",
        "required-addon": "ecommerce"
      }, {
        table: withCtx(() => [
          createVNode(_sfc_main$1, {
            title: unref(__)("Coupons Report", "google-analytics-dashboard-for-wp"),
            columns,
            rows: tableRows.value,
            "compare-rows": compareRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            "empty-message": unref(__)("No data currently for the eCommerce Coupons report.", "google-analytics-dashboard-for-wp"),
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
