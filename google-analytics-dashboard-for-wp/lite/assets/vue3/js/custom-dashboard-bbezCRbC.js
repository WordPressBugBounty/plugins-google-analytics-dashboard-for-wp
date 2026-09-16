const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chunks/DashboardList.lite-DqjHvb77.js","./chunks/TheAppHeader-CjMtIms2.js","./chunks/AppOverlays-DcHCG-3q.js","../css/main-exactmetrics-BqoTIBUO.css","./chunks/ajax-C95mIScv.js","./chunks/useSampleData-D9O_leSW.js","./chunks/default-i18n-KrIlCc2E.js","./chunks/Modal-BJTydlxw.js","../css/main-exactmetrics-D2bVvWEu.css","./chunks/Icon-BU8BTUxW.js","../css/main-exactmetrics-DdCOUrGJ.css","./chunks/license-DUHYGbJw.js","./chunks/useNotices-CnkWF1QQ.js","../css/main-exactmetrics-tn0RQdqM.css","./chunks/useFeatureGate-Vb1-hi59.js","./chunks/DashboardCreate-5N3CkV9b.js","./chunks/ErrorModal-BJYud2H0.js","./chunks/useChartColors-DfB5TXg7.js","./chunks/LoadingSpinnerInline-Bo_9MsSC.js","../css/main-exactmetrics-CKJSBouy.css","./chunks/vue3-apexcharts-JgocqBim.js","../css/main-exactmetrics-DcECXQxs.css","./chunks/ApexBarChart-CvZiy8ap.js","../css/main-exactmetrics-Dszxf83J.css","./chunks/dateIntervals-BPoui_3H.js","./chunks/useAuthGate-CzWXxmUt.js","./chunks/flatpickr-DOkq6BLr.js","../css/main-exactmetrics-CMSe2SYd.css","../css/main-exactmetrics-C6k6S7Kx.css","../css/main-exactmetrics-CnXeAbVE.css","./chunks/ReAuthModal-DQAwEsNv.js","./chunks/auth-BcfDkXb2.js","../css/main-exactmetrics-BVgKjrnK.css","../css/main-exactmetrics-DnsKVjAM.css","./chunks/DashboardEdit-BwuHnbIv.js","./chunks/DashboardView-OIV85Pxy.js"])))=>i.map(i=>d[i]);
import { c as createElementBlock, a as createBaseVNode, b as createVNode, r as resolveComponent, o as openBlock, _ as _sfc_main$2, d as createApp, i as installOverlays } from "./chunks/AppOverlays-DcHCG-3q.js";
import { _ as _sfc_main$1, c as createRouter, a as createWebHashHistory } from "./chunks/TheAppHeader-CjMtIms2.js";
import { _ as __vitePreload, s as setupPinia } from "./chunks/ajax-C95mIScv.js";
import "./chunks/default-i18n-KrIlCc2E.js";
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
const DashboardList = () => __vitePreload(() => import("./chunks/DashboardList.lite-DqjHvb77.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]) : void 0, import.meta.url);
const DashboardCreate = () => __vitePreload(() => import("./chunks/DashboardCreate-5N3CkV9b.js"), true ? __vite__mapDeps([15,1,2,3,4,6,16,9,10,14,17,18,19,20,21,22,23,24,25,26,27,28,7,8,29,11,12,5,13,30,31,32,33]) : void 0, import.meta.url);
const DashboardEdit = () => __vitePreload(() => import("./chunks/DashboardEdit-BwuHnbIv.js"), true ? __vite__mapDeps([34,15,1,2,3,4,6,16,9,10,14,17,18,19,20,21,22,23,24,25,26,27,28,7,8,29,11,12,5,13,30,31,32,33]) : void 0, import.meta.url);
const DashboardView = () => __vitePreload(() => import("./chunks/DashboardView-OIV85Pxy.js"), true ? __vite__mapDeps([35,1,2,3,4,6,16,9,10,14,17,18,19,20,21,22,23,24,25,26,27,28,7,8,29,5,11,12,13,30,31,32]) : void 0, import.meta.url);
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
