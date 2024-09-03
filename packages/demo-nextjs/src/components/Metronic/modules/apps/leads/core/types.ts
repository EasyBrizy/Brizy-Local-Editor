import { PaginationState } from "@/components/Metronic/helpers";

export interface LeadField {
  label: string;
  value: string;
}

export type Lead = {
  id: string;
  data: LeadField[];
  createdAt: string;
};

export interface LeadsResponse {
  leads: Lead[];
  pagination: PaginationState;
}

export interface LeadsContextType {
  data: LeadsResponse;
  isLoading: boolean;
  query: string;
}
