import { Product } from "../../core/types";

export interface ProductsContextModel {
  products: Product[];
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  isLoading: boolean;
  defaultProductPageUrl: string;
  shopName: string;
}
