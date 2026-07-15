import { p as getUrl } from "./toastStore-CjmlShHI.js";
import { r as miAjax } from "./ajax-Uw5S1uqk.js";
const { __ } = wp.i18n;
const fetchAuth = async () => {
  try {
    return await miAjax("exactmetrics_vue_get_profile");
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-loading-auth",
      "https://www.exactmetrics.com/my-account/support/"
    );
    throw {
      title: __("Error loading auth details", "google-analytics-dashboard-for-wp"),
      message: error?.message || __("An error occurred.", "google-analytics-dashboard-for-wp"),
      support_url
    };
  }
};
const getAuthRedirect = async (network = false) => {
  try {
    return await miAjax("exactmetrics_maybe_authenticate", {
      isnetwork: network || void 0
    });
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-loading-auth-redirect",
      "https://www.exactmetrics.com/my-account/support/"
    );
    throw {
      title: __("Error getting auth redirect", "google-analytics-dashboard-for-wp"),
      message: error?.message || __("An error occurred.", "google-analytics-dashboard-for-wp"),
      support_url
    };
  }
};
const getReAuthRedirect = async (network = false) => {
  try {
    return await miAjax("exactmetrics_maybe_reauthenticate", {
      isnetwork: network || void 0
    });
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-loading-reauth-redirect",
      "https://www.exactmetrics.com/my-account/support/"
    );
    throw {
      title: __("Error getting re-auth redirect", "google-analytics-dashboard-for-wp"),
      message: error?.message || __("An error occurred.", "google-analytics-dashboard-for-wp"),
      support_url
    };
  }
};
const verifyAuth = async (network = false) => {
  try {
    return await miAjax("exactmetrics_maybe_verify", {
      isnetwork: network
    });
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-verifying-auth",
      "https://www.exactmetrics.com/my-account/support/"
    );
    throw {
      title: __("Error verifying auth", "google-analytics-dashboard-for-wp"),
      message: error?.message || __("An error occurred.", "google-analytics-dashboard-for-wp"),
      support_url
    };
  }
};
const deleteAuth = async (network = false, force = false) => {
  try {
    return await miAjax("exactmetrics_maybe_delete", {
      isnetwork: network,
      forcedelete: force || void 0
    });
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-deleting-auth",
      "https://www.exactmetrics.com/my-account/support/"
    );
    throw {
      title: __("Error de-authenticating", "google-analytics-dashboard-for-wp"),
      message: error?.message || __("An error occurred.", "google-analytics-dashboard-for-wp"),
      support_url
    };
  }
};
const updateManualV4 = async (v4 = "", network = false) => {
  try {
    return await miAjax("exactmetrics_update_manual_v4", {
      manual_v4_code: v4,
      isnetwork: network || void 0
    });
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-updating-v4",
      "https://www.exactmetrics.com/my-account/support/"
    );
    throw {
      title: __("Error updating V4 code", "google-analytics-dashboard-for-wp"),
      message: error?.message || __("An error occurred.", "google-analytics-dashboard-for-wp"),
      support_url
    };
  }
};
const updateMeasurementProtocolSecret = async (value = "", network = false) => {
  try {
    return await miAjax("exactmetrics_update_measurement_protocol_secret", {
      value,
      isnetwork: network || void 0
    });
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-updating-mpsecret",
      "https://www.exactmetrics.com/my-account/support/"
    );
    throw {
      title: __("Error updating Measurement Protocol Secret", "google-analytics-dashboard-for-wp"),
      message: error?.message || __("An error occurred.", "google-analytics-dashboard-for-wp"),
      support_url
    };
  }
};
const authApi = {
  fetchAuth,
  getAuthRedirect,
  getReAuthRedirect,
  verifyAuth,
  deleteAuth,
  updateManualV4,
  updateMeasurementProtocolSecret
};
export {
  authApi as a
};
