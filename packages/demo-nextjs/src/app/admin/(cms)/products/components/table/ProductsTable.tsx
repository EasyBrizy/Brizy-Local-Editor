import { productsColumns } from "@/app/admin/(cms)/products/components/table/columns";
import { Product } from "@/app/admin/(cms)/products/core/types";
import { KTCardBody } from "@/components/Metronic/helpers";
import { Loading } from "@/components/Metronic/helpers/components/Loading";
import { CustomHeaderColumn } from "@/components/Metronic/modules/apps/collections/table/columns/CustomHeaderColumn";
import { CustomRow } from "@/components/Metronic/modules/apps/collections/table/columns/CustomRow";
import { useContext } from "react";
import { ColumnInstance, Row, useTable } from "react-table";
import { ProductsContext } from "../core/ProductsContext";
import { Pagination } from "../pagination/Pagination";

export const ProductsTable = () => {
  const { products, isLoading } = useContext(ProductsContext);
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable<Product>({
    columns: productsColumns,
    data: products,
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
              {headers.map((column: ColumnInstance<Product>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 fw-bold" {...getTableBodyProps()}>
            {rows.length > 0
              ? rows.map((row: Row<Product>, i) => {
                  prepareRow(row);
                  return <CustomRow row={row} key={`row-${i}-${row.id}`} />;
                })
              : !rows.length &&
                !isLoading && (
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
      {isLoading && <Loading />}
      <Pagination />
    </KTCardBody>
  );
};
