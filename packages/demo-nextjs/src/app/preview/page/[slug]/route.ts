import { getPreview } from "@/lib/preview";
import { createHTML } from "@/utils/createHTML";
import { footerId, headerId, projectId } from "@/utils/mock";
import { NextResponse } from "next/server";

interface Params {
  params: {
    slug: string;
  };
}

export async function GET(_: Request, { params }: Params) {
  try {
    const pageId = params.slug;
    const { page, project } = await getPreview({ pageId, projectId });
    const { page: headerPage } = await getPreview({ pageId: headerId });
    const { page: footerPage } = await getPreview({ pageId: footerId });
    const response = new NextResponse(createHTML({ page, project, headerPage, footerPage }));

    response.headers.set("Content-Type", "text/html; charset=utf-8");

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Fail to get page" }, { status: 500 });
  }
}
