import { ItemsPerPage } from "@/components/Metronic/helpers";
import axios from "axios";

export const fetchProducts = async (page: number, itemsPerPage: ItemsPerPage) => {
  const { data } = await axios.get(`/api/products?page=${page}&itemsPerPage=${itemsPerPage}`);

  return data;
};

export const getProductsCount = async () => {
  const { data } = await axios.get("/api/products/count");

  return data.count;
};
