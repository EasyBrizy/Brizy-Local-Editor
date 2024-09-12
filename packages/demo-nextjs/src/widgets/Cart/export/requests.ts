import axios from "axios";

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
