import { fetchShopifyGraphQLData } from "./index";

const moneyFormatQuery = `
{
    shop {
        moneyFormat
    }
}
`;

export const getShopMoneyFormat = async () => {
  const data = await fetchShopifyGraphQLData(moneyFormatQuery);
  return data.shop.moneyFormat;
};
