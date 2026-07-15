import { k as getMiGlobal, o as openBlock, c as createElementBlock, b as createVNode, D as withCtx, a as createBaseVNode, B as withModifiers, t as toDisplayString, u as unref, s as createCommentVNode, F as Fragment, j as ref, m as computed, O as getExactMetricsUrl } from "./toastStore-CjmlShHI.js";
import { _ as _sfc_main$2 } from "./SettingsBlock-Bsp6Fu6H.js";
import { _ as _sfc_main$1 } from "./SettingsInfoTooltip-DGz1RdtP.js";
import { u as useSettingsStore } from "./settings-BVkGy_Cz.js";
import { a as useToast, d as useDialog } from "./addons-DcCBQDEz.js";
import { b as getAjaxUrl, g as getNonce } from "./ajax-Uw5S1uqk.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SlideDownUp-69HctpXG.js";
import "./useNotices-BosR4uY_.js";
import "./Modal-CzneZfPu.js";
const _hoisted_1 = { class: "exactmetrics-container" };
const _hoisted_2 = {
  key: 0,
  class: "exactmetrics-grey-settings-area"
};
const _hoisted_3 = { class: "exactmetrics-grey-settings-area-half" };
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = { class: "exactmetrics-file-input" };
const _hoisted_7 = { class: "exactmetrics-file-input-styled" };
const _hoisted_8 = { class: "exactmetrics-file-input-styled-label" };
const _hoisted_9 = ["textContent"];
const _hoisted_10 = ["textContent"];
const _hoisted_11 = ["textContent"];
const _hoisted_12 = {
  key: 0,
  class: "exactmetrics-error"
};
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = { class: "exactmetrics-grey-settings-area-half" };
const _hoisted_15 = {
  action: "",
  method: "post"
};
const _hoisted_16 = ["textContent"];
const _hoisted_17 = ["textContent"];
const _hoisted_18 = ["value"];
const _hoisted_19 = ["textContent"];
const _hoisted_20 = ["textContent"];
const _hoisted_21 = ["textContent"];
const _hoisted_22 = { class: "exactmetrics-file-input" };
const _hoisted_23 = ["textContent"];
const _hoisted_24 = {
  key: 0,
  class: "exactmetrics-error"
};
const _hoisted_25 = ["innerHTML"];
const _hoisted_26 = {
  action: "",
  method: "post"
};
const _hoisted_27 = ["textContent"];
const _hoisted_28 = ["textContent"];
const _hoisted_29 = ["value"];
const _hoisted_30 = ["textContent"];
const _sfc_main = {
  __name: "exactmetrics-ToolsTabImportExport",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const isEM = true;
    const settingsStore = useSettingsStore();
    const { loadingToast, closeToast } = useToast();
    const dialog = useDialog();
    const ajaxUrl = getAjaxUrl();
    const nonce = getMiGlobal("nonce") || getNonce();
    const has_error = ref(false);
    const selectedFile = ref(null);
    const fileInput = ref(null);
    const text_title_export_import = __("Import/Export", "google-analytics-dashboard-for-wp");
    const text_import = __("Import", "google-analytics-dashboard-for-wp");
    const text_import_description = __("Import settings from another ExactMetrics website.", "google-analytics-dashboard-for-wp");
    const text_export = __("Export", "google-analytics-dashboard-for-wp");
    const text_export_description = __("Export settings to import into another ExactMetrics install.", "google-analytics-dashboard-for-wp");
    const text_import_button = __("Import Settings", "google-analytics-dashboard-for-wp");
    const text_export_button = __("Export Settings", "google-analytics-dashboard-for-wp");
    const text_has_error = __("Please choose a file to import", "google-analytics-dashboard-for-wp");
    const text_choose_file = __("Choose file", "google-analytics-dashboard-for-wp");
    const text_import_tooltip = sprintf(__("Select %1$sChoose file%2$s to upload a settings export file from another ExactMetrics website.", "google-analytics-dashboard-for-wp"), "<strong>", "</strong>");
    const text_export_tooltip = sprintf(__("Click %1$sExport Settings%2$s to export a file with your ExactMetrics settings.", "google-analytics-dashboard-for-wp"), "<strong>", "</strong>");
    const filename = computed(() => {
      if (selectedFile.value && typeof selectedFile.value.name !== "undefined") {
        return selectedFile.value.name;
      }
      return __("No file chosen", "google-analytics-dashboard-for-wp");
    });
    function handleFileUpload(event) {
      has_error.value = false;
      selectedFile.value = event.target.files[0];
    }
    async function submitForm() {
      if (!selectedFile.value) {
        has_error.value = true;
        return;
      }
      loadingToast(__("Uploading file...", "google-analytics-dashboard-for-wp"));
      const formData = new FormData();
      formData.append("import_file", selectedFile.value);
      formData.append("action", "exactmetrics_handle_settings_import");
      formData.append("nonce", nonce);
      try {
        const response = await fetch(ajaxUrl, {
          method: "POST",
          body: formData
        });
        const json = await response.json();
        if (json && json.success && json.data) {
          settingsStore.settings = { ...json.data, is_saving: false };
          selectedFile.value = null;
          if (fileInput.value) {
            fileInput.value.value = "";
          }
          dialog.alert({
            variant: "success",
            title: __("File imported", "google-analytics-dashboard-for-wp"),
            message: __("Settings successfully updated!", "google-analytics-dashboard-for-wp"),
            confirmText: __("Ok", "google-analytics-dashboard-for-wp")
          });
        } else {
          showImportError();
        }
      } catch (_e) {
        showImportError();
      } finally {
        closeToast();
      }
    }
    function showImportError() {
      {
        const support_url = getExactMetricsUrl("admin-notices", "error-upgrading-license", "https://www.exactmetrics.com/my-account/support");
        dialog.alert({
          variant: "error",
          title: __("Error importing settings", "google-analytics-dashboard-for-wp"),
          html: sprintf(
            // Translators: %1$s opens the support link, %2$s closes it.
            __("Oops! An error occurred while importing your settings. Please ensure you selected the correct file. If the issue continues please %1$scontact our support team%2$s.", "google-analytics-dashboard-for-wp"),
            `<a href="${support_url}" target="_blank" rel="noopener noreferrer">`,
            "</a>"
          ),
          confirmText: __("Ok", "google-analytics-dashboard-for-wp")
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$2, {
          title: unref(text_title_export_import),
          icon: "monstericon-exchange-alt"
        }, {
          default: withCtx(() => [
            isEM ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("form", {
                  action: "",
                  onSubmit: withModifiers(submitForm, ["prevent"])
                }, [
                  createBaseVNode("label", null, [
                    createBaseVNode("span", {
                      class: "exactmetrics-dark",
                      textContent: toDisplayString(unref(text_import))
                    }, null, 8, _hoisted_4),
                    createBaseVNode("span", {
                      textContent: toDisplayString(unref(text_import_description))
                    }, null, 8, _hoisted_5),
                    createVNode(_sfc_main$1, { content: unref(text_import_tooltip) }, null, 8, ["content"])
                  ]),
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("label", _hoisted_7, [
                      createBaseVNode("input", {
                        ref_key: "fileInput",
                        ref: fileInput,
                        type: "file",
                        onChange: handleFileUpload
                      }, null, 544),
                      createBaseVNode("span", _hoisted_8, [
                        _cache[0] || (_cache[0] = createBaseVNode("i", { class: "monstericon-plus" }, null, -1)),
                        createBaseVNode("span", {
                          textContent: toDisplayString(unref(text_choose_file))
                        }, null, 8, _hoisted_9)
                      ])
                    ]),
                    createBaseVNode("div", {
                      class: "exactmetrics-file-input-styled-filename",
                      textContent: toDisplayString(filename.value)
                    }, null, 8, _hoisted_10)
                  ]),
                  createBaseVNode("button", {
                    type: "submit",
                    class: "exactmetrics-button",
                    textContent: toDisplayString(unref(text_import_button))
                  }, null, 8, _hoisted_11),
                  has_error.value ? (openBlock(), createElementBlock("label", _hoisted_12, [
                    _cache[1] || (_cache[1] = createBaseVNode("i", { class: "monstericon-warning-triangle" }, null, -1)),
                    createBaseVNode("span", { innerHTML: unref(text_has_error) }, null, 8, _hoisted_13)
                  ])) : createCommentVNode("", true)
                ], 32)
              ]),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("form", _hoisted_15, [
                  createBaseVNode("label", null, [
                    createBaseVNode("span", {
                      class: "exactmetrics-dark",
                      textContent: toDisplayString(unref(text_export))
                    }, null, 8, _hoisted_16),
                    createBaseVNode("span", {
                      textContent: toDisplayString(unref(text_export_description))
                    }, null, 8, _hoisted_17),
                    createVNode(_sfc_main$1, { content: unref(text_export_tooltip) }, null, 8, ["content"])
                  ]),
                  createBaseVNode("input", {
                    type: "hidden",
                    value: unref(nonce),
                    name: "exactmetrics_export_settings"
                  }, null, 8, _hoisted_18),
                  _cache[2] || (_cache[2] = createBaseVNode("input", {
                    type: "hidden",
                    value: "exactmetrics_export_settings",
                    name: "exactmetrics_action"
                  }, null, -1)),
                  createBaseVNode("button", {
                    class: "exactmetrics-button",
                    textContent: toDisplayString(unref(text_export_button))
                  }, null, 8, _hoisted_19)
                ])
              ])
            ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("form", {
                action: "",
                onSubmit: withModifiers(submitForm, ["prevent"])
              }, [
                createBaseVNode("label", null, [
                  createBaseVNode("span", {
                    class: "exactmetrics-dark",
                    textContent: toDisplayString(unref(text_import))
                  }, null, 8, _hoisted_20),
                  createBaseVNode("span", {
                    textContent: toDisplayString(unref(text_import_description))
                  }, null, 8, _hoisted_21),
                  createVNode(_sfc_main$1, { content: unref(text_import_tooltip) }, null, 8, ["content"])
                ]),
                createBaseVNode("div", _hoisted_22, [
                  createBaseVNode("input", {
                    ref_key: "fileInput",
                    ref: fileInput,
                    type: "file",
                    onChange: handleFileUpload
                  }, null, 544)
                ]),
                createBaseVNode("button", {
                  type: "submit",
                  class: "exactmetrics-button",
                  textContent: toDisplayString(unref(text_import_button))
                }, null, 8, _hoisted_23),
                has_error.value ? (openBlock(), createElementBlock("label", _hoisted_24, [
                  _cache[3] || (_cache[3] = createBaseVNode("i", { class: "monstericon-warning-triangle" }, null, -1)),
                  createBaseVNode("span", { innerHTML: unref(text_has_error) }, null, 8, _hoisted_25)
                ])) : createCommentVNode("", true)
              ], 32),
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "exactmetrics-separator" }, null, -1)),
              createBaseVNode("form", _hoisted_26, [
                createBaseVNode("label", null, [
                  createBaseVNode("span", {
                    class: "exactmetrics-dark",
                    textContent: toDisplayString(unref(text_export))
                  }, null, 8, _hoisted_27),
                  createBaseVNode("span", {
                    textContent: toDisplayString(unref(text_export_description))
                  }, null, 8, _hoisted_28),
                  createVNode(_sfc_main$1, { content: unref(text_export_tooltip) }, null, 8, ["content"])
                ]),
                createBaseVNode("input", {
                  type: "hidden",
                  value: unref(nonce),
                  name: "exactmetrics_export_settings"
                }, null, 8, _hoisted_29),
                _cache[4] || (_cache[4] = createBaseVNode("input", {
                  type: "hidden",
                  value: "exactmetrics_export_settings",
                  name: "exactmetrics_action"
                }, null, -1)),
                createBaseVNode("button", {
                  class: "exactmetrics-button",
                  textContent: toDisplayString(unref(text_export_button))
                }, null, 8, _hoisted_30)
              ])
            ], 64))
          ]),
          _: 1
        }, 8, ["title", "icon"])
      ]);
    };
  }
};
const exactmetricsToolsTabImportExport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-263d8a0f"]]);
export {
  exactmetricsToolsTabImportExport as default
};
