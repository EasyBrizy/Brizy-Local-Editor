import { mergeIn } from "timm";
import { ActionResolve, Config, HtmlOutputType, Target } from "../types/types";
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

  if (integrationForm.action?.handler) {
    _integration = mergeIn(integration, ["form", "action"], { enable: true }) as BuilderIntegrationConfig;
  }

  return _integration;
};

//#endregion

//#region DynamicContent

type DCOption = Config<HtmlOutputType>["dynamicContent"];
type BuilderDCOption = DCOption & {
  richText?: {
    enable?: boolean;
  };
};

const createDCContent = <T extends HtmlOutputType>(config: Config<T>): BuilderDCOption => {
  const { dynamicContent = {} } = config;
  const handler = config?.dynamicContent?.richText?.handler;

  if (typeof handler === "function") {
    return mergeIn(dynamicContent, ["richText", "handler"], { enable: true }) as BuilderDCOption;
  }

  return dynamicContent;
};

//#endregion

//#region Elements

type Elements = Required<Config<HtmlOutputType>>["elements"];
type Trigger = Required<Elements>["options"]["trigger"] & {
  enable?: boolean;
};

const createTrigger = <T extends HtmlOutputType>(config: Config<T>): Trigger | undefined => {
  const trigger = config.elements?.options?.trigger;

  if (trigger && typeof trigger.handler === "function") {
    return {
      ...trigger,
      enable: true,
    };
  }
};

const createElements = <T extends HtmlOutputType>(config: Config<T>): Partial<Elements> => {
  const trigger = createTrigger(config);
  let options = config.elements?.options;

  if (options && trigger) {
    options = mergeIn(options, ["trigger"], trigger) as Elements["options"];
  }

  return {
    ...config.elements,
    options: options,
  };
};

//#endregion

export const init = <T extends HtmlOutputType>(config: Config<T>, token: string): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({
    type: ActionTypes.initPage,
    data: {
      pageData: config.pageData,
      projectData: config.projectData,
      pagePreview: config.pagePreview,
      ui: config.ui,
      token: token,
      api: config.api,
      menuData: config.menu,
      integration: createIntegration(config),
      dynamicContent: createDCContent(config),
      elements: createElements(config),
    },
  }),
});
