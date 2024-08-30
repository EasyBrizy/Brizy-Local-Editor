import { Project, ProjectSettings } from "@/lib/db/types";
import { ProjectJsonCompiledOutput } from "@builder/core/build/es/types/common";

type _Project = Omit<Project, "data">;
export type ProjectDataParsed = _Project & {
  settings?: ProjectSettings;
  data: {
    compiled?: ProjectJsonCompiledOutput;
  };
};

export function convertProject(item: Project): ProjectDataParsed {
  const { data, settings, ..._item } = item;
  const parsedData = JSON.parse(data ?? "{}");
  const parsedSettings = settings ? JSON.parse(settings) : undefined;
  return { ..._item, data: parsedData, settings: parsedSettings };
}
