import { u as useRouter } from "./TheAppHeader-BI_ZrtNW.js";
import { U as UpsellModal, u as useSampleData } from "./useSampleData-as2jswHs.js";
import { u as useFeatureGate } from "./useFeatureGate-Cpz_XvaQ.js";
import { y as onMounted, o as openBlock, c as createElementBlock, b as createVNode, u as unref } from "./toastStore-CjmlShHI.js";
import "./ajax-Uw5S1uqk.js";
import "./default-i18n-KrIlCc2E.js";
import "./Modal-CzneZfPu.js";
import "./Icon-BKVJ2HHT.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./license-C6i4W44s.js";
import "./useNotices-BosR4uY_.js";
const _hoisted_1 = { class: "exactmetrics-dashboard-list" };
const _sfc_main = {
  __name: "DashboardList.lite",
  setup(__props) {
    const router = useRouter();
    const {
      shouldShowUpsell,
      upsellContent,
      hasSampleData,
      openUpsellModal,
      closeUpsellModal,
      enableSampleMode
    } = useFeatureGate("custom-dashboard");
    const { sampleData: sampleViewData, loadSampleData: loadSampleView } = useSampleData("custom-dashboard", "sample-view");
    onMounted(async () => {
      await loadSampleView();
      openUpsellModal();
    });
    async function handleSeeSample() {
      if (!sampleViewData.value) {
        await loadSampleView();
      }
      enableSampleMode();
      if (sampleViewData.value?.[0]?.id) {
        router.push({
          name: "dashboard-view",
          params: { id: sampleViewData.value[0].id }
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(UpsellModal, {
          isOpen: unref(shouldShowUpsell),
          feature: "custom-dashboard",
          content: unref(upsellContent),
          showSampleButton: unref(hasSampleData),
          customImage: "sample-image-exactmetrics.png",
          onClose: unref(closeUpsellModal),
          onSeeSample: handleSeeSample
        }, null, 8, ["isOpen", "content", "showSampleButton", "onClose"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
