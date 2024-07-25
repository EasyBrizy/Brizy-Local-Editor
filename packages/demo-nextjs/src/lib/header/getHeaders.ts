import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { getPageData, getProjectData } from "@/lib/editorConfig";
import { demoConfig } from "@/lib/editorConfig/demoConfig";
import { getProject } from "@/lib/project/getProject";

export async function getHeaders() {
  await DBConnect();
  return Models.Header.find();
}

export async function getHeaderConfigById(id: string) {
  await DBConnect();

  const query = { id };
  const page = await Models.Header.findOne(query);
  const project = await getProject();

  return {
    ...demoConfig,
    ...(page ? { pageData: getPageData(page) } : {}),
    ...(project ? { projectData: getProjectData(project) } : {}),
  };
}
