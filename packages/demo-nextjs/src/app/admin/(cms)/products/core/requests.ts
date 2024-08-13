import { getConfig } from "@/config";
import axios from "axios";

const API_URL = `${getConfig().host}/api`;

export const fetchProducts = async (page: number) => {
  const { data } = await axios.get(`${API_URL}/products?page=${page}`);

  return data;
};

export const getProductsCount = async () => {
  const { data } = await axios.get(`${API_URL}/products/count`);

  return data.count;
};
