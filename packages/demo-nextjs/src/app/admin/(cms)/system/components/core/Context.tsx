import { createContext } from "react";
import { ProjectSettingsContextModel } from "./types";

export const ProjectSettingsContext = createContext<ProjectSettingsContextModel>({
  data: null,
  isLoading: false,
  updateSettings: () => {},
});
