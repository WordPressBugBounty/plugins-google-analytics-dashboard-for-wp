import { n as getUpgradeUrl } from "./ajax-Uw5S1uqk.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, b as createVNode } from "./toastStore-CjmlShHI.js";
const _hoisted_1$1 = { class: "exactmetrics-popular-posts-products-upsell exactmetrics-bg-img" };
const _hoisted_2 = { class: "exactmetrics-popular-products-upsell-window" };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["href", "textContent"];
const _hoisted_6 = ["href", "textContent"];
const _sfc_main$1 = {
  __name: "PopularPostsProductsUpsell",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_title = __("This feature requires ExactMetrics Pro", "google-analytics-dashboard-for-wp");
    const text_subtitle = __(
      "By upgrading you will also get access to advanced eCommerce tracking, Custom Dimensions and more.",
      "google-analytics-dashboard-for-wp"
    );
    const text_unlock = __("Upgrade to Pro and Unlock Popular Products", "google-analytics-dashboard-for-wp");
    const text_view_all = __("View all Pro features", "google-analytics-dashboard-for-wp");
    const upgradeButtonUrl = getUpgradeUrl("popular-posts", "products-overlay-button");
    const upgradeLinkUrl = getUpgradeUrl("popular-posts", "products-overlay-link");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h2", {
            textContent: toDisplayString(unref(text_title))
          }, null, 8, _hoisted_3),
          createBaseVNode("p", { innerHTML: unref(text_subtitle) }, null, 8, _hoisted_4),
          createBaseVNode("a", {
            href: unref(upgradeButtonUrl),
            target: "_blank",
            rel: "noopener",
            class: "exactmetrics-button exactmetrics-button-large",
            textContent: toDisplayString(unref(text_unlock))
          }, null, 8, _hoisted_5),
          _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
          createBaseVNode("a", {
            href: unref(upgradeLinkUrl),
            target: "_blank",
            rel: "noopener",
            class: "exactmetrics-button-text",
            textContent: toDisplayString(unref(text_view_all))
          }, null, 8, _hoisted_6),
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "exactmetrics-bg-img exactmetrics-popular-products-upsell-browser" }, null, -1))
        ])
      ]);
    };
  }
};
const _hoisted_1 = { class: "exactmetrics-settings-content exactmetrics-settings-content-pp-products" };
const _sfc_main = {
  __name: "exactmetrics-PopularPostsProducts-Lite",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1)
      ]);
    };
  }
};
export {
  _sfc_main as default
};
