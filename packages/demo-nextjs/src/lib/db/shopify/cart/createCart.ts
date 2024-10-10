import { fetchShopifyGraphQLData } from "@/lib/db/shopify";

const query = `
mutation CreateCart {
    cartCreate(input: {  }) {
        cart {
            id
        }
    }
}
`;

export const createCart = async () => {
  const data = await fetchShopifyGraphQLData(query, {});

  return data.cartCreate.cart.id;
};
