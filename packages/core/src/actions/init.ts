import { mergeIn, setIn } from "timm";
import { ActionResolve, Config, DCTypes, HtmlOutputType, Target } from "../types/types";
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

type DCOption = Config<HtmlOutputType>["dynamicContent"];

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
};

const createDCContent = <T extends HtmlOutputType>(config: Config<T>): BuilderDCOption => {
  const { dynamicContent = {} } = config;
  const richText = config?.dynamicContent?.groups?.richText;
  const image = config?.dynamicContent?.groups?.image;
  const link = config?.dynamicContent?.groups?.link;
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

  return { ...dynamicContent, groups };
};

//#endregion

export const init = <T extends HtmlOutputType>(config: Config<T>, uid: string, token: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({
    type: ActionTypes.initPage,
    data: {
      pageData: config.pageData,
      projectData: config.projectData,
      pagePreview: config.pagePreview,
      elements: config.elements,
      ui: config.ui,
      token: token,
      api: config.api,
      menuData: config.menu,
      integration: createIntegration(config),
      dynamicContent: createDCContent(config),
    },
  }),
});
