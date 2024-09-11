import { getShopMoneyFormat } from "@/lib/db/shopify/getShopMoneyFormat";
import { fetchShopifyGraphQLData } from "../index";

const query = `
query getProductPrice($id: ID!) {
    product(id: $id) {
        variants(first: 1) {
            edges {
                node {
                    priceV2 {
                        amount
                    }
                    compareAtPriceV2 {
                        amount
                    }
                }
            }
        }
    }
}
`;

export const getProductPrice = async (productId: string, compareAtPrice?: boolean) => {
  const [data, moneyFormat] = await Promise.all([
    fetchShopifyGraphQLData(query, { id: productId }),
    getShopMoneyFormat(),
  ]);
  const { priceV2, compareAtPriceV2 } = data.product.variants.edges[0].node;

  const { amount } = compareAtPrice ? compareAtPriceV2 ?? {} : priceV2;

  return amount ? moneyFormat.replace("{{amount}}", amount) : "";
};
