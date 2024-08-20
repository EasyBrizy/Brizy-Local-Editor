import { fetchShopifyGraphQLData } from "./index";

const shopQuery = `
    query getShop {
      shop {
        name
      }
    }
  `;

export const getShopName = async () => {
  const data = await fetchShopifyGraphQLData(shopQuery);
  return data.shop.name;
};
