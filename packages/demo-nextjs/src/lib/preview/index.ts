import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { PageJsonCompiledOutput, ProjectJsonCompiledOutput } from "@builder/core/build/es/types/common";

const getPageCompiled = (model: Record<string, string>) => {
  const pageDataParsed = JSON.parse(model.data);
  return pageDataParsed.compiled;
};

const getProjectCompiled = (model: Record<string, string>) => {
  const projectDataParsed = JSON.parse(model.data);
  return projectDataParsed.compiled;
};

interface Data {
  pageId?: string | number;
  projectId?: string | number;
}

export async function getPreview(data: Data): Promise<{
  page?: PageJsonCompiledOutput;
  project?: ProjectJsonCompiledOutput;
}> {
  const { pageId, projectId } = data;
  await DBConnect();
  let page;
  let project;

  if (projectId) {
    const projectData = await Models.Project.findOne({ id: projectId });
    project = getProjectCompiled(projectData);
  }

  if (pageId) {
    const pageData = await Models.Items.findOne({ id: pageId });
    page = getPageCompiled(pageData);
  }

  return { page, project };
}
