import { ShopifyClient } from "../../index";

const query = `
query getProductById($id: ID!) {
  product(id: $id) {
    description
  }
}
`;

export const getProductDescription = async (id: string) => {
  const { data } = await ShopifyClient.request(query, {
    variables: {
      id,
    },
  });

  const { description } = data.product;

  return description;
};
