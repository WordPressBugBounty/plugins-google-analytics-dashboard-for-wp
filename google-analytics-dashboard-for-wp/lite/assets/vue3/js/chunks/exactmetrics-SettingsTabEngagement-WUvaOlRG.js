import { j as getMiGlobal, o as getUrl } from "./ajax-Uw5S1uqk.js";
import { c as useAddonsStore } from "./addons-DcCBQDEz.js";
import { u as useSettingsStore } from "./settings-BVkGy_Cz.js";
import { _ as _sfc_main$5 } from "./SettingsBlock-Bsp6Fu6H.js";
import { _ as _sfc_main$6 } from "./SettingsInputCheckbox-B6Cq-zQE.js";
import { S as SettingsInputText } from "./SettingsInputText-Si-V9oum.js";
import { _ as _sfc_main$7 } from "./SettingsInputRepeater-B2m236qz.js";
import { _ as _sfc_main$4 } from "./SettingsAddonUpgrade-DbDUMvnr.js";
import { o as openBlock, c as createElementBlock, b as createVNode, D as withCtx, u as unref, a as createBaseVNode, E as createBlock, s as createCommentVNode, m as computed } from "./toastStore-CjmlShHI.js";
import { S as SlideDownUp } from "./SlideDownUp-69HctpXG.js";
import "./useNotices-BosR4uY_.js";
import "./Modal-CzneZfPu.js";
import "./exactmetrics-Lite-BcFa0OAR.js";
import "./TheAppHeader-BI_ZrtNW.js";
import "./license-C6i4W44s.js";
import "./SettingsInfoTooltip-DGz1RdtP.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1$3 = { class: "settings-input settings-input-eu-compliance" };
const _hoisted_2$3 = {
  key: 0,
  class: "exactmetrics-settings-full-width-gray exactmetrics-pro-upgrade"
};
const _hoisted_3$2 = ["innerHTML"];
const _sfc_main$3 = {
  __name: "SettingsInputEUCompliance-Lite",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_title = __("EU Compliance", "google-analytics-dashboard-for-wp");
    const text_description = __("Make your website more compliant with privacy regulations like GDPR, CCPA, and PECR.", "google-analytics-dashboard-for-wp");
    const text_upgrade = __("Upgrade to PRO", "google-analytics-dashboard-for-wp");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        (openBlock(), createElementBlock("div", _hoisted_2$3, [
          createVNode(_sfc_main$5, {
            title: unref(text_title),
            icon: "monstericon-file-certificate"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$4, {
                addon: "eu-compliance",
                button_text: unref(text_upgrade)
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", { innerHTML: unref(text_description) }, null, 8, _hoisted_3$2)
                ]),
                _: 1
              }, 8, ["button_text"])
            ]),
            _: 1
          }, 8, ["title"])
        ]))
      ]);
    };
  }
};
const _hoisted_1$2 = {
  key: 0,
  class: "exactmetrics-settings-full-width-gray exactmetrics-pro-upgrade"
};
const _hoisted_2$2 = ["innerHTML"];
const _sfc_main$2 = {
  __name: "SettingsInputScroll-Lite",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_title_scrolling = __("Scroll Tracking", "google-analytics-dashboard-for-wp");
    const text_description = __(
      "Scroll depth tracking in web analytics is one of those things you simply must do, especially if you have a content-heavy site.",
      "google-analytics-dashboard-for-wp"
    );
    const text_upgrade = __("Upgrade to PRO", "google-analytics-dashboard-for-wp");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_sfc_main$5, {
          title: unref(text_title_scrolling),
          icon: "monstericon-mouse-pointer"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$4, {
              addon: "scroll",
              button_text: unref(text_upgrade)
            }, {
              default: withCtx(() => [
                createBaseVNode("span", { innerHTML: unref(text_description) }, null, 8, _hoisted_2$2)
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
const _hoisted_1$1 = { class: "settings-input settings-input-privacy-guard" };
const _hoisted_2$1 = {
  key: 0,
  class: "exactmetrics-settings-full-width-gray exactmetrics-pro-upgrade"
};
const _hoisted_3$1 = ["innerHTML"];
const _sfc_main$1 = {
  __name: "SettingsInputPrivacyGuard-Lite",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_upgrade = __("Upgrade to PRO", "google-analytics-dashboard-for-wp");
    const text_description = __("Automatically stop Personally Identifying Information (PII) from being sent to Google to boost compliance with privacy regulations and Google's terms of service. Highly recommended for sites with any type of contact forms or Ecommerce cart.", "google-analytics-dashboard-for-wp");
    const text_title_privacy_guard = __("Privacy Guard", "google-analytics-dashboard-for-wp");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createVNode(_sfc_main$5, {
            title: unref(text_title_privacy_guard),
            icon: "exactmetrics-icon-privacy-guard"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$4, {
                addon: "privacy-guard",
                button_text: unref(text_upgrade)
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", { innerHTML: unref(text_description) }, null, 8, _hoisted_3$1)
                ]),
                _: 1
              }, 8, ["button_text"])
            ]),
            _: 1
          }, 8, ["title"])
        ]))
      ]);
    };
  }
};
const _hoisted_1 = { class: "exactmetrics-settings-content settings-engagement" };
const _hoisted_2 = {
  key: 0,
  class: "exactmetrics-simple-checkboxes exactmetrics-inline-gray-box"
};
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = { class: "exactmetrics-grey-settings-input-area" };
const _hoisted_5 = ["innerHTML"];
const _sfc_main = {
  __name: "exactmetrics-SettingsTabEngagement",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const addonsStore = useAddonsStore();
    const settingsStore = useSettingsStore();
    const settings = computed(() => settingsStore.getSettings);
    let domain = window.location.origin.replace(/(^\w+:|^)\/\//, "");
    domain = domain.replace(/\./, "\\.");
    const isAddonActive = computed(() => {
      const addons = addonsStore.addons || {};
      if (addons["eu-compliance"]) {
        return addons["eu-compliance"].active;
      }
      return false;
    });
    const exit_url = getMiGlobal("exit_url", "#");
    const text_title_demographics = __("Demographics", "google-analytics-dashboard-for-wp");
    const text_label_demographics = __("Enable Demographics and Interests Reports for Remarketing and Advertising", "google-analytics-dashboard-for-wp");
    const text_label_anonymize_ip = __("Anonymize IP Addresses", "google-analytics-dashboard-for-wp");
    const text_title_link_attribution = __("Link Attribution", "google-analytics-dashboard-for-wp");
    const text_label_enhanced_link = __("Enable Enhanced Link Attribution", "google-analytics-dashboard-for-wp");
    const text_label_anchor_tracking = __("Enable Anchor Tracking", "google-analytics-dashboard-for-wp");
    const text_label_allow_anchor = __("Enable allowAnchor", "google-analytics-dashboard-for-wp");
    const text_label_tag_links_in_rss = __("Enable Tag Links in RSS", "google-analytics-dashboard-for-wp");
    const text_title_file_downloads = __("File Downloads", "google-analytics-dashboard-for-wp");
    const text_label_extensions_of_files = __("Extensions of Files to Track as Downloads", "google-analytics-dashboard-for-wp");
    const text_description_extensions_of_files = __("ExactMetrics will send an event to Google Analytics if a link to a file has one of the above extensions.", "google-analytics-dashboard-for-wp");
    const text_tooltip_demographics = sprintf(
      __("Enable this setting to add the Demographics and Remarketing features to your Google Analytics tracking code. Make sure to enable Demographics and Remarketing in your Google Analytics account. We have a guide for how to do that in our %1$sknowledge base%2$s. For more information about Remarketing, we refer you to %3$sGoogle's documentation%4$s. Note that usage of this function is affected by privacy and cookie laws around the world. Be sure to follow the laws that affect your target audience.", "google-analytics-dashboard-for-wp"),
      '<a href="' + getUrl("settings-panel", "demographics", "https://www.exactmetrics.com/docs/enable-demographics-and-interests-report-in-google-analytics/") + '" target="_blank">',
      "</a>",
      '<a href="https://support.google.com/analytics/answer/2444872?hl=en_US" target="_blank" rel="noopener noreferrer">',
      "</a>"
    );
    const text_tooltip_anonymize = __("This adds anonymizeIp, telling Google Analytics to anonymize the information sent by the tracker objects by removing the last octet of the IP address prior to its storage.", "google-analytics-dashboard-for-wp");
    const text_tooltip_link_attribution = __("Adds the Enhanced Link Attribution to improve the accuracy of your In-Page Analytics report. This is done by automatically differentiating between multiple links to the same URL on a single page using link element IDs.", "google-analytics-dashboard-for-wp");
    const text_tooltip_anchor_tracking = __(`This feature counts visits to each part of websites using WordPress "one-page" themes, where clicking links looks like flipping through pages but doesn't actually take users to a new page. Normally, Google Analytics counts it all as one page, which makes it hard to see how users interact with the website. This feature allows for the proper tracking of those themes.`, "google-analytics-dashboard-for-wp");
    const text_tooltip_allow_anchor = sprintf(
      __("This adds %1$sallowAnchor%2$s to the create command of the pageview hit tracking code, and makes RSS link tagging use a # as well.", "google-analytics-dashboard-for-wp"),
      '<a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#allowAnchor" target="_blank" rel="noopener noreferrer">',
      "</a>"
    );
    const text_tooltip_tag_links_in_rss = sprintf(
      __("This feature automatically adds links to your tags in RSS feeds, enhancing navigation. If you're using FeedBurner, it's recommended to disable this here since FeedBurner can do this automatically and better.  Check this %1$shelp page%2$s for info on how to enable this feature in FeedBurner.", "google-analytics-dashboard-for-wp"),
      '<a href="https://support.google.com/feedburner/answer/165769?hl=en&ref_topic=13075" target="_blank" rel="noopener noreferrer">',
      "</a>"
    );
    const text_add_domain = __("Add domain", "google-analytics-dashboard-for-wp");
    const domain_repeater_structure = [
      {
        name: "domain",
        label: sprintf(__("Domain (example: %s)", "google-analytics-dashboard-for-wp"), "exactmetrics.com"),
        pattern: new RegExp("^(?!(?:.+)\\." + domain + "$|" + domain + "$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$"),
        error: sprintf(__("Please enter domain names only ( example: example.com not http://example.com ) and not current site domain ( %s ).", "google-analytics-dashboard-for-wp"), domain.replace("\\", "")),
        prevent_duplicates: true
      }
    ];
    const text_cross_domain = __("Cross Domain Tracking", "google-analytics-dashboard-for-wp");
    const text_cross_domain_description = sprintf(
      __("Cross domain tracking makes it possible for Analytics to see sessions on two related sites as a single session. More info on specific setup steps can be found in our %1$sknowledge base%2$s.", "google-analytics-dashboard-for-wp"),
      '<a href="' + getUrl("settings", "cross-domain", "https://www.exactmetrics.com/docs/setup-cross-domain-tracking/") + '" target="_blank" rel="noopener noreferrer">',
      "</a>"
    );
    const text_edd_recommended = sprintf(
      __("Want to easily sell digital products? ExactMetrics recommends %1$sEasy Digital Downloads%2$s.", "google-analytics-dashboard-for-wp"),
      '<a href="' + exit_url + '#/edd-installer">',
      "</a>"
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        !isAddonActive.value ? (openBlock(), createBlock(_sfc_main$5, {
          key: 0,
          title: unref(text_title_demographics),
          icon: "monstericon-users",
          collapsible: true,
          "default-collapse": false
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$6, {
              name: "demographics",
              label: unref(text_label_demographics),
              tooltip: unref(text_tooltip_demographics)
            }, null, 8, ["label", "tooltip"]),
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
            createVNode(_sfc_main$6, {
              name: "anonymize_ips",
              label: unref(text_label_anonymize_ip),
              tooltip: unref(text_tooltip_anonymize)
            }, null, 8, ["label", "tooltip"])
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true),
        createVNode(_sfc_main$3),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
        createVNode(_sfc_main$1),
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
        createVNode(_sfc_main$5, {
          title: unref(text_title_link_attribution),
          icon: "monstericon-links",
          collapsible: true
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$6, {
              name: "link_attribution",
              label: unref(text_label_enhanced_link),
              tooltip: unref(text_tooltip_link_attribution)
            }, null, 8, ["label", "tooltip"]),
            createVNode(SlideDownUp, null, {
              default: withCtx(() => [
                settings.value["link_attribution"] ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  createVNode(_sfc_main$6, {
                    name: "hash_tracking",
                    label: unref(text_label_anchor_tracking),
                    tooltip: unref(text_tooltip_anchor_tracking)
                  }, null, 8, ["label", "tooltip"]),
                  createVNode(_sfc_main$6, {
                    name: "allow_anchor",
                    label: unref(text_label_allow_anchor),
                    tooltip: unref(text_tooltip_allow_anchor)
                  }, null, 8, ["label", "tooltip"]),
                  createVNode(_sfc_main$6, {
                    name: "tag_links_in_rss",
                    label: unref(text_label_tag_links_in_rss),
                    tooltip: unref(text_tooltip_tag_links_in_rss)
                  }, null, 8, ["label", "tooltip"])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["title"]),
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
        createVNode(_sfc_main$2),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
        createVNode(_sfc_main$5, {
          title: unref(text_cross_domain),
          icon: "monstericon-globe",
          collapsible: true
        }, {
          default: withCtx(() => [
            createBaseVNode("label", null, [
              createBaseVNode("span", { innerHTML: unref(text_cross_domain_description) }, null, 8, _hoisted_3)
            ]),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_sfc_main$7, {
                text_add: unref(text_add_domain),
                structure: domain_repeater_structure,
                name: "cross_domains"
              }, null, 8, ["text_add"])
            ])
          ]),
          _: 1
        }, 8, ["title"]),
        _cache[5] || (_cache[5] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
        createVNode(_sfc_main$5, {
          id: "exactmetrics-settings-block-file-downloads",
          title: unref(text_title_file_downloads),
          icon: "monstericon-download",
          collapsible: true
        }, {
          default: withCtx(() => [
            createVNode(SettingsInputText, {
              default_value: "doc,exe,js,pdf,ppt,tgz,zip,xls",
              name: "extensions_of_files",
              label: unref(text_label_extensions_of_files),
              description: unref(text_description_extensions_of_files)
            }, null, 8, ["label", "description"]),
            createBaseVNode("div", {
              class: "exactmetrics-mt-15",
              innerHTML: unref(text_edd_recommended)
            }, null, 8, _hoisted_5)
          ]),
          _: 1
        }, 8, ["title"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
