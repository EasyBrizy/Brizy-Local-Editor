import { DCTypes } from "@/types/dynamicContent";
import { ActionResolve, Config, HtmlOutputType, Modes, Target } from "@/types/types";
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
  makePlaceholder?: {
    enable?: boolean;
  };
  explodePlaceholder?: {
    enable?: boolean;
  };
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
};

const createDCContent = <T extends HtmlOutputType>(config: Config<T>): BuilderDCOption => {
  const { dynamicContent = {} } = config;
  const richText = dynamicContent?.groups?.richText;
  const image = dynamicContent?.groups?.image;
  const link = dynamicContent?.groups?.link;
  let dc: BuilderDCOption = omit(dynamicContent, ["groups"]);
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

export const init = <T extends HtmlOutputType>(config: Config<T>, uid: string, token: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({
    type: ActionTypes.initPage,
    data: {
      mode: createModes(config.mode ?? Modes.page),
      pageData: config.pageData,
      projectData: config.projectData,
      pagePreview: config.pagePreview,
      ui: config.ui,
      token: token,
      menuData: config.menu,
      api: createApi(config),
      integration: createIntegration(config),
      dynamicContent: createDCContent(config),
    },
  }),
});
