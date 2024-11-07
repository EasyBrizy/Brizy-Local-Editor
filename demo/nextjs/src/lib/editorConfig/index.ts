import { Config } from "@/hooks/useEditor/types";
import { Item, Project } from "@/lib/db/types";

export const getProjectData = (model: Project): Config["projectData"] => {
  const id = model.id;
  const projectDataParsed = JSON.parse(model.data);
  return { ...projectDataParsed.data, id: `${id}` };
};

export const getPageData = (model: Item): Config["pageData"] => {
  const id = model.id;
  const pageDataParsed = JSON.parse(model.data ?? "{}");
  const { compiled, ...pageData } = pageDataParsed;
  return { ...pageData, id: `${id}` };
};
