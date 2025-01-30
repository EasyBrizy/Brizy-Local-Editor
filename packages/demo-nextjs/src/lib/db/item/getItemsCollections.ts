import { CollectionTypes } from "@/constants/EntityType";
import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";

const AVAILABLE_COLLECTIONS = CollectionTypes.map((collection) => collection.value);

export async function getItemsCollections() {
  await DBConnect();
  const collections = await Models.Items.distinct("slug.collection", {
    "slug.collection": { $in: AVAILABLE_COLLECTIONS },
  });

  const orderBy = [
    { title: "ID", id: "id" },
    { title: "Title", id: "title" },
  ];

  return {
    collections: collections.map((collection) => ({
      id: collection,
      title: CollectionTypes.find((c) => c.value === collection)?.title ?? "",
    })),
    orderBy,
  };
}
