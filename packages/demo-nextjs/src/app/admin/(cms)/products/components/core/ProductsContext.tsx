import { createContext } from "react";
import { ProductsContextModel } from "./types";

export const ProductsContext = createContext<ProductsContextModel>({
  products: [],
  itemsPerPage: 10,
  totalItems: 15,
  currentPage: 1,
  setCurrentPage: () => {},
  isLoading: false,
  defaultProductPageUrl: "",
  shopName: "",
});
