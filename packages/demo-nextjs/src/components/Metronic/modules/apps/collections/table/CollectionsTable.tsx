import { useMemo } from "react";
import { ColumnInstance, Row, useTable } from "react-table";
import { KTCardBody } from "../../../../helpers";
import { UsersListLoading } from "../components/loading/UsersListLoading";
import { Pagination } from "../components/pagination/Pagination";
import { useCollectionQuery, useQueryResponseLoading } from "../core/QueryResponseProvider";
import { Collection } from "../core/_models";
import { CustomHeaderColumn } from "./columns/CustomHeaderColumn";
import { CustomRow } from "./columns/CustomRow";
import { usersColumns } from "./columns/_columns";

const CollectionsTable = () => {
  const collections = useCollectionQuery();
  const isLoading = useQueryResponseLoading();
  const data = useMemo(() => collections, [collections]);
  const columns = useMemo(() => usersColumns, []);
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({ columns, data });

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
              {headers.map((column: ColumnInstance<Collection>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 fw-bold" {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<Collection>, i) => {
                prepareRow(row);
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />;
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className="d-flex text-center w-100 align-content-center justify-content-center">
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination />
      {isLoading && <UsersListLoading />}
    </KTCardBody>
  );
};

export { CollectionsTable };
