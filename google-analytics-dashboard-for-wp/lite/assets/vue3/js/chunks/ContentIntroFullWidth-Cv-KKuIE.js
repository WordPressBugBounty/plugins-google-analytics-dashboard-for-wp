import { b as useRoute } from "./TheAppHeader-BI_ZrtNW.js";
import { k as isPro, t as getExactMetricsUrl } from "./ajax-Uw5S1uqk.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, i as normalizeClass, s as createCommentVNode, t as toDisplayString, K as renderSlot, m as computed } from "./toastStore-CjmlShHI.js";
const _hoisted_1 = { class: "exactmetrics-full-width-upsell" };
const _hoisted_2 = { class: "exactmetrics-full-width-upsell-inner" };
const _hoisted_3 = { class: "exactmetrics-upsell-half exactmetrics-upsell-left" };
const _hoisted_4 = ["textContent"];
const _hoisted_5 = {
  key: 1,
  class: "exactmetrics-bg-img exactmetrics-em-logo-text"
};
const _hoisted_6 = { class: "exactmetrics-upsell-buttons" };
const _hoisted_7 = { class: "exactmetrics-upsell-half exactmetrics-upsell-right" };
const _hoisted_8 = ["href"];
const _sfc_main = {
  __name: "ContentIntroFullWidth",
  props: {
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    welcome: { type: Boolean, default: true },
    icon: { type: String, default: "" },
    screen: { type: String, default: "exactmetrics-em-upsell-screen" },
    // `defineProps` is hoisted outside setup() so its defaults can't
    // reference `__`. Default to an empty string here and resolve the
    // localized fallback at render time via `welcomeText` below.
    text_welcome: { type: String, default: "" },
    preHeadingClass: { type: String, default: "" }
  },
  setup(__props) {
    const { __ } = wp.i18n;
    const props = __props;
    const welcomeText = computed(() => {
      return props.text_welcome || __("Welcome to", "google-analytics-dashboard-for-wp");
    });
    const route = useRoute();
    const iconClass = computed(() => {
      return props.icon ? `exactmetrics-icon-background-large ${props.icon}` : "";
    });
    const screenClass = computed(() => {
      return `exactmetrics-bg-img exactmetrics-screen-image ${props.screen}`;
    });
    const isProBuild = computed(() => isPro());
    const proLink = computed(() => {
      const utmSource = route && route.name || "welcome";
      return getExactMetricsUrl(utmSource, "image", "https://www.exactmetrics.com/lite/");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          __props.icon ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(iconClass.value)
          }, null, 2)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_3, [
            __props.welcome ? (openBlock(), createElementBlock("h3", {
              key: 0,
              class: normalizeClass(__props.preHeadingClass),
              textContent: toDisplayString(welcomeText.value)
            }, null, 10, _hoisted_4)) : createCommentVNode("", true),
            __props.welcome ? (openBlock(), createElementBlock("div", _hoisted_5)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(screenClass.value)
            }, null, 2),
            renderSlot(_ctx.$slots, "text"),
            createBaseVNode("p", _hoisted_6, [
              renderSlot(_ctx.$slots, "buttons")
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            isProBuild.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(screenClass.value)
            }, null, 2)) : (openBlock(), createElementBlock("a", {
              key: 1,
              href: proLink.value,
              class: "exactmetrics-full-width-upsell-image-link",
              target: "_blank",
              rel: "noopener"
            }, [
              createBaseVNode("div", {
                class: normalizeClass(screenClass.value)
              }, null, 2)
            ], 8, _hoisted_8))
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as _
};
