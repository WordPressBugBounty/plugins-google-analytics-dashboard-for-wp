import { j as ref, o as openBlock, c as createElementBlock, a as createBaseVNode, A as createTextVNode, t as toDisplayString, K as renderSlot, i as normalizeClass, s as createCommentVNode, G as withKeys, E as createBlock, D as withCtx, m as computed, u as unref, b as createVNode, w as withDirectives, v as vModelText, B as withModifiers, h as createStaticVNode } from "./toastStore-CjmlShHI.js";
import { j as getMiGlobal, n as getUpgradeUrl, o as getUrl } from "./ajax-Uw5S1uqk.js";
import { S as SlideDownUp } from "./SlideDownUp-69HctpXG.js";
import { _ as _sfc_main$2 } from "./exactmetrics-SettingsInputAuthenticate-Lite-DNJt1JSz.js";
import { _ as _sfc_main$3 } from "./LaunchWizardButton-BuPkh4Ew.js";
import { l as licenseApi } from "./license-C6i4W44s.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./addons-DcCBQDEz.js";
import "./useNotices-BosR4uY_.js";
import "./Modal-CzneZfPu.js";
import "./auth-Rcit4ziJ.js";
const _hoisted_1$1 = {
  key: 0,
  class: "exactmetrics-settings-input-toggle-collapsible",
  role: "button"
};
const _sfc_main$1 = {
  __name: "SettingsPanel",
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
    const titleClass = computed(() => {
      return "exactmetrics-setting-panel-top " + props.icon;
    });
    const blockClass = computed(() => {
      let cls = "exactmetrics-setting-panel";
      if (props.collapsible) {
        cls += " exactmetrics-setting-panel-collapsible";
        if (collapsed.value) {
          cls += " exactmetrics-setting-panel-collapsible-collapsed";
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
      let cls = "exactmetrics-setting-panel-content";
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
          __props.collapsible ? (openBlock(), createElementBlock("span", _hoisted_1$1, [
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
const _hoisted_1 = { class: "exactmetrics-settings-content settings-general" };
const _hoisted_2 = { class: "exactmetrics-full-width-upsell" };
const _hoisted_3 = { class: "exactmetrics-full-width-upsell-inner" };
const _hoisted_4 = { class: "exactmetrics-upsell-half exactmetrics-upsell-left" };
const _hoisted_5 = ["textContent"];
const _hoisted_6 = ["textContent"];
const _hoisted_7 = ["innerHTML"];
const _hoisted_8 = ["textContent"];
const _hoisted_9 = { class: "exactmetrics-upsell-buttons" };
const _hoisted_10 = ["href", "textContent"];
const _hoisted_11 = ["href"];
const _hoisted_12 = ["textContent"];
const _hoisted_13 = { class: "exactmetrics-upsell-half exactmetrics-upsell-right" };
const _hoisted_14 = ["href"];
const _hoisted_15 = { class: "exactmetrics-container" };
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = { class: "inline-field" };
const _hoisted_18 = ["readonly", "placeholder"];
const _hoisted_19 = ["textContent"];
const _hoisted_20 = { class: "exactmetrics-setting-panel-area-half" };
const _hoisted_21 = { class: "exactmetrics-setting-panel-area-half" };
const _hoisted_22 = ["textContent"];
const _hoisted_23 = ["textContent"];
const _hoisted_24 = ["textContent"];
const _hoisted_25 = {
  key: 2,
  class: "exactmetrics-setting-panel"
};
const _hoisted_26 = ["textContent"];
const _hoisted_27 = { class: "exactmetrics-setting-panel-content--wizard" };
const _hoisted_28 = ["textContent"];
const _hoisted_29 = ["textContent"];
const _hoisted_30 = { class: "exactmetrics-welcome-overlay-inner" };
const _hoisted_31 = { class: "exactmetrics-welcome-overlay-content" };
const _hoisted_32 = { class: "exactmetrics-upgrade-confirmation" };
const _hoisted_33 = { class: "exactmetrics-upgrade-confirmation-text" };
const _hoisted_34 = ["textContent"];
const _hoisted_35 = ["innerHTML"];
const _hoisted_36 = ["textContent"];
const _sfc_main = {
  __name: "exactmetrics-SettingsTabGeneral-Lite",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const auth = getMiGlobal("auth", {});
    const hasAuth = computed(() => {
      if (getMiGlobal("network", false)) {
        return auth.network_v4 !== "";
      }
      return auth.v4 !== "";
    });
    const is_loading = ref(false);
    const connect_key = ref("");
    const upgrade_confirmation_visible = ref(false);
    const upgrade_url = getUpgradeUrl("settings-overview", "top-upsell-button");
    const features_url = getUrl("settings-overview", "features", "https://exactmetrics.com/features");
    const image_upgrade_url = getUpgradeUrl("settings-overview", "image");
    const text_welcome_to = __("Welcome to", "google-analytics-dashboard-for-wp");
    const text_license_title = __("License Key", "google-analytics-dashboard-for-wp");
    const text_license_already = sprintf(
      __("Add your ExactMetrics license key from the email receipt or account area. %1$sRetrieve your license key%2$s.", "google-analytics-dashboard-for-wp"),
      '<a href="' + getUrl("license", "settings_panel", "https://exactmetrics.com/my-account") + '" target="_blank">',
      "</a>"
    );
    const text_license_placeholder = __("Paste your license key here", "google-analytics-dashboard-for-wp");
    const text_auth_title = __("Google Authentication", "google-analytics-dashboard-for-wp");
    const text_verify = __("Connect", "google-analytics-dashboard-for-wp");
    const text_auth_label = __("Connect Google Analytics + WordPress", "google-analytics-dashboard-for-wp");
    const text_auth_description = __("You will be taken to the ExactMetrics website where you'll need to connect your Analytics account.", "google-analytics-dashboard-for-wp");
    const text_setup_wizard_title = __("Setup Wizard", "google-analytics-dashboard-for-wp");
    const text_setup_wizard_label = __("Use our configuration wizard to properly setup Google Analytics with WordPress (with just a few clicks).", "google-analytics-dashboard-for-wp");
    const text_setup_wizard_button = __("Relaunch Setup Wizard", "google-analytics-dashboard-for-wp");
    const text_launch_wizard_button = __("Launch Setup Wizard", "google-analytics-dashboard-for-wp");
    const upsell_title = __("You're using ExactMetrics Lite -- no license needed. Enjoy!", "google-analytics-dashboard-for-wp");
    const upsell_subtitle = sprintf(
      __("To unlock more features consider %1$supgrading to PRO%2$s.", "google-analytics-dashboard-for-wp"),
      '<a href="' + getUpgradeUrl("settings-overview", "top-upsell") + '" class="exactmetrics-green-text" target="_blank" rel="noopener">',
      "</a>"
    );
    const upsell_receive = __("Receive 50% off automatically applied at the checkout!", "google-analytics-dashboard-for-wp");
    const text_upgrade = __("Upgrade to PRO", "google-analytics-dashboard-for-wp");
    const text_see = __("See all features", "google-analytics-dashboard-for-wp");
    const text_complete_upgrade = __("Complete Upgrade", "google-analytics-dashboard-for-wp");
    const text_upgrade_to_pro_version = __("Upgrade to Pro Version!", "google-analytics-dashboard-for-wp");
    const text_upgrade_to_pro_description = sprintf(
      __("%1$sExactMetrics%2$s can automatically upgrade the installed version to the Pro and walk you through the process.", "google-analytics-dashboard-for-wp"),
      "<b>",
      "</b>"
    );
    const text_setup_wizard_disclaimer = __("Note: You will be transfered to ExactMetrics.com to complete the setup wizard.", "google-analytics-dashboard-for-wp");
    function showUpgradeConfirmation() {
      upgrade_confirmation_visible.value = true;
    }
    function maybeCloseOverlay(e) {
      if (e.target.classList.contains("exactmetrics-welcome-overlay")) {
        upgrade_confirmation_visible.value = false;
      }
    }
    async function startUpgradeToPro() {
      upgrade_confirmation_visible.value = false;
      is_loading.value = true;
      try {
        const response = await licenseApi.getUpgradeLink(connect_key.value);
        if (response.success && response.data?.url) {
          window.location = response.data.url;
          return;
        }
        const message = response.data?.message || __("There was an error unlocking ExactMetrics PRO please try again or install manually.", "google-analytics-dashboard-for-wp");
        window.alert(message);
        if (response.data?.reload) {
          window.location.reload();
        }
      } catch (_error) {
      } finally {
        is_loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("h3", {
                textContent: toDisplayString(unref(text_welcome_to))
              }, null, 8, _hoisted_5),
              _cache[3] || (_cache[3] = createBaseVNode("div", { class: "exactmetrics-bg-img exactmetrics-em-logo-text" }, null, -1)),
              _cache[4] || (_cache[4] = createBaseVNode("div", { class: "exactmetrics-bg-img exactmetrics-screen-image exactmetrics-em-upsell-screen" }, null, -1)),
              createBaseVNode("p", {
                textContent: toDisplayString(unref(upsell_title))
              }, null, 8, _hoisted_6),
              createBaseVNode("p", { innerHTML: unref(upsell_subtitle) }, null, 8, _hoisted_7),
              createBaseVNode("p", {
                class: "exactmetrics-upsell-pbold",
                textContent: toDisplayString(unref(upsell_receive))
              }, null, 8, _hoisted_8),
              createBaseVNode("p", _hoisted_9, [
                createBaseVNode("a", {
                  href: unref(upgrade_url),
                  target: "_blank",
                  rel: "noopener",
                  class: "exactmetrics-button exactmetrics-button-large exactmetrics-button-green",
                  textContent: toDisplayString(unref(text_upgrade))
                }, null, 8, _hoisted_10),
                createBaseVNode("a", {
                  href: unref(features_url),
                  class: "exactmetrics-button exactmetrics-button-large exactmetrics-button-text",
                  target: "_blank",
                  rel: "noopener"
                }, [
                  createBaseVNode("span", {
                    textContent: toDisplayString(unref(text_see))
                  }, null, 8, _hoisted_12),
                  _cache[2] || (_cache[2] = createBaseVNode("span", { class: "monstericon-arrow-right" }, null, -1))
                ], 8, _hoisted_11)
              ])
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("a", {
                href: unref(image_upgrade_url),
                class: "exactmetrics-full-width-upsell-image-link",
                target: "_blank",
                rel: "noopener"
              }, [..._cache[5] || (_cache[5] = [
                createBaseVNode("div", { class: "exactmetrics-bg-img exactmetrics-screen-image exactmetrics-em-upsell-screen" }, null, -1)
              ])], 8, _hoisted_14)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_15, [
          createVNode(_sfc_main$1, { title: unref(text_license_title) }, {
            default: withCtx(() => [
              createBaseVNode("p", { innerHTML: unref(text_license_already) }, null, 8, _hoisted_16),
              createBaseVNode("div", _hoisted_17, [
                withDirectives(createBaseVNode("input", {
                  id: "exactmetrics-license-key-valid",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => connect_key.value = $event),
                  readonly: is_loading.value,
                  type: "text",
                  autocomplete: "off",
                  placeholder: unref(text_license_placeholder)
                }, null, 8, _hoisted_18), [
                  [vModelText, connect_key.value]
                ]),
                createBaseVNode("button", {
                  class: "exactmetrics-button exactmetrics-button-green exactmetrics-button-large",
                  onClick: withModifiers(showUpgradeConfirmation, ["prevent"])
                }, [
                  createBaseVNode("span", {
                    textContent: toDisplayString(unref(text_verify))
                  }, null, 8, _hoisted_19)
                ])
              ])
            ]),
            _: 1
          }, 8, ["title"]),
          hasAuth.value ? (openBlock(), createBlock(_sfc_main$1, {
            key: 0,
            title: unref(text_auth_title)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_20, [
                createVNode(_sfc_main$2, {
                  label: "",
                  description: unref(text_auth_description)
                }, null, 8, ["description"])
              ]),
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("strong", {
                  textContent: toDisplayString(unref(text_auth_label))
                }, null, 8, _hoisted_22),
                createBaseVNode("p", {
                  textContent: toDisplayString(unref(text_setup_wizard_label))
                }, null, 8, _hoisted_23),
                createBaseVNode("p", null, [
                  createVNode(_sfc_main$3, {
                    "button-class": "monstericon-long-arrow-right-light",
                    "button-text": unref(text_setup_wizard_button)
                  }, null, 8, ["button-text"])
                ]),
                createBaseVNode("p", {
                  class: "exactmetrics-disclaimer-note",
                  textContent: toDisplayString(unref(text_setup_wizard_disclaimer))
                }, null, 8, _hoisted_24)
              ])
            ]),
            _: 1
          }, 8, ["title"])) : createCommentVNode("", true),
          !hasAuth.value ? (openBlock(), createBlock(_sfc_main$1, {
            key: 1,
            title: unref(text_auth_title)
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$2, {
                label: "",
                description: unref(text_auth_description)
              }, null, 8, ["description"])
            ]),
            _: 1
          }, 8, ["title"])) : createCommentVNode("", true),
          !hasAuth.value ? (openBlock(), createElementBlock("div", _hoisted_25, [
            createBaseVNode("div", {
              class: "exactmetrics-setting-panel-top",
              textContent: toDisplayString(unref(text_setup_wizard_title))
            }, null, 8, _hoisted_26),
            createBaseVNode("div", _hoisted_27, [
              createBaseVNode("p", {
                textContent: toDisplayString(unref(text_setup_wizard_label))
              }, null, 8, _hoisted_28),
              createVNode(_sfc_main$3, {
                "button-class": "exactmetrics-button exactmetrics-button-green",
                "button-text": unref(text_launch_wizard_button)
              }, null, 8, ["button-text"]),
              createBaseVNode("p", {
                class: "exactmetrics-disclaimer-note",
                textContent: toDisplayString(unref(text_setup_wizard_disclaimer))
              }, null, 8, _hoisted_29)
            ])
          ])) : createCommentVNode("", true)
        ]),
        upgrade_confirmation_visible.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          id: "em-upgrade-confirmation",
          class: "exactmetrics-welcome-overlay",
          onClick: maybeCloseOverlay
        }, [
          createBaseVNode("div", _hoisted_30, [
            createBaseVNode("button", {
              class: "exactmetrics-overlay-close",
              onClick: _cache[1] || (_cache[1] = ($event) => upgrade_confirmation_visible.value = false)
            }, [..._cache[6] || (_cache[6] = [
              createBaseVNode("span", { class: "monstericon-times" }, null, -1)
            ])]),
            createBaseVNode("div", _hoisted_31, [
              createBaseVNode("div", _hoisted_32, [
                _cache[8] || (_cache[8] = createStaticVNode('<div class="exactmetrics-upgrade-confirmation-icons"><i class="monstericon-arrow-circle-up-light"></i><i class="monstericon-arrow-circle-up-light"></i><i class="monstericon-arrow-circle-up-light"></i><i class="monstericon-arrow-circle-up-light"></i></div>', 1)),
                createBaseVNode("div", _hoisted_33, [
                  createBaseVNode("h2", {
                    textContent: toDisplayString(unref(text_upgrade_to_pro_version))
                  }, null, 8, _hoisted_34),
                  createBaseVNode("p", { innerHTML: unref(text_upgrade_to_pro_description) }, null, 8, _hoisted_35),
                  createBaseVNode("button", {
                    class: "exactmetrics-button exactmetrics-button-large exactmetrics-button-green",
                    onClick: startUpgradeToPro
                  }, [
                    createBaseVNode("span", {
                      textContent: toDisplayString(unref(text_complete_upgrade))
                    }, null, 8, _hoisted_36),
                    _cache[7] || (_cache[7] = createBaseVNode("i", { class: "monstericon-long-arrow-right-light" }, null, -1))
                  ])
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
export {
  _sfc_main as default
};
