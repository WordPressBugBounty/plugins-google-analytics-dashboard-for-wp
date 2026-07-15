import { n as getUpgradeUrl } from "./ajax-Uw5S1uqk.js";
import { _ as _sfc_main$1 } from "./ContentTitleTop-8n-knvtm.js";
import { _ as _sfc_main$2 } from "./ContentIntroFullWidth-Cv-KKuIE.js";
import { _ as _sfc_main$3 } from "./ContentIconList-Cbwc93uo.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, u as unref, D as withCtx, t as toDisplayString } from "./toastStore-CjmlShHI.js";
import "./TheAppHeader-BI_ZrtNW.js";
const _hoisted_1 = { class: "exactmetrics-settings-content exactmetrics-settings-ecommerce exactmetrics-upsell" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["href", "textContent"];
const _hoisted_5 = { class: "exactmetrics-settings-content exactmetrics-affiliate-tracking-upsell" };
const _hoisted_6 = { class: "exactmetrics-flex" };
const _hoisted_7 = { class: "exactmetrics-aft-content-left" };
const _hoisted_8 = ["textContent"];
const _hoisted_9 = ["textContent"];
const _hoisted_10 = ["textContent"];
const _hoisted_11 = ["href", "textContent"];
const _sfc_main = {
  __name: "exactmetrics-SettingsTabEcommerce-Lite",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const upgrade_button_url = getUpgradeUrl("settings-panel", "ecommerce-tab");
    const text_ecom = __("Ecommerce", "google-analytics-dashboard-for-wp");
    const text_title = sprintf(
      __("See All Your Important Store%s Metrics in One Place", "google-analytics-dashboard-for-wp"),
      "<br />"
    );
    const text_sub_title = __(
      "Get an Answer to All Your Top Ecommerce Questions From a Single Report",
      "google-analytics-dashboard-for-wp"
    );
    const text_button_upgrade = __("Upgrade to PRO", "google-analytics-dashboard-for-wp");
    const text_here = __("Here's what you get:", "google-analytics-dashboard-for-wp");
    const upsell_list = [
      {
        icon: "monstericon-bullseye-arrow",
        text: __("See Your Conversion Rate to Improve Funnel", "google-analytics-dashboard-for-wp")
      },
      {
        icon: "monstericon-cash-register",
        text: __("See The Number of Transactions and Make Data-Driven Decisions", "google-analytics-dashboard-for-wp")
      },
      {
        icon: "monstericon-chart-line",
        text: __("See The Total Revenue to Track Growth", "google-analytics-dashboard-for-wp")
      },
      {
        icon: "monstericon-sack-dollar",
        text: __("See Average Order Value to Find Offer Opportunities", "google-analytics-dashboard-for-wp")
      },
      {
        icon: "monstericon-box",
        text: __("See Your Top Products to See Individual Performance", "google-analytics-dashboard-for-wp")
      },
      {
        icon: "monstericon-links",
        text: __("See your Top Conversion Sources and Focus on what's Working", "google-analytics-dashboard-for-wp")
      },
      {
        icon: "monstericon-clock",
        text: __("See The Time it Takes for Customers to Purchase", "google-analytics-dashboard-for-wp")
      },
      {
        icon: "monstericon-browser",
        text: __("See How Many Sessions are Needed for a Purchase", "google-analytics-dashboard-for-wp")
      }
    ];
    const text_affiliate_heading = __("Automatically Track Affiliate Sales", "google-analytics-dashboard-for-wp");
    const text_affiliate_content_1 = __(
      "With ExactMetrics Pro, you can easily measure individual affiliate performance inside Google Analytics, no coding needed. Track clicks, revenue, and more.",
      "google-analytics-dashboard-for-wp"
    );
    const text_affiliate_content_2 = __(
      "Works with WooCommerce, MemberPress, and EasyDigitalDownloads.",
      "google-analytics-dashboard-for-wp"
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("main", _hoisted_1, [
          createVNode(_sfc_main$1, {
            title: unref(text_ecom),
            pro: true
          }, null, 8, ["title"]),
          createVNode(_sfc_main$2, {
            welcome: false,
            icon: "monstericon-unlock",
            screen: "exactmetrics-em-ecommerce-upsell-screen"
          }, {
            text: withCtx(() => [
              createBaseVNode("h2", { innerHTML: unref(text_title) }, null, 8, _hoisted_2),
              createBaseVNode("p", {
                textContent: toDisplayString(unref(text_sub_title))
              }, null, 8, _hoisted_3)
            ]),
            buttons: withCtx(() => [
              createBaseVNode("a", {
                href: unref(upgrade_button_url),
                target: "_blank",
                rel: "noopener",
                class: "exactmetrics-button exactmetrics-button-green exactmetrics-button-large",
                textContent: toDisplayString(unref(text_button_upgrade))
              }, null, 8, _hoisted_4)
            ]),
            _: 1
          }),
          createVNode(_sfc_main$3, {
            title: unref(text_here),
            "upsell-list": upsell_list
          }, null, 8, ["title"])
        ]),
        createBaseVNode("main", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "exactmetrics-aft-content-left-icon-arrow" }, null, -1)),
              createBaseVNode("h3", {
                textContent: toDisplayString(unref(text_affiliate_heading))
              }, null, 8, _hoisted_8),
              createBaseVNode("p", {
                textContent: toDisplayString(unref(text_affiliate_content_1))
              }, null, 8, _hoisted_9),
              createBaseVNode("p", {
                textContent: toDisplayString(unref(text_affiliate_content_2))
              }, null, 8, _hoisted_10),
              createBaseVNode("a", {
                href: unref(upgrade_button_url),
                class: "exactmetrics-button exactmetrics-button-green exactmetrics-button-large",
                target: "_blank",
                rel: "noopener",
                textContent: toDisplayString(unref(text_button_upgrade))
              }, null, 8, _hoisted_11)
            ]),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "exactmetrics-aft-content-right" }, [
              createBaseVNode("div", { class: "flex" }, [
                createBaseVNode("div", { class: "exactmetrics-affiliates-promo-logo" })
              ])
            ], -1))
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
