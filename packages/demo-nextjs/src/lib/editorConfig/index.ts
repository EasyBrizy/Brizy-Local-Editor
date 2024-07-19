import { getConfig } from "@/config";
import { Config } from "@/hooks/useEditor/types";
import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { Modes } from "@builder/core/build/es/types/types";
import { demoConfig } from "./demoConfig";

const getProjectData = (model: Record<string, string>): Config["projectData"] => {
  const projectDataParsed = JSON.parse(model.data);
  return projectDataParsed.data;
};

const getPageData = (model: Record<string, string>): Config["pageData"] => {
  const pageDataParsed = JSON.parse(model.data);
  const { compiled, ...pageData } = pageDataParsed;
  return pageData;
};

interface Data {
  pageId: string;
  projectId: number;
  mode: Modes;
}

export async function getEditorConfig(data: Data): Promise<Config> {
  try {
    const { pageId, projectId, mode } = data;
    await DBConnect();
    let pageDataModel = undefined;
    let projectDataModel = undefined;

    try {
      pageDataModel = (await Models.PageData.findOne({ id: pageId })) ?? undefined;
    } catch (e) {
      console.error(e);
    }

    try {
      projectDataModel = (await Models.ProjectData.findOne({ id: projectId })) ?? undefined;
    } catch (e) {
      console.error(e);
    }

    return {
      ...demoConfig,
      mode,
      ...(pageDataModel ? { pageData: getPageData(pageDataModel) } : {}),
      ...(projectDataModel ? { projectData: getProjectData(projectDataModel) } : {}),
    };
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch data");
  }
}
