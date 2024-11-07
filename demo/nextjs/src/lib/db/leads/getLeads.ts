import Models from "@/lib/db/mongoose/models";
import { CollectionTypes } from "@/lib/db/types";
import DBConnect from "../mongoose/connect";

type Pagination = {
  limit: number;
  skip: number;
};

export const getLeads = async (projectId: string, pagination?: Pagination) => {
  let items;
  const query = {
    projectId,
  };

  await DBConnect();

  if (pagination) {
    items = await Models.Leads.find(query, {}, pagination).limit(pagination.limit).skip(pagination.skip).lean();
  } else {
    items = await Models.Leads.find(query).lean();
  }

  if (!items) {
    throw new Error("Failed to find leads.");
  }

  const total = await Models.Leads.countDocuments(query);

  return { items, total };
};
