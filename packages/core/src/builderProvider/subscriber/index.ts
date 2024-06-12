import { AutoSaveOutput } from "@/types/types";
import { Obj } from "@brizy/readers";
import { mPipe } from "fp-utilities";
import { mergeDeep } from "timm";
import { getApi } from "../handlers/api";
import { getPage } from "../handlers/defaults/page";
import { getUi } from "../handlers/defaults/ui";
import { getDCConfig } from "../handlers/dynamicContent";
import { getIntegration } from "../handlers/integration";
import { getViewScripts, getViewStyles, prepareThirdPartyAssets, replaceThirdParty } from "../utils/thirdParty";

const getPageData = mPipe(Obj.read, Obj.readKey("pageData"), Obj.read);

export async function subscriber(event: MessageEvent): Promise<void> {
  const data = event.data;
  const target = window.__target__;

  if (data.uid === undefined) {
    console.error("Invalid/Missing the uid");
    return;
  }

  if (data.target !== target) {
    return;
  }

  // Used to check multiple instance of the builder in the same page
  const uid = data.uid;

  try {
    const action = JSON.parse(data.data);

    switch (action.type) {
      case `${target}_init_page`: {
        const defaultConfig = window.__VISUAL_CONFIG__;
        const urls = defaultConfig.urls ?? {};
        const pro = defaultConfig.pro ?? {};
        const _mode = defaultConfig.mode;
        const _api = defaultConfig.api;
        const _menuData = defaultConfig.menuData;
        const _dynamicContent = defaultConfig.dynamicContent ?? {};
        const configData = action.data ? action.data : {};
        const configAssets = configData.assets;
        // @ts-expect-error: TODO: Need to add right types for __VISUAL__CONFIG__
        const freeAssets = (configAssets ? configAssets + "/free" : undefined) ?? urls.assets;
        // @ts-expect-error: TODO: Need to add right types for __VISUAL__CONFIG__
        const proAssets = (configAssets ? configAssets + "/pro" : undefined) ?? pro.urls.assets;
        const mode = configData.mode ?? _mode;
        const api = configData.api ? configData.api : _api;
        const integration = configData.integration ?? {};
        const dynamicContent = { ..._dynamicContent, ...configData.dynamicContent };
        const token = configData.token;
        const pageData = action.data.pageData ?? {};
        const menuData = action.data.menu ?? _menuData;

        window.__VISUAL_CONFIG__.mode = mode;
        window.__VISUAL_CONFIG__.projectData = {
          dataVersion: 1,
          data: action.data.projectData,
        };
        window.__VISUAL_CONFIG__.menuData = menuData;
        window.__VISUAL_CONFIG__.auth = {
          token,
        };
        window.__VISUAL_CONFIG__.urls = mergeDeep(urls, {
          assets: freeAssets,
          pagePreview: configData.pagePreview,
          ...(configData.urls ? configData.urls : {}),
        });
        window.__VISUAL_CONFIG__.pro = mergeDeep(pro, {
          urls: { assets: proAssets },
        });

        window.__VISUAL_CONFIG__.pageData = getPage(pageData);
        window.__VISUAL_CONFIG__.ui = getUi({ uid, target, event, mode, config: configData });
        window.__VISUAL_CONFIG__.dynamicContent = getDCConfig({ uid, target, event, dynamicContent });
        window.__VISUAL_CONFIG__.integration = getIntegration({ uid, target, event, integration });
        window.__VISUAL_CONFIG__.api = getApi({ uid, target, event, api });

        window.__VISUAL_CONFIG__.onLoad = () => {
          const data = JSON.stringify({ type: `${target}_on_load` });

          // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
          event.source?.postMessage({ target, uid, data }, event.origin);
        };

        window.__VISUAL_CONFIG__.onAutoSave = (data: AutoSaveOutput) => {
          event.source?.postMessage(
            {
              target,
              uid,
              data: JSON.stringify({ type: `${target}_auto_save`, payload: data }),
            },
            // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
            event.origin,
          );
        };
        window.__VISUAL_CONFIG__.autoSaveInterval = configData.autoSaveInterval;

        const iframe = document.querySelector("#no-script-frame");
        const root = document.querySelector("#root");

        const thirdPartyAssets = await prepareThirdPartyAssets(configData.extensions ?? []);

        // Store it globally and reuse it when the builder compiles the page.
        window.__THIRD_PARTY_ASSETS__ = thirdPartyAssets;

        window.__VISUAL_CONFIG__.thirdPartyComponentHosts = thirdPartyAssets.map(({ name, host }) => ({ name, host }));

        window.__VISUAL_CONFIG__.thirdPartyUrls = thirdPartyAssets.map(({ editorScripts }) => ({
          scriptUrl: editorScripts,
        }));

        if (iframe && root) {
          root.innerHTML = replaceThirdParty({
            doc: iframe.innerHTML,
            thirdPartyAssets,
          });
        }
        break;
      }
      case `${target}_save`: {
        const Config = window.Brizy?.config?.getAll();

        if (Config && typeof Config.onUpdate === "function") {
          const configData = action.data && "configData" in action.data ? action.data : {};
          const mode = window.__VISUAL_CONFIG__.mode;

          Config.onUpdate((_res: Record<string, unknown>) => {
            let res = _res;
            const pageData = getPageData(res);

            if (pageData && window.__THIRD_PARTY_ASSETS__.length > 0) {
              const newStyles = getViewStyles(window.__THIRD_PARTY_ASSETS__, pageData);
              const newScripts = getViewScripts(window.__THIRD_PARTY_ASSETS__, pageData);

              res = mergeDeep(res, {
                pageData: {
                  compiled: {
                    styles: newStyles,
                    scripts: newScripts,
                  },
                },
              }) as Record<string, unknown>;
            }

            const data = JSON.stringify({
              type: `${target}_save`,
              payload: { mode, ...res },
            });

            // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
            event.source?.postMessage({ target, uid, data }, event.origin);
          }, configData);
        }

        break;
      }
      case `${target}_add_media_res`:
      case `${target}_add_media_rej`:
      case `${target}_add_file_res`:
      case `${target}_add_file_rej`:
      case `${target}_form_fields_res`:
      case `${target}_form_fields_rej`:
      case `${target}_dc_richtext_res`:
      case `${target}_dc_richtext_rej`:
      case `${target}_dc_image_res`:
      case `${target}_dc_image_rej`:
      case `${target}_dc_link_res`:
      case `${target}_dc_link_rej`:
      case `${target}_dc_placeholder_data_res`:
      case `${target}_dc_placeholder_data_rej`:
      case `${target}_template_kits_res`:
      case `${target}_template_kits_rej`:
      case `${target}_template_kits_meta_res`:
      case `${target}_template_kits_meta_rej`:
      case `${target}_template_kits_data_res`:
      case `${target}_template_kits_data_rej`:
      case `${target}_template_popups_meta_res`:
      case `${target}_template_popups_meta_rej`:
      case `${target}_template_popups_data_res`:
      case `${target}_template_popups_data_rej`:
      case `${target}_template_layouts_meta_res`:
      case `${target}_template_layouts_meta_rej`:
      case `${target}_template_layouts_data_res`:
      case `${target}_template_layouts_data_rej`:
      case `${target}_template_stories_meta_res`:
      case `${target}_template_stories_meta_rej`:
      case `${target}_template_stories_data_res`:
      case `${target}_template_stories_data_rej`:
      case `${target}_create_screenshots_res`:
      case `${target}_create_screenshots_rej`:
      case `${target}_update_screenshots_res`:
      case `${target}_update_screenshots_rej`:
      case `${target}_leftSidebar_open_cms_close`:
      case `${target}_ui_publish_res`:
      case `${target}_ui_publish_rej`: {
        // Nothing to do here
        // All Logic is outside of current event
        break;
      }
      default: {
        console.warn("Invalid dataType", action.type);
      }
    }
  } catch (e) {
    console.error("Invalid JSON", e);
  }
}
