import { getShopMoneyFormat } from "./getShopMoneyFormat";
import { fetchShopifyGraphQLData } from "./index";
import { VariantQueryResponse } from "./types";

const normaliseVariants = (variants: VariantQueryResponse) =>
  variants.edges.map(({ node: variant }) => ({
    ...variant,
    available: variant.availableForSale,
    options: variant.selectedOptions.map(({ value }) => value),
    price: variant.price.amount * 100,
  }));

const productQuery = `
query getProductById($id: ID!) {
    product(id: $id) {
        id
        options {
            name
            values
        }
        variants(first: 100) {
            edges {
                node {
                    id
                    title
                    availableForSale
                    price {
                        amount
                        currencyCode
                    }
                    quantityAvailable
                    selectedOptions {
                        name
                        value
                    }
                }
            }
        }
    }
}
`;

export const getProductsById = async (ids: string[]) => {
  const productPromises = ids.map((id) => fetchShopifyGraphQLData(productQuery, { id }));
  const productsData = await Promise.all(productPromises);

  const moneyFormat = await getShopMoneyFormat();

  const products = productsData.map(({ product }) => ({
    ...product,
    variants: normaliseVariants(product.variants),
  }));

  return {
    products,
    moneyFormat,
  };
};
