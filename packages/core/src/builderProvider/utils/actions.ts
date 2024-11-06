import { getElements } from "@/builderProvider/handlers/defaults/elements";
import {
  addThirdPartyAssets,
  getAssetsType,
  prepareThirdPartyAssets,
  replaceThirdParty,
} from "@/builderProvider/utils/thirdParty";
import { ActionResolve, AutoSaveOutput, HtmlOutputType } from "@/types/types";
import * as Comlink from "comlink";
import { mergeDeep } from "timm";
import { getApi } from "../handlers/api";
import { getPage } from "../handlers/defaults/page";
import { getUi } from "../handlers/defaults/ui";
import { getDCConfig } from "../handlers/dynamicContent";
import { getIntegration } from "../handlers/integration";
import { ExposedHandlers } from "../types/type";

const init = async ({ uid, data }: ActionResolve) => {
  const configData = JSON.parse(data);
  const exposedHandlers = Comlink.wrap<ExposedHandlers>(Comlink.windowEndpoint(self.parent));
  const defaultConfig = window.__VISUAL_CONFIG__;
  const urls = defaultConfig.urls ?? {};
  const pro = defaultConfig.pro ?? {};
  const _mode = defaultConfig.mode;
  const _api = defaultConfig.api;
  const _menuData = defaultConfig.menuData;
  const _dynamicContent = defaultConfig.dynamicContent ?? {};
  const configAssets = configData.assets;
  // @ts-expect-error: TODO: Need to add right types for __VISUAL__CONFIG__
  const freeAssets = (configAssets ? configAssets + "/free" : undefined) ?? urls.assets;
  // @ts-expect-error: TODO: Need to add right types for __VISUAL__CONFIG__
  const proAssets = (configAssets ? configAssets + "/pro" : undefined) ?? pro.urls.assets;
  const mode = configData.mode ?? _mode;
  const api = configData.api ? configData.api : _api;
  const integration = configData.integrations ?? {};
  const dynamicContent = { ..._dynamicContent, ...configData.dynamicContent };
  const token = configData.token;
  const pageData = configData.pageData ?? {};
  const menuData = configData.menuData ?? _menuData;
  const elements = configData.elements ?? {};

  const l10n = configData.l10n ?? {};
  const compiler = configData.compiler ?? defaultConfig.compiler;

  const platform = configData.platform ?? defaultConfig.platform;
  const contentDefaults = configData.contentDefaults ?? {};
  const templateType = configData.templateType;

  window.__VISUAL_CONFIG__.mode = mode;
  window.__VISUAL_CONFIG__.projectData = {
    dataVersion: 1,
    data: configData.projectData,
  };
  window.__VISUAL_CONFIG__.menuData = menuData;
  window.__VISUAL_CONFIG__.elements = getElements(elements, exposedHandlers.onOpenMenu, uid);
  window.__VISUAL_CONFIG__.auth = {
    token,
  };
  window.__VISUAL_CONFIG__.urls = mergeDeep(urls, {
    assets: freeAssets,
    pagePreview: configData.pagePreview,
    ...(configData.urls ? configData.urls : {}),
    ...(api.screenshots?.screenshotUrl ? {
      screenshot: api.screenshots.screenshotUrl,
    } : {}),

  });
  window.__VISUAL_CONFIG__.pro = mergeDeep(pro, {
    urls: { assets: proAssets },
  });
  window.__VISUAL_CONFIG__.compiler = compiler;

  window.__VISUAL_CONFIG__.pageData = getPage(pageData);
  window.__VISUAL_CONFIG__.ui = getUi({ mode, config: configData, handlers: exposedHandlers, uid });
  window.__VISUAL_CONFIG__.dynamicContent = getDCConfig(dynamicContent, exposedHandlers, uid);
  window.__VISUAL_CONFIG__.integrations = getIntegration({
    integration,
    handlers: exposedHandlers,
    uid,
  });
  window.__VISUAL_CONFIG__.api = getApi({ api, handlers: exposedHandlers, uid });
  window.__VISUAL_CONFIG__.l10n = l10n;
  window.__VISUAL_CONFIG__.contentDefaults = contentDefaults;
  window.__VISUAL_CONFIG__.platform = platform;

  if (templateType) {
    window.__VISUAL_CONFIG__.templateType = templateType;
  }

  window.__VISUAL_CONFIG__.onLoad = () => exposedHandlers.onLoad(uid);
  window.__VISUAL_CONFIG__.onAutoSave = (data: AutoSaveOutput<HtmlOutputType>) => exposedHandlers.onAutoSave(data, uid);
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
};

const save = (uid: string) => {
  const Config = window.Brizy?.config?.getAll();

  if (Config && typeof Config.onUpdate === "function") {
    const mode = window.__VISUAL_CONFIG__.mode;

    Config.onUpdate(async (_extra: Record<string, unknown>) => {
      const assetsType = getAssetsType(Config);
      let extra = addThirdPartyAssets({ data: _extra, assetsType });
      const data = { mode, ...extra };
      const exposedConfig = Comlink.wrap<ExposedHandlers>(Comlink.windowEndpoint(self.parent));
      // @ts-expect-error: Type Styles is not assignable to type string
      await exposedConfig.save(data, uid);
    });
  }
};

export const actions = {
  init,
  save,
};
