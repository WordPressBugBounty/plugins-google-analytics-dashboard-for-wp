import { o as openBlock, c as createElementBlock, h as createStaticVNode, a as createBaseVNode, u as unref, a1 as storeToRefs, y as onMounted, J as onUnmounted, b as createVNode, t as toDisplayString, F as Fragment, f as renderList, i as normalizeClass, B as withModifiers, n as normalizeStyle, m as computed, j as ref } from "./toastStore-CjmlShHI.js";
import { c as useAddonsStore, e as addonsApi } from "./addons-DcCBQDEz.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./useNotices-BosR4uY_.js";
import "./ajax-Uw5S1uqk.js";
import "./Modal-CzneZfPu.js";
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "exactmetrics-rewardswp-logos" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<div class="exactmetrics-rewardswp-logos-item"><svg width="99" height="87" viewBox="0 0 99 87" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="99" height="87" fill="url(#pattern0)"></rect><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_244_84" transform="translate(-0.00257477) scale(0.00574371 0.00653595)"></use></pattern><image id="image0_244_84" width="175" height="153" xlink:href="data:image/png;base64,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"></image></defs></svg></div><div class="exactmetrics-rewardswp-logos-item"><svg width="54" height="47" viewBox="0 0 54 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53.9989 13.9778V15.2382C53.9609 15.4077 53.9006 15.574 53.8879 15.7457C53.6342 19.1624 52.2977 22.1147 49.9007 24.5459C42.7075 31.8447 35.4816 39.1109 28.2652 46.3855C27.4553 47.2015 26.5174 47.2047 25.716 46.396C18.5112 39.133 11.2768 31.8995 4.12284 24.588C0.451728 20.8365 -0.732501 16.289 0.429523 11.1855C1.83897 4.99751 6.94912 0.55631 13.2668 0.0561758C16.9728 -0.237587 20.3489 0.753205 23.227 3.13279C24.426 4.12464 25.4939 5.27442 26.6031 6.37261C26.896 6.66322 27.0863 6.65901 27.3697 6.36735C28.2494 5.46184 29.1111 4.53212 30.0543 3.69505C33.5921 0.556311 37.7401 -0.59242 42.3766 0.285711C48.1497 1.37969 52.6339 6.0262 53.6627 11.8099C53.7906 12.529 53.8879 13.2545 54 13.9768L53.9989 13.9778Z" fill="#DC3232"></path></svg></div><div class="exactmetrics-rewardswp-logos-item"><svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.36667 46.6257C1.76967 44.542 0.497656 42.0912 0.119656 39.7487C-0.474344 36.0705 1.17467 32.3288 4.36667 29.9989V16.017C4.36667 10.224 9.06967 5.52093 14.8627 5.52093H35.2747C34.3537 6.49607 33.4897 7.54842 32.6907 8.67822C31.7197 10.0517 30.8447 11.539 30.0897 13.1412H14.8627C13.2757 13.1412 11.9867 14.4297 11.9867 16.017V27.6459C16.0167 27.6607 20.9067 29.3677 25.7307 34.1919C27.3677 35.8283 29.0427 37.4401 30.7487 38.997V27.5209C30.7487 20.7253 32.6817 15.2029 35.7017 10.9325C48.1857 -6.72086 79.2647 -2.89498 79.2647 21.6857C79.2647 32.4359 73.6517 40.1721 63.2707 45.1241C58.4747 47.4114 52.5807 49.0842 45.7217 50.1672C47.7097 51.2703 49.7097 52.2072 51.7117 52.9393C59.7417 55.8737 71.0627 55.88 80.8157 52.316C72.7797 61.7338 63.7847 65.2267 49.0967 60.091C45.4927 58.8307 41.9137 56.8906 38.3637 54.592V72.3797H68.3497C69.9377 72.3797 71.2257 71.0918 71.2257 69.504V63.98C73.1967 63.2516 75.9217 62.0373 78.8457 60.1135V69.504C78.8457 75.2967 74.1427 80 68.3497 80H14.8627C9.06967 80 4.36667 75.2967 4.36667 69.504V46.6257ZM30.7487 72.3797V51.5551C28.5677 51.6376 26.3227 51.6788 24.0167 51.6788C19.1347 51.6788 15.1667 51.1367 11.9867 50.2659V69.504C11.9867 71.0918 13.2757 72.3797 14.8627 72.3797H30.7487ZM11.4097 42.0318C14.2457 43.3012 18.3617 44.0641 24.0167 44.0641C24.3517 44.0641 24.6847 44.0633 25.0177 44.0615C23.4307 42.6028 21.8717 41.1016 20.3467 39.5763C15.9787 35.2082 11.8027 34.4152 9.18066 35.9488C8.17866 36.5351 7.46665 37.4788 7.63665 38.5348C7.79365 39.505 8.53467 40.3686 9.76367 41.1542L11.4097 42.0318ZM38.3637 43.4423C47.0577 42.6155 54.3597 40.938 59.9917 38.2512C67.4017 34.7162 71.6507 29.36 71.6507 21.6857C71.6507 5.03049 50.3787 3.36788 41.9187 15.3293C39.7037 18.4618 38.3637 22.536 38.3637 27.5209V43.4423Z" fill="#2263EB" style="fill:color(display-p3 0.1333 0.3882 0.9216);fill-opacity:1;"></path></svg></div>', 3)
  ])]);
}
const RewardsWpLogos = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _hoisted_1$1 = { class: "exactmetrics-rewardswp-screenshot" };
const _hoisted_2$1 = ["src"];
const _sfc_main$1 = {
  __name: "exactmetrics-RewardsWpScreenshot",
  setup(__props) {
    const rewardswpPromoWidgetImageUrl = new URL("" + new URL("../../assets/rewardswp-rewards-widget-promo-Do7LAdUj.png", import.meta.url).href, import.meta.url).href;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("img", {
          src: unref(rewardswpPromoWidgetImageUrl),
          alt: "RewardsWP Screenshot"
        }, null, 8, _hoisted_2$1)
      ]);
    };
  }
};
const _hoisted_1 = {
  id: "exactmetrics-rewardswp",
  class: "exactmetrics-rewardswp"
};
const _hoisted_2 = { class: "exactmetrics-rewardswp-container" };
const _hoisted_3 = { class: "exactmetrics-rewardswp-headlines exactmetrics-text-center" };
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = { class: "exactmetrics-rewardswp-features" };
const _hoisted_7 = { class: "exactmetrics-rewardswp-features-list" };
const _hoisted_8 = ["textContent"];
const _hoisted_9 = { class: "exactmetrics-rewardswp-install-box-step" };
const _hoisted_10 = ["textContent"];
const _hoisted_11 = { class: "exactmetrics-rewardswp-install-box-info" };
const _hoisted_12 = ["textContent"];
const _hoisted_13 = ["textContent"];
const _hoisted_14 = ["disabled", "textContent"];
const _hoisted_15 = ["textContent"];
const _hoisted_16 = ["textContent"];
const _hoisted_17 = { class: "exactmetrics-rewardswp-install-box-info" };
const _hoisted_18 = ["textContent"];
const _hoisted_19 = ["textContent"];
const _hoisted_20 = ["disabled", "textContent"];
const REWARDSWP_KEY = "rewardswp";
const DEFAULT_BASENAME = "rewardswp/rewardswp.php";
const _sfc_main = {
  __name: "RewardsWpShell",
  setup(__props) {
    const { __ } = wp.i18n;
    const addonsStore = useAddonsStore();
    const { addons } = storeToRefs(addonsStore);
    const installing = ref(false);
    const activating = ref(false);
    const installedAndActivated = ref(false);
    const rewardswpWizardUrl = ref("");
    const errorMessage = ref("");
    const textTopHeading = __(
      "Reward Your Customers. Grow Your Revenue.",
      "google-analytics-dashboard-for-wp"
    );
    const textTopDescription = __(
      "RewardsWP adds a points-based loyalty and refer-a-friend program to your store. Reward purchases, let customers redeem points for discounts, and turn happy buyers into your best source of new customers.",
      "google-analytics-dashboard-for-wp"
    );
    const featuresList = [
      __("Award loyalty points automatically on every purchase.", "google-analytics-dashboard-for-wp"),
      __(
        "Built-in referral program so customers can refer friends and earn rewards.",
        "google-analytics-dashboard-for-wp"
      ),
      __(
        "Customers redeem points for discount codes and other rewards.",
        "google-analytics-dashboard-for-wp"
      ),
      __(
        "Beautiful on-site rewards widget so customers can track points, rewards, and referrals.",
        "google-analytics-dashboard-for-wp"
      )
    ];
    const textInstallHeading = __("Install & Activate RewardsWP", "google-analytics-dashboard-for-wp");
    const textInstallDescription = __(
      "Install the free RewardsWP plugin to start rewarding your customers.",
      "google-analytics-dashboard-for-wp"
    );
    const textInstallButton = __("Install Now", "google-analytics-dashboard-for-wp");
    const textActivateButton = __("Activate Now", "google-analytics-dashboard-for-wp");
    const textSetupHeading = __("Set Up Your Rewards Program", "google-analytics-dashboard-for-wp");
    const textSetupDescription = __(
      "Run the RewardsWP setup wizard to configure your points, rewards, and referral program.",
      "google-analytics-dashboard-for-wp"
    );
    const textSetupButton = __("Start Rewarding Customers", "google-analytics-dashboard-for-wp");
    const textViewStoreButton = __("View Store", "google-analytics-dashboard-for-wp");
    const textInstallingPlugin = __("Installing RewardsWP", "google-analytics-dashboard-for-wp");
    const textActivatingPlugin = __("Activating RewardsWP", "google-analytics-dashboard-for-wp");
    const textInstalledPlugin = __("Installed & Active", "google-analytics-dashboard-for-wp");
    const textErrorMessage = __(
      "Oops! There was an error processing request. Please try again later.",
      "google-analytics-dashboard-for-wp"
    );
    const rewardsWpInstalled = computed(() => !!addons.value?.[REWARDSWP_KEY]?.installed);
    const rewardsWpActive = computed(() => !!addons.value?.[REWARDSWP_KEY]?.active);
    const rewardsWpInstalledAndActive = computed(
      () => installedAndActivated.value || rewardsWpInstalled.value && rewardsWpActive.value
    );
    const rewardsWpBasename = computed(
      () => addons.value?.[REWARDSWP_KEY]?.basename || DEFAULT_BASENAME
    );
    const loading = computed(() => installing.value || activating.value);
    const setupComplete = computed(() => addons.value?.[REWARDSWP_KEY]?.setup_complete == 1);
    const firstStepClass = computed(() => {
      if (rewardsWpInstalledAndActive.value) return "exactmetrics-inactive";
      if (loading.value) return "exactmetrics-loading";
      return "";
    });
    const secondStepClass = computed(
      () => rewardsWpInstalledAndActive.value ? "" : "exactmetrics-inactive"
    );
    const firstStepButtonText = computed(() => {
      if (rewardsWpInstalledAndActive.value) return textInstalledPlugin;
      if (installing.value) return textInstallingPlugin;
      if (activating.value) return textActivatingPlugin;
      if (rewardsWpInstalled.value && !rewardsWpActive.value) return textActivateButton;
      return textInstallButton;
    });
    function showErrorResult(result, show = true) {
      if (!show) {
        errorMessage.value = "";
        return;
      }
      if (result && typeof result === "object" && "error" in result && result.error) {
        errorMessage.value = result.error;
      } else {
        errorMessage.value = textErrorMessage;
      }
    }
    async function installPlugin() {
      if (rewardsWpInstalledAndActive.value) return;
      installing.value = true;
      errorMessage.value = "";
      let installed;
      try {
        if (!rewardsWpInstalled.value && !rewardsWpActive.value) {
          installed = await addonsApi.installRewardsWP();
          const ok = installed === true || installed?.success === true || installed && installed.success !== false && !installed.error;
          if (ok) {
            installed = { success: true };
            addonsStore.setAddonInstalled({
              slug: REWARDSWP_KEY,
              basename: rewardsWpBasename.value
            });
          } else {
            installing.value = false;
            showErrorResult(installed);
            return;
          }
        } else if (rewardsWpInstalled.value && !rewardsWpActive.value) {
          installed = { success: true };
        }
      } catch (e) {
        installing.value = false;
        showErrorResult(e);
        return;
      }
      if (installed?.success) {
        installing.value = false;
        activating.value = true;
        showErrorResult(0, false);
        try {
          const activated = await addonsApi.activateRewardsWP(rewardsWpBasename.value);
          const ok = activated === true || activated?.success === true || activated && activated.success !== false && !activated.error;
          if (ok) {
            activating.value = false;
            installedAndActivated.value = true;
            addonsStore.setAddonActive(REWARDSWP_KEY);
            showErrorResult(0, false);
            rewardswpWizardUrl.value = addons.value?.[REWARDSWP_KEY]?.settings || "";
          } else {
            activating.value = false;
            showErrorResult(activated);
          }
        } catch (e) {
          activating.value = false;
          showErrorResult(e);
        }
      }
    }
    function gotoSetupWizard() {
      if (setupComplete.value) {
        const store = addons.value?.[REWARDSWP_KEY]?.store;
        if (store) window.location = store;
        return;
      }
      if (rewardswpWizardUrl.value) {
        window.location = rewardswpWizardUrl.value;
        return;
      }
      if (!rewardsWpActive.value) return;
      const settings = addons.value?.[REWARDSWP_KEY]?.settings;
      if (settings) window.location = settings;
    }
    onMounted(() => {
      document.body.classList.add("exactmetrics-rewardswp-install-page");
    });
    onUnmounted(() => {
      document.body.classList.remove("exactmetrics-rewardswp-install-page");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(RewardsWpLogos),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h1", {
              textContent: toDisplayString(unref(textTopHeading))
            }, null, 8, _hoisted_4),
            createBaseVNode("p", {
              textContent: toDisplayString(unref(textTopDescription))
            }, null, 8, _hoisted_5)
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(_sfc_main$1),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("ul", null, [
                (openBlock(), createElementBlock(Fragment, null, renderList(featuresList, (feature, key) => {
                  return createBaseVNode("li", { key }, [
                    createBaseVNode("span", {
                      class: "exactmetrics-rewardswp-feat-list-text",
                      textContent: toDisplayString(feature)
                    }, null, 8, _hoisted_8)
                  ]);
                }), 64))
              ])
            ])
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["exactmetrics-rewardswp-install-box exactmetrics-install-rewardswp", firstStepClass.value])
          }, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("span", {
                textContent: toDisplayString(!rewardsWpInstalledAndActive.value ? "1" : "")
              }, null, 8, _hoisted_10)
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("h2", {
                textContent: toDisplayString(unref(textInstallHeading))
              }, null, 8, _hoisted_12),
              createBaseVNode("p", {
                textContent: toDisplayString(unref(textInstallDescription))
              }, null, 8, _hoisted_13),
              createBaseVNode("span", null, [
                createBaseVNode("button", {
                  class: "exactmetrics-button",
                  disabled: rewardsWpInstalledAndActive.value || loading.value,
                  textContent: toDisplayString(firstStepButtonText.value),
                  onClick: withModifiers(installPlugin, ["prevent"])
                }, null, 8, _hoisted_14)
              ]),
              createBaseVNode("span", {
                class: "exactmetrics-rewardswp-error",
                style: normalizeStyle({ display: errorMessage.value ? "block" : "none" }),
                textContent: toDisplayString(errorMessage.value)
              }, null, 12, _hoisted_15)
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["exactmetrics-rewardswp-install-box exactmetrics-setup-rewardswp", secondStepClass.value])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["exactmetrics-rewardswp-install-box-step", setupComplete.value ? "is-complete" : ""])
            }, [
              createBaseVNode("span", {
                textContent: toDisplayString(!setupComplete.value ? "2" : "")
              }, null, 8, _hoisted_16)
            ], 2),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("h2", {
                textContent: toDisplayString(unref(textSetupHeading))
              }, null, 8, _hoisted_18),
              createBaseVNode("p", {
                textContent: toDisplayString(unref(textSetupDescription))
              }, null, 8, _hoisted_19),
              createBaseVNode("button", {
                class: "exactmetrics-button",
                disabled: !rewardsWpInstalledAndActive.value,
                textContent: toDisplayString(setupComplete.value ? unref(textViewStoreButton) : unref(textSetupButton)),
                onClick: withModifiers(gotoSetupWizard, ["prevent"])
              }, null, 8, _hoisted_20)
            ])
          ], 2)
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
