import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, A as createTextVNode, aH as welcomeImage, m as computed, O as getExactMetricsUrl, b as createVNode, D as withCtx, F as Fragment, f as renderList, az as getUpgradeUrl } from "./toastStore-CjmlShHI.js";
import { _ as _sfc_main$2 } from "./Modal-CzneZfPu.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1$1 = { class: "exactmetrics-google-ads-welcome" };
const _hoisted_2$1 = { class: "exactmetrics-google-ads-welcome__content" };
const _hoisted_3$1 = { class: "exactmetrics-google-ads-welcome__list" };
const _hoisted_4$1 = { class: "exactmetrics-google-ads-welcome__offer" };
const _hoisted_5$1 = ["innerHTML"];
const _hoisted_6$1 = { class: "exactmetrics-google-ads-welcome__disclaimer" };
const _hoisted_7$1 = ["innerHTML"];
const _hoisted_8$1 = { class: "exactmetrics-google-ads-welcome__image" };
const _hoisted_9$1 = ["src"];
const _sfc_main$1 = {
  __name: "GoogleAdsGetStarted",
  emits: ["completeOnboarding"],
  setup(__props, { emit: __emit }) {
    const { __, sprintf } = wp.i18n;
    const emit = __emit;
    const strings = computed(() => ({
      disclaimer: sprintf(
        __(
          "New to Google? Get $500 in ad credits when you spend your first $500 within 60 days* (%sT&Cs apply%s).",
          "google-analytics-dashboard-for-wp"
        ),
        '<a href="' + getExactMetricsUrl(
          "google-ads",
          "google-pax",
          "https://www.exactmetrics.com/docs/google-ads-credit-terms-and-conditions/"
        ) + '" target="_blank">',
        "</a>"
      ),
      google_ads_policies: sprintf(
        __(
          `*By clicking "Get Started" you agree with ExactMetrics' Terms and Conditions and %sGoogle Ads Policies%s.`,
          "exactmetrics-premium"
        ),
        '<a href="https://support.google.com/adspolicy/answer/6008942" target="_blank">',
        "</a>"
      )
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("h3", null, toDisplayString(unref(__)("Drive better results from a single campaign with Google Ads", "exactmetrics-premium")), 1),
            createBaseVNode("ul", _hoisted_3$1, [
              createBaseVNode("li", null, [
                _cache[1] || (_cache[1] = createBaseVNode("span", { class: "exactmetrics-google-ads-welcome__check" }, "✔", -1)),
                createBaseVNode("strong", null, toDisplayString(unref(__)("With a Performance Max campaign, reach customers most likely to buy from you", "exactmetrics-premium")), 1),
                createTextVNode(" " + toDisplayString(unref(__)(
                  " across Google—including Search, YouTube, Gmail, and more—wherever they are searching or browsing for what you offer ",
                  "exactmetrics-premium"
                )), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[2] || (_cache[2] = createBaseVNode("span", { class: "exactmetrics-google-ads-welcome__check" }, "✔", -1)),
                createBaseVNode("strong", null, toDisplayString(unref(__)("Get personalized recommendations", "exactmetrics-premium")), 1),
                createTextVNode(" " + toDisplayString(unref(__)(
                  " to help you connect with the right audience and high intent customers",
                  "exactmetrics-premium"
                )), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[3] || (_cache[3] = createBaseVNode("span", { class: "exactmetrics-google-ads-welcome__check" }, "✔", -1)),
                createBaseVNode("strong", null, toDisplayString(unref(__)("Manage your campaign performance", "exactmetrics-premium")), 1),
                createTextVNode(" " + toDisplayString(unref(__)(" and track conversions all within ExactMetrics", "exactmetrics-premium")), 1)
              ])
            ]),
            createBaseVNode("p", _hoisted_4$1, [
              createBaseVNode("span", {
                innerHTML: strings.value.disclaimer
              }, null, 8, _hoisted_5$1)
            ]),
            createBaseVNode("button", {
              class: "exactmetrics-button exactmetrics-google-ads-welcome__cta",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("completeOnboarding"))
            }, toDisplayString(unref(__)("Get Started", "exactmetrics-premium")), 1),
            createBaseVNode("p", _hoisted_6$1, toDisplayString(unref(__)(
              "If you sell products, make sure you have a Merchant Center Account before starting a campaign so you can promote your products with Google Shopping Ads and achieve the best performance.",
              "exactmetrics-premium"
            )), 1),
            createBaseVNode("p", {
              class: "exactmetrics-google-ads-welcome__disclaimer",
              innerHTML: strings.value.google_ads_policies
            }, null, 8, _hoisted_7$1)
          ]),
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("img", {
              class: "exactmetrics-google-ads-welcome__img",
              src: unref(welcomeImage),
              alt: "Google Ads Welcome"
            }, null, 8, _hoisted_9$1)
          ])
        ])
      ]);
    };
  }
};
const _hoisted_1 = { class: "exactmetrics-google-ads-lite" };
const _hoisted_2 = { class: "exactmetrics-upsell-overlay" };
const _hoisted_3 = { class: "exactmetrics-upsell-top" };
const _hoisted_4 = ["textContent"];
const _hoisted_5 = { class: "exactmetrics-upsell-content" };
const _hoisted_6 = { class: "exactmetrics-upsell-content__features" };
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["textContent"];
const _hoisted_9 = ["textContent"];
const _hoisted_10 = { class: "columns-2" };
const _hoisted_11 = ["textContent"];
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = { class: "exactmetrics-upsell-content-buttons" };
const _hoisted_14 = ["href", "textContent"];
const _hoisted_15 = { class: "exactmetrics-upsell-content__img" };
const _hoisted_16 = ["src"];
const _sfc_main = {
  __name: "SettingsGoogleAds-Lite",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const upgradeLink = computed(() => getUpgradeUrl("google-ads", "google-pax"));
    const upsellData = computed(() => ({
      mainheading: __("Google Ads", "exactmetrics-premium"),
      title: __(
        "Automatically set up Google Ads and conversion tracking inside ExactMetrics",
        "exactmetrics-premium"
      ),
      subheading: __("Get started with Google Ads in minutes", "exactmetrics-premium"),
      features: [
        __("Create campaigns", "exactmetrics-premium"),
        __("Track purchases", "exactmetrics-premium"),
        __("Track Form leads", "exactmetrics-premium"),
        __("No Code Set up", "exactmetrics-premium"),
        __("Easy Reporting", "exactmetrics-premium"),
        __("Special Offers", "exactmetrics-premium")
      ]
    }));
    const texts = computed(() => ({
      upsellButton: __("Upgrade & Unlock", "exactmetrics-premium"),
      subheading: __("Get started with Google Ads in minutes", "exactmetrics-premium"),
      description: __("What's inside Google Ads ? ", "exactmetrics-premium"),
      footer_notice: sprintf(
        __(
          "%1$sPlus%2$s, upgrading to Pro will unlock %1$sall%2$s advanced reports, tracking, and integrations. %3$sLearn more about Pro%4$s",
          "google-analytics-dashboard-for-wp"
        ),
        "<strong>",
        "</strong>",
        '<a target="_blank" href="' + upgradeLink.value + '">',
        "</a>"
      )
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, { class: "exactmetrics-upsell-ads-blur" }),
        createVNode(_sfc_main$2, {
          "model-value": true,
          mode: "gate",
          "teleport-to": false,
          backdrop: "transparent",
          "content-class": "exactmetrics-upsell-modal-shell",
          "overlay-class": "exactmetrics-upsell-modal-shell-overlay",
          dismissable: false
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("h3", {
                  textContent: toDisplayString(upsellData.value.mainheading)
                }, null, 8, _hoisted_4)
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("h3", {
                    textContent: toDisplayString(upsellData.value.title)
                  }, null, 8, _hoisted_7),
                  createBaseVNode("h4", {
                    textContent: toDisplayString(texts.value.subheading)
                  }, null, 8, _hoisted_8),
                  createBaseVNode("p", {
                    textContent: toDisplayString(texts.value.description)
                  }, null, 8, _hoisted_9),
                  createBaseVNode("ul", _hoisted_10, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(upsellData.value.features, (feature, index) => {
                      return openBlock(), createElementBlock("li", {
                        key: index,
                        textContent: toDisplayString(feature)
                      }, null, 8, _hoisted_11);
                    }), 128))
                  ]),
                  createBaseVNode("p", {
                    innerHTML: texts.value.footer_notice
                  }, null, 8, _hoisted_12),
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("a", {
                      href: upgradeLink.value,
                      class: "exactmetrics-button",
                      target: "_blank",
                      textContent: toDisplayString(texts.value.upsellButton)
                    }, null, 8, _hoisted_14)
                  ])
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("img", {
                    src: unref(welcomeImage),
                    alt: "Google Ads Welcome"
                  }, null, 8, _hoisted_16)
                ])
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const SettingsGoogleAdsLite = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-affbf6e3"]]);
export {
  SettingsGoogleAdsLite as default
};
