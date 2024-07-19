import { getPreview } from "@/lib/preview";
import { createHTML } from "@/utils/createHTML";
import { headerId, projectId } from "@/utils/mock";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { page, project } = await getPreview({ pageId: headerId, projectId });
    const response = new NextResponse(createHTML({ page, project }));

    response.headers.set("Content-Type", "text/html; charset=utf-8");

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Fail to get page" }, { status: 500 });
  }
}
