import { getItems } from "@/lib/db/item/getItems";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const limit = req.nextUrl.searchParams.get("limit");

  try {
    const { items } = await getItems(
      { type: "all" },
      { sortBy: "date", sort: "desc", limit: parseInt(limit ?? "5"), skip: 0 },
    );

    if (!items) {
      return NextResponse.json({ success: false, error: "Fail to find items" }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      data: items,
    });
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
