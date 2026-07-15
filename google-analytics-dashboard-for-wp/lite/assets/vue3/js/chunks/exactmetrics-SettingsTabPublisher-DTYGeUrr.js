import { j as getMiGlobal, o as getUrl } from "./ajax-Uw5S1uqk.js";
import { u as useSettingsStore } from "./settings-BVkGy_Cz.js";
import { c as useAddonsStore } from "./addons-DcCBQDEz.js";
import { _ as _sfc_main$4 } from "./SettingsBlock-Bsp6Fu6H.js";
import { _ as _sfc_main$6 } from "./SettingsInputRepeater-B2m236qz.js";
import { _ as _sfc_main$5 } from "./SettingsInfoTooltip-DGz1RdtP.js";
import { _ as _sfc_main$3 } from "./SettingsAddonUpgrade-DbDUMvnr.js";
import { o as openBlock, c as createElementBlock, b as createVNode, D as withCtx, u as unref, a as createBaseVNode, t as toDisplayString, F as Fragment, s as createCommentVNode, E as createBlock, m as computed } from "./toastStore-CjmlShHI.js";
import { _ as _sfc_main$8 } from "./SettingsInputCheckbox-B6Cq-zQE.js";
import { _ as _sfc_main$7 } from "./SettingsInputRadio-BIIVvaRz.js";
import { U as UniversallyPromo } from "./UniversallyPromo-lKsveXRx.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./useNotices-BosR4uY_.js";
import "./Modal-CzneZfPu.js";
import "./SlideDownUp-69HctpXG.js";
import "./exactmetrics-Lite-BcFa0OAR.js";
import "./TheAppHeader-BI_ZrtNW.js";
import "./license-C6i4W44s.js";
import "./default-i18n-KrIlCc2E.js";
const _hoisted_1$2 = { class: "exactmetrics-settings-full-width-gray exactmetrics-pro-upgrade" };
const _hoisted_2$2 = ["textContent"];
const _sfc_main$2 = {
  __name: "exactmetrics-SettingsInputAmp-Lite",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_upgrade = __("Upgrade to PRO", "google-analytics-dashboard-for-wp");
    const text_amp_title = __("Google AMP", "google-analytics-dashboard-for-wp");
    const text_amp_upsell = __(
      "Want to use track users visiting your AMP pages? By upgrading to ExactMetrics Pro, you can enable AMP page tracking.",
      "google-analytics-dashboard-for-wp"
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_sfc_main$4, {
          title: unref(text_amp_title),
          icon: "monstericon-mobile"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, {
              addon: "amp",
              button_text: unref(text_upgrade)
            }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  textContent: toDisplayString(unref(text_amp_upsell))
                }, null, 8, _hoisted_2$2)
              ]),
              _: 1
            }, 8, ["button_text"])
          ]),
          _: 1
        }, 8, ["title"])
      ]);
    };
  }
};
const _hoisted_1$1 = { class: "exactmetrics-settings-full-width-gray exactmetrics-pro-upgrade" };
const _hoisted_2$1 = ["textContent"];
const _sfc_main$1 = {
  __name: "exactmetrics-SettingsInputMedia-Lite",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_upgrade = __("Upgrade to PRO", "google-analytics-dashboard-for-wp");
    const text_media_title = __("Media Tracking", "google-analytics-dashboard-for-wp");
    const text_media_upsell = __(
      "Track how your users interact with videos on your website. Upgrade to ExactMetrics Pro.",
      "google-analytics-dashboard-for-wp"
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_sfc_main$4, {
          title: unref(text_media_title),
          icon: "monstericon-media"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, {
              addon: "media",
              button_text: unref(text_upgrade)
            }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  textContent: toDisplayString(unref(text_media_upsell))
                }, null, 8, _hoisted_2$1)
              ]),
              _: 1
            }, 8, ["button_text"])
          ]),
          _: 1
        }, 8, ["title"])
      ]);
    };
  }
};
const _hoisted_1 = { class: "exactmetrics-settings-content settings-publisher" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = { class: "exactmetrics-grey-settings-input-area" };
const _hoisted_4 = { class: "exactmetrics-grey-settings-input-area" };
const _hoisted_5 = { class: "exactmetrics-settings-block-inner-field-label" };
const _hoisted_6 = { class: "exactmetrics-dark" };
const _hoisted_7 = ["innerHTML"];
const _sfc_main = {
  __name: "exactmetrics-SettingsTabPublisher",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    useSettingsStore();
    const addonsStore = useAddonsStore();
    const addons = computed(() => addonsStore.addons || {});
    const site_url = getMiGlobal("site_url", "");
    const repeater_structure = [
      {
        name: "path",
        // Translators: Example path (/go/).
        label: sprintf(__("Path (example: %s)", "google-analytics-dashboard-for-wp"), "/go/"),
        pattern: /^\/\S+$/,
        error: __("Path has to start with a / and have no spaces", "google-analytics-dashboard-for-wp")
      },
      {
        name: "label",
        // Translators: Example label (aff).
        label: sprintf(__("Label (example: %s)", "google-analytics-dashboard-for-wp"), "aff"),
        pattern: /^\S+$/,
        error: __("Label can't contain any spaces", "google-analytics-dashboard-for-wp")
      }
    ];
    const text_affiliate_title = __("Affiliate Links", "google-analytics-dashboard-for-wp");
    const text_affiliate_description_tooltip = sprintf(
      __("Enable tracking for your custom affiliate links to see how they perform. By setting a path like '/go/,' any URL starting with this will be tracked. In Google Analytics, these links are uniquely labeled with 'outbound-link-' followed by your custom label, helping you identify them easily. Read %1$shere%2$s for a detailed guide on setting up affiliate link tracking.", "google-analytics-dashboard-for-wp"),
      '<a href="' + getUrl("settings-panel", "publisher-tab", "https://www.exactmetrics.com/how-to-set-up-affiliate-link-tracking-in-wordpress/") + '" target="_blank">',
      "</a>"
    );
    const text_affiliate_repeater_description = __("Our affiliate link tracking works by setting path for internal links to track as outbound links.", "google-analytics-dashboard-for-wp");
    const text_headline_analyzer = __("Headline Analyzer", "google-analytics-dashboard-for-wp");
    const text_headline_analyzer_description = __("The ExactMetrics Headline Analyzer tool in the Gutenberg editor enables you to write irresistible SEO-friendly headlines that drive traffic, social media shares, and rank better in search results.", "google-analytics-dashboard-for-wp");
    const text_disable_headline_analyzer = __("Disable the Headline Analyzer", "google-analytics-dashboard-for-wp");
    const text_pretty_links_settings = __("Pretty Links Tracking Settings", "google-analytics-dashboard-for-wp");
    const text_pretty_links_settings_description = __("Select how you want ExactMetrics to track Pretty Links URLs.", "google-analytics-dashboard-for-wp");
    const prettyLinksoptions = [
      {
        value: "target_url",
        label: "Target URL - https://affiliatewebsite.com/productName/&trackingparmeters=123xyz"
      },
      {
        value: "pretty_link",
        label: "Pretty Link URL - " + site_url + "/productName"
      }
    ];
    const isLoadHeadlineAnalyzerSettings = computed(() => {
      if ("false" === getMiGlobal("load_headline_analyzer_settings")) {
        return false;
      }
      return true;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createVNode(_sfc_main$4, {
          title: unref(text_affiliate_title),
          icon: "monstericon-links",
          collapsible: true,
          "default-collapse": false
        }, {
          default: withCtx(() => [
            createBaseVNode("p", null, [
              createBaseVNode("span", { innerHTML: unref(text_affiliate_repeater_description) }, null, 8, _hoisted_2),
              createVNode(_sfc_main$5, { content: unref(text_affiliate_description_tooltip) }, null, 8, ["content"])
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_sfc_main$6, {
                structure: repeater_structure,
                name: "affiliate_links"
              })
            ]),
            addons.value && addons.value["pretty-link"] && addons.value["pretty-link"].active ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("p", _hoisted_5, [
                  createBaseVNode("span", _hoisted_6, toDisplayString(unref(text_pretty_links_settings)), 1),
                  createBaseVNode("span", null, toDisplayString(unref(text_pretty_links_settings_description)), 1)
                ]),
                createVNode(_sfc_main$7, {
                  options: prettyLinksoptions,
                  name: "pretty_links_backend_track"
                })
              ])
            ], 64)) : createCommentVNode("", true),
            createVNode(UniversallyPromo, {
              class: "exactmetrics-publisher-settings__universally-promo",
              "promo-id": "universally_affiliate_links",
              text: unref(__)("Make more money by translating your website in seconds.", "google-analytics-dashboard-for-wp"),
              "link-text": unref(__)("Install Universally", "google-analytics-dashboard-for-wp")
            }, null, 8, ["text", "link-text"])
          ]),
          _: 1
        }, 8, ["title"]),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
        createVNode(_sfc_main$2),
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
        createVNode(_sfc_main$1),
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
        isLoadHeadlineAnalyzerSettings.value ? (openBlock(), createBlock(_sfc_main$4, {
          key: 0,
          title: unref(text_headline_analyzer),
          collapsible: true,
          icon: "monstericon-newspaper"
        }, {
          default: withCtx(() => [
            createBaseVNode("p", null, [
              createBaseVNode("span", { innerHTML: unref(text_headline_analyzer_description) }, null, 8, _hoisted_7)
            ]),
            createVNode(_sfc_main$8, {
              name: "disable_headline_analyzer",
              label: unref(text_disable_headline_analyzer)
            }, null, 8, ["label"])
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true)
      ]);
    };
  }
};
const exactmetricsSettingsTabPublisher = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1b215c29"]]);
export {
  exactmetricsSettingsTabPublisher as default
};
