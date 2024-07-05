import { getPreview } from "@/lib/preview";
import { createHTML } from "@/utils/createHTML";
import { projectId } from "@/utils/mock";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(_: Request, { params }: Params) {
  try {
    const pageId = params.id;
    const { page, project } = await getPreview({ pageId, projectId });
    const response = new NextResponse(createHTML({ page, project }));

    response.headers.set("Content-Type", "text/html; charset=utf-8");

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Fail to get page" }, { status: 500 });
  }
}
