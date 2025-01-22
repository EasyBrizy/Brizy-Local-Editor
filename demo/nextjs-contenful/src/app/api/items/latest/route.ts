import { getItems } from "@/lib/db/item/getItems";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const limit = req.nextUrl.searchParams.get("limit");
    const { items } = await getItems({ type: "all" }, { limit: parseInt(limit ?? "5"), skip: 0 });

    if (!items) {
      return NextResponse.json({ success: false, error: "Fail to find items" }, { status: 400 });
    }

    return NextResponse.json(
      {
        success: true,
        data: items.map((i) => ({
          id: i._id,
          slug: i.slug,
          config: i.config,
          data: i.data,
          createdAt: i.createdAt,
        })),
      },
      { status: 200 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { success: false, error: "Fail to find items" },
      {
        status: 400,
      },
    );
  }
}
