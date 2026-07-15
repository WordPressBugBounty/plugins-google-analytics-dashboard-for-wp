import { b as useRoute } from "./TheAppHeader-BI_ZrtNW.js";
import { k as isPro, n as getUpgradeUrl } from "./ajax-Uw5S1uqk.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, s as createCommentVNode, F as Fragment, f as renderList, i as normalizeClass, m as computed } from "./toastStore-CjmlShHI.js";
const _hoisted_1 = { class: "exactmetrics-upsell-row" };
const _hoisted_2 = { class: "exactmetrics-upsell-row-inner" };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = {
  key: 1,
  class: "exactmetrics-upsell-list"
};
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["href", "innerHTML"];
const _sfc_main = {
  __name: "ContentIconList",
  props: {
    upsellList: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const route = useRoute();
    const userIsPro = computed(() => isPro());
    const routeName = computed(() => route && route.name ? route.name : "welcome");
    const proLink = computed(() => getUpgradeUrl(routeName.value, "upsell-list"));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          __props.title ? (openBlock(), createElementBlock("h3", {
            key: 0,
            textContent: toDisplayString(__props.title)
          }, null, 8, _hoisted_3)) : createCommentVNode("", true),
          __props.upsellList ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.upsellList, (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "exactmetrics-upsell-list-item"
              }, [
                createBaseVNode("i", {
                  class: normalizeClass(item.icon)
                }, null, 2),
                userIsPro.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "exactmetrics-upsell-list-item-text",
                  innerHTML: item.text
                }, null, 8, _hoisted_5)) : (openBlock(), createElementBlock("a", {
                  key: 1,
                  href: proLink.value,
                  class: "exactmetrics-upsell-list-item-text",
                  target: "_blank",
                  innerHTML: item.text
                }, null, 8, _hoisted_6))
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
};
export {
  _sfc_main as _
};
