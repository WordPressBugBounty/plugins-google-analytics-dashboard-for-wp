import { r as miAjax } from "./ajax-Uw5S1uqk.js";
function fetchThemes(type = "inline") {
  return miAjax("exactmetrics_get_popular_posts_themes", { type });
}
function updateThemeSetting({ type, theme, object, key, value }) {
  return miAjax("exactmetrics_vue_popular_posts_update_theme_setting", {
    type,
    theme,
    object,
    key,
    value
  });
}
function emptyCache() {
  return miAjax("exactmetrics_popular_posts_empty_cache");
}
function grabPopularPostsReport() {
  return miAjax("exactmetrics_vue_grab_popular_posts_report");
}
function getPostTypes() {
  return miAjax("exactmetrics_get_post_types");
}
function getPosts({ post_type, keyword }) {
  return miAjax("exactmetrics_get_posts", { post_type, keyword });
}
function sharedcountStartIndexing() {
  return miAjax("exactmetrics_sharedcount_start_indexing");
}
function sharedcountGetIndexProgress() {
  return miAjax("exactmetrics_sharedcount_get_index_progress");
}
export {
  sharedcountStartIndexing as a,
  getPostTypes as b,
  grabPopularPostsReport as c,
  emptyCache as e,
  fetchThemes as f,
  getPosts as g,
  sharedcountGetIndexProgress as s,
  updateThemeSetting as u
};
