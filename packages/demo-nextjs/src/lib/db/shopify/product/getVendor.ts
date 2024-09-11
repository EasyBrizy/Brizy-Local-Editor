import { fetchShopifyGraphQLData } from "../index";

const query = `
query getProductVendor($id: ID!) {
    product(id: $id) {
        vendor
    }
}
`;

export const getProductVendor = async (productId: string) => {
  const data = await fetchShopifyGraphQLData(query, { id: productId });

  return data.product.vendor;
};
