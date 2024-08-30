import { client } from "../contentful";
import { Project } from "../types";
import { toProjectConvertor } from "./utils";

export async function getProject(id: string): Promise<Project> {
  const project = await client.entry.getMany({
    query: {
      "fields.id": id,
      content_type: "project",
    },
  });

  if (!project) {
    throw new Error("Fail to get Project");
  }

  if (project.items.length === 0) {
    throw new Error("Missing Project Entry");
  }

  const item = project.items[0];

  return toProjectConvertor(item);
}
