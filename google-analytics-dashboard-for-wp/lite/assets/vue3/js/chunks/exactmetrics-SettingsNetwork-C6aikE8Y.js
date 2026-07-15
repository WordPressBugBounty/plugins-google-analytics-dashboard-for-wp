import { n as getUpgradeUrl, o as getUrl, k as isPro } from "./ajax-Uw5S1uqk.js";
import { l as licenseApi, u as useLicenseStore } from "./license-C6i4W44s.js";
import { _ as _sfc_main$4 } from "./SettingsBlock-Bsp6Fu6H.js";
import { _ as _sfc_main$7 } from "./SettingsInputCheckbox-B6Cq-zQE.js";
import { _ as _sfc_main$5 } from "./exactmetrics-SettingsInputAuthenticate-Lite-DNJt1JSz.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, u as unref, w as withDirectives, v as vModelText, t as toDisplayString, B as withModifiers, s as createCommentVNode, j as ref, b as createVNode, E as createBlock, D as withCtx, a4 as createSlots, m as computed } from "./toastStore-CjmlShHI.js";
import { a as useToast } from "./addons-DcCBQDEz.js";
import { _ as _sfc_main$3 } from "./ContentIntroFullWidth-Cv-KKuIE.js";
import { _ as _sfc_main$6 } from "./LaunchWizardButton-BuPkh4Ew.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./useNotices-BosR4uY_.js";
import "./SlideDownUp-69HctpXG.js";
import "./settings-BVkGy_Cz.js";
import "./exactmetrics-Lite-BcFa0OAR.js";
import "./TheAppHeader-BI_ZrtNW.js";
import "./SettingsInfoTooltip-DGz1RdtP.js";
import "./auth-Rcit4ziJ.js";
import "./Modal-CzneZfPu.js";
const _hoisted_1$2 = { class: "settings-input settings-input-license" };
const _hoisted_2$1 = ["innerHTML"];
const _hoisted_3$1 = ["innerHTML"];
const _hoisted_4$1 = ["innerHTML"];
const _hoisted_5$1 = { class: "exactmetrics-settings-license-lite" };
const _hoisted_6$1 = ["innerHTML"];
const _hoisted_7$1 = { class: "inline-field" };
const _hoisted_8$1 = ["readonly", "placeholder"];
const _hoisted_9$1 = ["textContent"];
const _sfc_main$2 = {
  __name: "SettingsInputLicense-Lite",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const { loadingToast, errorToast, closeToast } = useToast();
    const is_loading = ref(false);
    const show_connect = ref(false);
    const connect_key = ref("");
    const text_license_row_1 = sprintf(__("You're using %1$sExactMetrics Lite%2$s - no license needed. Enjoy! %3$s", "google-analytics-dashboard-for-wp"), "<strong>", "</strong>", '<span class="exactmetrics-bg-img exactmetrics-smile"></span>');
    const text_license_row_2 = sprintf(__("To unlock more features consider %1$supgrading to PRO%2$s.", "google-analytics-dashboard-for-wp"), '<a href="' + getUpgradeUrl("settings-panel", "license") + '" class="exactmetrics-bold" target="_blank">', "</a>");
    const text_license_row_3 = sprintf(__("As a valued ExactMetrics Lite user you %1$sreceive 50%% off%2$s, automatically applied at checkout!", "google-analytics-dashboard-for-wp"), '<span class="exactmetrics-highlighted-text">', "</span>");
    const text_upgrade_to_pro = __("Unlock PRO Features Now", "google-analytics-dashboard-for-wp");
    const text_license_placeholder = __("Paste your license key here", "google-analytics-dashboard-for-wp");
    const text_license_label = sprintf(__("Already purchased? Simply enter your license key below to connect with ExactMetrics PRO! %1$sRetrieve your license key%2$s.", "google-analytics-dashboard-for-wp"), '<a href="' + getUrl("license", "settings_panel", "https://www.exactmetrics.com/my-account/") + '" target="_blank">', "</a>");
    let fieldInputTimer = null;
    function fieldInput() {
      clearTimeout(fieldInputTimer);
      fieldInputTimer = setTimeout(() => {
        show_connect.value = connect_key.value !== "";
      }, 100);
    }
    function startUpgradeToPro() {
      loadingToast(__("Please wait...", "google-analytics-dashboard-for-wp"));
      licenseApi.getUpgradeLink(connect_key.value).then((response) => {
        if (response.success && response.data && response.data.url) {
          window.location = response.data.url;
        } else if (response && response.url) {
          window.location = response.url;
        } else {
          const message = response.data && response.data.message ? response.data.message : __("There was an error unlocking ExactMetrics PRO please try again or install manually.", "google-analytics-dashboard-for-wp");
          errorToast({ title: __("Error", "google-analytics-dashboard-for-wp"), text: message });
        }
      }).catch(() => {
        closeToast();
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("p", { innerHTML: unref(text_license_row_1) }, null, 8, _hoisted_2$1),
        createBaseVNode("p", { innerHTML: unref(text_license_row_2) }, null, 8, _hoisted_3$1),
        createBaseVNode("p", { innerHTML: unref(text_license_row_3) }, null, 8, _hoisted_4$1),
        createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("label", {
            for: "exactmetrics-license-key",
            innerHTML: unref(text_license_label)
          }, null, 8, _hoisted_6$1),
          createBaseVNode("div", _hoisted_7$1, [
            withDirectives(createBaseVNode("input", {
              id: "exactmetrics-license-key",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => connect_key.value = $event),
              readonly: is_loading.value,
              type: "text",
              autocomplete: "off",
              placeholder: unref(text_license_placeholder),
              onInput: fieldInput
            }, null, 40, _hoisted_8$1), [
              [vModelText, connect_key.value]
            ]),
            show_connect.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: "exactmetrics-button",
              onClick: withModifiers(startUpgradeToPro, ["prevent"]),
              textContent: toDisplayString(unref(text_upgrade_to_pro))
            }, null, 8, _hoisted_9$1)) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
};
const _hoisted_1$1 = { class: "settings-input settings-input-license" };
const _sfc_main$1 = {
  __name: "exactmetrics-SettingsInputLicenseNetwork-Lite",
  props: {
    label: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_sfc_main$2)
      ]);
    };
  }
};
const _hoisted_1 = { class: "exactmetrics-settings-content settings-network" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["href", "textContent"];
const _hoisted_6 = ["href"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["textContent"];
const _hoisted_9 = { class: "exactmetrics-grey-settings-area" };
const _hoisted_10 = { class: "exactmetrics-grey-settings-area-half" };
const _hoisted_11 = { class: "exactmetrics-grey-settings-area-half" };
const _hoisted_12 = ["textContent"];
const _hoisted_13 = ["textContent"];
const _hoisted_14 = ["textContent"];
const _hoisted_15 = ["innerHTML"];
const _hoisted_16 = ["innerHTML"];
const _sfc_main = {
  __name: "exactmetrics-SettingsNetwork",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const licenseStore = useLicenseStore();
    const isProBuild = isPro();
    const license_network = computed(() => licenseStore.license_network);
    const isNetworkLicenseExpired = computed(() => !!license_network.value?.is_expired);
    const upgrade_url = getUpgradeUrl("network-settings", "top-upsell-button");
    const features_url = getUrl("network-settings", "features", "https://exactmetrics.com/features");
    const text_license_title = __("License Key", "google-analytics-dashboard-for-wp");
    const text_license_label = sprintf(__("Add your ExactMetrics license key from the email receipt or account area. %1$sRetrieve your license key%2$s.", "google-analytics-dashboard-for-wp"), '<a href="#">', "</a>");
    const text_auth_title = __("Google Authentication", "google-analytics-dashboard-for-wp");
    const text_auth_label = __("Connect Google Analytics + WordPress", "google-analytics-dashboard-for-wp");
    const text_auth_description = __("You will be taken to the ExactMetrics website where you'll need to connect your Analytics account.", "google-analytics-dashboard-for-wp");
    const text_setup_wizard_title = __("Setup Wizard", "google-analytics-dashboard-for-wp");
    const text_setup_wizard_label = __("Use our configuration wizard to properly setup Google Analytics with WordPress (with just a few clicks).", "google-analytics-dashboard-for-wp");
    const text_setup_wizard_button = __("Relaunch Setup Wizard", "google-analytics-dashboard-for-wp");
    const text_onboarding_note = __("Note: You will be transfered to ExactMetrics.com to complete the setup wizard.", "google-analytics-dashboard-for-wp");
    const text_misc_title = __("Miscellaneous", "google-analytics-dashboard-for-wp");
    const text_announcements_title = __("Hide Announcements", "google-analytics-dashboard-for-wp");
    const text_announcements_description = __("Hides plugin announcements and update details. This includes critical notices we use to inform about deprecations and important required configuration changes.", "google-analytics-dashboard-for-wp");
    const text_announcements_label = __("Hide Announcements", "google-analytics-dashboard-for-wp");
    const text_tag_expired = __("Expired", "google-analytics-dashboard-for-wp");
    const upsell_title = __("You're using ExactMetrics Lite – no license needed. Enjoy!", "google-analytics-dashboard-for-wp");
    const upsell_subtitle = sprintf(__("To unlock more features consider %1$supgrading to PRO%2$s.", "google-analytics-dashboard-for-wp"), '<a href="' + getUpgradeUrl("network-settings", "top-upsell-text") + '" class="exactmetrics-green-text">', "</a>");
    const upsell_receive = __("Receive 50% off automatically applied at the checkout!", "google-analytics-dashboard-for-wp");
    const text_upgrade = __("Upgrade to PRO", "google-analytics-dashboard-for-wp");
    const text_see = __("See all features", "google-analytics-dashboard-for-wp");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        !unref(isProBuild) ? (openBlock(), createBlock(_sfc_main$3, { key: 0 }, {
          text: withCtx(() => [
            createBaseVNode("p", {
              textContent: toDisplayString(unref(upsell_title))
            }, null, 8, _hoisted_2),
            createBaseVNode("p", { innerHTML: unref(upsell_subtitle) }, null, 8, _hoisted_3),
            createBaseVNode("p", {
              class: "exactmetrics-upsell-pbold",
              textContent: toDisplayString(unref(upsell_receive))
            }, null, 8, _hoisted_4)
          ]),
          buttons: withCtx(() => [
            createBaseVNode("a", {
              href: unref(upgrade_url),
              target: "_blank",
              rel: "noopener",
              class: "exactmetrics-button exactmetrics-button-large exactmetrics-button-green",
              textContent: toDisplayString(unref(text_upgrade))
            }, null, 8, _hoisted_5),
            createBaseVNode("a", {
              href: unref(features_url),
              class: "exactmetrics-button exactmetrics-button-large exactmetrics-button-text"
            }, [
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_see))
              }, null, 8, _hoisted_7),
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "monstericon-arrow-right" }, null, -1))
            ], 8, _hoisted_6)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_sfc_main$4, {
          title: unref(text_license_title),
          icon: "monstericon-key-em"
        }, createSlots({
          default: withCtx(() => [
            createVNode(_sfc_main$1, { label: unref(text_license_label) }, null, 8, ["label"])
          ]),
          _: 2
        }, [
          isNetworkLicenseExpired.value ? {
            name: "expired-license-tag",
            fn: withCtx(() => [
              createBaseVNode("span", {
                class: "exactmetrics-license-expired-tag",
                textContent: toDisplayString(unref(text_tag_expired))
              }, null, 8, _hoisted_8)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["title"]),
        createVNode(_sfc_main$4, {
          title: unref(text_auth_title),
          icon: "monstericon-badge-check"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createVNode(_sfc_main$5, {
                  label: unref(text_auth_label),
                  description: unref(text_auth_description)
                }, null, 8, ["label", "description"])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("h3", {
                  textContent: toDisplayString(unref(text_setup_wizard_title))
                }, null, 8, _hoisted_12),
                createBaseVNode("p", {
                  textContent: toDisplayString(unref(text_setup_wizard_label))
                }, null, 8, _hoisted_13),
                createVNode(_sfc_main$6, {
                  "button-class": "monstericon-arrow-right",
                  "button-text": unref(text_setup_wizard_button)
                }, null, 8, ["button-text"]),
                createBaseVNode("p", {
                  class: "exactmetrics-disclaimer-note",
                  textContent: toDisplayString(unref(text_onboarding_note))
                }, null, 8, _hoisted_14)
              ])
            ])
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$4, {
          title: unref(text_misc_title),
          icon: "monstericon-notifications",
          collapsible: true
        }, {
          default: withCtx(() => [
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "exactmetrics-dark",
                innerHTML: unref(text_announcements_title)
              }, null, 8, _hoisted_15),
              createBaseVNode("span", { innerHTML: unref(text_announcements_description) }, null, 8, _hoisted_16)
            ]),
            createVNode(_sfc_main$7, {
              name: "hide_am_notices",
              label: unref(text_announcements_label)
            }, null, 8, ["label"])
          ]),
          _: 1
        }, 8, ["title"])
      ]);
    };
  }
};
const exactmetricsSettingsNetwork = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb26e94b"]]);
export {
  exactmetricsSettingsNetwork as default
};
