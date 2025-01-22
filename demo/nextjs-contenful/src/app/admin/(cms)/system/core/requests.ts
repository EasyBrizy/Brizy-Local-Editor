import axios from "axios";

const API_URL = `/api`;

export const getProjectSettings = async (projectId: string) => {
  const response = await axios.get(`${API_URL}/projectSettings?id=${projectId}`);
  const { data } = response.data;

  return data;
};

export const updateProjectSettings = async (projectId: string, settings: Record<string, unknown>) => {
  const response = await axios.put(`${API_URL}/projectSettings`, {
    id: projectId,
    projectSettings: settings,
  });

  return response.data;
};
