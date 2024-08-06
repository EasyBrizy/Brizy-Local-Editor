import React from "react";
import { ProjectSettingsContextModel } from "./types";

export const ProjectSettingsContext = React.createContext<ProjectSettingsContextModel>({
  data: null,
  updateSettings: async () => {},
});
