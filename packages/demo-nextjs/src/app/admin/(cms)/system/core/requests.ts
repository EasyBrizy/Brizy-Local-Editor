import axios from "axios";

const API_URL = `/api`;

export const getProjectSettings = async (projectId: number) => {
  const response = await axios.get(`${API_URL}/projectSettings?id=${projectId}`);
  const { data } = response.data;

  return data;
};

export const updateProjectSettings = async (projectId: number, settings: any) => {
  const response = await axios.put(`${API_URL}/projectSettings`, {
    id: projectId,
    projectSettings: settings,
  });

  return response.data;
};
