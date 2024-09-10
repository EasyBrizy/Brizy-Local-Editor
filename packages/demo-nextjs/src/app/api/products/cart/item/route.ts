import { removeCartItem } from "@/lib/db/shopify/cart/deleteCartItem";
import { updateCartItem } from "@/lib/db/shopify/cart/updateItemCart";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  const { cartId, itemId } = await req.json();

  if (!cartId) {
    return new Response("Cart ID is required", { status: 400 });
  }

  if (!itemId) {
    return new Response("Item ID is required", { status: 400 });
  }

  const data = await removeCartItem(cartId, [itemId]);

  return NextResponse.json({ data }, { status: 200 });
}

export async function PUT(req: Request) {
  const { cartId, itemId, quantity } = await req.json();

  if (!cartId) {
    return new Response("Cart ID is required", { status: 400 });
  }

  if (!itemId) {
    return new Response("Item ID is required", { status: 400 });
  }

  const data = await updateCartItem(cartId, [
    {
      id: itemId,
      quantity,
    },
  ]);

  return NextResponse.json({ data }, { status: 200 });
}
