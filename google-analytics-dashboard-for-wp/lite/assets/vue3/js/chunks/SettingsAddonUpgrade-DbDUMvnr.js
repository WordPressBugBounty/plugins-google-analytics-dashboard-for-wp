import { n as getUpgradeUrl } from "./ajax-Uw5S1uqk.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, i as normalizeClass, K as renderSlot, t as toDisplayString, s as createCommentVNode, m as computed } from "./toastStore-CjmlShHI.js";
const _hoisted_1 = { class: "exactmetrics-settings-addon-upgrade" };
const _hoisted_2 = { class: "exactmetrics-upgrade-icon" };
const _hoisted_3 = { class: "exactmetrics-settings-addon-message" };
const _hoisted_4 = {
  key: 0,
  class: "settings-addons-upgrade-button"
};
const _hoisted_5 = ["href", "textContent"];
const _sfc_main = {
  __name: "SettingsAddonUpgrade",
  props: {
    addon: String,
    upgrade_button: {
      type: Boolean,
      default: true
    },
    button_text: {
      type: String,
      default: ""
    },
    utm_campaign: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const { __ } = wp.i18n;
    const props = __props;
    const text_button_upgrade = __("Upgrade", "google-analytics-dashboard-for-wp");
    const icon_class = computed(() => "exactmetrics-bg-img exactmetrics-addon-" + props.addon);
    const button_upgrade_text = computed(() => {
      return props.button_text ? props.button_text : text_button_upgrade;
    });
    const upgrade_link = computed(() => {
      return getUpgradeUrl("settings-panel", props.utm_campaign ? props.utm_campaign : props.addon);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            class: normalizeClass(icon_class.value)
          }, null, 2)
        ]),
        createBaseVNode("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "default")
        ]),
        __props.upgrade_button ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createBaseVNode("a", {
            class: "exactmetrics-button exactmetrics-button-green",
            target: "_blank",
            href: upgrade_link.value,
            textContent: toDisplayString(button_upgrade_text.value)
          }, null, 8, _hoisted_5)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
export {
  _sfc_main as _
};
