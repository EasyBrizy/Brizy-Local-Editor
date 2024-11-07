import { Table } from "@/components/Metronic/helpers/components/table/Table";
import { useQueryRequest } from "@/components/Metronic/modules/apps/collections/core/QueryRequestProvider";
import { useContext } from "react";
import { LeadsContext } from "../../core/LeadsContext";
import { leadsColumns } from "../table/columns";

export const LeadsTable = () => {
  const { isLoading, data } = useContext(LeadsContext);
  const { leads, pagination } = data;

  const { updateState } = useQueryRequest();

  return (
    <Table
      columns={leadsColumns}
      data={leads}
      isLoading={isLoading}
      updateState={updateState}
      pagination={pagination}
    />
  );
};
