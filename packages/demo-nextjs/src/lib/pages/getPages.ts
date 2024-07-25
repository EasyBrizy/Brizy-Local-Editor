import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { getPageData, getProjectData } from "@/lib/editorConfig";
import { getProject } from "@/lib/project/getProject";
import { demoConfig } from "../editorConfig/demoConfig";

export async function getPages() {
  await DBConnect();
  return Models.Pages.find();
}

export async function getPageConfigBySlug(slug: string) {
  await DBConnect();

  const query = {
    "slug.item": { $eq: slug },
  };
  const page = await Models.Pages.findOne(query);
  const project = await getProject();

  return {
    ...demoConfig,
    ...(page ? { pageData: getPageData(page) } : {}),
    ...(project ? { projectData: getProjectData(project) } : {}),
  };
}
