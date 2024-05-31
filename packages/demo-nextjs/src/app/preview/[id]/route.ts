import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { createMockHTML } from "@/utils/createMockHTML";
import { projectId } from "@/utils/mock";
import { PageCompiled, ProjectCompiled } from "@builder/core/build/es/types/common";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

interface Model {
  page?: PageCompiled;
  project?: ProjectCompiled;
}

const getProjectCompiled = (model: any) => {
  const projectDataParsed = JSON.parse(model.data);
  return projectDataParsed.compiled;
};

const getPageCompiled = (model: any) => {
  const pageDataParsed = JSON.parse(model.data);
  return pageDataParsed.compiled;
};

const createHTML = ({ page, project }: Model): string => {
  const { styles, scripts, html } = page ?? {};
  const { styles: projectStyles } = project ?? {};

  if (!html) {
    return createMockHTML({ body: "<h1>Missing page</h1>" });
  }

  const stylesStr = [...(styles ?? []), ...(projectStyles ?? [])].join("");
  const scriptsStr = scripts?.join("") ?? "";

  const body = `
    <!-- HTML -->
    ${html}
    <!-- Styles -->
    ${scriptsStr}
`;

  return createMockHTML({
    head: stylesStr,
    body,
  });
};

export async function GET(_: Request, { params }: Params) {
  try {
    const pageId = params.id;

    await DBConnect();

    const pageData = await Models.PageData.findOne({ id: pageId });
    const projectData = await Models.ProjectData.findOne({ id: projectId });

    const response = new NextResponse(
      createHTML({
        page: getPageCompiled(pageData),
        project: getProjectCompiled(projectData),
      }),
    );

    response.headers.set("Content-Type", "text/html; charset=utf-8");

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Fail to get page" }, { status: 500 });
  }
}
