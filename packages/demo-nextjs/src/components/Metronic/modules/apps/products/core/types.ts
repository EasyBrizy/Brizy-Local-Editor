import { ItemsPerPage } from "@/components/Metronic/helpers";
import { Product } from "../types";

export interface ProductsContextModel {
  products: Product[];
  isLoading: boolean;
  defaultProductPageUrl: string;
  shopName: string;
  pagination: {
    total: number;
    pageSize: ItemsPerPage;
    currentPage: number;
    setPage: (page: number) => void;
  };
  onEditProduct: (id: string) => void;
}

export interface ProductQueryResponse {
  products: Product[];
  shopName: string;
}
