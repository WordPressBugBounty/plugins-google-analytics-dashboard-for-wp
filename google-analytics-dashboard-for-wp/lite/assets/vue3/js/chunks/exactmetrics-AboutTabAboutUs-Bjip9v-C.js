import { c as useAddonsStore } from "./addons-DcCBQDEz.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { o as openBlock, c as createElementBlock, K as renderSlot, a as createBaseVNode, s as createCommentVNode, t as toDisplayString, u as unref, B as withModifiers, i as normalizeClass, m as computed, j as ref, b as createVNode, D as withCtx, F as Fragment, f as renderList, E as createBlock } from "./toastStore-CjmlShHI.js";
import { b as useRoute, u as useRouter } from "./TheAppHeader-BI_ZrtNW.js";
import { u as useLicenseStore } from "./license-C6i4W44s.js";
import { n as getUpgradeUrl, p as isNetworkAdmin } from "./ajax-Uw5S1uqk.js";
import "./useNotices-BosR4uY_.js";
import "./Modal-CzneZfPu.js";
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "exactmetrics-about-block" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const AboutBlock = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _hoisted_1$1 = ["id"];
const _hoisted_2$1 = { class: "exactmetrics-addon-top" };
const _hoisted_3$1 = {
  key: 0,
  class: "exactmetrics-addon-image"
};
const _hoisted_4$1 = ["src", "alt"];
const _hoisted_5$1 = { class: "exactmetrics-addon-text" };
const _hoisted_6$1 = ["textContent"];
const _hoisted_7$1 = ["textContent"];
const _hoisted_8 = { class: "exactmetrics-interior" };
const _hoisted_9 = ["innerHTML"];
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = { class: "exactmetrics-addon-action" };
const _hoisted_12 = { key: 0 };
const _hoisted_13 = { key: 0 };
const _hoisted_14 = {
  key: 0,
  class: "exactmetrics-button"
};
const _hoisted_15 = ["textContent"];
const _hoisted_16 = { key: 1 };
const _hoisted_17 = ["innerHTML"];
const _hoisted_18 = ["href", "textContent"];
const _hoisted_19 = { key: 1 };
const _hoisted_20 = { key: 0 };
const _hoisted_21 = ["href", "textContent"];
const _hoisted_22 = { key: 1 };
const _hoisted_23 = ["innerHTML"];
const _hoisted_24 = ["href", "textContent"];
const _sfc_main$1 = {
  __name: "AddonBlock",
  props: {
    addon: {
      type: Object,
      required: true
    },
    isAddon: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const props = __props;
    const route = useRoute();
    const router = useRouter();
    const addonsStore = useAddonsStore();
    const licenseStore = useLicenseStore();
    const activating = ref(false);
    const deactivating = ref(false);
    const installing = ref(false);
    const text_status = __("Status: %s", "google-analytics-dashboard-for-wp");
    const text_expired = __("License Expired", "google-analytics-dashboard-for-wp");
    const text_upgrade_required = __("Status: Upgrade Required", "google-analytics-dashboard-for-wp");
    const currentRouteName = computed(() => route.name);
    const isUserFeedback = computed(() => props.addon.slug === "userfeedback-lite");
    const addonTitle = computed(() => {
      let title = props.addon.title || "";
      if (title.indexOf("ExactMetrics") === 0) {
        title = title.replace("ExactMetrics ", "");
      }
      return title;
    });
    const upgradeUrl = computed(
      () => getUpgradeUrl(
        "addons-page",
        String(addonTitle.value).toLocaleLowerCase().replaceAll(/\s+/g, "-")
      )
    );
    const isLicenseExpired = computed(() => !!licenseStore.license?.is_expired);
    const isNetworkLicenseExpired = computed(() => !!licenseStore.license_network?.is_expired);
    const actionsClass = computed(() => {
      let cls = "exactmetrics-addon-message ";
      if (props.addon.type === "licensed") {
        if (props.addon.active) {
          cls += "exactmetrics-addon-active";
        } else if (props.addon.installed === false) {
          cls += "exactmetrics-addon-not-installed";
        } else {
          cls += "exactmetrics-addon-inactive";
        }
      } else {
        cls += "exactmetrics-addon-not-available";
      }
      return cls;
    });
    const statusText = computed(() => {
      let status = __("Not Installed", "google-analytics-dashboard-for-wp");
      if (props.addon.type !== "licensed") {
        status = __("Not Available", "google-analytics-dashboard-for-wp");
      } else if (props.addon.active) {
        status = isNetworkAdmin() ? __("Network Active", "google-analytics-dashboard-for-wp") : __("Active", "google-analytics-dashboard-for-wp");
      } else if (props.addon.installed) {
        status = __("Inactive", "google-analytics-dashboard-for-wp");
      }
      return sprintf(text_status, `<span>${status}</span>`);
    });
    const textButtonAction = computed(() => {
      let installLabel = __("Install", "google-analytics-dashboard-for-wp");
      if (props.addon.redirect) {
        installLabel = __("Visit Website", "google-analytics-dashboard-for-wp");
      }
      if (props.addon.type !== "licensed") {
        return __("Upgrade Now", "google-analytics-dashboard-for-wp");
      }
      if (activating.value) return __("Activating...", "google-analytics-dashboard-for-wp");
      if (deactivating.value) return __("Deactivating...", "google-analytics-dashboard-for-wp");
      if (installing.value) return __("Installing...", "google-analytics-dashboard-for-wp");
      if (props.addon.active) return __("Deactivate", "google-analytics-dashboard-for-wp");
      if (props.addon.installed) return __("Activate", "google-analytics-dashboard-for-wp");
      return installLabel;
    });
    function clickAction() {
      if (activating.value || deactivating.value || installing.value) return;
      if (props.addon.installed) {
        if (props.addon.active) {
          deactivateAddon();
        } else if (isUserFeedback.value) {
          router.push({ name: "userfeedback" });
        } else {
          activateAddon();
        }
      } else {
        installAddon();
      }
    }
    async function installAddon() {
      installing.value = true;
      try {
        if (props.isAddon) {
          await addonsStore.installAddonAction(props.addon);
        } else {
          await addonsStore.installPluginAction(props.addon);
        }
      } catch (_e) {
      } finally {
        installing.value = false;
      }
    }
    async function activateAddon() {
      activating.value = true;
      try {
        await addonsStore.activateAddonAction(props.addon);
      } catch (_e) {
      } finally {
        activating.value = false;
      }
    }
    async function deactivateAddon() {
      deactivating.value = true;
      try {
        await addonsStore.deactivateAddonAction(props.addon);
      } catch (_e) {
      } finally {
        deactivating.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: `exactmetrics-addon-${__props.addon.slug}`,
        class: "exactmetrics-addon"
      }, [
        createBaseVNode("div", _hoisted_2$1, [
          __props.addon.icon ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
            createBaseVNode("img", {
              class: "exactmetrics-addon-thumb",
              src: __props.addon.icon,
              alt: __props.addon.title
            }, null, 8, _hoisted_4$1)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("h3", {
              class: "exactmetrics-addon-title",
              textContent: toDisplayString(addonTitle.value)
            }, null, 8, _hoisted_6$1),
            __props.addon.excerpt ? (openBlock(), createElementBlock("p", {
              key: 0,
              class: "exactmetrics-addon-excerpt",
              textContent: toDisplayString(__props.addon.excerpt)
            }, null, 8, _hoisted_7$1)) : createCommentVNode("", true)
          ])
        ]),
        createBaseVNode("div", {
          class: normalizeClass(actionsClass.value)
        }, [
          createBaseVNode("div", _hoisted_8, [
            __props.addon.type === "unlicensed" ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "exactmetrics-addon-status exactmetrics-green-text",
              innerHTML: unref(text_upgrade_required)
            }, null, 8, _hoisted_9)) : (openBlock(), createElementBlock("span", {
              key: 1,
              class: "exactmetrics-addon-status",
              innerHTML: statusText.value
            }, null, 8, _hoisted_10)),
            createBaseVNode("div", _hoisted_11, [
              currentRouteName.value === "addons" ? (openBlock(), createElementBlock("div", _hoisted_12, [
                isLicenseExpired.value || isNetworkLicenseExpired.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  __props.addon.type === "licensed" ? (openBlock(), createElementBlock("button", _hoisted_14, [
                    createBaseVNode("span", {
                      textContent: toDisplayString(unref(text_expired))
                    }, null, 8, _hoisted_15)
                  ])) : createCommentVNode("", true)
                ])) : (openBlock(), createElementBlock("div", _hoisted_16, [
                  __props.addon.type === "licensed" ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: "exactmetrics-button",
                    onClick: withModifiers(clickAction, ["prevent"])
                  }, [
                    createBaseVNode("span", { innerHTML: textButtonAction.value }, null, 8, _hoisted_17)
                  ])) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    href: upgradeUrl.value,
                    target: "_blank",
                    class: "exactmetrics-button",
                    textContent: toDisplayString(textButtonAction.value)
                  }, null, 8, _hoisted_18))
                ]))
              ])) : (openBlock(), createElementBlock("div", _hoisted_19, [
                __props.addon.redirect && !__props.addon.installed ? (openBlock(), createElementBlock("div", _hoisted_20, [
                  createBaseVNode("a", {
                    href: __props.addon.redirect,
                    target: "_blank",
                    class: "exactmetrics-button",
                    textContent: toDisplayString(textButtonAction.value)
                  }, null, 8, _hoisted_21)
                ])) : (openBlock(), createElementBlock("div", _hoisted_22, [
                  __props.addon.type === "licensed" ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: "exactmetrics-button",
                    onClick: withModifiers(clickAction, ["prevent"])
                  }, [
                    createBaseVNode("span", { innerHTML: textButtonAction.value }, null, 8, _hoisted_23)
                  ])) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    href: upgradeUrl.value,
                    target: "_blank",
                    class: "exactmetrics-button",
                    textContent: toDisplayString(textButtonAction.value)
                  }, null, 8, _hoisted_24))
                ]))
              ]))
            ])
          ])
        ], 2)
      ], 8, _hoisted_1$1);
    };
  }
};
const _hoisted_1 = { class: "exactmetrics-page-title" };
const _hoisted_2 = { class: "exactmetrics-container" };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = { class: "exactmetrics-container" };
const _hoisted_5 = ["textContent"];
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = { class: "exactmetrics-addons-list" };
const _sfc_main = {
  __name: "exactmetrics-AboutTabAboutUs",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_about_us = __("About Us", "google-analytics-dashboard-for-wp");
    const text_about_title = __(
      "Hello and Welcome to ExactMetrics, the Best Google Analytics Plugin for WordPress.",
      "google-analytics-dashboard-for-wp"
    );
    const text_about_p1 = __(
      "Ready to take your website to the next level? ExactMetrics gives you the accurate insights you need to make data-driven decisions to grow your traffic and conversions faster than ever before. Now you can easily enable advanced tracking on your website without having to know any code.",
      "google-analytics-dashboard-for-wp"
    );
    const addonsIncluded = [
      "userfeedback-lite",
      "wpconsent",
      "wpforms-lite",
      "aioseo",
      "optinmonster",
      "rafflepress",
      "coming-soon",
      "wp-mail-smtp",
      "easy_digital_downloads",
      "smash-balloon-instagram",
      "smash-balloon-facebook",
      "smash-balloon-youtube",
      "smash-balloon-twitter",
      "trustpulse",
      "searchwp",
      "affiliate-wp",
      "wpsimplepay",
      "sugarcalendar",
      "charitable",
      "wpcode",
      "duplicator",
      "pushengage",
      "uncanny-automator"
    ];
    const addonsStore = useAddonsStore();
    const addonsList = computed(() => {
      const result = [];
      for (const slug of addonsIncluded) {
        const source = addonsStore.addons?.[slug];
        if (source) {
          result.push({ ...source, type: "licensed" });
        }
      }
      return result;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("h2", {
              textContent: toDisplayString(unref(text_about_us))
            }, null, 8, _hoisted_3)
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(AboutBlock, null, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("figure", { class: "exactmetrics-about-page-right-image" }, [
                createBaseVNode("div", { class: "exactmetrics-bg-img exactmetrics-about-team" })
              ], -1)),
              createBaseVNode("h3", {
                textContent: toDisplayString(unref(text_about_title))
              }, null, 8, _hoisted_5),
              createBaseVNode("p", { innerHTML: unref(text_about_p1) }, null, 8, _hoisted_6)
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(addonsList.value, (addon, index) => {
              return openBlock(), createBlock(_sfc_main$1, {
                key: index,
                addon,
                "is-addon": false
              }, null, 8, ["addon"]);
            }), 128))
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
