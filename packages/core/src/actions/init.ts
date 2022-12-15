import { ActionResolve, Config, HtmlOutputType, Target } from "../types/types";
import { ActionTypes } from "./types";

export const init = <T extends HtmlOutputType>(config: Config<T>, token: string): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({
    type: ActionTypes.initPage,
    data: {
      pageData: config.pageData,
      projectData: config.projectData,
      getMedia: config.getMedia,
      setMedia: config.setMedia,
      setLeads: config.setLeads,
      pagePreview: config.pagePreview,
      ui: config.ui,
      token: token,
    },
  }),
});
