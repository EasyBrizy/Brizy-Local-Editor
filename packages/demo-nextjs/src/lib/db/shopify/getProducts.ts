import { fetchShopifyGraphQLData } from "./index";
import { Product, QueryResponse } from "./types";

const productQuery = `
query getProducts(
    $first: Int
    $after: String
    $search: String
    $reverse: Boolean
    $sortKey: ProductSortKeys
) {
    products(
        first: $first
        after: $after
        query: $search
        reverse: $reverse
        sortKey: $sortKey
    ) {
        edges {
            cursor
            node {
                id
                title
                featuredImage {
                    url
                }
                totalInventory
                availableForSale
                createdAt
                vendor
                priceRange {
                    minVariantPrice {
                        amount
                        currencyCode
                    }
                }
            }
        }
        pageInfo {
            hasNextPage
        }
    }
}
  `;

interface FetchProductsArgs {
  first: number;
  after?: string | null;
  search?: string;
  reverse?: boolean;
  sortKey?: string;
}

export const fetchProducts = async ({ first, after = null, search = "", reverse, sortKey }: FetchProductsArgs) => {
  const data: QueryResponse = await fetchShopifyGraphQLData(productQuery, { first, after, search, reverse, sortKey });
  const { edges, pageInfo } = data.products;

  return {
    products: edges.map((edge) => edge.node),
    hasNextPage: pageInfo.hasNextPage,
    lastCursor: edges.length > 0 ? edges[edges.length - 1].cursor : null,
  };
};

export const getAllProducts = async () => {
  let allProducts: Product[] = [];
  let hasNextPage = true;
  let after = null;

  while (hasNextPage) {
    const {
      products,
      hasNextPage: nextPageExists,
      lastCursor,
    } = await fetchProducts({
      first: 250,
      after,
    });
    allProducts = allProducts.concat(products);
    hasNextPage = nextPageExists;
    after = lastCursor;
  }

  return { products: allProducts };
};
