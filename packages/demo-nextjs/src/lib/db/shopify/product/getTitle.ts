import { fetchShopifyGraphQLData } from "../index";

const query = `
query getProductTitle($id: ID!) {
    product(id: $id) {
        title
    }
}
`;

export const getProductTitle = async (productId: string) => {
  const data = await fetchShopifyGraphQLData(query, { id: productId });

  return data.product.title;
};
