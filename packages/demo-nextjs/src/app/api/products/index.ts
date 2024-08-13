import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const storeFrontClient = createStorefrontApiClient({
  storeDomain: process.env.SHOPIFY_STORE_URL ?? "",
  publicAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  apiVersion: "2024-04",
});
