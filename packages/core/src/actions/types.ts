export enum ActionTypes {
  save = "@builder_save",
  autoSave = "@builder_auto_save",
  initPage = "@builder_init_page",
  onLoad = "@builder_on_load",

  addMedia = "@builder_add_media",
  addMediaRes = "@builder_add_media_res",
  addMediaRej = "@builder_add_media_rej",

  addFile = "@builder_add_file",
  addFileRes = "@builder_add_file_res",
  addFileRej = "@builder_add_file_rej",

  formFields = "@builder_form_fields",
  formFieldsRes = "@builder_form_fields_res",
  formFieldsRej = "@builder_form_fields_rej",

  dcRichText = "@builder_dc_richtext",
  dcRichTextRes = "@builder_dc_richtext_res",
  dcRichTextRej = "@builder_dc_richtext_rej",

  dcImage = "@builder_dc_image",
  dcImageRes = "@builder_dc_image_res",
  dcImageRej = "@builder_dc_image_rej",

  dcLink = "@builder_dc_link",
  dcLinkRes = "@builder_dc_link_res",
  dcLinkRej = "@builder_dc_link_rej",

  dcPlaceholderData = "@builder_dc_placeholder_data",
  dcPlaceholderDataRes = "@builder_dc_placeholder_data_res",
  dcPlaceholderDataRej = "@builder_dc_placeholder_data_rej",

  templateKits = "@builder_template_kits",
  templateKitsRes = "@builder_template_kits_res",
  templateKitsRej = "@builder_template_kits_rej",
  templateKitsMeta = "@builder_template_kits_meta",
  templateKitsMetaRes = "@builder_template_kits_meta_res",
  templateKitsMetaRej = "@builder_template_kits_meta_rej",
  templateKitsData = "@builder_template_kits_data",
  templateKitsDataRes = "@builder_template_kits_data_res",
  templateKitsDataRej = "@builder_template_kits_data_rej",

  templatePopupsMeta = "@builder_template_popups_meta",
  templatePopupsMetaRes = "@builder_template_popups_meta_res",
  templatePopupsMetaRej = "@builder_template_popups_meta_rej",
  templatePopupsData = "@builder_template_popups_data",
  templatePopupsDataRes = "@builder_template_popups_data_res",
  templatePopupsDataRej = "@builder_template_popups_data_rej",

  templateLayoutsMeta = "@builder_template_layouts_meta",
  templateLayoutsMetaRes = "@builder_template_layouts_meta_res",
  templateLayoutsMetaRej = "@builder_template_layouts_meta_rej",
  templateLayoutsData = "@builder_template_layouts_data",
  templateLayoutsDataRes = "@builder_template_layouts_data_res",
  templateLayoutsDataRej = "@builder_template_layouts_data_rej",

  templateStoriesMeta = "@builder_template_stories_meta",
  templateStoriesMetaRes = "@builder_template_stories_meta_res",
  templateStoriesMetaRej = "@builder_template_stories_meta_rej",
  templateStoriesData = "@builder_template_stories_data",
  templateStoriesDataRes = "@builder_template_stories_data_res",
  templateStoriesDataRej = "@builder_template_stories_data_rej",

  createScreenshots = "@builder_create_screenshots",
  createScreenshotsRes = "@builder_create_screenshots_res",
  createScreenshotsRej = "@builder_create_screenshots_rej",

  updateScreenshots = "@builder_update_screenshots",
  updateScreenshotsRes = "@builder_update_screenshots_res",
  updateScreenshotsRej = "@builder_update_screenshots_rej",

  leftSidebarOpenCMS = "@builder_leftSidebar_open_cms",
  leftSidebarOpenCMSClose = "@builder_leftSidebar_open_cms_close",
  leftSidebarCloseCMS = "@builder_leftSidebar_close_cms",

  uiPublish = "@builder_ui_publish",
  uiPublishRes = "@builder_ui_publish_res",
  uiPublishRej = "@builder_ui_publish_rej",
}
