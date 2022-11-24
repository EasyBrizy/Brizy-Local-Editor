import { ActionResolve, Config, Target } from "../types/types";

export const init = (config: Config): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({
    type: "initPage",
    data: {
      pageData: config.pageData,
      projectData: config.projectData,
      getMedia: config.getMedia,
      setMedia: config.setMedia,
      setLeads: config.setLeads,
      pagePreview: config.pagePreview,
    },
  }),
});
