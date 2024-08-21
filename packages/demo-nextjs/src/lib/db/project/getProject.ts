import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
import { Project } from "../types";

type Query = Record<string, string | RegExp>;

export async function getProject(query: Query): Promise<Project> {
  await DBConnect();
  const project = await Models.Project.findOne(query).lean<Project>();

  if (!project) {
    throw new Error("Fail to get Project");
  }

  return project;
}
