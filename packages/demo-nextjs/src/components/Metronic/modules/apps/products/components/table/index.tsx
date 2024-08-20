import { Table } from "@/components/Metronic/helpers/components/table/Table";
import { ProductsContext } from "@/components/Metronic/modules/apps/products/core/ProductsContext";
import { useContext } from "react";
import { useProductPagination } from "../../hooks";
import { productsColumns } from "./columns";

export const ProductsTable = () => {
  const { products, isLoading } = useContext(ProductsContext);

  const { pagination, updatePage } = useProductPagination();

  return (
    <Table
      columns={productsColumns}
      data={products}
      isLoading={isLoading}
      pagination={pagination}
      updateState={({ page }) => updatePage(page)}
    />
  );
};
