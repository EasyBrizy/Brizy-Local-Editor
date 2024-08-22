import Models from "@/lib/db/mongoose/models";
import DBConnect from "../mongoose/connect";

interface Payload {
  data: string;
  projectId: string;
}

export const createLead = async (data: Payload) => {
  await DBConnect();
  const newLead = await Models.Leads.create(data);

  if (!newLead) {
    throw new Error("Failed to create Lead");
  }

  return newLead.toObject();
};
