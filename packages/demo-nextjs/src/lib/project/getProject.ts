import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { projectId } from "@/utils/mock";

export async function getProject() {
  const query = { id: `${projectId}` };

  await DBConnect();

  const project = await Models.Project.findOne(query);

  if (!project) {
    throw new Error("Fail to get Project");
  }

  return project;
}
