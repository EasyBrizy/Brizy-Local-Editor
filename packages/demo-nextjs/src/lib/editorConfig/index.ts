import { Config } from "@/hooks/useEditor/types";

export const getProjectData = (model: Record<string, string>): Config["projectData"] => {
  const projectDataParsed = JSON.parse(model.data);
  return projectDataParsed.data;
};

export const getPageData = (model: Record<string, string>): Config["pageData"] => {
  const pageDataParsed = JSON.parse(model.data);
  const { compiled, ...pageData } = pageDataParsed;
  return pageData;
};

// interface Data {
//   pageId: string;
//   projectId: number;
// }

// export async function getEditorConfig(data: Data): Promise<Config> {
//   try {
//     const { pageId, projectId } = data;
//     await DBConnect();
//     let pageDataModel = undefined;
//     let projectDataModel = undefined;
//
//     try {
//       pageDataModel = (await Models.Pages.findOne({ id: pageId })) ?? undefined;
//     } catch (e) {
//       console.error(e);
//     }
//
//     try {
//       projectDataModel = (await Models.Project.findOne({ id: projectId })) ?? undefined;
//     } catch (e) {
//       console.error(e);
//     }
//
//     return {
//       ...demoConfig,
//       ...(pageDataModel ? { pageData: getPageData(pageDataModel) } : {}),
//       ...(projectDataModel ? { projectData: getProjectData(projectDataModel) } : {}),
//     };
//   } catch (e) {
//     console.error(e);
//     throw new Error("Failed to fetch data");
//   }
// }
