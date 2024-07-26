import { Config } from "@/hooks/useEditor/types";

export const getProjectData = (model: Record<string, string>): Config["projectData"] => {
  const projectDataParsed = JSON.parse(model.data);
  return projectDataParsed.data;
};

export const getPageData = (model: Record<string, string>): Config["pageData"] => {
  const id = model._id;
  const pageDataParsed = JSON.parse(model.data);
  const { compiled, ...pageData } = pageDataParsed;
  return { ...pageData, id: `${id}` };
};
