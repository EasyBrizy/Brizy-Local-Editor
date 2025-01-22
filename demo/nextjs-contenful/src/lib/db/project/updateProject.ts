"use server";

import { client } from "../contentful";
import { Project } from "../types";
import { lang, toCollectionConvertor, toProjectConvertor } from "./utils";

interface Data {
  id?: string;
  data?: string;
  settings?: string;
}

export async function updateProject(id: string, data: Data): Promise<Project> {
  const entry = await client.entry.getMany({
    query: {
      "fields.id": id,
      content_type: "project",
    },
  });

  const item = entry.items[0];

  if (!item) {
    throw new Error("Fail to update");
  }

  const collection = toCollectionConvertor(data);
  const project = await client.entry.update(
    { entryId: item.sys.id },
    {
      fields: { ...item.fields, ...collection.fields },
      sys: item.sys,
    },
  );

  if (!project) {
    throw new Error("Project not found");
  }

  return toProjectConvertor(project);
}
