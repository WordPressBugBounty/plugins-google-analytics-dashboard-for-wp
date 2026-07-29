import { r as miAjax } from "./ajax-2wfIeviZ.js";
import { k as getMiGlobal } from "./toastStore-sH51RcCX.js";
const { __ } = wp.i18n;
const installAioseo = async () => {
  try {
    const response = await miAjax("exactmetrics_vue_install_plugin", {
      slug: "all-in-one-seo-pack"
    });
    return response;
  } catch (error) {
    throw {
      title: __("AIOSEO installation failed", "google-analytics-dashboard-for-wp"),
      message: error?.message || __("AJAX request failed", "google-analytics-dashboard-for-wp")
    };
  }
};
const activateAioseo = async (pluginBasename) => {
  try {
    const response = await miAjax("exactmetrics_activate_addon", {
      nonce: getMiGlobal("activate_nonce", ""),
      isnetwork: getMiGlobal("network", false),
      plugin: pluginBasename
    });
    return response;
  } catch (error) {
    throw {
      title: __("AIOSEO activation failed", "google-analytics-dashboard-for-wp"),
      message: error?.message || __("AJAX request failed", "google-analytics-dashboard-for-wp")
    };
  }
};
const api = {
  installAioseo,
  activateAioseo
};
export {
  api as a
};
