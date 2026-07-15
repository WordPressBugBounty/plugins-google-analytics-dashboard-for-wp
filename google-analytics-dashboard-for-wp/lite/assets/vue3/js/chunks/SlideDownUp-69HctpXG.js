import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { o as openBlock, E as createBlock, D as withCtx, K as renderSlot, a5 as resolveDynamicComponent } from "./toastStore-CjmlShHI.js";
const _sfc_main = {
  __name: "SlideDownUp",
  props: {
    group: {
      type: Boolean,
      default: false
    },
    done: {
      type: Function,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    function onEnter(element) {
      const { width } = getComputedStyle(element);
      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";
      const { height } = getComputedStyle(element);
      element.style.width = "auto";
      element.style.position = "relative";
      element.style.visibility = "visible";
      element.style.height = "0";
      element.offsetHeight;
      element.style.height = height;
      if (props.done) {
        setTimeout(() => {
          props.done();
        }, 500);
      }
    }
    function onAfterEnter(element) {
      element.style.height = "auto";
    }
    function onLeave(element) {
      const { height } = getComputedStyle(element);
      element.style.height = height;
      element.offsetHeight;
      element.style.height = "0";
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.group ? "TransitionGroup" : "Transition"), {
        name: "expand",
        onEnter,
        onAfterEnter,
        onLeave
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 32);
    };
  }
};
const SlideDownUp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63efda11"]]);
export {
  SlideDownUp as S
};
