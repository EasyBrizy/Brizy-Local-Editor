import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { projectId } from "@/utils/mock";

export async function getProject() {
  const query = { id: projectId };
  await DBConnect();
  return Models.Project.findOne(query);
}
