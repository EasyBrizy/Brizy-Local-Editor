import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import { NextRequest, NextResponse } from "next/server";

const client = createStorefrontApiClient({
  storeDomain: process.env.SHOPIFY_STORE_URL ?? "",
  publicAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  apiVersion: "2024-04",
});

const productQuery = `
  query getProducts($first: Int, $after: String) {
    products(first: $first, after: $after) {
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
          productType
          createdAt
          vendor
          onlineStoreUrl
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

const shopQuery = `
  query getShop {
    shop {
      name
    }
  }
`;

async function fetchProducts({ first, after = null }) {
  try {
    const { data, errors } = await client.request(productQuery, { variables: { first, after } });

    if (errors) {
      console.error(errors);
      throw new Error("Failed to retrieve products");
    }

    return {
      products: data.products.edges.map((edge: Record<string, unknown>) => edge.node),
      hasNextPage: data.products.pageInfo.hasNextPage,
      lastCursor: data.products.edges.length > 0 ? data.products.edges[data.products.edges.length - 1].cursor : null,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to retrieve products");
  }
}

async function getShopName() {
  try {
    const { data, errors } = await client.request(shopQuery);

    if (errors) {
      console.error(errors);
      throw new Error("Failed to retrieve shop name");
    }

    return data.shop.name;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to retrieve shop name");
  }
}

export async function GET(req: NextRequest) {
  try {
    const itemsPerPage = parseInt(req.nextUrl.searchParams.get("itemsPerPage") ?? "20");
    const page = parseInt(req.nextUrl.searchParams.get("page") ?? "1");

    if (page < 1) {
      return NextResponse.json({ error: "Invalid page number" }, { status: 400 });
    }

    const afterCursor = page > 1 ? (await fetchProducts({ first: itemsPerPage * (page - 1) })).lastCursor : null;

    const { products } = await fetchProducts({ first: itemsPerPage, after: afterCursor });
    const shopName = await getShopName();

    return NextResponse.json({ products, shopName }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to get products", e }, { status: 400 });
  }
}
