import { _ as _sfc_main$3 } from "./Modal-CzneZfPu.js";
import { u as useLicenseStore } from "./license-C6i4W44s.js";
import { n as getUpgradeUrl, o as getUrl, p as isNetworkAdmin } from "./ajax-Uw5S1uqk.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, f as renderList, n as normalizeStyle, i as normalizeClass, s as createCommentVNode, t as toDisplayString, j as ref, u as unref, b as createVNode, D as withCtx, m as computed } from "./toastStore-CjmlShHI.js";
import { _ as _sfc_main$4 } from "./ContentIconList-Cbwc93uo.js";
import { _ as _sfc_main$2 } from "./LaunchWizardButton-BuPkh4Ew.js";
import "./useNotices-BosR4uY_.js";
import "./TheAppHeader-BI_ZrtNW.js";
import "./addons-DcCBQDEz.js";
const _hoisted_1$1 = { class: "exactmetrics-testimonials-slider" };
const _hoisted_2$1 = { class: "exactmetrics-testimonials-slides" };
const _hoisted_3$1 = {
  key: 0,
  class: "exactmetrics-testimonial-image"
};
const _hoisted_4$1 = { class: "exactmetrics-testimonial-text" };
const _hoisted_5$1 = ["textContent"];
const _hoisted_6$1 = ["textContent"];
const _sfc_main$1 = {
  __name: "AboutTestimonialsSlider",
  props: {
    testimonials: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const currentSlide = ref(0);
    function nextSlide() {
      currentSlide.value = (currentSlide.value + 1) % props.testimonials.length;
    }
    function prevSlide() {
      currentSlide.value = (currentSlide.value + props.testimonials.length - 1) % props.testimonials.length;
    }
    function position(index) {
      if (index === currentSlide.value) return 0;
      if (index === (currentSlide.value + 1) % props.testimonials.length) return 1;
      return -1;
    }
    function slideStyle(index) {
      return `transform: translate3d(${position(index) * 100}%, 0, 0);`;
    }
    function slideClass(index) {
      let cls = "exactmetrics-testimonials-slide";
      if (index === currentSlide.value) {
        cls += " exactmetrics-testimonials-slide-active";
      }
      return cls;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("button", {
          class: "exactmetrics-testimonials-slider-control exactmetrics-testimonials-slider-control-left",
          onClick: prevSlide
        }, [..._cache[0] || (_cache[0] = [
          createBaseVNode("i", { class: "monstericon-chevron-up" }, null, -1)
        ])]),
        createBaseVNode("button", {
          class: "exactmetrics-testimonials-slider-control exactmetrics-testimonials-slider-control-right",
          onClick: nextSlide
        }, [..._cache[1] || (_cache[1] = [
          createBaseVNode("i", { class: "monstericon-chevron-up" }, null, -1)
        ])]),
        createBaseVNode("div", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.testimonials, (testimonial, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: normalizeClass(slideClass(index)),
              style: normalizeStyle(slideStyle(index))
            }, [
              testimonial.image ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                createBaseVNode("div", {
                  class: normalizeClass(`exactmetrics-bg-img ${testimonial.image}`)
                }, null, 2)
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_4$1, [
                createBaseVNode("p", {
                  textContent: toDisplayString(testimonial.text)
                }, null, 8, _hoisted_5$1),
                createBaseVNode("p", {
                  class: "exactmetrics-testimonial-text-author",
                  textContent: toDisplayString(testimonial.author)
                }, null, 8, _hoisted_6$1)
              ])
            ], 6);
          }), 128))
        ])
      ]);
    };
  }
};
const _hoisted_1 = { class: "exactmetrics-about-page-top" };
const _hoisted_2 = { class: "exactmetrics-container" };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = { class: "exactmetrics-about-top-button" };
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = { class: "exactmetrics-welcome-overlay-inner" };
const _hoisted_9 = { class: "exactmetrics-welcome-overlay-content" };
const _hoisted_10 = {
  key: 0,
  width: "1280",
  height: "720",
  src: "https://www.youtube.com/embed/4GZ-IgZssao?autoplay=1&modestbranding=1&showinfo=0&rel=0&fs=1",
  frameborder: "0",
  allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
  allowfullscreen: ""
};
const _hoisted_11 = { class: "exactmetrics-container exactmetrics-about-middle-title" };
const _hoisted_12 = ["textContent"];
const _hoisted_13 = ["textContent"];
const _hoisted_14 = {
  key: 0,
  class: "exactmetrics-wide-purple"
};
const _hoisted_15 = { class: "exactmetrics-container" };
const _hoisted_16 = { class: "exactmetrics-about-upgrade-box-flex" };
const _hoisted_17 = { class: "exactmetrics-about-pro-plan-box" };
const _hoisted_18 = ["textContent"];
const _hoisted_19 = ["textContent"];
const _hoisted_20 = ["href", "textContent"];
const _hoisted_21 = { class: "exactmetrics-about-pro-checkboxes" };
const _hoisted_22 = ["textContent"];
const _hoisted_23 = { class: "exactmetrics-two-column" };
const _hoisted_24 = { class: "exactmetrics-list-check" };
const _hoisted_25 = ["innerHTML"];
const _hoisted_26 = { class: "exactmetrics-list-check" };
const _hoisted_27 = ["innerHTML"];
const _hoisted_28 = { class: "exactmetrics-container" };
const _hoisted_29 = ["textContent"];
const _hoisted_30 = { class: "exactmetrics-about-documentation" };
const _hoisted_31 = {
  key: 0,
  class: "exactmetrics-separator"
};
const _hoisted_32 = { class: "exactmetrics-about-docs-image" };
const _hoisted_33 = { class: "exactmetrics-about-docs-text" };
const _hoisted_34 = ["innerHTML"];
const _hoisted_35 = ["innerHTML"];
const _hoisted_36 = ["href", "textContent"];
const _sfc_main = {
  __name: "exactmetrics-AboutTabGettingStarted",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const productName = "ExactMetrics";
    const welcome_video = ref(false);
    function onModelValue(value) {
      if (!value) {
        welcome_video.value = false;
      }
    }
    const text_welcome = __("Welcome to", "google-analytics-dashboard-for-wp");
    const text_thank_you = sprintf(
      __(
        "Thank you for choosing ExactMetrics -%s The Most Powerful WordPress Analytics Plugin",
        "google-analytics-dashboard-for-wp"
      ),
      "<br />"
    );
    const text_efortless = sprintf(
      __(
        "%1$sExactMetrics%2$s makes it “effortless” to setup Google Analytics in WordPress, the RIGHT Way. You can watch the video tutorial or use our 3 minute setup wizard.",
        "google-analytics-dashboard-for-wp"
      ),
      "<b>",
      "</b>"
    );
    const text_onboarding_note = sprintf(
      __(
        "Note: You will be transfered to %1$s.com to complete the setup wizard.",
        "google-analytics-dashboard-for-wp"
      ),
      productName
    );
    const text_wizard_button = __("Launch the wizard!", "google-analytics-dashboard-for-wp");
    const text_features_addons = __(
      "ExactMetrics Features & Addons",
      "google-analytics-dashboard-for-wp"
    );
    const text_features_addons_subtitle = __(
      "Here are the features that make ExactMetrics the most powerful and user-friendly WordPress analytics plugin in the market.",
      "google-analytics-dashboard-for-wp"
    );
    const text_get_pro = __("Upgrade to PRO", "google-analytics-dashboard-for-wp");
    const text_pro_plan = __("Pro Plan", "google-analytics-dashboard-for-wp");
    const text_per_year = __("per year", "google-analytics-dashboard-for-wp");
    const text_upgrade_now = __("Upgrade Now", "google-analytics-dashboard-for-wp");
    const text_guides = __("Guides and Documentation:", "google-analytics-dashboard-for-wp");
    const text_documentation = __("Read Documentation", "google-analytics-dashboard-for-wp");
    const check_list = [
      __("eCommerce Tracking", "google-analytics-dashboard-for-wp"),
      __("Custom Dimensions", "google-analytics-dashboard-for-wp"),
      __("Form Tracking", "google-analytics-dashboard-for-wp"),
      __("AMP Support", "google-analytics-dashboard-for-wp"),
      __("Author Tracking", "google-analytics-dashboard-for-wp")
    ];
    const check_list_2 = [
      __("EU Compliance Addon", "google-analytics-dashboard-for-wp"),
      __("Real Time Report", "google-analytics-dashboard-for-wp"),
      __("Search Console", "google-analytics-dashboard-for-wp"),
      __("Custom Date Ranges", "google-analytics-dashboard-for-wp")
    ];
    const upgrade_url = getUpgradeUrl("about-page", "upgrade-upsell");
    const icons_list = [
      {
        icon: "monstericon-chart-bar",
        text: sprintf(
          __(
            "%1$sGoogle Analytics Tracking%2$s – Setup google analytics website tracking across devices and campaigns with just a few clicks (without any code).",
            "google-analytics-dashboard-for-wp"
          ),
          "<b>",
          "</b>"
        )
      },
      {
        icon: "monstericon-file-alt-em",
        text: sprintf(
          __(
            "%1$sGoogle Analytics Dashboard%2$s - See your website analytics report right inside your WordPress dashboard with actionable insights.",
            "google-analytics-dashboard-for-wp"
          ),
          "<b>",
          "</b>"
        )
      },
      {
        icon: "monstericon-clock",
        text: sprintf(
          __(
            "%1$sReal-time Stats%2$s - Get real-time stats inside WordPress to see who is online, what are they doing and more.",
            "google-analytics-dashboard-for-wp"
          ),
          "<b>",
          "</b>"
        )
      },
      {
        icon: "monstericon-check-circle-em",
        text: sprintf(
          __(
            "%1$sEnhanced eCommerce Tracking%2$s - 1-click Google Analyticks Enhanced Ecommerce trackin for WooCommerce, Easy Digital Download & MemberPress.",
            "google-analytics-dashboard-for-wp"
          ),
          "<b>",
          "</b>"
        )
      },
      {
        icon: "monstericon-shopping-bag",
        text: sprintf(
          __(
            "%1$sPage Level Analytics%2$s - Get detailed stats for each post and page, so you can see the most popular posts, pages, and sections of your site.",
            "google-analytics-dashboard-for-wp"
          ),
          "<b>",
          "</b>"
        )
      },
      {
        icon: "monstericon-links",
        text: sprintf(
          __(
            "%1$sAffiliate Link & Ads Tracking%2$s - Automatically track clicks on your affiliate links, banner ads, and other outbound links with our link tracking.",
            "google-analytics-dashboard-for-wp"
          ),
          "<b>",
          "</b>"
        )
      },
      {
        icon: "monstericon-unlock",
        text: sprintf(
          __(
            "%1$sEU Compilance (GDPR Friendly)%2$s - Make Google Analytics compliant with GDPR and other privacy regulations automatically.",
            "google-analytics-dashboard-for-wp"
          ),
          "<b>",
          "</b>"
        )
      },
      {
        icon: "monstericon-cog",
        text: sprintf(
          __(
            "%1$sCustom Dimensions%2$s - Setup tracking for authors, tags, searches, custom post type, users, and other events with 1-click.",
            "google-analytics-dashboard-for-wp"
          ),
          "<b>",
          "</b>"
        )
      },
      {
        icon: "",
        text: sprintf(
          __("%1$sSee All Features%2$s", "google-analytics-dashboard-for-wp"),
          `<a target="_blank" href="${getUrl("about-page", "features", "https://www.exactmetrics.com/features/")}">`,
          '<i class="monstericon-long-arrow-right-light"></i></a>'
        )
      }
    ];
    const testimonials = [
      {
        image: "exactmetrics-about-testimonial-avatar-1",
        text: __(
          "This is absolutely, positively, one of the TOP plugins to install on your WP site. There is no better way to quickly gauge traffic for spikes, surges, and consistency. I installed this on over a dozen WordPress installations and counting, thank you for an outstanding app!",
          "google-analytics-dashboard-for-wp"
        ),
        author: __("Daniel Monaghan - Experienced", "google-analytics-dashboard-for-wp")
      },
      {
        image: "exactmetrics-about-testimonial-avatar-2",
        text: __(
          "Very simple to configure and the results are very clearly displayed. So much easier for clients to view than in their own analytics account! Delighted with it.",
          "google-analytics-dashboard-for-wp"
        ),
        author: __("Naomi Spirit - From This Day", "google-analytics-dashboard-for-wp")
      },
      {
        image: "exactmetrics-about-testimonial-avatar-3",
        text: __(
          "Love this plugin! It’s got powerful customization options, it’s easy to use, there’s good documentation, and if all that’s not enough, ExactMetrics is quick to provide support. Thanks for this wonderful plugin!",
          "google-analytics-dashboard-for-wp"
        ),
        author: __("Julie Dupuis - Faraway Land Travel", "google-analytics-dashboard-for-wp")
      }
    ];
    const docs_rows = [
      {
        image: "exactmetrics-bg-img exactmetrics-about-docs-1",
        title: __("How to Connect to Google Analytics", "google-analytics-dashboard-for-wp"),
        text: __(
          "After you install ExactMetrics, you’ll need to connect your WordPress site with your Google Analytics account. ExactMetrics makes the process easy, with no coding required.",
          "google-analytics-dashboard-for-wp"
        ),
        link: getUrl(
          "about-page",
          "documentation",
          "https://www.exactmetrics.com/docs/connect-google-analytics/"
        )
      },
      {
        image: "exactmetrics-bg-img exactmetrics-about-docs-2",
        title: __(
          "Guide and Checklist for Advanced Insights",
          "google-analytics-dashboard-for-wp"
        ),
        text: __(
          "Our goal is to make it as easy as possible for you to measure and track your stats so you can grow your business. This easy-to-follow guide and checklist will get you set up with ExactMetrics’ advanced tracking.",
          "google-analytics-dashboard-for-wp"
        ),
        link: getUrl(
          "about-page",
          "documentation",
          "https://www.exactmetrics.com/docs/getting-started-guide-checklist/"
        )
      },
      {
        image: "exactmetrics-bg-img exactmetrics-about-docs-3",
        title: __("GDPR Guide", "google-analytics-dashboard-for-wp"),
        text: __(
          "Compliance with European data laws including GDPR can be confusing and time-consuming. In order to help ExactMetrics users comply with these laws, we’ve created an addon that automates a lot of the necessary configuration changes for you. ",
          "google-analytics-dashboard-for-wp"
        ),
        link: getUrl(
          "about-page",
          "documentation",
          "https://www.exactmetrics.com/docs/getting-started-with-the-eu-compliance-addon/"
        )
      },
      {
        image: "exactmetrics-bg-img exactmetrics-about-docs-4",
        title: __(
          "How to Install and Activate ExactMetrics Addons",
          "google-analytics-dashboard-for-wp"
        ),
        text: __(
          "The process for installing and activating addons is quick and easy after you install the ExactMetrics plugin. In this guide we’ll walk you through the process, step by step.",
          "google-analytics-dashboard-for-wp"
        ),
        link: getUrl(
          "about-page",
          "documentation",
          "https://www.exactmetrics.com/docs/how-to-install-exactmetrics-addon/"
        )
      },
      {
        image: "exactmetrics-bg-img exactmetrics-about-docs-5",
        title: __("Enabling eCommerce Tracking and Reports", "google-analytics-dashboard-for-wp"),
        text: __(
          "Want to track your eCommerce sales data for your WooCommerce, MemberPress, or Easy Digital Downloads store with ExactMetrics? In this guide, we’ll show you how to enable eCommerce tracking in Google Analytics in just a few clicks.",
          "google-analytics-dashboard-for-wp"
        ),
        link: getUrl(
          "about-page",
          "documentation",
          "https://www.exactmetrics.com/docs/enable-ecommerce-tracking/"
        )
      }
    ];
    const licenseStore = useLicenseStore();
    const showLitePro = computed(() => {
      isNetworkAdmin() ? licenseStore.license_network?.type ?? "" : licenseStore.license?.type ?? "";
      return true;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("h3", {
              textContent: toDisplayString(unref(text_welcome))
            }, null, 8, _hoisted_3),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "exactmetrics-bg-img exactmetrics-em-logo-color" }, null, -1)),
            createBaseVNode("h2", { innerHTML: unref(text_thank_you) }, null, 8, _hoisted_4),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_sfc_main$2, {
                "button-class": "exactmetrics-button exactmetrics-button-large",
                "button-text": unref(text_wizard_button)
              }, null, 8, ["button-text"]),
              createBaseVNode("p", { innerHTML: unref(text_efortless) }, null, 8, _hoisted_6),
              createBaseVNode("p", {
                class: "exactmetrics-disclaimer-note",
                textContent: toDisplayString(unref(text_onboarding_note))
              }, null, 8, _hoisted_7)
            ])
          ]),
          createBaseVNode("div", {
            class: "exactmetrics-bg-img exactmetrics-about-getting-started-video",
            onClick: _cache[0] || (_cache[0] = ($event) => welcome_video.value = true)
          }),
          createVNode(_sfc_main$3, {
            mode: "dialog",
            "content-class": "exactmetrics-dialog-shell",
            "overlay-class": "exactmetrics-dialog-shell-overlay exactmetrics-welcome-overlay",
            "model-value": welcome_video.value,
            dismissable: true,
            "onUpdate:modelValue": onModelValue
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("button", {
                  class: "exactmetrics-overlay-close",
                  onClick: _cache[1] || (_cache[1] = ($event) => welcome_video.value = false)
                }, [..._cache[3] || (_cache[3] = [
                  createBaseVNode("span", { class: "monstericon-times" }, null, -1)
                ])]),
                createBaseVNode("div", _hoisted_9, [
                  welcome_video.value ? (openBlock(), createElementBlock("iframe", _hoisted_10)) : createCommentVNode("", true)
                ])
              ])
            ]),
            _: 1
          }, 8, ["model-value"])
        ]),
        createBaseVNode("div", _hoisted_11, [
          createBaseVNode("h2", {
            textContent: toDisplayString(unref(text_features_addons))
          }, null, 8, _hoisted_12),
          createBaseVNode("p", {
            textContent: toDisplayString(unref(text_features_addons_subtitle))
          }, null, 8, _hoisted_13)
        ]),
        createVNode(_sfc_main$4, { "upsell-list": icons_list }),
        showLitePro.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("span", {
                  textContent: toDisplayString(unref(text_pro_plan))
                }, null, 8, _hoisted_18),
                _cache[4] || (_cache[4] = createBaseVNode("span", { class: "exactmetrics-price-large" }, "$199", -1)),
                createBaseVNode("span", {
                  class: "exactmetrics-price-term",
                  textContent: toDisplayString(unref(text_per_year))
                }, null, 8, _hoisted_19),
                createBaseVNode("a", {
                  target: "_blank",
                  href: unref(upgrade_url),
                  class: "exactmetrics-button",
                  textContent: toDisplayString(unref(text_upgrade_now))
                }, null, 8, _hoisted_20)
              ]),
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("h3", {
                  textContent: toDisplayString(unref(text_get_pro))
                }, null, 8, _hoisted_22),
                createBaseVNode("div", _hoisted_23, [
                  createBaseVNode("div", _hoisted_24, [
                    createBaseVNode("ul", null, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(check_list, (item, index) => {
                        return createBaseVNode("li", {
                          key: index,
                          innerHTML: item
                        }, null, 8, _hoisted_25);
                      }), 64))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("ul", null, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(check_list_2, (item, index) => {
                        return createBaseVNode("li", {
                          key: index,
                          innerHTML: item
                        }, null, 8, _hoisted_27);
                      }), 64))
                    ])
                  ])
                ])
              ])
            ]),
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
            createVNode(_sfc_main$1, { testimonials })
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_28, [
          createBaseVNode("h3", {
            textContent: toDisplayString(unref(text_guides))
          }, null, 8, _hoisted_29),
          createBaseVNode("div", _hoisted_30, [
            (openBlock(), createElementBlock(Fragment, null, renderList(docs_rows, (row, index) => {
              return createBaseVNode("div", {
                key: index,
                class: "exactmetrics-about-docs-row"
              }, [
                index > 0 ? (openBlock(), createElementBlock("div", _hoisted_31)) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_32, [
                  createBaseVNode("div", {
                    class: normalizeClass(row.image)
                  }, null, 2)
                ]),
                createBaseVNode("div", _hoisted_33, [
                  createBaseVNode("h3", {
                    innerHTML: row.title
                  }, null, 8, _hoisted_34),
                  createBaseVNode("p", {
                    innerHTML: row.text
                  }, null, 8, _hoisted_35),
                  createBaseVNode("a", {
                    href: row.link,
                    target: "_blank",
                    class: "exactmetrics-button",
                    textContent: toDisplayString(unref(text_documentation))
                  }, null, 8, _hoisted_36)
                ])
              ]);
            }), 64))
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
