import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const ShopifyClient = createStorefrontApiClient({
  storeDomain: "https://abracadabra20.myshopify.com",
  publicAccessToken: "3b47750ab922efb31d3e7d268ed3ea93",
  apiVersion: "2024-04",
});
