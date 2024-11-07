import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
import { Project } from "../types";
import { toProjectConvertor } from "./utils";

export async function getProject(id: string): Promise<Project> {
  await DBConnect();
  const project = await Models.Project.findOne({ id }).lean<Project>();

  if (!project) {
    throw new Error("Fail to get Project");
  }

  return toProjectConvertor(project);
}
