import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { getPageData, getProjectData } from "@/lib/editorConfig";
import { getProject } from "@/lib/project/getProject";
import { demoConfig } from "../editorConfig/demoConfig";

export async function getFooters() {
  await DBConnect();
  return Models.Footer.find();
}

export async function getFooterConfigById(id: string) {
  await DBConnect();

  const query = { id };
  const page = await Models.Footer.findOne(query);
  const project = await getProject();

  return {
    ...demoConfig,
    ...(page ? { pageData: getPageData(page) } : {}),
    ...(project ? { projectData: getProjectData(project) } : {}),
  };
}
