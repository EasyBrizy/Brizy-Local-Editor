import { getShopifyMetafields } from "./getMetafields";

export const metafieldsLoad = {
  handler: async (res, rej, { sourceType }: { sourceType: string }) => {
    try {
      const data = await getShopifyMetafields(sourceType);
      const items = [
        { title: "None", value: "" },
        ...data.map(({ key, name }: { key: string; name: string }) => ({
          value: key,
          title: name,
        })),
      ];
      res(items);
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        console.log("ERROR: ", e);
      }
      rej("Something went wrong");
    }
  },
};
