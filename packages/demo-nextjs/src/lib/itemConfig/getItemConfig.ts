import { getItem } from "@/lib/db/item/getItem";
import { getProject } from "@/lib/db/project/getProject";
import { getPageData, getProjectData } from "@/lib/editorConfig";
import { demoConfig } from "@/lib/editorConfig/demoConfig";
import { projectId } from "@/utils/mock";

interface Data {
  collection: string;
  item: string;
}

export async function getItemConfig(data: Data) {
  const { item, collection } = data;
  const query = {
    type: collection,
    item,
  };

  const page = await getItem(query);
  const { reference } = page.config ?? {};
  const parsedReference = reference ? JSON.parse(reference) : null;
  const project = await getProject(projectId);

  return {
    ...demoConfig,
    ...(parsedReference ? { reference: parsedReference } : {}),
    pageData: getPageData(page),
    projectData: getProjectData(project),
  };
}
