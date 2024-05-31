import { getConfig } from "@/config";
import { Config } from "@/hooks/useEditor/types";
import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { pageId, projectId } from "@/utils/mock";
import { demoConfig } from "./demoConfig";

const getProjectData = (model: any): Config["projectData"] => {
  const projectDataParsed = JSON.parse(model.data);
  return projectDataParsed.data;
};

const getPageData = (model: any): Config["pageData"] => {
  const pageDataParsed = JSON.parse(model.data);
  const { compiled, ...pageData } = pageDataParsed;
  return pageData;
};

export async function getEditorConfig(): Promise<Config> {
  try {
    await DBConnect();

    const pageDataModel = await Models.PageData.findOne({ id: pageId });
    const projectDataModel = await Models.ProjectData.findOne({ id: projectId });

    return {
      ...demoConfig,
      pagePreview: `${getConfig().host}/preview/${pageId}`,
      pageData: getPageData(pageDataModel),
      projectData: getProjectData(projectDataModel),
    };
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
}
