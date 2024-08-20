import { Column, Row } from "react-table";
import { Product } from "../../../types";
import { ProductActionsCell } from "./ProductActionsCell";
import { ProductBaseCell } from "./ProductBaseCell";
import { ProductNameWithImage } from "./ProductNameWithImage";
import { ProductQuantity } from "./ProductQuantity";

interface RowProps {
  row: Row<Product>;
}

export const productsColumns: ReadonlyArray<Column<Product>> = [
  {
    Header: "Product",
    id: "product",
    Cell: ({ row }: RowProps) => (
      <ProductNameWithImage
        title={row.original.title}
        featuredImage={row.original.featuredImage}
        previewUrl={row.original.url}
      />
    ),
  },
  {
    Header: "Quantity",
    id: "quantity",
    Cell: ({ row }: RowProps) => <ProductQuantity quantity={row.original.totalInventory} />,
  },
  {
    Header: "Price",
    id: "price",
    Cell: ({ row }: RowProps) => {
      const { currencyCode, amount } = row.original.priceRange.minVariantPrice;
      const content = `${currencyCode} ${amount}`;

      return <ProductBaseCell>{content}</ProductBaseCell>;
    },
  },
  {
    Header: "Created At",
    id: "createdAt",
    accessor: "createdAt",
    Cell: ({ row }: RowProps) => (
      <ProductBaseCell>{new Date(row.original.createdAt).toLocaleDateString()}</ProductBaseCell>
    ),
  },
  {
    Header: "Vendor",
    Cell: ({ row }: RowProps) => <ProductBaseCell>{row.original.vendor}</ProductBaseCell>,
  },
  {
    Header: "Available",
    id: "available",
    Cell: ({ row }: RowProps) => <ProductBaseCell>{row.original.availableForSale ? "Yes" : "No"}</ProductBaseCell>,
  },
  {
    Header: "Actions",
    id: "id",
    Cell: ({ row }: RowProps) => <ProductActionsCell id={row.original.id} previewUrl={row.original.url} />,
  },
];
