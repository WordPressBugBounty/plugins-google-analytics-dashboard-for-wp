import { j as ref, C as watch, o as openBlock, c as createElementBlock, a as createBaseVNode, A as createTextVNode, t as toDisplayString, K as renderSlot, i as normalizeClass, s as createCommentVNode, G as withKeys, E as createBlock, D as withCtx, m as computed } from "./toastStore-CjmlShHI.js";
import { S as SlideDownUp } from "./SlideDownUp-69HctpXG.js";
const _hoisted_1 = {
  key: 0,
  class: "exactmetrics-settings-input-toggle-collapsible",
  role: "button"
};
const _sfc_main = {
  __name: "SettingsBlock",
  props: {
    title: String,
    icon: {
      default: "",
      type: String
    },
    collapsible: {
      default: false,
      type: Boolean
    },
    defaultCollapse: {
      default: true,
      type: Boolean
    },
    blockContentClass: {
      default: "",
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const collapsed = ref(props.defaultCollapse);
    watch(() => props.defaultCollapse, (value) => {
      collapsed.value = value;
    });
    const titleClass = computed(() => {
      return "exactmetrics-settings-block-title " + props.icon;
    });
    const blockClass = computed(() => {
      let cls = "exactmetrics-settings-block";
      if (props.collapsible) {
        cls += " exactmetrics-settings-block-collapsible";
        if (collapsed.value) {
          cls += " exactmetrics-settings-block-collapsible-collapsed";
        }
      }
      return cls;
    });
    const iconClass = computed(() => {
      let cls = "monstericon-arrow";
      if (!collapsed.value) {
        cls += " monstericon-down";
      }
      return cls;
    });
    const blockClassContent = computed(() => {
      let cls = "exactmetrics-settings-block-content";
      if (props.blockContentClass) {
        cls += " " + props.blockContentClass;
      }
      return cls;
    });
    function toggleCollapsible(e) {
      e.preventDefault();
      collapsed.value = !collapsed.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(blockClass.value)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(titleClass.value),
          onClick: toggleCollapsible,
          onKeyup: [
            withKeys(toggleCollapsible, ["enter"]),
            withKeys(toggleCollapsible, ["space"])
          ]
        }, [
          createTextVNode(toDisplayString(__props.title) + " ", 1),
          renderSlot(_ctx.$slots, "expired-license-tag"),
          __props.collapsible ? (openBlock(), createElementBlock("span", _hoisted_1, [
            createBaseVNode("i", {
              class: normalizeClass(iconClass.value),
              tabindex: "0",
              onkeypress: "if(event.keyCode==32||event.keyCode==13){return false;};"
            }, null, 2)
          ])) : createCommentVNode("", true)
        ], 34),
        __props.collapsible ? (openBlock(), createBlock(SlideDownUp, { key: 0 }, {
          default: withCtx(() => [
            !collapsed.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(blockClassContent.value)
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2)) : createCommentVNode("", true)
          ]),
          _: 3
        })) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(blockClassContent.value)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2))
      ], 2);
    };
  }
};
export {
  _sfc_main as _
};
