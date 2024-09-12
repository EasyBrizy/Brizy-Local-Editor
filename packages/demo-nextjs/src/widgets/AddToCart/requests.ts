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

export const getProductsWithVariants = (productIds: string) =>
  axios.get(`/api/products/cart/withVariants?productIds=${productIds}`);

export const getAllProducts = (origin: string) => axios.get(`${origin}/api/products/all`);
