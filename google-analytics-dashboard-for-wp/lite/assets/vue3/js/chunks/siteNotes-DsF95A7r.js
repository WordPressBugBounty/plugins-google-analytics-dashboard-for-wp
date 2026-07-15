import { g as getNonce, a as ajaxPost } from "./ajax-Uw5S1uqk.js";
const { __ } = wp.i18n;
function rawAjaxPost(action, fields = {}) {
  const formData = new FormData();
  formData.append("action", action);
  formData.append("nonce", getNonce());
  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, value);
  }
  return ajaxPost(formData);
}
const getNotes = (params) => {
  const formData = new FormData();
  formData.append("action", "exactmetrics_vue_get_notes");
  formData.append("nonce", getNonce());
  formData.append("params", JSON.stringify(params));
  return ajaxPost(formData).catch((error) => {
    throw {
      title: __("Error Fetching Site Notes", "google-analytics-dashboard-for-wp"),
      message: error?.message || __("Failed to fetch site notes.", "google-analytics-dashboard-for-wp")
    };
  });
};
const saveNote = (note) => {
  const formData = new FormData();
  formData.append("action", "exactmetrics_vue_save_note");
  formData.append("nonce", getNonce());
  formData.append("note", JSON.stringify(note));
  return ajaxPost(formData).then((data) => {
    if (data.published) {
      return data;
    }
    throw {
      title: data.message,
      message: __("Please add some information into your site notes.", "google-analytics-dashboard-for-wp")
    };
  }).catch((error) => {
    if (error?.title) {
      throw error;
    }
    throw {
      title: __("Error Saving Site Note", "google-analytics-dashboard-for-wp"),
      message: error?.message || __("You appear to be offline.", "google-analytics-dashboard-for-wp")
    };
  });
};
const getCategories = (params) => {
  const formData = new FormData();
  formData.append("action", "exactmetrics_vue_get_categories");
  formData.append("nonce", getNonce());
  formData.append("params", JSON.stringify(params));
  return ajaxPost(formData).catch((error) => {
    throw {
      title: __("Error Fetching Categories", "google-analytics-dashboard-for-wp"),
      message: error?.message || __("Failed to fetch categories.", "google-analytics-dashboard-for-wp")
    };
  });
};
const saveCategory = (category) => {
  return rawAjaxPost("exactmetrics_vue_save_category", {
    category: JSON.stringify(category)
  });
};
const trashNotes = (ids) => {
  return rawAjaxPost("exactmetrics_vue_trash_notes", {
    ids: JSON.stringify(ids)
  });
};
const restoreNotes = (ids) => {
  return rawAjaxPost("exactmetrics_vue_restore_notes", {
    ids: JSON.stringify(ids)
  });
};
const deleteNotes = (ids) => {
  return rawAjaxPost("exactmetrics_vue_delete_notes", {
    ids: JSON.stringify(ids)
  });
};
const exportNotes = (annotations) => {
  return rawAjaxPost("exactmetrics_vue_export_notes", {
    annotations: JSON.stringify(annotations)
  });
};
const importNotes = (annotations = []) => {
  return rawAjaxPost("exactmetrics_vue_import_notes", {
    annotations: JSON.stringify(annotations)
  });
};
export {
  getNotes as a,
  saveCategory as b,
  deleteNotes as d,
  exportNotes as e,
  getCategories as g,
  importNotes as i,
  restoreNotes as r,
  saveNote as s,
  trashNotes as t
};
