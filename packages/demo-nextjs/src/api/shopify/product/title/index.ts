import { ShopifyClient } from "../../index";

const query = `
query getProductById($id: ID!) {
  product(id: $id) {
    title
  }
}
`;

export const getProductTitle = async (id: string) => {
  const { data } = await ShopifyClient.request(query, {
    variables: {
      id,
    },
  });

  const { title } = data.product;

  return title;
};
