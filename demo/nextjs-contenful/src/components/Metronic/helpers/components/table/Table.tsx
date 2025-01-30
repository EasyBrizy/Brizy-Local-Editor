import { PaginationState, QueryState } from "@/components/Metronic/helpers";
import { Pagination } from "@/components/Metronic/modules/apps/collections/components/pagination/Pagination";
import { Column, useTable } from "react-table";
import { KTCardBody } from "../KTCardBody";
import { Loading } from "../Loading";
import { CustomHeaderColumn } from "./CustomHeaderColumn";
import { CustomRow } from "./CustomRow";
import { NotFound } from "./NotFound";

interface Props<T extends Record<string, unknown>> {
  columns: ReadonlyArray<Column<T>>;
  data: T[];
  isLoading: boolean;
  disablePagination?: boolean;
  pagination: PaginationState;
  updateState: (updates: Partial<QueryState>) => void;
}

export const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  isLoading,
  disablePagination = false,
  pagination,
  updateState,
}: Props<T>): JSX.Element => {
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
    autoResetHiddenColumns: false,
  });

  return (
    <KTCardBody className="py-4">
      <div className="table-responsive">
        <table
          id="kt_table_users"
          className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"
          {...getTableProps()}
        >
          <thead>
            <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
              {headers.map((column) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 fw-bold" {...getTableBodyProps()}>
            {rows.length > 0
              ? rows.map((row, i) => {
                  prepareRow(row);
                  return <CustomRow row={row} key={`row-${i}-${row.id}`} />;
                })
              : // Show not found only if the result after fetch is empty
                !isLoading && !rows.length && <NotFound />}
          </tbody>
        </table>
      </div>
      {!disablePagination && <Pagination isLoading={isLoading} pagination={pagination} updateState={updateState} />}
      {isLoading && <Loading />}
    </KTCardBody>
  );
};
