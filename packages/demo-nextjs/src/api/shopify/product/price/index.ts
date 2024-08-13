import { ShopifyClient } from "../../index";

const query = `
query getProductById($id: ID!) {
  product(id: $id) {
  compareAtPriceRange {
    maxVariantPrice {
      amount
      currencyCode
    }
    minVariantPrice {
      amount
      currencyCode
    }
  }
  }
}
`;

export const getProductPrice = async (id: string, originalPrice: boolean) => {
  try {
    const { data } = await ShopifyClient.request(query, { variables: { id } });
    const { compareAtPriceRange } = data.product;
    const { minVariantPrice, maxVariantPrice } = compareAtPriceRange;

    const { currencyCode, amount } = originalPrice ? minVariantPrice : maxVariantPrice;

    return `${currencyCode} ${amount}`;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to retrieve product");
  }
};
