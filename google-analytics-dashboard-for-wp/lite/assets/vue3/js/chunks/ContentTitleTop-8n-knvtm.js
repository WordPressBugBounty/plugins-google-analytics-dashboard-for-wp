import { b as useRoute } from "./TheAppHeader-BI_ZrtNW.js";
import { t as getExactMetricsUrl } from "./ajax-Uw5S1uqk.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, s as createCommentVNode, i as normalizeClass, m as computed } from "./toastStore-CjmlShHI.js";
const _hoisted_1 = { class: "exactmetrics-upsell-title" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["href"];
const _sfc_main = {
  __name: "ContentTitleTop",
  props: {
    title: {
      type: String,
      required: true
    },
    pro: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const proClass = computed(() => {
      const upgrade = props.pro ? "exactmetrics-pro-upgrade" : "";
      return `exactmetrics-upsell-title-inner ${upgrade}`.trim();
    });
    const proLink = computed(() => {
      return getExactMetricsUrl(route.name || "settings", "title-pro");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(proClass.value)
        }, [
          createBaseVNode("h2", null, [
            createBaseVNode("span", {
              textContent: toDisplayString(__props.title)
            }, null, 8, _hoisted_2),
            __props.pro ? (openBlock(), createElementBlock("a", {
              key: 0,
              class: "exactmetrics-pro-indicator",
              href: proLink.value,
              target: "_blank",
              rel: "noopener"
            }, "PRO", 8, _hoisted_3)) : createCommentVNode("", true)
          ])
        ], 2)
      ]);
    };
  }
};
export {
  _sfc_main as _
};
