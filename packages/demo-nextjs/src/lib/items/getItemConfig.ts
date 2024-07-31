import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { getPageData, getProjectData } from "@/lib/editorConfig";
import { demoConfig } from "@/lib/editorConfig/demoConfig";
import { getProject } from "@/lib/project/getProject";

interface Data {
  collection: string;
  item: string;
}

export async function getItemConfig(data: Data) {
  const { item, collection } = data;
  const query = {
    "slug.collection": collection,
    "slug.item": item,
  };

  await DBConnect();

  const page = await Models.Items.findOne(query);
  const project = await getProject();

  return {
    ...demoConfig,
    pageData: getPageData(page),
    projectData: getProjectData(project),
  };
}
