import { n as getUpgradeUrl } from "./ajax-Uw5S1uqk.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, F as Fragment, f as renderList, i as normalizeClass, s as createCommentVNode } from "./toastStore-CjmlShHI.js";
const _hoisted_1 = { class: "exactmetrics-page-title" };
const _hoisted_2 = { class: "exactmetrics-container" };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = { class: "exactmetrics-container" };
const _hoisted_5 = { class: "exactmetrics-lite-vs-pro-table" };
const _hoisted_6 = { class: "exactmetrics-features-table" };
const _hoisted_7 = { class: "exactmetrics-features-table-head" };
const _hoisted_8 = { class: "exactmetrics-features-table-header-cell" };
const _hoisted_9 = ["textContent"];
const _hoisted_10 = { class: "exactmetrics-features-table-header-cell" };
const _hoisted_11 = ["textContent"];
const _hoisted_12 = { class: "exactmetrics-features-table-body" };
const _hoisted_13 = { class: "exactmetrics-features-table-feature-title exactmetrics-features-table-row-cell" };
const _hoisted_14 = ["textContent"];
const _hoisted_15 = { class: "exactmetrics-features-table-row-cell" };
const _hoisted_16 = ["textContent"];
const _hoisted_17 = ["textContent"];
const _hoisted_18 = { class: "exactmetrics-features-table-row-cell" };
const _hoisted_19 = ["textContent"];
const _hoisted_20 = ["textContent"];
const _hoisted_21 = { class: "exactmetrics-features-table-footer" };
const _hoisted_22 = { class: "exactmetrics-lite-vs-pro-footer" };
const _hoisted_23 = ["textContent"];
const _hoisted_24 = ["innerHTML"];
const _hoisted_25 = ["href", "textContent"];
const _sfc_main = {
  __name: "exactmetrics-AboutTabLiteVsPro",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_lite_vs_pro = __("Lite vs Pro", "google-analytics-dashboard-for-wp");
    const text_lite = __("Lite", "google-analytics-dashboard-for-wp");
    const text_pro = __("Pro", "google-analytics-dashboard-for-wp");
    const text_get_upgrade = __(
      "Get ExactMetrics Pro Today and Unlock all the Powerful Features",
      "google-analytics-dashboard-for-wp"
    );
    const text_upgrade_subtitle = __(
      "Bonus: ExactMetrics Lite users get 50% off regular price, automatically applied at checkout.",
      "google-analytics-dashboard-for-wp"
    );
    const text_upgrade_pro = __("Upgrade to Pro", "google-analytics-dashboard-for-wp");
    const upgradeUrl = getUpgradeUrl("about-page", "lite-vs-pro");
    const features = [
      {
        title: __("Google Analytics Setup", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-bullseye",
        lite_text: __("Included", "google-analytics-dashboard-for-wp"),
        pro_text: __("Included", "google-analytics-dashboard-for-wp"),
        lite: true,
        pro: true
      },
      {
        title: __("Custom Google Analytics Link Tracking", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-links",
        lite: "partial",
        pro: true,
        lite_text: __("Standard Tracking", "google-analytics-dashboard-for-wp"),
        pro_text: __("Advanced Tracking", "google-analytics-dashboard-for-wp"),
        lite_subtitle: __(
          "Automatic tracking of outbound/external, file download, affiliate, email, and telephone links. Simple Custom Link Attribution markup for custom link tracking.",
          "google-analytics-dashboard-for-wp"
        ),
        pro_subtitle: __(
          "Scroll tracking as well as tracking on Google Accelerated Mobile Pages (AMP).",
          "google-analytics-dashboard-for-wp"
        )
      },
      {
        title: __("No-Code-Needed Tracking Features", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-tag",
        lite: "partial",
        pro: true,
        lite_text: __("Basic Tracking Options", "google-analytics-dashboard-for-wp"),
        lite_subtitle: __(
          "Cross-domain tracking, anonymization of IP addresses, automatic exclusion of administrators from tracking.",
          "google-analytics-dashboard-for-wp"
        ),
        pro_text: __("Advanced Tracking Options", "google-analytics-dashboard-for-wp"),
        pro_subtitle: __("", "google-analytics-dashboard-for-wp")
      },
      {
        title: __("eCommerce Tracking", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-ecommerce",
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-dashboard-for-wp"),
        pro_text: __("One-click eCommerce Tracking", "google-analytics-dashboard-for-wp"),
        pro_subtitle: __(
          "Automatically works with WooCommerce, Easy Digital Downloads, MemberPress, WPCharitable, MemberMouse, Restrict Content Pro, GiveWP, LifterLMS, C stores with no code or settings required.",
          "google-analytics-dashboard-for-wp"
        )
      },
      {
        title: __("EU Compliance & PII Protection", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-file-certificate",
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-dashboard-for-wp"),
        pro_text: __("GDPR Compliance", "google-analytics-dashboard-for-wp"),
        pro_subtitle: __(
          "Automatically removes PII (Personally Identifiable Information) and helps ensure GDPR compliance.",
          "google-analytics-dashboard-for-wp"
        )
      },
      {
        title: __("Forms Tracking", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-file-alt",
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-dashboard-for-wp"),
        pro_text: __("One-click Form Events Tracking", "google-analytics-dashboard-for-wp"),
        pro_subtitle: __(
          "Supports WPForms, Ninja Forms, Contact Form 7, Gravity Forms, and all standard HTML forms.",
          "google-analytics-dashboard-for-wp"
        )
      },
      {
        title: __("WordPress Admin Area Reports", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-tag",
        lite: "partial",
        pro: true,
        lite_text: __("Standard Reports", "google-analytics-dashboard-for-wp"),
        lite_subtitle: __("Overview reports for the last 30 days.", "google-analytics-dashboard-for-wp"),
        pro_text: __("Advanced Reports", "google-analytics-dashboard-for-wp"),
        pro_subtitle: __(
          "Traffic, Landing Pages, Geography, Devices, Publisher, eCommerce, Search Console, Custom Dimensions, Forms, and Real-Time reports with custom date ranges and comparisons",
          "google-analytics-dashboard-for-wp"
        )
      },
      {
        title: __("Popular Posts", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-chart-bar",
        lite: "partial",
        pro: true,
        lite_text: __("Basic Options", "google-analytics-dashboard-for-wp"),
        lite_subtitle: __(
          "Order by comments or shares, 3 simple theme choices.",
          "google-analytics-dashboard-for-wp"
        ),
        pro_text: __(
          "Dynamic Popular Posts & Popular Products",
          "google-analytics-dashboard-for-wp"
        ),
        pro_subtitle: __(
          "Based on Google Analytics traffic data, 20+ advanced themes, and WooCommerce integration.",
          "google-analytics-dashboard-for-wp"
        )
      },
      {
        title: __("Dashboard Widget", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-folder",
        lite: "partial",
        pro: true,
        lite_text: __("Basic Widget", "google-analytics-dashboard-for-wp"),
        lite_subtitle: __("Overview Report Synopsis.", "google-analytics-dashboard-for-wp"),
        pro_text: __("Advanced Dashboard Widget", "google-analytics-dashboard-for-wp"),
        pro_subtitle: __(
          "Complete Overview report, Publisher reports, and 6+ eCommerce reports.",
          "google-analytics-dashboard-for-wp"
        )
      },
      {
        title: __("Headline Analyzer", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-bullseye",
        lite_text: __("Included", "google-analytics-dashboard-for-wp"),
        pro_text: __("Included", "google-analytics-dashboard-for-wp"),
        lite: true,
        pro: true
      },
      {
        title: __("Email Summaries", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-envelope-solid",
        lite_text: __("Included", "google-analytics-dashboard-for-wp"),
        lite_subtitle: __("Monthly Email Summaries", "google-analytics-dashboard-for-wp"),
        pro_text: __("Included", "google-analytics-dashboard-for-wp"),
        pro_subtitle: __(
          "Receive weekly traffic reports and key insights directly in your inbox.",
          "google-analytics-dashboard-for-wp"
        ),
        lite: "partial",
        pro: true
      },
      {
        title: __("Publisher Reports", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-file-alt",
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-dashboard-for-wp"),
        pro_text: __(
          "Advanced Publisher Reports & Tracking",
          "google-analytics-dashboard-for-wp"
        ),
        pro_subtitle: __(
          "View Top Landing/Exit Pages, Top Links, Demographics & Interests, and more.",
          "google-analytics-dashboard-for-wp"
        )
      },
      {
        title: __("Custom Dimensions", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-flag",
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-dashboard-for-wp"),
        pro_text: __(
          "Complete Custom Dimensions Tracking",
          "google-analytics-dashboard-for-wp"
        ),
        pro_subtitle: __(
          "Track by Author, Post Type, Category, Tag, SEO Score, Focus Keyword, Logged-in User, User ID, and Published Time.",
          "google-analytics-dashboard-for-wp"
        )
      },
      {
        title: __("Video / Media Tracking", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-media",
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-dashboard-for-wp"),
        pro_text: __("Automatic Media Tracking", "google-analytics-dashboard-for-wp"),
        pro_subtitle: __(
          "Track engagement and key metrics for all videos that are hosted on YouTube, Vimeo, or uploaded as HTML5.",
          "google-analytics-dashboard-for-wp"
        )
      },
      {
        title: __("PPC Tracking", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-ads",
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-dashboard-for-wp"),
        pro_text: __("Zero Code Pixel Tracking", "google-analytics-dashboard-for-wp"),
        pro_subtitle: __(
          "Easily track campaign performance for Meta, Google, Microsoft, Snapchat, LinkedIn, TikTok, and Pinterest campaigns.",
          "google-analytics-dashboard-for-wp"
        )
      },
      {
        title: __("Support", "google-analytics-dashboard-for-wp"),
        icon: "monstericon-user-em",
        lite: "partial",
        pro: true,
        lite_text: __("Limited Support", "google-analytics-dashboard-for-wp"),
        pro_text: __("Priority Support", "google-analytics-dashboard-for-wp")
      }
    ];
    function checkClass(enabled) {
      if (enabled === true) return "exactmetrics-features-full";
      if (enabled === "partial") return "exactmetrics-features-partial";
      return "exactmetrics-features-none";
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("h2", {
              textContent: toDisplayString(unref(text_lite_vs_pro))
            }, null, 8, _hoisted_3)
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "exactmetrics-features-table-header-cell" }, null, -1)),
                createBaseVNode("div", _hoisted_8, [
                  _cache[0] || (_cache[0] = createBaseVNode("i", { class: "monstericon-flag" }, null, -1)),
                  createBaseVNode("span", {
                    textContent: toDisplayString(unref(text_lite))
                  }, null, 8, _hoisted_9)
                ]),
                createBaseVNode("div", _hoisted_10, [
                  _cache[1] || (_cache[1] = createBaseVNode("i", { class: "monstericon-rocket" }, null, -1)),
                  createBaseVNode("span", {
                    textContent: toDisplayString(unref(text_pro))
                  }, null, 8, _hoisted_11)
                ])
              ]),
              createBaseVNode("div", _hoisted_12, [
                (openBlock(), createElementBlock(Fragment, null, renderList(features, (feature, index) => {
                  return createBaseVNode("div", {
                    key: index,
                    class: "exactmetrics-features-table-row"
                  }, [
                    createBaseVNode("div", _hoisted_13, [
                      feature.icon ? (openBlock(), createElementBlock("i", {
                        key: 0,
                        class: normalizeClass(feature.icon)
                      }, null, 2)) : createCommentVNode("", true),
                      createBaseVNode("p", {
                        textContent: toDisplayString(feature.title)
                      }, null, 8, _hoisted_14)
                    ]),
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("p", {
                        class: normalizeClass(checkClass(feature.lite))
                      }, [
                        feature.lite_text ? (openBlock(), createElementBlock("strong", {
                          key: 0,
                          textContent: toDisplayString(feature.lite_text)
                        }, null, 8, _hoisted_16)) : createCommentVNode("", true),
                        feature.lite_subtitle ? (openBlock(), createElementBlock("span", {
                          key: 1,
                          textContent: toDisplayString(feature.lite_subtitle)
                        }, null, 8, _hoisted_17)) : createCommentVNode("", true)
                      ], 2)
                    ]),
                    createBaseVNode("div", _hoisted_18, [
                      createBaseVNode("p", {
                        class: normalizeClass(checkClass(feature.pro))
                      }, [
                        feature.pro_text ? (openBlock(), createElementBlock("strong", {
                          key: 0,
                          textContent: toDisplayString(feature.pro_text)
                        }, null, 8, _hoisted_19)) : createCommentVNode("", true),
                        feature.pro_subtitle ? (openBlock(), createElementBlock("span", {
                          key: 1,
                          textContent: toDisplayString(feature.pro_subtitle)
                        }, null, 8, _hoisted_20)) : createCommentVNode("", true)
                      ], 2)
                    ])
                  ]);
                }), 64))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_21, [
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("h3", {
                textContent: toDisplayString(unref(text_get_upgrade))
              }, null, 8, _hoisted_23),
              createBaseVNode("p", { innerHTML: unref(text_upgrade_subtitle) }, null, 8, _hoisted_24),
              createBaseVNode("a", {
                class: "exactmetrics-button exactmetrics-button-green",
                target: "_blank",
                rel: "noopener",
                href: unref(upgradeUrl),
                textContent: toDisplayString(unref(text_upgrade_pro))
              }, null, 8, _hoisted_25)
            ])
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
