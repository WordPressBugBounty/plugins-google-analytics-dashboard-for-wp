const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chunks/exactmetrics-SettingsNetwork-C6aikE8Y.js","./chunks/ajax-Uw5S1uqk.js","./chunks/toastStore-CjmlShHI.js","./chunks/license-C6i4W44s.js","./chunks/useNotices-BosR4uY_.js","./chunks/SettingsBlock-Bsp6Fu6H.js","./chunks/SlideDownUp-69HctpXG.js","./chunks/_plugin-vue_export-helper-1tPrXgE0.js","../css/main-exactmetrics-DCic6-mZ.css","./chunks/SettingsInputCheckbox-B6Cq-zQE.js","./chunks/settings-BVkGy_Cz.js","./chunks/exactmetrics-Lite-BcFa0OAR.js","./chunks/TheAppHeader-BI_ZrtNW.js","./chunks/addons-DcCBQDEz.js","./chunks/Modal-CzneZfPu.js","../css/main-exactmetrics-B5HoD7CV.css","../css/main-exactmetrics-CBx8Q5I2.css","./chunks/SettingsInfoTooltip-DGz1RdtP.js","./chunks/exactmetrics-SettingsInputAuthenticate-Lite-DNJt1JSz.js","./chunks/auth-Rcit4ziJ.js","./chunks/ContentIntroFullWidth-Cv-KKuIE.js","./chunks/LaunchWizardButton-BuPkh4Ew.js","../css/main-exactmetrics-D39LKRVD.css","./chunks/AddonsPage-BNLt9vJG.js","../css/main-exactmetrics-CGAGRmkt.css","./chunks/AboutShell-JtttF2s8.js","./chunks/exactmetrics-AboutTabAboutUs-Bjip9v-C.js","./chunks/exactmetrics-AboutTabGettingStarted-CcpfPWuz.js","./chunks/ContentIconList-Cbwc93uo.js","./chunks/exactmetrics-AboutTabLiteVsPro-r0GeP750.js"])))=>i.map(i=>d[i]);
import { C as watch, y as onMounted, r as resolveComponent, o as openBlock, c as createElementBlock, F as Fragment, b as createVNode, D as withCtx, s as createCommentVNode, a as createBaseVNode, E as createBlock, i as normalizeClass, m as computed, R as zo, d as createApp } from "./chunks/toastStore-CjmlShHI.js";
import { b as useRoute, e as _sfc_main$3, _ as _sfc_main$5, c as createRouter, a as createWebHashHistory } from "./chunks/TheAppHeader-BI_ZrtNW.js";
import { k as isPro, _ as __vitePreload, s as setupPinia } from "./chunks/ajax-Uw5S1uqk.js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$4, c as _sfc_main$6, u as useAuth } from "./chunks/exactmetrics-Lite-BcFa0OAR.js";
import { c as useAddonsStore, a as useToast, _ as _sfc_main$7 } from "./chunks/addons-DcCBQDEz.js";
import { u as useSettingsStore } from "./chunks/settings-BVkGy_Cz.js";
import { u as useLicenseStore } from "./chunks/license-C6i4W44s.js";
import { a as authApi } from "./chunks/auth-Rcit4ziJ.js";
import "./chunks/useNotices-BosR4uY_.js";
import "./chunks/Modal-CzneZfPu.js";
const _hoisted_1 = {
  key: 0,
  class: "exactmetrics-em-nav-inline"
};
const _hoisted_2 = {
  key: 1,
  class: "exactmetrics-navigation-bar"
};
const _hoisted_3 = { class: "exactmetrics-container" };
const _hoisted_4 = { class: "exactmetrics-main-navigation" };
const _sfc_main = {
  __name: "AppNetwork",
  setup(__props) {
    const route = useRoute();
    const settingsStore = useSettingsStore();
    const licenseStore = useLicenseStore();
    const addonsStore = useAddonsStore();
    const { updateAuth } = useAuth();
    const { loadingToast, closeToast } = useToast();
    const routeClass = computed(() => {
      return "exactmetrics-admin-page exactmetrics-settings-panel exactmetrics-settings-panel-network exactmetrics-path-" + route.name;
    });
    const isAddonsRoute = computed(() => route.name === "addons");
    const isAboutRoute = computed(() => typeof route.name === "string" && route.name.startsWith("about"));
    const showSave = computed(() => !isAddonsRoute.value && !isAboutRoute.value);
    let cached_settings_link = null;
    let cached_addons_link = null;
    let cached_about_link = null;
    function updateAdminMenuHighlight(name) {
      [cached_settings_link, cached_addons_link, cached_about_link].forEach((el) => {
        if (el) el.parentElement.classList.remove("current");
      });
      if (name === "addons" && cached_addons_link) {
        cached_addons_link.parentElement.classList.add("current");
      } else if (typeof name === "string" && name.indexOf("about") >= 0 && cached_about_link) {
        cached_about_link.parentElement.classList.add("current");
      } else if (cached_settings_link) {
        cached_settings_link.parentElement.classList.add("current");
      }
    }
    watch(() => route.name, (name) => updateAdminMenuHighlight(name));
    onMounted(() => {
      const settings_links = document.querySelectorAll('[href="admin.php?page=exactmetrics_network"]');
      cached_settings_link = settings_links[settings_links.length > 1 ? 1 : 0] || null;
      cached_addons_link = document.querySelector('[href*="exactmetrics_network#/addons"]');
      cached_about_link = document.querySelector('[href*="exactmetrics_network#/about"]');
      updateAdminMenuHighlight(route.name);
      settings_links.forEach((link) => {
        if (!link.href.includes("#")) {
          link.href = link.href + "#/";
        }
      });
    });
    onMounted(async () => {
      loadingToast();
      try {
        await Promise.all([
          settingsStore.fetchSettings(),
          authApi.fetchAuth().then((data) => {
            if (data) updateAuth(data);
          }).catch(() => {
          }),
          addonsStore.fetchAddonsAction().catch(() => {
          }),
          isPro() ? licenseStore.fetchLicenseData().catch(() => {
          }) : Promise.resolve()
        ]);
      } finally {
        closeToast();
      }
    });
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(routeClass.value)
      }, [
        (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(_sfc_main$5, null, {
            "header-right": withCtx(() => [
              isAboutRoute.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(_sfc_main$1)
              ])) : createCommentVNode("", true),
              isAddonsRoute.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("nav", _hoisted_4, [
                    createVNode(_sfc_main$2)
                  ])
                ])
              ])) : createCommentVNode("", true),
              createVNode(_sfc_main$3),
              showSave.value ? (openBlock(), createBlock(_sfc_main$4, { key: 2 })) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          isAddonsRoute.value ? (openBlock(), createBlock(_sfc_main$6, { key: 0 })) : createCommentVNode("", true)
        ], 64)),
        createVNode(_sfc_main$7),
        createVNode(_component_RouterView)
      ], 2);
    };
  }
};
const { __ } = wp.i18n;
const SettingsNetwork = () => __vitePreload(() => import("./chunks/exactmetrics-SettingsNetwork-C6aikE8Y.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]) : void 0, import.meta.url);
const AddonsPage = () => __vitePreload(() => import("./chunks/AddonsPage-BNLt9vJG.js"), true ? __vite__mapDeps([23,12,2,1,13,4,14,15,3,7,24]) : void 0, import.meta.url);
const AboutShell = () => __vitePreload(() => import("./chunks/AboutShell-JtttF2s8.js"), true ? __vite__mapDeps([25,2]) : void 0, import.meta.url);
const AboutTabAboutUs = () => __vitePreload(() => import("./chunks/exactmetrics-AboutTabAboutUs-Bjip9v-C.js"), true ? __vite__mapDeps([26,13,4,2,1,14,15,7,12,3]) : void 0, import.meta.url);
const AboutTabGettingStarted = () => __vitePreload(() => import("./chunks/exactmetrics-AboutTabGettingStarted-CcpfPWuz.js"), true ? __vite__mapDeps([27,14,2,15,3,1,4,28,12,21,13]) : void 0, import.meta.url);
const AboutTabLiteVsPro = () => __vitePreload(() => import("./chunks/exactmetrics-AboutTabLiteVsPro-r0GeP750.js"), true ? __vite__mapDeps([29,1,2]) : void 0, import.meta.url);
const routes = [
  {
    path: "/",
    name: "general",
    component: SettingsNetwork,
    meta: {
      title: __("Network Settings", "google-analytics-dashboard-for-wp")
    }
  },
  {
    path: "/addons",
    name: "addons",
    component: AddonsPage,
    meta: {
      title: __("Addons", "google-analytics-dashboard-for-wp")
    }
  },
  {
    path: "/about",
    component: AboutShell,
    meta: {
      title: __("About Us", "google-analytics-dashboard-for-wp")
    },
    children: [
      {
        path: "",
        name: "about-us",
        component: AboutTabAboutUs,
        meta: { title: __("About Us", "google-analytics-dashboard-for-wp") }
      },
      {
        path: "getting-started",
        name: "about-getting-started",
        component: AboutTabGettingStarted,
        meta: { title: __("Getting Started", "google-analytics-dashboard-for-wp") }
      },
      {
        path: "lite-vs-pro",
        name: "about-lite-vs-pro",
        component: AboutTabLiteVsPro,
        meta: { title: __("Lite vs Pro", "google-analytics-dashboard-for-wp") }
      }
    ]
  },
  // Catch-all redirect - MUST be last
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  }
});
const vfm = zo();
const app = createApp(_sfc_main);
app.use(router);
app.use(vfm);
setupPinia(app);
const mountEl = document.getElementById("exactmetrics-vue-network-settings");
if (mountEl) {
  app.mount(mountEl);
}
