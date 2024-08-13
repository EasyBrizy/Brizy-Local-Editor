import { ShopifyClient } from "../../index";

const query = `
query getProductById($id: ID!) {
  product(id: $id) {
    vendor
  }
}
`;

export const getProductVendor = async (id: string) => {
  const { data } = await ShopifyClient.request(query, {
    variables: {
      id,
    },
  });

  const { vendor } = data.product;

  return vendor;
};
