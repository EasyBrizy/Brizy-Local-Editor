import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";

export async function getItems() {
  await DBConnect();
  return Models.Items.find();
}
