import { Table } from "@/components/Metronic/helpers/components/table/Table";
import { useQueryRequest } from "@/components/Metronic/modules/apps/collections/core/QueryRequestProvider";
import { FC, useMemo } from "react";
import { useCollectionQuery, useQueryResponseLoading, useQueryResponsePagination } from "../core/QueryResponseProvider";
import { Config } from "../types";
import { getUsersColumns } from "./columns/_columns";

interface Props {
  config?: Config;
}

const CollectionsTable: FC<Props> = ({ config }) => {
  const collections = useCollectionQuery();
  const { updateState } = useQueryRequest();

  const isLoading = useQueryResponseLoading();
  const pagination = useQueryResponsePagination();

  const { disabledFields = [], disablePagination, editable = true } = config ?? {};

  const data = useMemo(() => collections, [collections]);
  const columns = useMemo(() => getUsersColumns(disabledFields, editable), [disabledFields, editable]);

  return (
    <Table
      columns={columns}
      data={data}
      disablePagination={disablePagination}
      isLoading={isLoading}
      pagination={pagination}
      updateState={updateState}
    />
  );
};

export { CollectionsTable };
