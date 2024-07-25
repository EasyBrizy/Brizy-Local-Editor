import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { getPageData, getProjectData } from "@/lib/editorConfig";
import { demoConfig } from "@/lib/editorConfig/demoConfig";
import { getProject } from "@/lib/project/getProject";

export async function getStories() {
  await DBConnect();
  return Models.Story.find();
}

export async function getStoryConfigById(id: string) {
  await DBConnect();

  const query = {
    id,
  };
  const page = await Models.Story.findOne(query);
  const project = await getProject();

  return {
    ...demoConfig,
    ...(page ? { pageData: getPageData(page) } : {}),
    ...(project ? { projectData: getProjectData(project) } : {}),
  };
}
