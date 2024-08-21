import { fetchShopifyGraphQLData } from "@/lib/db/shopify";
import { Variant } from "@/lib/db/shopify/types";

const queryWithSelectedOptions = `
query getProductVariantId($id: ID!, $selectedOptions: [SelectedOptionInput!]!) {
    product(id: $id) {
        variantBySelectedOptions(selectedOptions: $selectedOptions) {
            id
        }
    }
}
`;

const queryForAllVariants = `
query getAllVariants($id: ID!) {
    product(id: $id) {
        variants(first: 100) {
            edges {
                node {
                    id
                    availableForSale
                }
            }
        }
    }
}
`;

export const getProductVariantId = async (id: string, variants?: Variant[]) => {
  if (variants && variants.length > 0) {
    const data = await fetchShopifyGraphQLData(queryWithSelectedOptions, { id, selectedOptions: variants });
    return data.product?.variantBySelectedOptions?.id;
  } else {
    // If no variants are selected, return the first available variant
    const data = await fetchShopifyGraphQLData(queryForAllVariants, { id });
    const firstAvailableVariant = data.product?.variants.edges.find((edge: any) => edge.node.availableForSale);
    return firstAvailableVariant?.node?.id;
  }
};
