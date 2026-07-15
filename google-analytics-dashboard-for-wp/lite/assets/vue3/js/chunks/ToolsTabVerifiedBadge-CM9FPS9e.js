import { o as openBlock, c as createElementBlock, b as createVNode, D as withCtx, a as createBaseVNode, t as toDisplayString, E as createBlock, B as withModifiers, w as withDirectives, v as vModelText, s as createCommentVNode, m as computed } from "./toastStore-CjmlShHI.js";
import { _ as _sfc_main$3 } from "./SettingsBlock-Bsp6Fu6H.js";
import { _ as _sfc_main$1 } from "./SettingsInputCheckbox-B6Cq-zQE.js";
import { _ as _sfc_main$2 } from "./SettingsInputRadio-BIIVvaRz.js";
import { u as useSettingsStore } from "./settings-BVkGy_Cz.js";
import "./SlideDownUp-69HctpXG.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./exactmetrics-Lite-BcFa0OAR.js";
import "./TheAppHeader-BI_ZrtNW.js";
import "./ajax-Uw5S1uqk.js";
import "./addons-DcCBQDEz.js";
import "./useNotices-BosR4uY_.js";
import "./Modal-CzneZfPu.js";
import "./license-C6i4W44s.js";
import "./SettingsInfoTooltip-DGz1RdtP.js";
const _hoisted_1 = { class: "exactmetrics-settings-content exactmetrics-tools-url-builder" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = ["textContent"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["textContent"];
const _hoisted_9 = ["textContent"];
const _hoisted_10 = { class: "exactmetrics-shortcode" };
const _hoisted_11 = ["textContent"];
const _sfc_main = {
  __name: "ToolsTabVerifiedBadge",
  setup(__props) {
    const { __ } = wp.i18n;
    const settingsStore = useSettingsStore();
    function getSetting(key, defaultValue = null) {
      const settings = settingsStore.settings || {};
      return Object.hasOwn(settings, key) ? settings[key] : defaultValue;
    }
    const texts = {
      automatic_main_label: __("Automatic Display", "google-analytics-dashboard-for-wp"),
      automatic_heading: __("Automatically Display Website Badge in Website Footer", "google-analytics-dashboard-for-wp"),
      automatic_subheading: __("Enabling will add the chosen badge in your website’s footer.", "google-analytics-dashboard-for-wp"),
      automatic_enable: __("Enable Automatic Display", "google-analytics-dashboard-for-wp"),
      appearance_label: __("Appearance", "google-analytics-dashboard-for-wp"),
      appearance_heading: __("Choose your badge style.", "google-analytics-dashboard-for-wp"),
      position_label: __("Position", "google-analytics-dashboard-for-wp"),
      position_heading: __("Select the position of the badge in your website’s footer.", "google-analytics-dashboard-for-wp"),
      manual_main_label: __("Manual Display", "google-analytics-dashboard-for-wp"),
      manual_heading: __("Manual Display", "google-analytics-dashboard-for-wp"),
      manual_subheading: __("Manual Display", "google-analytics-dashboard-for-wp"),
      copy: __("Copy", "google-analytics-dashboard-for-wp")
    };
    const appearance_options = [
      { value: "light", label: __("Light", "google-analytics-dashboard-for-wp") },
      { value: "dark", label: __("Dark", "google-analytics-dashboard-for-wp") }
    ];
    const position_options = [
      { value: "left", label: __("Left", "google-analytics-dashboard-for-wp") },
      { value: "center", label: __("Center", "google-analytics-dashboard-for-wp") },
      { value: "right", label: __("Right", "google-analytics-dashboard-for-wp") }
    ];
    const shortcodeText = computed(() => {
      const appearance = getSetting("verified_appearance", "light");
      const position = getSetting("verified_position", "left");
      return '[exactmetrics-badge appearance="' + appearance + '" position="' + position + '"/]';
    });
    function copyToClipboard() {
      const el = document.querySelector("#exactmetrics_shortcode");
      if (!el) return;
      el.select();
      document.execCommand("copy");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$3, {
          title: texts.automatic_main_label
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: "exactmetrics-dark",
              textContent: toDisplayString(texts.automatic_heading)
            }, null, 8, _hoisted_2),
            createBaseVNode("p", {
              textContent: toDisplayString(texts.automatic_subheading)
            }, null, 8, _hoisted_3),
            createVNode(_sfc_main$1, {
              name: "verified_automatic",
              label: texts.automatic_enable
            }, null, 8, ["label"]),
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
            createBaseVNode("div", {
              class: "exactmetrics-dark",
              textContent: toDisplayString(texts.appearance_label)
            }, null, 8, _hoisted_4),
            createBaseVNode("p", {
              textContent: toDisplayString(texts.appearance_heading)
            }, null, 8, _hoisted_5),
            createVNode(_sfc_main$2, {
              options: appearance_options,
              name: "verified_appearance",
              classes: "badge-appearance-container"
            }, {
              light: withCtx(() => [..._cache[1] || (_cache[1] = [
                createBaseVNode("div", { class: "exactmetrics-badge-light" }, null, -1)
              ])]),
              dark: withCtx(() => [..._cache[2] || (_cache[2] = [
                createBaseVNode("div", { class: "exactmetrics-badge-dark" }, null, -1)
              ])]),
              _: 1
            }),
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
            createBaseVNode("div", {
              class: "exactmetrics-dark",
              textContent: toDisplayString(texts.position_label)
            }, null, 8, _hoisted_6),
            createBaseVNode("p", {
              textContent: toDisplayString(texts.position_heading)
            }, null, 8, _hoisted_7),
            createVNode(_sfc_main$2, {
              options: position_options,
              name: "verified_position"
            })
          ]),
          _: 1
        }, 8, ["title"]),
        !getSetting("verified_automatic") ? (openBlock(), createBlock(_sfc_main$3, {
          key: 0,
          title: texts.manual_main_label
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: "exactmetrics-dark",
              textContent: toDisplayString(texts.manual_heading)
            }, null, 8, _hoisted_8),
            createBaseVNode("p", {
              textContent: toDisplayString(texts.manual_subheading)
            }, null, 8, _hoisted_9),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("a", {
                href: "#",
                onClick: withModifiers(copyToClipboard, ["prevent"]),
                textContent: toDisplayString(texts.copy)
              }, null, 8, _hoisted_11),
              withDirectives(createBaseVNode("input", {
                id: "exactmetrics_shortcode",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => shortcodeText.value = $event),
                type: "text",
                readonly: ""
              }, null, 512), [
                [vModelText, shortcodeText.value]
              ])
            ])
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true)
      ]);
    };
  }
};
export {
  _sfc_main as default
};
