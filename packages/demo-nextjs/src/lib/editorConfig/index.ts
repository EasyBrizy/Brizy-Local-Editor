import { Config } from "@/hooks/useEditor/types";

export const getProjectData = (model: Record<string, string>): Config["projectData"] => {
  const projectDataParsed = JSON.parse(model.data);
  const id = model.id;
  return { ...projectDataParsed.data, id: `${id}` };
};

export const getPageData = (model: Record<string, string>): Config["pageData"] => {
  const id = model._id;
  const reference = JSON.parse(model.config?.reference ?? "{}");
  const pageDataParsed = JSON.parse(model.data ?? "{}");
  const { compiled, ...pageData } = pageDataParsed;
  return { ...pageData, id: `${id}`, reference };
};
