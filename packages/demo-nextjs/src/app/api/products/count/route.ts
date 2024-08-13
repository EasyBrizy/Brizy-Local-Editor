import { NextResponse } from "next/server";
import { storeFrontClient } from "../index";

const query = `
  query getProducts($first: Int, $after: String) {
    products(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
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
    const { data, errors } = await storeFrontClient.request(query, { variables: { first, after } });

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

const getAllProducts = async () => {
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

  return { products: allProducts };
};

export async function GET() {
  try {
    const { products } = await getAllProducts();

    return NextResponse.json(
      {
        count: products.length,
      },
      { status: 200 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Fail to get products" }, { status: 400 });
  }
}
