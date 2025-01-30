import { fetchShopifyGraphQLData } from "./index";

const productQuery = `
query getProductById($id: ID!) {
    product(id: $id) {
        id
        title
    }
}
`;

export const getProductsById = async (ids: string[]) => {
  const productPromises = ids.map((id) => fetchShopifyGraphQLData(productQuery, { id }));
  const products = (await Promise.all(productPromises)).map(({ product }) => product);

  return {
    products,
  };
};
