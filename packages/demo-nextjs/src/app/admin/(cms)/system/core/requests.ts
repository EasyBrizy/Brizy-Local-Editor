import { ProjectSettings } from "@/lib/db/types";
import { getOrigin } from "@/utils/origin";
import axios from "axios";

export const getProjectSettings = async (projectId: string) => {
  const origin = await getOrigin();

  const response = await axios.get(`${origin}/api/projectSettings?id=${projectId}`);
  const { data } = response.data;

  return data;
};

export const updateProjectSettings = async (projectId: string, settings: Partial<ProjectSettings>) => {
  const origin = await getOrigin();

  const {
    sharing = { preserveSeoTitle: false, preserveSeoDescription: false, title: "", description: "" },
    seo = {
      title: "",
      description: "",
    },
  } = settings;

  const { preserveSeoTitle, preserveSeoDescription, title: sharingTitle, description: sharingDescription } = sharing;

  const updatedSharing = {
    ...sharing,
    title: preserveSeoTitle ? seo.title || "" : sharingTitle,
    description: preserveSeoDescription ? seo.description || "" : sharingDescription,
  };

  const updatedSettings = { ...settings, sharing: updatedSharing };

  const response = await axios.put(`${origin}/api/projectSettings`, {
    id: projectId,
    projectSettings: updatedSettings,
  });

  return response.data;
};
