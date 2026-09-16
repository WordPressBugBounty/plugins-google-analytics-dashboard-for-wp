const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chunks/exactmetrics-SettingsNetwork-BYf-kexi.js","./chunks/ajax-C95mIScv.js","./chunks/AppOverlays-DcHCG-3q.js","../css/main-exactmetrics-BqoTIBUO.css","./chunks/license-DUHYGbJw.js","./chunks/useNotices-CnkWF1QQ.js","./chunks/SettingsBlock-NEYQEufF.js","./chunks/SlideDownUp-CwpnNiBe.js","../css/main-exactmetrics-DCic6-mZ.css","./chunks/SettingsInputCheckbox-Cx_iQSia.js","./chunks/settings-DTy21RNP.js","./chunks/exactmetrics-Lite-DH2nBdAK.js","./chunks/TheAppHeader-CjMtIms2.js","./chunks/addons-XnbAIJ1T.js","./chunks/Modal-BJTydlxw.js","../css/main-exactmetrics-D2bVvWEu.css","../css/main-exactmetrics-UjzfbH-j.css","./chunks/SettingsInfoTooltip-CPgssEEc.js","./chunks/exactmetrics-SettingsInputAuthenticate-Lite-jk2wMOeK.js","./chunks/auth-BcfDkXb2.js","./chunks/ContentIntroFullWidth-C4Bj4CBe.js","./chunks/LaunchWizardButton-DiPYJ8h0.js","../css/main-exactmetrics-W3Ldxpx8.css","./chunks/AddonsPage-BBzrv7f-.js","../css/main-exactmetrics-CGAGRmkt.css","./chunks/AboutShell-CD148f22.js","./chunks/exactmetrics-AboutTabAboutUs-CjXOk_Ep.js","./chunks/exactmetrics-AboutTabGettingStarted-DVzl2g9I.js","./chunks/ContentIconList-CCYUC-Qw.js","./chunks/exactmetrics-AboutTabLiteVsPro-DIvPc4_F.js"])))=>i.map(i=>d[i]);
import { D as watch, z as onMounted, r as resolveComponent, o as openBlock, c as createElementBlock, F as Fragment, b as createVNode, E as withCtx, v as createCommentVNode, a as createBaseVNode, G as createBlock, _ as _sfc_main$8, j as normalizeClass, p as computed, d as createApp, i as installOverlays } from "./chunks/AppOverlays-DcHCG-3q.js";
import { b as useRoute, e as _sfc_main$3, _ as _sfc_main$5, c as createRouter, a as createWebHashHistory } from "./chunks/TheAppHeader-CjMtIms2.js";
import { k as isPro, _ as __vitePreload, s as setupPinia } from "./chunks/ajax-C95mIScv.js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$4, c as _sfc_main$6, u as useAuth } from "./chunks/exactmetrics-Lite-DH2nBdAK.js";
import { c as useAddonsStore, a as useToast, _ as _sfc_main$7 } from "./chunks/addons-XnbAIJ1T.js";
import { u as useSettingsStore } from "./chunks/settings-DTy21RNP.js";
import { u as useLicenseStore } from "./chunks/license-DUHYGbJw.js";
import { a as authApi } from "./chunks/auth-BcfDkXb2.js";
import "./chunks/useNotices-CnkWF1QQ.js";
import "./chunks/Modal-BJTydlxw.js";
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
      addonsStore.enableAddonNotices();
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
        createVNode(_component_RouterView),
        createVNode(_sfc_main$8)
      ], 2);
    };
  }
};
const { __ } = wp.i18n;
const SettingsNetwork = () => __vitePreload(() => import("./chunks/exactmetrics-SettingsNetwork-BYf-kexi.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]) : void 0, import.meta.url);
const AddonsPage = () => __vitePreload(() => import("./chunks/AddonsPage-BBzrv7f-.js"), true ? __vite__mapDeps([23,12,2,3,1,13,5,14,15,4,24]) : void 0, import.meta.url);
const AboutShell = () => __vitePreload(() => import("./chunks/AboutShell-CD148f22.js"), true ? __vite__mapDeps([25,2,3]) : void 0, import.meta.url);
const AboutTabAboutUs = () => __vitePreload(() => import("./chunks/exactmetrics-AboutTabAboutUs-CjXOk_Ep.js"), true ? __vite__mapDeps([26,13,5,2,3,1,14,15,12,4]) : void 0, import.meta.url);
const AboutTabGettingStarted = () => __vitePreload(() => import("./chunks/exactmetrics-AboutTabGettingStarted-DVzl2g9I.js"), true ? __vite__mapDeps([27,14,2,3,15,4,1,5,28,12,21,13]) : void 0, import.meta.url);
const AboutTabLiteVsPro = () => __vitePreload(() => import("./chunks/exactmetrics-AboutTabLiteVsPro-DIvPc4_F.js"), true ? __vite__mapDeps([29,1,2,3]) : void 0, import.meta.url);
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
const app = createApp(_sfc_main);
app.use(router);
installOverlays(app);
setupPinia(app);
const mountEl = document.getElementById("exactmetrics-vue-network-settings");
if (mountEl) {
  app.mount(mountEl);
}
