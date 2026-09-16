import { o as openBlock, G as createBlock, c as createElementBlock, b as createVNode, E as withCtx, u as unref, a as createBaseVNode, t as toDisplayString, C as withModifiers, j as normalizeClass, p as computed, k as ref } from "./AppOverlays-DcHCG-3q.js";
import { a as useToast } from "./addons-XnbAIJ1T.js";
import { _ as _sfc_main$4 } from "./SettingsBlock-NEYQEufF.js";
import { _ as _sfc_main$3 } from "./SettingsInputCheckbox-Cx_iQSia.js";
import { _ as _sfc_main$2 } from "./SettingsInputRadio-vTy3-n9Z.js";
import { e as emptyCache } from "./popularPosts-DPOG3IUd.js";
import "./useNotices-CnkWF1QQ.js";
import "./ajax-C95mIScv.js";
import "./Modal-BJTydlxw.js";
import "./SlideDownUp-CwpnNiBe.js";
import "./settings-DTy21RNP.js";
import "./exactmetrics-Lite-DH2nBdAK.js";
import "./TheAppHeader-CjMtIms2.js";
import "./license-DUHYGbJw.js";
import "./SettingsInfoTooltip-CPgssEEc.js";
const _sfc_main$1 = {
  __name: "exactmetrics-PopularPostsCacheInterval-Lite",
  setup(__props) {
    const { __ } = wp.i18n;
    const caching_options = [
      {
        value: "7",
        label: `<b>${__("7 days", "google-analytics-dashboard-for-wp")}</b>`
      },
      {
        value: "30",
        label: `<b>${__("30 days", "google-analytics-dashboard-for-wp")}</b>`
      },
      {
        value: "custom",
        label: `<b>${__("Custom", "google-analytics-dashboard-for-wp")}</b>`,
        level: "basic"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$2, {
        auth_disabled: false,
        options: caching_options,
        name: "popular_posts_caching_refresh"
      });
    };
  }
};
const _hoisted_1 = { class: "exactmetrics-settings-content exactmetrics-settings-content-pp-settings" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = ["textContent"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["textContent"];
const _sfc_main = {
  __name: "PopularPostsSettings",
  setup(__props) {
    const { __ } = wp.i18n;
    const { successToast, errorToast } = useToast();
    const text_caching = __("Caching", "google-analytics-dashboard-for-wp");
    const text_enable_caching = __("Enable Data Caching", "google-analytics-dashboard-for-wp");
    const text_refresh = __("Refresh Cache Every", "google-analytics-dashboard-for-wp");
    const text_refresh_desc = __("Choose how often to refresh the cache.", "google-analytics-dashboard-for-wp");
    const text_enable_ajax = __("Enable Ajaxify", "google-analytics-dashboard-for-wp");
    const text_ajaxify = __("Ajaxify Widget", "google-analytics-dashboard-for-wp");
    const text_ajaxify_desc = __("Use to bypass page caching.", "google-analytics-dashboard-for-wp");
    const text_empty_cache = __("Empty Cache", "google-analytics-dashboard-for-wp");
    const text_please_wait = __("Please wait...", "google-analytics-dashboard-for-wp");
    const text_empty_cache_desc = __(
      "Click to manually wipe the cache right now.",
      "google-analytics-dashboard-for-wp"
    );
    const emptying_cache = ref(false);
    const empty_cache_button_class = computed(() => {
      let cls = "exactmetrics-button";
      if (emptying_cache.value) {
        cls += " exactmetrics-button-disabled";
      } else {
        cls += " exactmetrics-button-secondary";
      }
      return cls;
    });
    const empty_cache_button_text = computed(
      () => emptying_cache.value ? text_please_wait : text_empty_cache
    );
    async function emptyCache$1() {
      emptying_cache.value = true;
      try {
        await emptyCache();
        successToast({
          title: __("Popular posts cache emptied", "google-analytics-dashboard-for-wp")
        });
      } catch (_err) {
        errorToast({
          title: __(
            "Error emptying the popular posts cache. Please try again.",
            "google-analytics-dashboard-for-wp"
          )
        });
      } finally {
        emptying_cache.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$4, {
          title: unref(text_caching),
          icon: "monstericon-lightbulb"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, {
              auth_disabled: false,
              faux: true,
              label: unref(text_enable_caching)
            }, null, 8, ["label"]),
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "exactmetrics-dark",
                textContent: toDisplayString(unref(text_refresh))
              }, null, 8, _hoisted_2),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_refresh_desc))
              }, null, 8, _hoisted_3)
            ]),
            createVNode(_sfc_main$1),
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "exactmetrics-dark",
                textContent: toDisplayString(unref(text_ajaxify))
              }, null, 8, _hoisted_4),
              _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_ajaxify_desc))
              }, null, 8, _hoisted_5)
            ]),
            createVNode(_sfc_main$3, {
              auth_disabled: false,
              name: "popular_posts_ajaxify",
              label: unref(text_enable_ajax)
            }, null, 8, ["label"]),
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "exactmetrics-dark",
                textContent: toDisplayString(unref(text_empty_cache))
              }, null, 8, _hoisted_6),
              _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_empty_cache_desc))
              }, null, 8, _hoisted_7)
            ]),
            createBaseVNode("button", {
              class: normalizeClass(empty_cache_button_class.value),
              onClick: withModifiers(emptyCache$1, ["prevent"]),
              textContent: toDisplayString(empty_cache_button_text.value)
            }, null, 10, _hoisted_8)
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
