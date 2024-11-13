import { getShopName } from "@/lib/db/shopify/getShopName";
import { fetchShopifyGraphQLData } from "../index";

const query = `
query getProductUrl($id: ID!) {
    product(id: $id) {
        handle
    }
}
`;

export const getProductUrl = async (productId: string) => {
  const [data, shopName] = await Promise.all([fetchShopifyGraphQLData(query, { id: productId }), getShopName()]);
  const { handle } = data.product ?? {};

  return `https://${shopName}.myshopify.com/products/${handle}`;
};
