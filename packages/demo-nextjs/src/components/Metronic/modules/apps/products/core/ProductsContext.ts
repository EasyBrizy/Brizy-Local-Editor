import { createContext } from "react";
import { ProductsContextModel } from "./types";

export const ProductsContext = createContext<ProductsContextModel>({
  products: [],
  isLoading: false,
  defaultProductPageUrl: "",
  shopName: "",
  pagination: {
    total: 0,
    pageSize: 20,
    currentPage: 1,
    setPage: () => {},
  },
  onEditProduct: () => {},
});
