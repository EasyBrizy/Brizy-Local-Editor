import { mergeIn } from "timm";
import { ActionResolve, Config, HtmlOutputType, Target } from "../types/types";
import { ActionTypes } from "./types";

// Integration
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

// DynamicContent
type DCOption = Config<HtmlOutputType>["dynamicContent"];
type BuilderDCOption = DCOption & {
  richText?: {
    enable?: boolean;
  };
};

const createDCContent = <T extends HtmlOutputType>(config: Config<T>): BuilderDCOption => {
  const { dynamicContent = {} } = config;

  if (typeof dynamicContent.richText === "function") {
    return mergeIn(dynamicContent, ["richText"], { enable: true }) as BuilderDCOption;
  }

  return dynamicContent;
};

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
    },
  }),
});
