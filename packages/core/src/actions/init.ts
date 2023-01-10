import { mergeIn } from "timm";
import { ActionResolve, Config, HtmlOutputType, Target } from "../types/types";
import { ActionTypes } from "./types";

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

  if (integrationForm.fields?.handler) {
    return mergeIn(integration, ["form", "fields"], { enable: true }) as BuilderIntegrationConfig;
  }

  return integration;
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
    },
  }),
});
