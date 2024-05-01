import { HandlerData } from "@/builderProvider/types/type";
import { Obj, Str } from "@brizy/readers";
import { getIn, setIn } from "timm";
import { addCustomFileHandler } from "./customFile";
import { addMediaHandler } from "./media";
import { getCreateScreenshots, getUpdateScreenshots } from "./screenshots";
import {
  getKits,
  getKitsData,
  getKitsMeta,
  getLayoutsData,
  getLayoutsMeta,
  getPopupsData,
  getPopupsMeta,
  getStoriesData,
  getStoriesMeta,
} from "./templates";

interface Data extends HandlerData {
  api: Record<string, unknown>;
}

export const getApi = (data: Data) => {
  const { uid, target, event, api: _api } = data;
  let api = _api;
  const media = api.media ?? {};
  const customFile = api.customFile ?? {};
  const enabledDefaultKits = getIn(api, ["defaultKits", "enable"]);
  const enabledDefaultPopups = getIn(api, ["defaultPopups", "enable"]);
  const enabledDefaultLayouts = getIn(api, ["defaultLayouts", "enable"]);
  const enabledDefaultStories = getIn(api, ["defaultStories", "enable"]);
  const enabledScreenshots = getIn(api, ["screenshots", "enable"]);

  if (enabledDefaultKits) {
    api = setIn(api, ["defaultKits"], {
      getKits: getKits({ event, target, uid }),
      getMeta: getKitsMeta({ event, target, uid }),
      getData: getKitsData({ event, target, uid }),
    }) as Record<string, unknown>;
  }

  if (enabledDefaultPopups) {
    api = setIn(api, ["defaultPopups"], {
      getMeta: getPopupsMeta({ event, target, uid }),
      getData: getPopupsData({ event, target, uid }),
    }) as Record<string, unknown>;
  }

  if (enabledDefaultLayouts) {
    api = setIn(api, ["defaultLayouts"], {
      getMeta: getLayoutsMeta({ event, target, uid }),
      getData: getLayoutsData({ event, target, uid }),
    }) as Record<string, unknown>;
  }

  if (enabledDefaultStories) {
    api = setIn(api, ["defaultStories"], {
      getMeta: getStoriesMeta({ event, target, uid }),
      getData: getStoriesData({ event, target, uid }),
    }) as Record<string, unknown>;
  }

  if (enabledScreenshots && Obj.isObject(api.screenshots)) {
    api = setIn(api, ["screenshots"], {
      screenshotsUrl: Str.read(api.screenshots.screenshotsUrl) ?? "",
      create: getCreateScreenshots({ event, target, uid }),
      update: getUpdateScreenshots({ event, target, uid }),
    }) as Record<string, unknown>;
  }

  return {
    ...api,
    media: {
      ...media,
      addMedia: { handler: addMediaHandler({ event, target, uid }) },
    },
    customFile: {
      ...customFile,
      addFile: { handler: addCustomFileHandler({ event, target, uid }) },
    },
  };
};
