import { getAllProducts } from "@/lib/db/shopify/getProducts";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { products } = await getAllProducts();

    return NextResponse.json(
      {
        count: products.length,
      },
      { status: 200 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Fail to get products" }, { status: 400 });
  }
}
