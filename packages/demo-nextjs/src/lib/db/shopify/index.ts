import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const storeFrontClient = createStorefrontApiClient({
  storeDomain: process.env.SHOPIFY_STORE_URL ?? "",
  publicAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  apiVersion: "2024-04",
});

export const fetchShopifyGraphQLData = async (query: string, variables = {}) => {
  try {
    const { data, errors } = await storeFrontClient.request(query, { variables });

    if (errors) {
      console.error(errors);
      throw new Error("GraphQL request failed");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to retrieve data");
  }
};
