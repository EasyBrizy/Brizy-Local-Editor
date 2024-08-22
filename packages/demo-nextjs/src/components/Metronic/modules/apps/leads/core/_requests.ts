import { ID } from "@/components/Metronic/helpers";
import axios from "axios";

export const getLeads = async (query: string) => {
  const response = await axios.get(`/api/leads?${query}`);
  return response.data;
};

export const deleteLeads = async (ids: ID[]) => {
  return await axios.delete(`/api/leads`, {
    data: { ids },
  });
};
