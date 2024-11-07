"use server";

import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";

export async function deleteItem(id: string) {
  await DBConnect();
  return Models.Items.deleteOne({ _id: id });
}
