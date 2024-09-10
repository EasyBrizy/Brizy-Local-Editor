import { fetchShopifyGraphQLData } from "@/lib/db/shopify";

const query = `
mutation CreateCart {
    cartCreate {
        cart {
            id
        }
    }
}
`;

export const createCart = async () => {
  const data = await fetchShopifyGraphQLData(query);

  return data.cartCreate.cart.id;
};
