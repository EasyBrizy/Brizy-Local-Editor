import { fetchShopifyGraphQLData } from "@/lib/db/shopify";
import { normalizeCartItem } from "./utils";

const query = `
mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
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

export const removeCartItem = async (cartId: string, lineIds: string[]) => {
  const { cartLinesRemove } = await fetchShopifyGraphQLData(query, {
    cartId,
    lineIds,
  });

  const { cart, userErrors } = cartLinesRemove;
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
