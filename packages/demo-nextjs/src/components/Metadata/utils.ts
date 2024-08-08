"use server";

import { getProject } from "@/lib/project/getProject";

export const fetchMetadata = async () => {
  try {
    const project = await getProject();
    return JSON.parse(project.settings);
  } catch (e) {
    return null;
  }
};
