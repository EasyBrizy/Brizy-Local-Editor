import { ShopifyClient } from "../index";

const query = `
  query getProducts($first: Int, $after: String) {
    products(first: $first, after: $after) {
      edges {
        node {
          id
          title
      }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;

async function fetchProducts({ first = 250, after = null }) {
  try {
    const { data, errors } = await ShopifyClient.request(query, { variables: { first, after } });

    if (errors) {
      console.error(errors);
      throw new Error("Failed to retrieve products");
    }

    const { edges, pageInfo } = data.products;

    const { hasNextPage, endCursor } = pageInfo;

    return {
      products: edges,
      hasNextPage,
      endCursor,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to retrieve products");
  }
}

export const getProducts = async () => {
  let allProducts: unknown[] = [];
  let hasNextPage = true;
  let after = null;

  while (hasNextPage) {
    const {
      products,
      hasNextPage: nextPageExists,
      endCursor,
    } = await fetchProducts({
      after,
    });
    allProducts = allProducts.concat(products);
    hasNextPage = nextPageExists;
    after = endCursor;
  }

  return { products: allProducts.map((product) => product.node) };
};
