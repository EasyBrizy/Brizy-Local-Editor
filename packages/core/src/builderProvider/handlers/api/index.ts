import { Obj, Str } from "@brizy/readers";
import { getIn, setIn } from "timm";
import { ExposedHandlers } from "../../types/type";
import { getCollectionItemsHandler, loadCollectionItemsHandler, searchCollectionItemsHandler } from "./collectionItems";
import { getLoadCollectionTypesHandler } from "./collectionTypes";
import { getCustomFileHandler } from "./customFile";
import { getMediaHandler } from "./media";
import { getCreateScreenshots, getUpdateScreenshots } from "./screenshots";
import {
  getKits,
  getKitsData,
  getKitsMeta,
  getLayoutsData,
  getLayoutsMeta,
  getLayoutsPages,
  getPopupsData,
  getPopupsMeta,
  getStoriesData,
  getStoriesMeta,
  getStoriesPages,
} from "./templates";

interface Data {
  api: Record<string, unknown>;
  handlers: ExposedHandlers;
  uid: string;
}

export const getApi = (data: Data) => {
  const { api: _api, handlers, uid } = data;
  let api = _api;
  const media = api.media ?? {};

  const customFile = api.customFile ?? {};
  const enabledDefaultKits = getIn(api, ["defaultKits", "enable"]);
  const enabledDefaultPopups = getIn(api, ["defaultPopups", "enable"]);
  const enabledDefaultLayouts = getIn(api, ["defaultLayouts", "enable"]);
  const enabledDefaultStories = getIn(api, ["defaultStories", "enable"]);
  const enabledScreenshots = getIn(api, ["screenshots", "enable"]);

  const {
    getKits: getApiKits,
    getKitsMeta: getApiKitsMeta,
    getKitsData: getApiKitsData,
    getPopupsMeta: getApiPopupsMeta,
    getPopupsData: getApiPopupsData,
    getLayoutsMeta: getApiLayoutsMeta,
    getLayoutsData: getApiLayoutsData,
    getLayoutsPages: getApiLayoutsPages,
    getStoriesMeta: getApiStoriesMeta,
    getStoriesData: getApiStoriesData,
    getStoriesPages: getApiStoriesPages,
    createScreenshot,
    updateScreenshot,
    addMedia,
    addFile,
    loadCollectionTypes,
    getCollectionItems,
    searchCollectionItems,
    loadCollectionItems,
  } = handlers;

  if (enabledDefaultKits) {
    api = setIn(api, ["defaultKits"], {
      getKits: getKits(getApiKits, uid),
      getMeta: getKitsMeta(getApiKitsMeta, uid),
      getData: getKitsData(getApiKitsData, uid),
    }) as Record<string, unknown>;
  }

  if (enabledDefaultPopups) {
    api = setIn(api, ["defaultPopups"], {
      getMeta: getPopupsMeta(getApiPopupsMeta, uid),
      getData: getPopupsData(getApiPopupsData, uid),
    }) as Record<string, unknown>;
  }

  if (enabledDefaultLayouts) {
    api = setIn(api, ["defaultLayouts"], {
      getMeta: getLayoutsMeta(getApiLayoutsMeta, uid),
      getData: getLayoutsData(getApiLayoutsData, uid),
      getPages: getLayoutsPages(getApiLayoutsPages, uid),
    }) as Record<string, unknown>;
  }

  if (enabledDefaultStories) {
    api = setIn(api, ["defaultStories"], {
      getMeta: getStoriesMeta(getApiStoriesMeta, uid),
      getData: getStoriesData(getApiStoriesData, uid),
      getPages: getStoriesPages(getApiStoriesPages, uid),
    }) as Record<string, unknown>;
  }

  if (enabledScreenshots && Obj.isObject(api.screenshots)) {
    api = setIn(api, ["screenshots"], {
      screenshotUrl: Str.read(api.screenshots.screenshotUrl) ?? "",
      create: getCreateScreenshots(createScreenshot, uid),
      update: getUpdateScreenshots(updateScreenshot, uid),
    }) as Record<string, unknown>;
  }

  return {
    ...api,
    media: {
      ...media,
      addMedia: getMediaHandler(addMedia, uid),
    },
    customFile: {
      ...customFile,
      addFile: getCustomFileHandler(addFile, uid),
    },
    collectionTypes: {
      loadCollectionTypes: getLoadCollectionTypesHandler(loadCollectionTypes, uid),
    },
    collectionItems: {
      getCollectionItems: getCollectionItemsHandler(getCollectionItems, uid),
      searchCollectionItems: searchCollectionItemsHandler(searchCollectionItems, uid),
      loadCollectionItems: loadCollectionItemsHandler(loadCollectionItems, uid),
    },
  };
};
