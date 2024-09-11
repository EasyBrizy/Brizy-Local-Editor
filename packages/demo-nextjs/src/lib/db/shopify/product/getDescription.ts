import { fetchShopifyGraphQLData } from "../index";

const query = `
query getProductDescription($id: ID!) {
    product(id: $id) {
        description
    }
}
`;

export const getProductDescription = async (productId: string) => {
  const data = await fetchShopifyGraphQLData(query, { id: productId });

  return data.product.description;
};
