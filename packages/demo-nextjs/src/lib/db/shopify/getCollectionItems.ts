import { getAllProducts } from "./getProducts";

export const getShopifyCollectionItems = async () => {
  try {
    const { products } = await getAllProducts();

    return products.map((product) => ({
      title: product.title,
      value: product.id,
    }));
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "Failed to get collection items");
  }
};
