import { getVariantsByProducts } from "@/lib/db/shopify/getVariantsByProductsId";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const productIds = req.nextUrl.searchParams.get("productIds");

  if (!productIds || !productIds.length) {
    return NextResponse.json({ error: "ProductIds was not provided!" }, { status: 400 });
  }

  const ids = productIds.split(",");

  const data = await getVariantsByProducts(ids);

  return NextResponse.json(data, {
    status: 200,
  });
}
