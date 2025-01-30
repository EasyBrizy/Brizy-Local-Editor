import { getItemsCollections } from "@/lib/db/item/getItemsCollections";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getItemsCollections();
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to get collections", e }, { status: 400 });
  }
}
