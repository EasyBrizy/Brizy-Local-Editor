import { Variant } from "@/lib/db/shopify/types";
import axios from "axios";

export const addItemToCart = ({
  quantity,
  variants,
  productId,
  cartId,
}: {
  quantity: number;
  variants?: Variant[];
  cartId: string;
  productId: string;
}) =>
  axios.post("/api/products/cart", {
    quantity,
    variants,
    cartId,
    productId,
  });

export const updateCartItem = ({ cartId, itemId, quantity }: { cartId: string; itemId: string; quantity: number }) =>
  axios.put("/api/products/cart/item", {
    cartId,
    itemId,
    quantity,
  });

export const deleteCartItem = ({ cartId, itemId }: { cartId: string; itemId: string }) =>
  axios.delete("/api/products/cart/item", {
    data: {
      itemId,
      cartId,
    },
  });

export const getCart = (cartId: string) => axios.get(`/api/products/cart?cartId=${cartId}`);

export const getProductsWithVariants = (productIds: string) =>
  axios.get(`/api/products/withVariants?productIds=${productIds}`);
