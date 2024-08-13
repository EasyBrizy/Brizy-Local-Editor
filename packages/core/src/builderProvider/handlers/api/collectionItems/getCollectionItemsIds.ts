import { getProducts } from "@/builderProvider/handlers/api/shopify/product";

export const getCollectionItemsIds = {
  async handler(res: Response, rej: Response) {
    try {
      const { products } = await getProducts();

      const items = [
        {
          title: "Auto",
          value: "",
        },
        ...products.map(({ id, title }) => ({ value: id, title: title })),
      ];

      res(items);
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        console.error(e);
      }

      rej("Failed to load collection items");
    }
  },
};
