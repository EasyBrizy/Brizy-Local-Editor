import { fetchShopifyGraphQLData } from "../../index";
import { ProductVariant } from "../../types";

const query = `
query getProductVariants($id: ID!) {
    product(id: $id) {
        options {
            name
            values
        }
    }
}
`;

export const getProductVariants = async (productId: string) => {
  const data = await fetchShopifyGraphQLData(query, { id: productId });

  return data.product;
};

export const getProductVariantName = async (productId: string) => {
  const { options } = await getProductVariants(productId);

  return options.map((option: ProductVariant) => option.name);
};

export const getProductVariantValues = async (productId: string, variantName: string) => {
  const { options } = await getProductVariants(productId);

  const option = options.find((option: ProductVariant) => option.name === variantName);
  return option?.values ?? [];
};
