import { fetchProducts } from "@/lib/db/shopify/getProducts";
import { getShopName } from "@/lib/db/shopify/getShopName";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const itemsPerPage = parseInt(req.nextUrl.searchParams.get("itemsPerPage") ?? "20");
  const page = parseInt(req.nextUrl.searchParams.get("page") ?? "1");

  if (page < 1) {
    return NextResponse.json({ error: "Invalid page number" }, { status: 400 });
  }

  try {
    const afterCursor = page > 1 ? (await fetchProducts({ first: itemsPerPage * (page - 1) })).lastCursor : null;
    const { products } = await fetchProducts({ first: itemsPerPage, after: afterCursor });
    const shopName = await getShopName();

    return NextResponse.json({ products, shopName }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to get products", e }, { status: 400 });
  }
}
