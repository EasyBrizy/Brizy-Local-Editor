import { CartItem } from "./types";

interface Edge {
  node: CartItem;
}

export const normalizeCartItem = (edges: Edge[]) => edges.filter(({ node }) => node.quantity).map(({ node }) => node);
