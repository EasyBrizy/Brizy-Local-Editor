import { addItemToCart } from "@/lib/db/shopify/cart/addItemToCart";
import { createCart } from "@/lib/db/shopify/cart/createCart";
import { getCartItems } from "@/lib/db/shopify/cart/getCartItems";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const { quantity, variants, cartId, productId } = await req.json();

  if (!productId) {
    return new Response("Product ID is required", { status: 400 });
  }

  if (!quantity) {
    return new Response("Quantity is required", { status: 400 });
  }

  let cartID = cartId;

  if (!cartID) {
    cartID = await createCart();
  }

  const cartData = await addItemToCart({ productId, cartId: cartID, quantity: +quantity, variants });

  return NextResponse.json({ data: cartData }, { status: 200 });
}

export async function GET(req: NextRequest) {
  const cartId = req.nextUrl.searchParams.get("cartId");

  if (!cartId) {
    return new Response("Cart ID is required", { status: 400 });
  }

  const data = await getCartItems(cartId);

  return NextResponse.json({ data }, { status: 200 });
}
