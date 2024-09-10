import { fetchShopifyGraphQLData } from "@/lib/db/shopify";
import { normalizeCartItem } from "./utils";

const query = `
mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
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

export const updateCartItem = async (cartId: string, newLines: { id: string; quantity: number }[]) => {
  const { cartLinesUpdate } = await fetchShopifyGraphQLData(query, {
    cartId,
    lines: newLines,
  });

  const { cart, userErrors } = cartLinesUpdate;
  const { lines, totalQuantity, estimatedCost } = cart;
  const items = normalizeCartItem(lines.edges);

  return {
    cartData: {
      items,
      totalQuantity,
      estimatedCost,
    },
    userErrors,
  };
};
