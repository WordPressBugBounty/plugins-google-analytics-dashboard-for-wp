const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chunks/DashboardList.lite-CqfWS-jB.js","./chunks/TheAppHeader-CFXTPXse.js","./chunks/toastStore-nTGs-rGm.js","./chunks/ajax-BSXoXmkG.js","./chunks/useSampleData-xs4hsJlI.js","./chunks/default-i18n-KrIlCc2E.js","./chunks/Modal-BA3yRruc.js","../css/main-exactmetrics-D2bVvWEu.css","./chunks/Icon-DCHfi1CL.js","./chunks/_plugin-vue_export-helper-1tPrXgE0.js","../css/main-exactmetrics-DdCOUrGJ.css","./chunks/license-k2H2_IPt.js","./chunks/useNotices-CjxoPqYP.js","../css/main-exactmetrics-tn0RQdqM.css","./chunks/useFeatureGate-DGK8kkz6.js","./chunks/DashboardCreate-B0OnW7FL.js","./chunks/ErrorModal-AQRkQYPm.js","./chunks/useChartColors-DfB5TXg7.js","./chunks/LoadingSpinnerInline-ByF9Uqaj.js","../css/main-exactmetrics-CKJSBouy.css","./chunks/vue3-apexcharts-Bp-gye7I.js","../css/main-exactmetrics-DcECXQxs.css","./chunks/ApexBarChart-D-BBUm7i.js","../css/main-exactmetrics-Dszxf83J.css","./chunks/dateIntervals-BPoui_3H.js","./chunks/useAuthGate-C38dssHK.js","./chunks/flatpickr-CiH3DK8V.js","../css/main-exactmetrics-CMSe2SYd.css","../css/main-exactmetrics-C6k6S7Kx.css","../css/main-exactmetrics-CnXeAbVE.css","./chunks/ReAuthModal-DQO2Zyk1.js","./chunks/auth-BFsUdqe0.js","../css/main-exactmetrics-CusxVmhz.css","../css/main-exactmetrics-DnsKVjAM.css","./chunks/DashboardEdit-Ch_Bi744.js","./chunks/DashboardView-DzGMQM0o.js"])))=>i.map(i=>d[i]);
import { c as createElementBlock, a as createBaseVNode, b as createVNode, r as resolveComponent, o as openBlock, d as createApp } from "./chunks/toastStore-nTGs-rGm.js";
import { _ as _sfc_main$1, c as createRouter, a as createWebHashHistory } from "./chunks/TheAppHeader-CFXTPXse.js";
import { _ as __vitePreload, s as setupPinia } from "./chunks/ajax-BSXoXmkG.js";
import { _ as _sfc_main$2, i as installOverlays } from "./chunks/AppOverlays-CN9fyc8o.js";
import "./chunks/default-i18n-KrIlCc2E.js";
import "./chunks/_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = { class: "mi-custom-dashboard-app exactmetrics-app-surface" };
const _hoisted_2 = { id: "exactmetrics-app" };
const _hoisted_3 = { class: "exactmetrics-dashboard-content" };
const _hoisted_4 = { class: "exactmetrics-container" };
const _sfc_main = {
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_sfc_main$1),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_RouterView)
            ])
          ])
        ]),
        createVNode(_sfc_main$2)
      ]);
    };
  }
};
const DashboardList = () => __vitePreload(() => import("./chunks/DashboardList.lite-CqfWS-jB.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]) : void 0, import.meta.url);
const DashboardCreate = () => __vitePreload(() => import("./chunks/DashboardCreate-B0OnW7FL.js"), true ? __vite__mapDeps([15,1,2,3,5,16,8,9,10,14,17,18,19,20,21,22,23,24,25,26,27,28,6,7,29,11,12,4,13,30,31,32,33]) : void 0, import.meta.url);
const DashboardEdit = () => __vitePreload(() => import("./chunks/DashboardEdit-Ch_Bi744.js"), true ? __vite__mapDeps([34,15,1,2,3,5,16,8,9,10,14,17,18,19,20,21,22,23,24,25,26,27,28,6,7,29,11,12,4,13,30,31,32,33]) : void 0, import.meta.url);
const DashboardView = () => __vitePreload(() => import("./chunks/DashboardView-DzGMQM0o.js"), true ? __vite__mapDeps([35,1,2,3,5,16,8,9,10,14,17,18,19,20,21,22,23,24,25,26,27,28,6,7,29,4,11,12,13,30,31,32]) : void 0, import.meta.url);
const routes = [
  {
    path: "/",
    redirect: "/dashboards"
  },
  {
    path: "/dashboards",
    name: "dashboard-list",
    component: DashboardList,
    meta: {
      title: "Custom Views",
      requiresAuth: true
    }
  },
  {
    path: "/dashboards/add",
    name: "dashboard-add",
    component: DashboardList,
    meta: {
      title: "Add Custom View",
      requiresAuth: true,
      requiresEdit: true,
      showTemplateSelector: true
    }
  },
  {
    path: "/dashboards/new",
    name: "dashboard-create",
    component: DashboardCreate,
    meta: {
      title: "Create View",
      requiresAuth: true,
      requiresEdit: true
    }
  },
  {
    path: "/dashboards/:id/edit",
    name: "dashboard-edit",
    component: DashboardEdit,
    props: true,
    meta: {
      title: "Edit View",
      requiresAuth: true,
      requiresEdit: true
    }
  },
  {
    path: "/dashboards/:id/view",
    name: "dashboard-view",
    component: DashboardView,
    props: true,
    meta: {
      title: "View",
      requiresAuth: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboards"
  }
];
function hasCustomViewsAccess() {
  return false;
}
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, _from, next) => {
  if (!hasCustomViewsAccess() && (to.name === "dashboard-list" || to.path === "/dashboards")) {
    next({ name: "dashboard-view", params: { id: "sample" } });
    return;
  }
  next();
});
const app = createApp(_sfc_main);
app.use(router);
setupPinia(app);
installOverlays(app);
app.config.errorHandler = (err, _vm, info) => {
  console.error("Custom View Error:", err, info);
};
app.mount("#exactmetrics-custom-dashboard-app");
