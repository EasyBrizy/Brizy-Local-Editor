import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { getPageData, getProjectData } from "@/lib/editorConfig";
import { demoConfig } from "@/lib/editorConfig/demoConfig";
import { getProject } from "@/lib/project/getProject";

export async function getPopups() {
  await DBConnect();
  return Models.Popup.find();
}

export async function getPopupConfigById(id: string) {
  await DBConnect();

  const query = { id };
  const page = await Models.Popup.findOne(query);
  const project = await getProject();

  return {
    ...demoConfig,
    ...(page ? { pageData: getPageData(page) } : {}),
    ...(project ? { projectData: getProjectData(project) } : {}),
  };
}
