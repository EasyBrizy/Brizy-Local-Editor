"use server";

import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";

interface Data {
  id: string;
  slug: {
    collection: string;
    item: string;
  };
  data?: string;
}

export async function newItem(data: Data) {
  try {
    await DBConnect();
    await Models.Items.create(data);

    return { success: true };
  } catch (e) {
    throw new Error("Failed to create item");
  }
}
