import { Dispatch, SetStateAction } from "react";

export type ID = undefined | null | number | string;

export type ItemsPerPage = 10 | 20 | 30 | 50 | 100;

export type PaginationState = {
  page: number;
  items_per_page: ItemsPerPage;
  links?: Array<{
    label: string;
    active: boolean;
    url: string | null;
    page: number | null;
  }>;
};

export type SortState = {
  sort?: string;
  order?: "asc" | "desc";
};

export type FilterState = {
  filter?: unknown;
};

export type SearchState = {
  search?: string;
};

export type CollectionState = {
  collection?: string;
};

export type ProjectState = {
  project_id?: string;
};

export type Response<T> = {
  data?: T;
  payload?: {
    message?: string;
    errors?: {
      [key: string]: Array<string>;
    };
    pagination?: PaginationState;
  };
};

export type QueryState = PaginationState & SortState & FilterState & SearchState & CollectionState & ProjectState;

export type QueryRequestContextProps = {
  state: QueryState;
  updateState: (updates: Partial<QueryState>) => void;
};

export const initialQueryState: QueryState = {
  page: 1,
  items_per_page: 20,
};

export const initialQueryRequest: QueryRequestContextProps = {
  state: initialQueryState,
  updateState: () => {},
};

export type QueryResponseContextProps<T> = {
  response?: Response<Array<T>> | undefined;
  collection: string;
  refetch: () => void;
  isLoading: boolean;
  query: string;
};

export const initialQueryResponse = {
  refetch: () => {},
  collection: "page" as const,
  isLoading: false,
  query: "",
};

export type ListViewContextProps = {
  selected: Array<ID>;
  onSelect: (selectedId: ID) => void;
  onSelectAll: () => void;
  clearSelected: () => void;
  // NULL => (CREATION MODE) | MODAL IS OPENED
  // NUMBER => (EDIT MODE) | MODAL IS OPENED
  // UNDEFINED => MODAL IS CLOSED
  itemIdForUpdate?: ID;
  setItemIdForUpdate: Dispatch<SetStateAction<ID>>;
  isAllSelected: boolean;
  disabled: boolean;
};

export const initialListView: ListViewContextProps = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  isAllSelected: false,
  disabled: false,
};
