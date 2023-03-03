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

export const init = <T extends HtmlOutputType>(config: Config<T>, uid: string, token: string): ActionResolve => ({
  uid,
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
    },
  }),
});
