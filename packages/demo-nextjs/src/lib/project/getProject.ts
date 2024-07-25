import Models from "@/lib/db/models";
import { projectId } from "@/utils/mock";

export async function getProject() {
  const query = { id: projectId };
  return Models.Project.findOne(query);
}
