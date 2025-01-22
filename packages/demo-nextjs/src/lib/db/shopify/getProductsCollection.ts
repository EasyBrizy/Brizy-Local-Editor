import { CollectionTypes } from "../types";
import { fetchProducts } from "./getProducts";
import { Product } from "./types";

const BATCH_SIZE = 50;
const normaliseProductsIds = (id: string) => `${id}|||${CollectionTypes.product}`;

interface GetProductsArgs {
  count: number;
  page?: number;
  include?: string[];
  exclude?: string[];
  offset?: number;
  sortBy?: string;
  order?: string;
}

export const getProductsId = async ({
  count,
  include,
  exclude,
  offset = 0,
  sortBy,
  order,
  page = 1,
}: GetProductsArgs) => {
  let allFetchedProducts: Product[] = [];
  let currentCursor = null;
  let totalFilteredItems = 0;

  // Fetch all products in batches to get the total count that matches criteria
  while (true) {
    const batch = await fetchProducts({
      first: BATCH_SIZE,
      after: currentCursor,
      sortKey: sortBy,
      reverse: order === "desc",
    });

    allFetchedProducts = allFetchedProducts.concat(batch.products);
    currentCursor = batch.lastCursor;

    // Stop if there are no more products to fetch
    if (!batch.hasNextPage) break;
  }

  // Helper function to determine if a product ID should be included
  const shouldIncludeProductId = (id: string) => {
    if (include?.length) return include.includes(id);
    if (exclude?.length) return !exclude.includes(id);
    return true; // Include all if neither include nor exclude is provided
  };

  const filteredProducts = allFetchedProducts.filter(({ id }) => shouldIncludeProductId(id));

  // Apply offset by skipping the first `offset` products, if specified
  const offsetFilteredProducts = offset ? filteredProducts.slice(offset) : filteredProducts;

  totalFilteredItems = offsetFilteredProducts.length;

  const totalPageCount = Math.ceil(totalFilteredItems / count);
  if (page > totalPageCount) {
    return {
      collection: [],
      totalItems: totalFilteredItems,
    };
  }

  const productIdsCollection = offsetFilteredProducts
    // Slice the products based on the page and count
    .slice((page - 1) * count, page * count)
    .map(({ id }) => normaliseProductsIds(id));

  return {
    collection: productIdsCollection,
    totalItems: totalFilteredItems,
  };
};
