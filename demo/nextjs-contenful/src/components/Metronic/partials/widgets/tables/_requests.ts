import axios from "axios";

export const getLastItemsCreated = async (limit: number) => {
  const response = await axios.get(`/api/items/latest?limit=${limit}`);
  return response.data;
};
