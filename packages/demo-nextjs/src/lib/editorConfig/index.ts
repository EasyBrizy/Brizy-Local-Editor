import { Config } from "@/hooks/useEditor/types";
import { Item, Project } from "@/lib/db/types";
import path from "path"
import fs from "fs"

export const getProjectData = (model: Project): Config["projectData"] => {
  const id = model.id;
  const projectDataParsed = JSON.parse(model.data);
  const projectDataPath = path.join(process.cwd(), "projectData.json");
  const projectDataContent = fs.readFileSync(projectDataPath, "utf-8");
  const { styles, selectedStyle } = JSON.parse(projectDataContent);
  return {
    ...projectDataParsed.data,
    styles: [
      ...(styles ?? []),
      ...projectDataParsed.data.styles
    ],
    selectedStyle: selectedStyle ?? projectDataParsed.data.selectedStyle,
    id: `${id}`
  };
};

export const getPageData = (model: Item): Config["pageData"] => {
  const id = model.id;
  const pageDataParsed = JSON.parse(model.data ?? "{}");
  const pageDataPath = path.join(process.cwd(), "pageData.json");
  const pageDataContent = fs.readFileSync(pageDataPath, "utf-8");
  const pageDataItems = JSON.parse(pageDataContent);

  const { compiled, ...pageData } = pageDataParsed;

  return {
    ...pageData, data: {
      ...pageData.data,
      items: pageDataItems
    }, id: `${id}`
  };
};
