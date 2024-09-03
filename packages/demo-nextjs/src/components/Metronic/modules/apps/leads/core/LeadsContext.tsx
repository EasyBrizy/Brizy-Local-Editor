import { initialQueryState } from "@/components/Metronic/helpers";
import { createContext } from "react";
import { LeadsContextType } from "./types";

export const LeadsContext = createContext<LeadsContextType>({
  data: {
    leads: [],
    pagination: initialQueryState,
  },
  isLoading: false,
  query: "",
});
