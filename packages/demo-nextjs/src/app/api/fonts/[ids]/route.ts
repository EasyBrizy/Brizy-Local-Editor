import { getFontsFace } from "@/lib/db/fonts/getFonts";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { ids: string } }) {
  try {
    const { ids } = params;

    if (!ids) {
      return new Response("Font IDs are required", { status: 400 });
    }

    const responseCSS = await getFontsFace(ids);

    return new Response(responseCSS.trim(), {
      status: 200,
      headers: {
        "Content-Type": "text/css",
      },
    });
  } catch (error) {
    console.error("Error streaming fonts:", error);
    return new Response("Internal Server Error", { status: 400 });
  }
}
