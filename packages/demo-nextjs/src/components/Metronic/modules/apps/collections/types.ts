import { ID } from "@/components/Metronic/helpers";

export interface Config {
  disableHeader?: boolean;
  disablePagination?: boolean;
  disabledFields?: ID[];
  editable?: boolean;
  disableToolbar?: boolean;
}
