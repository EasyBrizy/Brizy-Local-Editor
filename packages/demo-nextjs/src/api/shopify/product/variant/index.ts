import { ShopifyClient } from "@/api/shopify";

const query = `
query getProductById($id: ID!) {
    product(id: $id) {
        options {
            name,
            values
        }
    }
}
`;

export const getProductVariant = async (id: string) => {
  const { data, errors } = await ShopifyClient.request(query, {
    variables: {
      id,
    },
  });

  if (errors) {
    console.error(errors);
    throw new Error("Failed to retrieve product variant");
  }

  return data.product;
};

export const getProductVariantTitle = async (id: string) => {
  const { options } = await getProductVariant(id);

  return options.map((option: { name: string }) => option.name);
};

export const getProductVariantOptions = async (id: string, title: string) => {
  console.log("Id variant options : ", id);
  const { options } = await getProductVariant(id);

  const option = options.find((option: { name: string; values: string[] }) => option.name === title);

  return option?.values || [];
};
