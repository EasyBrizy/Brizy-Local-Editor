"use server";

import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
import { Project } from "../types";
import { toCollectionConvertor, toProjectConvertor } from "./utils";

interface Data {
  id?: string;
  data?: string;
  settings?: string;
}

export async function updateProject(id: string, data: Data): Promise<Project> {
  await DBConnect();
  const project = await Models.Project.findOneAndUpdate({ id }, toCollectionConvertor(data), {
    new: true,
    upsert: true,
  }).lean<Project>();

  if (!project) {
    throw new Error("Project not found");
  }

  return toProjectConvertor(project);
}
