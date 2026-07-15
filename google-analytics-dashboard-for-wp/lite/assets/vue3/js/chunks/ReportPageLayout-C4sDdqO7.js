import { _ as __, s as sprintf } from "./default-i18n-KrIlCc2E.js";
import { d as useDialog, c as useAddonsStore } from "./addons-DcCBQDEz.js";
import { q as sanitizeHtml, n as getUpgradeUrl, j as getMiGlobal, r as miAjax, k as isPro } from "./ajax-Uw5S1uqk.js";
import { u as useReportPermissions } from "./useReportPermissions-_eyKnlni.js";
import { u as useOverviewReportStore } from "../reports-DMcJDRGZ.js";
import { u as useNotices } from "./useNotices-BosR4uY_.js";
import { _ as _sfc_main$2 } from "./Modal-CzneZfPu.js";
import { A as AuthModal, R as ReAuthModal } from "./useAuthGate-Ci3sAzws.js";
import { j as ref, o as openBlock, E as createBlock, D as withCtx, a as createBaseVNode, c as createElementBlock, t as toDisplayString, s as createCommentVNode, i as normalizeClass, F as Fragment, f as renderList, u as unref, B as withModifiers, n as normalizeStyle, m as computed, J as onUnmounted, aE as watchEffect, K as renderSlot, b as createVNode } from "./toastStore-CjmlShHI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1$1 = { class: "exactmetrics-upsell-overlay" };
const _hoisted_2$1 = { class: "exactmetrics-upsell-modal" };
const _hoisted_3$1 = { class: "exactmetrics-upsell-top" };
const _hoisted_4$1 = { key: 0 };
const _hoisted_5$1 = { class: "exactmetrics-upsell-content" };
const _hoisted_6$1 = { class: "exactmetrics-upsell-content__features" };
const _hoisted_7$1 = { key: 0 };
const _hoisted_8$1 = { class: "exactmetrics-upsell-content__features-cliff" };
const _hoisted_9$1 = ["innerHTML"];
const _hoisted_10 = { class: "exactmetrics-upsell-content-buttons" };
const _hoisted_11 = ["href"];
const _sfc_main$1 = {
  __name: "ReportUpsellOverlay",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    report: {
      type: String,
      required: true
    },
    customSubheading: {
      type: String,
      default: null
    },
    forceTwoColumns: {
      type: Boolean,
      default: false
    },
    showSampleButton: {
      type: Boolean,
      default: true
    }
  },
  emits: ["see-sample"],
  setup(__props, { emit: __emit }) {
    const REPORT_IMAGE_MAP = {
      "traffic": "bg-traffic-overview@2x.png",
      "traffic-overview": "bg-traffic-overview@2x.png",
      "traffic-landing-pages": "bg-traffic-landing-page@2x.png",
      "traffic-technology": "bg-traffic-technology@2x.png",
      "traffic-source-medium": "bg-traffic-source-medium@2x.png",
      "traffic-campaign": "bg-traffic-campaigns@2x.png",
      "traffic-social": "social-media-report@2x.png",
      "traffic-ai": "bg-traffic-ai.jpeg",
      "publisher": "bg-publisher@2x.png",
      "ecommerce": "bg-ecommerce@2x.png",
      "ecommerce-funnel": "ecommerce-funnel@2x.png",
      "ecommerce-coupons": "bg-ecommerce-coupons@2x.png",
      "cart-abandonment": "bg-cart-abandonment@2x.png",
      "ecommerce-product-sales": "bg-ecommerce-product-sales@2x.png",
      "ecommerce-spend-by-day": "bg-ecommerce-spend-by-day.png",
      "ecommerce-spend-by-hour": "bg-ecommerce-spend-by-hour.png",
      "ecommerce-purchases-by-location": "bg-ecommerce-purchases-by-location.png",
      "ecommerce-refunds": "bg-ecommerce-refunds.png",
      "ecommerce-refunds-by-geo": "bg-ecommerce-refunds-by-geo.png",
      "dimensions": "bg-dimensions@2x.png",
      "forms": "bg-forms@2x.png",
      "queries": "bg-queries@2x.png",
      "realtime": "bg-realtime@2x.png",
      "sitespeed": "bg-sitespeed@2x.png",
      "media": "bg-media-upsell.svg",
      "countries": "bg-countries.png",
      "custom-events": "custom-events-report-screen.png",
      "exceptions": "exceptions-report.png",
      "engagement-pages": "bg-engagement-pages@2x.png",
      "user-journey": "bg-user-journey.svg",
      userjourney: "bg-user-journey.svg"
    };
    const props = __props;
    const emit = __emit;
    const visible = ref(props.show);
    const upgradeUrl = computed(() => {
      return getUpgradeUrl("report", props.report);
    });
    const upsellImageUrl = computed(() => {
      const filename = REPORT_IMAGE_MAP[props.report];
      if (!filename) return "";
      const baseUrl = getMiGlobal("plugin_assets_url", "");
      if (!baseUrl) return "";
      return baseUrl + "images/upsell/" + filename;
    });
    const imageStyle = computed(() => ({
      backgroundImage: `url(${upsellImageUrl.value})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top right",
      width: "278px"
    }));
    function onSeeSample() {
      visible.value = false;
      emit("see-sample");
    }
    const UPSELL_TEXTS = {
      traffic: {
        mainheading: __("Traffic Report", "google-analytics-dashboard-for-wp"),
        title: __("Learn how visitors arrive to your website and which are the most engaged or profitable.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Channel Breakdowns", "google-analytics-dashboard-for-wp"),
          __("Session Counts", "google-analytics-dashboard-for-wp"),
          __("Pages/Session", "google-analytics-dashboard-for-wp"),
          __("Conversion Rate", "google-analytics-dashboard-for-wp"),
          __("Revenue", "google-analytics-dashboard-for-wp"),
          __("Engaged Sessions", "google-analytics-dashboard-for-wp")
        ]
      },
      "traffic-overview": {
        mainheading: __("Traffic Report", "google-analytics-dashboard-for-wp"),
        title: __("Learn how visitors arrive to your website and which are the most engaged or profitable.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Channel Breakdowns", "google-analytics-dashboard-for-wp"),
          __("Session Counts", "google-analytics-dashboard-for-wp"),
          __("Pages/Session", "google-analytics-dashboard-for-wp"),
          __("Conversion Rate", "google-analytics-dashboard-for-wp"),
          __("Revenue", "google-analytics-dashboard-for-wp"),
          __("Engaged Sessions", "google-analytics-dashboard-for-wp")
        ]
      },
      "traffic-landing-pages": {
        mainheading: __("Landing Page Report", "google-analytics-dashboard-for-wp"),
        title: __("Find out which pages are making your first impression.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Page Name", "google-analytics-dashboard-for-wp"),
          __("Pages/Session", "google-analytics-dashboard-for-wp"),
          __("Sessions", "google-analytics-dashboard-for-wp"),
          __("Purchases", "google-analytics-dashboard-for-wp"),
          __("Session Counts", "google-analytics-dashboard-for-wp"),
          __("Conversion Rates", "google-analytics-dashboard-for-wp")
        ]
      },
      "traffic-technology": {
        mainheading: __("Technology Report", "google-analytics-dashboard-for-wp"),
        title: __("Optimize your website for your top devices and browsers.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Browser Names", "google-analytics-dashboard-for-wp"),
          __("Device Types", "google-analytics-dashboard-for-wp"),
          __("Export to PDF", "google-analytics-dashboard-for-wp"),
          __("Date Filtering", "google-analytics-dashboard-for-wp")
        ]
      },
      "traffic-campaign": {
        mainheading: __("Campaigns Report", "google-analytics-dashboard-for-wp"),
        title: __("Measure how effective your marketing campaigns are performing.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Campaign Names", "google-analytics-dashboard-for-wp"),
          __("Easy Filtering", "google-analytics-dashboard-for-wp"),
          __("Pages / Session", "google-analytics-dashboard-for-wp"),
          __("Purchases", "google-analytics-dashboard-for-wp"),
          __("eCommerce Conversion Rates", "google-analytics-dashboard-for-wp"),
          __("Revenue", "google-analytics-dashboard-for-wp")
        ]
      },
      "traffic-source-medium": {
        mainheading: __("Source and Medium Report", "google-analytics-dashboard-for-wp"),
        title: __("Uncover which traffic sources are creating engagement and sales from your website.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Source Name", "google-analytics-dashboard-for-wp"),
          __("Pages / Sessions", "google-analytics-dashboard-for-wp"),
          __("Session Counts", "google-analytics-dashboard-for-wp"),
          __("Purchases", "google-analytics-dashboard-for-wp"),
          __("Easy Filtering", "google-analytics-dashboard-for-wp"),
          __("Conversion Rates", "google-analytics-dashboard-for-wp")
        ]
      },
      "traffic-social": {
        mainheading: __("Social Media Report", "google-analytics-dashboard-for-wp"),
        title: __("See Which Social Media Networks are Making You Money.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Social Networks", "google-analytics-dashboard-for-wp"),
          __("Sessions", "google-analytics-dashboard-for-wp"),
          __("Bounce Rate", "google-analytics-dashboard-for-wp"),
          __("Purchases", "google-analytics-dashboard-for-wp"),
          __("Revenue", "google-analytics-dashboard-for-wp"),
          __("Conversion Rate", "google-analytics-dashboard-for-wp")
        ]
      },
      "traffic-ai": {
        mainheading: __("AI Traffic Report", "google-analytics-dashboard-for-wp"),
        title: __("See Which AI Sources are Making You Money.", "google-analytics-dashboard-for-wp"),
        features: [
          __("AI Sources", "google-analytics-dashboard-for-wp"),
          __("Purchases", "google-analytics-dashboard-for-wp"),
          __("Revenue", "google-analytics-dashboard-for-wp"),
          __("Engaged Sessions", "google-analytics-dashboard-for-wp")
        ]
      },
      ecommerce: {
        mainheading: __("eCommerce Report", "google-analytics-dashboard-for-wp"),
        title: __("Increase Sales and Make More Money With Enhanced eCommerce Insights.", "google-analytics-dashboard-for-wp"),
        features: [
          __("10+ eCommerce Integrations", "google-analytics-dashboard-for-wp"),
          __("Average Order Value", "google-analytics-dashboard-for-wp"),
          __("Total Revenue", "google-analytics-dashboard-for-wp"),
          __("Sessions to Purchase", "google-analytics-dashboard-for-wp"),
          __("Top Conversion Sources", "google-analytics-dashboard-for-wp"),
          __("Top Products", "google-analytics-dashboard-for-wp"),
          __("Number of Transactions", "google-analytics-dashboard-for-wp"),
          __("Time to Purchase", "google-analytics-dashboard-for-wp")
        ]
      },
      "ecommerce-coupons": {
        mainheading: __("Coupons Report", "google-analytics-dashboard-for-wp"),
        title: __("See How Your Coupons and Discounts Are Performing.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Coupon Names", "google-analytics-dashboard-for-wp"),
          __("Revenue per Coupon", "google-analytics-dashboard-for-wp"),
          __("Transaction Counts", "google-analytics-dashboard-for-wp"),
          __("Average Order Value", "google-analytics-dashboard-for-wp")
        ]
      },
      "cart-abandonment": {
        mainheading: __("Cart Abandonment Report", "google-analytics-dashboard-for-wp"),
        title: __("Identify Products With the Highest Cart and Checkout Abandonment Rates.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Products Abandoned", "google-analytics-dashboard-for-wp"),
          __("Cart Abandonment Rate", "google-analytics-dashboard-for-wp"),
          __("Checkout Abandonment Rate", "google-analytics-dashboard-for-wp"),
          __("Daily Breakdown", "google-analytics-dashboard-for-wp"),
          __("Revenue Lost", "google-analytics-dashboard-for-wp")
        ]
      },
      "ecommerce-funnel": {
        mainheading: __("eCommerce Funnel Report", "google-analytics-dashboard-for-wp"),
        title: __("Visualize Your Customer Journey From Product View to Purchase.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Funnel Visualization", "google-analytics-dashboard-for-wp"),
          __("Completion Rates", "google-analytics-dashboard-for-wp"),
          __("Abandonment Rates", "google-analytics-dashboard-for-wp"),
          __("Channel Breakdown", "google-analytics-dashboard-for-wp"),
          __("Country Breakdown", "google-analytics-dashboard-for-wp")
        ]
      },
      "ecommerce-spend-by-day": {
        mainheading: __("Spend by Day Report", "google-analytics-dashboard-for-wp"),
        title: __("See Revenue and Purchase Trends by Day of the Week.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Revenue Chart", "google-analytics-dashboard-for-wp"),
          __("Purchase Trends", "google-analytics-dashboard-for-wp"),
          __("Items Sold", "google-analytics-dashboard-for-wp"),
          __("Average Order Value", "google-analytics-dashboard-for-wp")
        ]
      },
      "ecommerce-spend-by-hour": {
        mainheading: __("Spend by Hour Report", "google-analytics-dashboard-for-wp"),
        title: __("See Revenue and Purchase Trends by Hour of the Day.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Revenue Chart", "google-analytics-dashboard-for-wp"),
          __("Hourly Trends", "google-analytics-dashboard-for-wp"),
          __("Items Sold", "google-analytics-dashboard-for-wp"),
          __("Average Order Value", "google-analytics-dashboard-for-wp")
        ]
      },
      "ecommerce-purchases-by-location": {
        mainheading: __("Orders by Location Report", "google-analytics-dashboard-for-wp"),
        title: __("See Where Your Customers Are Making Purchases.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Country Breakdown", "google-analytics-dashboard-for-wp"),
          __("State/Region Breakdown", "google-analytics-dashboard-for-wp"),
          __("City Breakdown", "google-analytics-dashboard-for-wp"),
          __("Revenue by Location", "google-analytics-dashboard-for-wp"),
          __("Average Order Value", "google-analytics-dashboard-for-wp")
        ]
      },
      "ecommerce-refunds": {
        mainheading: __("Refunds Report", "google-analytics-dashboard-for-wp"),
        title: __("Track Product Refund Data and Identify Problem Areas.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Total Refunds Chart", "google-analytics-dashboard-for-wp"),
          __("Refund Amount Chart", "google-analytics-dashboard-for-wp"),
          __("Products Refunded", "google-analytics-dashboard-for-wp"),
          __("Revenue Refunded", "google-analytics-dashboard-for-wp")
        ]
      },
      "ecommerce-refunds-by-geo": {
        mainheading: __("Refunds by Location Report", "google-analytics-dashboard-for-wp"),
        title: __("See Refund Data Broken Down by Geography.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Country Breakdown", "google-analytics-dashboard-for-wp"),
          __("Refund Amounts", "google-analytics-dashboard-for-wp"),
          __("Transaction Counts", "google-analytics-dashboard-for-wp"),
          __("Average Order Value", "google-analytics-dashboard-for-wp")
        ]
      },
      countries: {
        mainheading: __("Country Report", "google-analytics-dashboard-for-wp"),
        title: __("See Where Your Visitors Come From — Down to Region.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Sessions and Pageviews Over Time", "google-analytics-dashboard-for-wp"),
          __("Country and Region Breakdown", "google-analytics-dashboard-for-wp"),
          __("Engagement and eCommerce Metrics", "google-analytics-dashboard-for-wp"),
          __("Compare Date Ranges", "google-analytics-dashboard-for-wp")
        ]
      },
      "custom-events": {
        mainheading: __("Custom Events Report", "google-analytics-dashboard-for-wp"),
        title: __("Track ExactMetrics custom events and key events in Google Analytics.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Sessions and Pageviews Over Time", "google-analytics-dashboard-for-wp"),
          __("Event Count, Sessions, and Engagement", "google-analytics-dashboard-for-wp"),
          __("Key Event Indicators", "google-analytics-dashboard-for-wp"),
          __("Compare Date Ranges", "google-analytics-dashboard-for-wp")
        ]
      },
      publisher: {
        mainheading: __("Publishers Report", "google-analytics-dashboard-for-wp"),
        title: __("Improve Your Conversion Rate With Insights Into Which Content Works Best.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Top Landing Pages", "google-analytics-dashboard-for-wp"),
          __("Top Affilliate Links", "google-analytics-dashboard-for-wp"),
          __("Top Exit Pages", "google-analytics-dashboard-for-wp"),
          __("Top Download Links", "google-analytics-dashboard-for-wp"),
          __("Top Outbound Links", "google-analytics-dashboard-for-wp"),
          __("Scroll Depth", "google-analytics-dashboard-for-wp")
        ]
      },
      "engagement-pages": {
        mainheading: __("Pages Report", "google-analytics-dashboard-for-wp"),
        title: __("See Which Pages Get the Most Views and Engagement.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Page Paths and Links", "google-analytics-dashboard-for-wp"),
          __("Page Views and Engaged Sessions", "google-analytics-dashboard-for-wp"),
          __("New Sessions and Bounce Rate", "google-analytics-dashboard-for-wp"),
          __("Compare Date Ranges", "google-analytics-dashboard-for-wp")
        ]
      },
      dimensions: {
        mainheading: __("Dimensions Report", "google-analytics-dashboard-for-wp"),
        title: __("Increase Engagement and Unlock New Insights About Your Site.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Author Tracking", "google-analytics-dashboard-for-wp"),
          __("User ID Tracking", "google-analytics-dashboard-for-wp"),
          __("Post Types", "google-analytics-dashboard-for-wp"),
          __("Tag Tracking", "google-analytics-dashboard-for-wp"),
          __("Categories", "google-analytics-dashboard-for-wp"),
          __("SEO Scores", "google-analytics-dashboard-for-wp"),
          __("Publish Times", "google-analytics-dashboard-for-wp"),
          __("Focus Keywords", "google-analytics-dashboard-for-wp")
        ]
      },
      forms: {
        mainheading: __("Forms Report", "google-analytics-dashboard-for-wp"),
        title: __("Track Every Type of Web Form and Gain Visibility Into Your Customer Journey.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Conversion Counts", "google-analytics-dashboard-for-wp"),
          __("Impression Counts", "google-analytics-dashboard-for-wp"),
          __("Conversion Rates", "google-analytics-dashboard-for-wp")
        ]
      },
      queries: {
        mainheading: __("Search Console Report", "google-analytics-dashboard-for-wp"),
        title: __("See Exactly How Visitors Find Your Website From Google.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Top Google Search Terms", "google-analytics-dashboard-for-wp"),
          __("Number of Clicks", "google-analytics-dashboard-for-wp"),
          __("Click-through Ratio", "google-analytics-dashboard-for-wp"),
          __("Average Results Position", "google-analytics-dashboard-for-wp")
        ]
      },
      realtime: {
        mainheading: __("Realtime Report", "google-analytics-dashboard-for-wp"),
        title: __("See Who And What is Happening on Your Website in Realtime.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Top Page Views", "google-analytics-dashboard-for-wp"),
          __("Current Active Users", "google-analytics-dashboard-for-wp"),
          __("Top Referral Sources", "google-analytics-dashboard-for-wp"),
          __("Pageviews Per Minute", "google-analytics-dashboard-for-wp"),
          __("Top Countries", "google-analytics-dashboard-for-wp"),
          __("Top Cities", "google-analytics-dashboard-for-wp")
        ]
      },
      sitespeed: {
        mainheading: __("Site Speed Report", "google-analytics-dashboard-for-wp"),
        title: __("Improve Your User Experience and Improve Search Engine Rankings.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Overall Site Speed Score", "google-analytics-dashboard-for-wp"),
          __("Server Response Times", "google-analytics-dashboard-for-wp"),
          __("Mobile and Desktop Scores", "google-analytics-dashboard-for-wp"),
          __("First Contentful Paint", "google-analytics-dashboard-for-wp"),
          __("Automatic Recommendations", "google-analytics-dashboard-for-wp"),
          __("Total Blocking Time", "google-analytics-dashboard-for-wp"),
          __("On-Demand Audits", "google-analytics-dashboard-for-wp"),
          __("Time to Interactive", "google-analytics-dashboard-for-wp")
        ]
      },
      media: {
        mainheading: __("Media Report", "google-analytics-dashboard-for-wp"),
        title: __("Easily See Which Videos Are Most Popular.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Videos Plays, Average Duration, and Completions", "google-analytics-dashboard-for-wp"),
          __("Works with YouTube, Vimeo, and HTML 5 Videos", "google-analytics-dashboard-for-wp"),
          __("Compare stats over time", "google-analytics-dashboard-for-wp")
        ]
      },
      exceptions: {
        mainheading: __("Exceptions Report", "google-analytics-dashboard-for-wp"),
        title: __("Get Automated Alerts When Something Goes Wrong With Your Site Analytics.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Automatic Exception Detection", "google-analytics-dashboard-for-wp"),
          __("eCommerce & Engagement Alerts", "google-analytics-dashboard-for-wp"),
          __("CSV Export", "google-analytics-dashboard-for-wp")
        ]
      },
      userjourney: {
        mainheading: __("User Journey Report", "google-analytics-dashboard-for-wp"),
        title: __("See the exact steps your customers took to purchase, and how they arrived at your website.", "google-analytics-dashboard-for-wp"),
        features: [
          __("Step-by-Step Purchase Paths", "google-analytics-dashboard-for-wp"),
          __("Purchase Dates", "google-analytics-dashboard-for-wp"),
          __("Campaign Filtering", "google-analytics-dashboard-for-wp"),
          __("Order Totals", "google-analytics-dashboard-for-wp"),
          __("Medium & Source Filtering", "google-analytics-dashboard-for-wp"),
          __("Average Steps to Purchase", "google-analytics-dashboard-for-wp")
        ]
      }
    };
    const upsellData = computed(() => {
      return UPSELL_TEXTS[props.report] || { mainheading: "", title: "", features: [] };
    });
    const subheading = computed(() => {
      if (props.customSubheading) return props.customSubheading;
      return sprintf(
        __("What's in the %1$s?", "google-analytics-dashboard-for-wp"),
        upsellData.value.mainheading
      );
    });
    const featuresClass = computed(() => {
      const features = upsellData.value.features || [];
      return features.length > 4 || props.forceTwoColumns ? "columns-2" : "columns-1";
    });
    const footerNotice = computed(() => {
      return sprintf(
        __("%1$sPlus%2$s, upgrading to Pro will unlock %1$sall%2$s advanced reports, tracking, and integrations. %3$sLearn more about Pro%4$s", "google-analytics-dashboard-for-wp"),
        "<strong>",
        "</strong>",
        '<a target="_blank" href="' + upgradeUrl.value + '">',
        "</a>"
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$2, {
        "model-value": visible.value,
        mode: "gate",
        backdrop: "transparent",
        "content-class": "exactmetrics-upsell-modal-shell",
        "overlay-class": "exactmetrics-upsell-modal-shell-overlay",
        dismissable: false
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3$1, [
                upsellData.value.mainheading ? (openBlock(), createElementBlock("h3", _hoisted_4$1, toDisplayString(upsellData.value.mainheading), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_5$1, [
                createBaseVNode("div", _hoisted_6$1, [
                  upsellData.value.title ? (openBlock(), createElementBlock("h3", _hoisted_7$1, toDisplayString(upsellData.value.title), 1)) : createCommentVNode("", true),
                  createBaseVNode("h4", null, toDisplayString(subheading.value), 1),
                  upsellData.value.features ? (openBlock(), createElementBlock("ul", {
                    key: 1,
                    class: normalizeClass(featuresClass.value)
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(upsellData.value.features, (feature, index) => {
                      return openBlock(), createElementBlock("li", { key: index }, [
                        _cache[0] || (_cache[0] = createBaseVNode("span", { class: "feature-checkmark" }, [
                          createBaseVNode("svg", {
                            width: "10",
                            height: "8",
                            viewBox: "0 0 10 8",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createBaseVNode("path", {
                              d: "M1 4L3.5 6.5L9 1",
                              stroke: "currentColor",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ])
                        ], -1)),
                        createBaseVNode("span", null, toDisplayString(feature), 1)
                      ]);
                    }), 128))
                  ], 2)) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_8$1, [
                    createBaseVNode("p", null, toDisplayString(unref(__)("And more!", "google-analytics-dashboard-for-wp")), 1)
                  ]),
                  createBaseVNode("p", {
                    innerHTML: unref(sanitizeHtml)(footerNotice.value)
                  }, null, 8, _hoisted_9$1),
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("a", {
                      href: upgradeUrl.value,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "exactmetrics-button-upgrade"
                    }, toDisplayString(unref(__)("Upgrade and Unlock", "google-analytics-dashboard-for-wp")), 9, _hoisted_11),
                    __props.showSampleButton ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      class: "exactmetrics-upsell-content-button-sample-report",
                      href: "#",
                      onClick: withModifiers(onSeeSample, ["prevent"])
                    }, toDisplayString(unref(__)("See a Sample Report", "google-analytics-dashboard-for-wp")), 1)) : createCommentVNode("", true)
                  ])
                ]),
                upsellImageUrl.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "exactmetrics-upsell-content__img",
                  style: normalizeStyle(imageStyle.value)
                }, null, 4)) : createCommentVNode("", true)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
};
const _hoisted_1 = {
  key: 0,
  class: "exactmetrics-not-authenticated-notice"
};
const _hoisted_2 = { class: "exactmetrics-settings-input exactmetrics-settings-input-authenticate" };
const _hoisted_3 = {
  key: 0,
  class: "exactmetrics-report-page__chart-section"
};
const _hoisted_4 = {
  key: 1,
  class: "exactmetrics-report-page__table-section"
};
const _hoisted_5 = { class: "exactmetrics-upsell-overlay" };
const _hoisted_6 = { class: "exactmetrics-upsell-modal exactmetrics-addon-unavailable-modal" };
const _hoisted_7 = { class: "exactmetrics-addon-unavailable-modal__buttons" };
const _hoisted_8 = ["disabled"];
const _hoisted_9 = ["disabled"];
const SAMPLE_NOTICE_ID = "lite_sample_report";
const _sfc_main = {
  __name: "ReportPageLayout",
  props: {
    requiredLicense: {
      type: String,
      default: "lite"
    },
    requiredAddon: {
      type: String,
      default: ""
    },
    upsellFeature: {
      type: String,
      default: ""
    },
    showSampleButton: {
      type: Boolean,
      default: true
    }
  },
  emits: ["see-sample"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const sampleMode = ref(false);
    const addonDismissed = ref(false);
    const isActivating = ref(false);
    const dialog = useDialog();
    const { addNotice, removeNotice } = useNotices();
    const addonsStore = useAddonsStore();
    function onSeeSample() {
      sampleMode.value = true;
      const link = '<a target="_blank" rel="noopener noreferrer" href="' + getUpgradeUrl("report", props.upsellFeature) + '">';
      !!addonsStore.addons?.exceptions?.active;
      props.upsellFeature === "exceptions" && isPro();
      const content = sprintf(__("This is a sample report. %1$sUpgrade to Pro%2$s to unlock for your website.", "google-analytics-dashboard-for-wp"), link, "</a>");
      addNotice({
        id: SAMPLE_NOTICE_ID,
        type: "warning",
        dismissable: true,
        content
      });
      emit("see-sample");
    }
    onUnmounted(() => {
      removeNotice(SAMPLE_NOTICE_ID);
    });
    const {
      canViewReports,
      isAuthenticated,
      needsReAuth,
      isBlocked,
      needsAddonOnly,
      shouldBlur
    } = useReportPermissions({
      minTier: props.requiredLicense,
      requiredAddon: props.requiredAddon
    });
    const overviewStore = useOverviewReportStore();
    watchEffect(() => {
      overviewStore.reportUpsellActive = isAuthenticated.value && isBlocked.value && !needsAddonOnly.value && !sampleMode.value;
    });
    const addonsPageUrl = computed(() => getMiGlobal("addons_page_url", "/wp-admin/admin.php?page=exactmetrics_settings#/addons"));
    const addonNoticeText = computed(() => {
      const addon = props.requiredAddon || "required";
      const addonName = addon.charAt(0).toUpperCase() + addon.slice(1);
      return sprintf(
        __("Please activate the ExactMetrics %s addon to view %s reports.", "google-analytics-dashboard-for-wp"),
        addonName,
        addonName.toLowerCase()
      );
    });
    async function handleActivateAddon() {
      isActivating.value = true;
      addonDismissed.value = true;
      const addonsInfo = getMiGlobal("addons_info", {});
      const basename = addonsInfo[props.requiredAddon]?.basename || "";
      if (!basename) {
        window.location.href = addonsPageUrl.value;
        return;
      }
      dialog.loading({
        title: __("Activating Addon", "google-analytics-dashboard-for-wp"),
        message: __("Please wait", "google-analytics-dashboard-for-wp")
      });
      try {
        const activateData = {
          nonce: getMiGlobal("activate_nonce"),
          plugin: basename
        };
        if (getMiGlobal("network", false)) {
          activateData.isnetwork = true;
        }
        await miAjax("exactmetrics_activate_addon", activateData);
        dialog.loading({
          title: __("Addon Activated", "google-analytics-dashboard-for-wp"),
          message: __("Loading report data", "google-analytics-dashboard-for-wp")
        });
        setTimeout(() => {
          window.location.reload();
        }, 1e3);
      } catch (error) {
        isActivating.value = false;
        dialog.alert({
          variant: "error",
          title: __("Activation Failed", "google-analytics-dashboard-for-wp"),
          message: error?.message || __("Please activate manually from the addons page.", "google-analytics-dashboard-for-wp")
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["exactmetrics-report-page", { "exactmetrics-blur": unref(shouldBlur) }])
      }, [
        !unref(canViewReports) ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("h3", null, toDisplayString(unref(__)("You don't have permission to view ExactMetrics reports.", "google-analytics-dashboard-for-wp")), 1),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("p", null, toDisplayString(unref(__)("Please check with your site administrator that your role is included in the ExactMetrics permissions settings.", "google-analytics-dashboard-for-wp")), 1)
          ])
        ])) : createCommentVNode("", true),
        unref(canViewReports) && !unref(isAuthenticated) ? (openBlock(), createBlock(AuthModal, {
          key: 1,
          "is-open": true
        })) : createCommentVNode("", true),
        unref(canViewReports) && unref(needsReAuth) ? (openBlock(), createBlock(ReAuthModal, {
          key: 2,
          "is-open": true
        })) : createCommentVNode("", true),
        unref(canViewReports) ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
          createBaseVNode("div", {
            class: normalizeClass({ "exactmetrics-content-blurred": unref(isBlocked) && !sampleMode.value })
          }, [
            _ctx.$slots.chart ? (openBlock(), createElementBlock("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "chart", {}, void 0, true)
            ])) : createCommentVNode("", true),
            _ctx.$slots.table ? (openBlock(), createElementBlock("div", _hoisted_4, [
              renderSlot(_ctx.$slots, "table", {}, void 0, true)
            ])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 2),
          createVNode(_sfc_main$2, {
            "model-value": unref(isAuthenticated) && unref(needsAddonOnly) && !addonDismissed.value,
            mode: "gate",
            backdrop: "transparent",
            "content-class": "exactmetrics-upsell-modal-shell",
            "overlay-class": "exactmetrics-upsell-modal-shell-overlay",
            dismissable: false
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "exactmetrics-addon-unavailable-modal__icon" }, [
                    createBaseVNode("svg", {
                      width: "60",
                      height: "60",
                      viewBox: "0 0 60 60",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createBaseVNode("circle", {
                        cx: "30",
                        cy: "30",
                        r: "28",
                        stroke: "#EA4E64",
                        "stroke-width": "2",
                        fill: "none"
                      }),
                      createBaseVNode("path", {
                        d: "M20 20L40 40M40 20L20 40",
                        stroke: "#EA4E64",
                        "stroke-width": "2.5",
                        "stroke-linecap": "round"
                      })
                    ])
                  ], -1)),
                  createBaseVNode("h3", null, toDisplayString(unref(__)("Report Unavailable", "google-analytics-dashboard-for-wp")), 1),
                  createBaseVNode("p", null, toDisplayString(addonNoticeText.value), 1),
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("button", {
                      class: "exactmetrics-button-upgrade",
                      disabled: isActivating.value,
                      onClick: handleActivateAddon
                    }, toDisplayString(unref(__)("Activate Addon", "google-analytics-dashboard-for-wp")), 9, _hoisted_8),
                    createBaseVNode("button", {
                      class: "exactmetrics-button-dismiss",
                      disabled: isActivating.value,
                      onClick: _cache[0] || (_cache[0] = ($event) => addonDismissed.value = true)
                    }, toDisplayString(unref(__)("Dismiss", "google-analytics-dashboard-for-wp")), 9, _hoisted_9)
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["model-value"]),
          unref(isAuthenticated) && unref(isBlocked) && !unref(needsAddonOnly) ? (openBlock(), createBlock(_sfc_main$1, {
            key: 0,
            show: unref(isAuthenticated) && unref(isBlocked) && !unref(needsAddonOnly),
            report: __props.upsellFeature,
            "show-sample-button": __props.showSampleButton,
            onSeeSample
          }, null, 8, ["show", "report", "show-sample-button"])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 2);
    };
  }
};
const ReportPageLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1b217949"]]);
export {
  ReportPageLayout as R
};
