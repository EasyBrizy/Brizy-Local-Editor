"use server";

import { TreeItems } from "@/components/Menu/types";
import DBConnect from "@/lib/db/connect";
import Models, { CollectionTypes } from "@/lib/db/models";

enum Menu {
  main = "main",
}

const menuFilter = { "slug.collection": CollectionTypes.menu, "slug.item": Menu.main };

export async function getAllPagesWithPreview() {
  await DBConnect();
  const response = await Models.Items.find({ "config.hasPreview": true });
  if (!response) {
    throw new Error("no response from DB");
  }
  return response;
}

export async function getMenu() {
  try {
    await DBConnect();

    const response = await Models.Items.findOne(menuFilter);

    if (!response) {
      throw new Error("Error Menu not found");
    }

    return response.data;
  } catch (e) {
    console.log("Get Menu Error: ", e);
    return [];
  }
}

export async function updateMenu(menu: TreeItems) {
  try {
    await DBConnect();
    console.log("Menu: ", menu);
    const doc = await Models.Items.findOneAndUpdate(
      menuFilter,
      { data: JSON.stringify(menu) },
      { new: true, upsert: true },
    );

    console.log("SavedMenu new true, :", doc);
  } catch (e) {
    console.log("Update menu error: ", e);
  }
}
