"use server";

import { client } from "../contentful";

export async function deleteItem(id: string) {
  return await client.entry.delete({ entryId: id });
}
