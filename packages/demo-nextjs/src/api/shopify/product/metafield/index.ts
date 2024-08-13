import { ShopifyClient } from "@/api/shopify";
import { getShopifyMetafields } from "./getMetafields";

const query = `
query getProductById($id: ID!) {
  product(id: $id) {
    metafield
  }
}
`;

export const metafieldsLoad = {
  handler: async (res, rej, { sourceType }: { sourceType: string }) => {
    try {
      const data = await getShopifyMetafields(sourceType);
      const items = [
        { title: "None", value: "" },
        ...data.map(({ key, name }: { key: string; name: string }) => ({
          value: key,
          title: name,
        })),
      ];
      res(items);
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        console.log("ERROR: ", e);
      }
      rej("Something went wrong");
    }
  },
};

export const getProductMetafield = async (id: string, metafieldKey: string) => {
  const { data, errors } = await ShopifyClient.request(query, {
    variables: {
      id,
    },
  });

  if (errors) {
    console.error(errors);
    throw new Error("Failed to retrieve product");
  }

  const { metafield } = data.product;

  console.log("asd : ");

  return metafield;
};
