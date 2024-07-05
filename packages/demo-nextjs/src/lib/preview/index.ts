import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { PageCompiled, ProjectCompiled } from "@builder/core/build/es/types/common";

const getPageCompiled = (model: Record<string, string>) => {
  const pageDataParsed = JSON.parse(model.data);
  return pageDataParsed.compiled;
};

const getProjectCompiled = (model: Record<string, string>) => {
  const projectDataParsed = JSON.parse(model.data);
  return projectDataParsed.compiled;
};

interface Data {
  pageId: string | number;
  projectId: string | number;
}

export async function getPreview(data: Data): Promise<{
  page: PageCompiled;
  project: ProjectCompiled;
}> {
  const { pageId, projectId } = data;
  await DBConnect();

  const pageData = await Models.PageData.findOne({ id: pageId });
  const projectData = await Models.ProjectData.findOne({ id: projectId });

  const page = getPageCompiled(pageData);
  const project = getProjectCompiled(projectData);

  return { page, project };
}
