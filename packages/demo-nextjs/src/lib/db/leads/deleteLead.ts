import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";

export async function deleteLead(id: string) {
  await DBConnect();
  return Models.Leads.deleteOne({ _id: id });
}
