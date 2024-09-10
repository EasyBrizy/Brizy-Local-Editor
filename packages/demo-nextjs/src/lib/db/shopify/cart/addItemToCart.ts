import { fetchShopifyGraphQLData } from "@/lib/db/shopify";
import { getProductVariantId } from "@/lib/db/shopify/product/variants/getVariantId";
import { Variant } from "@/lib/db/shopify/types";
import { normalizeCartItem } from "./utils";

interface AddToCartData {
  quantity: number;
  productId: string;
  cartId: string;
  variants: Variant[];
}

const query = `
mutation AddItemToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
            id
            checkoutUrl
            totalQuantity
            estimatedCost {
                totalAmount {
                    amount
                    currencyCode
                }
                totalTaxAmount {
                    amount
                    currencyCode
                }
            }
            lines(first: 250) {
                edges {
                    node {
                        id
                        quantity
                        merchandise {
                            ... on ProductVariant {
                                id
                                title
                                image {
                                    url
                                }
                                price {
                                    amount
                                    currencyCode
                                }
                                compareAtPrice {
                                    amount
                                }
                                quantityAvailable
                                product {
                                    title
                                }
                                selectedOptions {
                                    name
                                    value
                                }
                            }
                        }
                    }
                }
            }
        }
        userErrors {
            message
        }
    }
}
`;

export const addItemToCart = async ({ quantity, productId, cartId, variants }: AddToCartData) => {
  const variantId = await getProductVariantId(productId, variants);

  const { cartLinesAdd } = await fetchShopifyGraphQLData(query, {
    cartId,
    lines: [{ quantity, merchandiseId: variantId }],
  });

  const { id, checkoutUrl, lines, totalQuantity, estimatedCost } = cartLinesAdd.cart;
  const items = normalizeCartItem(lines.edges);

  return {
    cartData: { id, checkoutUrl, items, totalQuantity, estimatedCost },
    userErrors: cartLinesAdd.userErrors,
  };
};
