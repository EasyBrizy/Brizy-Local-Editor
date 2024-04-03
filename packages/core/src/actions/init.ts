import type { Response } from "@/types/common";
import { DCTypes } from "@/types/dynamicContent";
import { LeftSidebarOptionsIds } from "@/types/leftSidebar";
import { ActionResolve, Config, HtmlOutputType, Modes, Target } from "@/types/types";
import type { Dictionary } from "@/utils/types";
import { encode } from "js-base64";
import { mergeIn, omit, setIn } from "timm";
import { ActionTypes } from "./types";

//#region Integration

type IntegrationConfig = Config<HtmlOutputType>["integration"];
type BuilderIntegrationConfig = IntegrationConfig & {
  form?: {
    fields?: {
      enable?: boolean;
    };
  };
};

const createIntegration = <T extends HtmlOutputType>(config: Config<T>): BuilderIntegrationConfig => {
  const { integration = {} } = config;
  const integrationForm = integration.form ?? {};

  let _integration = integration;

  if (integrationForm.fields?.handler) {
    _integration = mergeIn(integration, ["form", "fields"], { enable: true }) as BuilderIntegrationConfig;
  }

  return _integration;
};

//#endregion

//#region DynamicContent

type DynamicContent = Config<HtmlOutputType>["dynamicContent"];
type DCOption = Omit<DynamicContent, "groups">;

type BuilderDCOption = DCOption & {
  groups?: {
    [DCTypes.image]?: {
      handler?: {
        enable?: boolean;
      };
    };
    [DCTypes.link]?: {
      handler?: {
        enable?: boolean;
      };
    };
    [DCTypes.richText]?: {
      handler?: {
        enable?: boolean;
      };
    };
  };
  getPlaceholderData?: (
    res: Response<Dictionary<string[]>>,
    rej: Response<string>,
    extra: { placeholders: Dictionary<string>; signal?: AbortSignal },
  ) => void;
};

const createDCContent = <T extends HtmlOutputType>(config: Config<T>): BuilderDCOption => {
  const { dynamicContent = {} } = config;
  const richText = dynamicContent?.groups?.richText;
  const image = dynamicContent?.groups?.image;
  const link = dynamicContent?.groups?.link;
  let dc: BuilderDCOption = omit(dynamicContent, ["groups", "getPlaceholderData"]);
  let groups = undefined;

  if (richText) {
    if (Array.isArray(richText)) {
      groups = setIn(groups, ["richText"], richText) as BuilderDCOption["groups"];
    } else {
      groups = mergeIn(groups, ["richText", "handler"], { enable: true }) as BuilderDCOption["groups"];
    }
  }

  if (image) {
    if (Array.isArray(image)) {
      groups = setIn(groups, ["image"], image) as BuilderDCOption["groups"];
    } else {
      groups = mergeIn(groups, ["image", "handler"], { enable: true }) as BuilderDCOption["groups"];
    }
  }

  if (link) {
    if (Array.isArray(link)) {
      groups = setIn(groups, ["link"], link) as BuilderDCOption["groups"];
    } else {
      groups = mergeIn(groups, ["link", "handler"], { enable: true }) as BuilderDCOption["groups"];
    }
  }

  if (typeof dynamicContent.getPlaceholderData === "function") {
    dc = setIn(dc, ["getPlaceholderData"], { enable: true }) as BuilderDCOption;
  }

  return { ...dc, groups };
};

//#endregion

//#region Modes

enum BuilderModes {
  externalPopup = "external_popup",
  externalStory = "external_story",
  page = "page",
}

const createModes = (modes: Modes): BuilderModes => {
  switch (modes) {
    case Modes.page: {
      return BuilderModes.page;
    }
    case Modes.popup: {
      return BuilderModes.externalPopup;
    }
    case Modes.story: {
      return BuilderModes.externalStory;
    }
  }
};

//#endregion

//#region API

type API = Config<HtmlOutputType>["api"];

type BuilderAPI = API & {
  defaultKits?: {
    enable?: boolean;
  };
  defaultPopups?: {
    enable?: boolean;
  };
  defaultLayouts?: {
    enable?: boolean;
  };
  defaultStories?: {
    enable?: boolean;
  };
  screenshots?: {
    enable?: boolean;
  };
};

const createApi = <T extends HtmlOutputType>(config: Config<T>): BuilderAPI => {
  let { api } = config;

  if (!api) {
    return {};
  }

  if (api.defaultKits) {
    api = setIn(api, ["defaultKits"], { enable: true }) as BuilderAPI;
  }

  if (api.defaultPopups) {
    api = setIn(api, ["defaultPopups"], { enable: true }) as BuilderAPI;
  }

  if (api.defaultLayouts) {
    api = setIn(api, ["defaultLayouts"], { enable: true }) as BuilderAPI;
  }

  if (api.defaultStories) {
    api = setIn(api, ["defaultStories"], { enable: true }) as BuilderAPI;
  }

  if (api.screenshots && api.screenshots.screenshotUrl) {
    api = setIn(api, ["screenshots"], { enable: true }) as BuilderAPI;
  }

  return api;
};

//#endregion

//#region UI

type UI = Config<HtmlOutputType>["ui"];

type BuilderUI = UI & {
  leftSidebar?: {
    [LeftSidebarOptionsIds.cms]?: {
      enable?: boolean;
    };
  };
  publish?: {
    enable?: boolean;
  };
};

export const createUi = <T extends HtmlOutputType>(config: Config<T>): BuilderUI => {
  let ui = config.ui ?? {};
  const { leftSidebar = {}, publish } = ui;
  const cms = leftSidebar[LeftSidebarOptionsIds.cms];

  if (typeof cms?.onOpen === "function") {
    ui = setIn(ui, ["leftSidebar", "cms"], { enable: true }) as BuilderUI;
  }

  if (typeof publish?.handler === "function") {
    ui = setIn(ui, ["publish"], { enable: true }) as BuilderUI;
  }

  return ui;
};

//#endregion

//#region Page

type Page = Config<HtmlOutputType>["pageData"];

type BuilderPage = Page & {
  data: string;
};

const getPage = <T extends HtmlOutputType>(config: Config<T>): BuilderPage => ({
  ...config.pageData,
  data: encode(JSON.stringify(config.pageData.data ?? {})),
});

//#endreigon

export const init = <T extends HtmlOutputType>(config: Config<T>, uid: string, token: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({
    type: ActionTypes.initPage,
    data: {
      mode: createModes(config.mode ?? Modes.page),
      pageData: getPage(config),
      projectData: config.projectData,
      pagePreview: config.pagePreview,
      ui: createUi(config),
      token: token,
      menuData: config.menu,
      api: createApi(config),
      integration: createIntegration(config),
      dynamicContent: createDCContent(config),
    },
  }),
});
