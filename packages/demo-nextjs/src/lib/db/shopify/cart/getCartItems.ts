import { fetchShopifyGraphQLData } from "@/lib/db/shopify";
import { normalizeCartItem } from "./utils";

const query = `
query GetCartItems($cartId: ID!) {
    cart(id: $cartId) {
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
}
`;

export const getCartItems = async (cartId: string) => {
  const { cart } = await fetchShopifyGraphQLData(query, { cartId });
  const { lines, totalQuantity, estimatedCost } = cart;
  const items = normalizeCartItem(lines.edges);

  return { items, totalQuantity, estimatedCost };
};
