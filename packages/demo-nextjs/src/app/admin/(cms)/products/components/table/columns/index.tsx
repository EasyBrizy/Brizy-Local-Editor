import { ProductActionsCell } from "@/app/admin/(cms)/products/components/table/columns/ProductActionsCell";
import { Column } from "react-table";
import { Product } from "../../../core/types";
import { ProductBaseCell } from "./ProductBaseCell";
import { ProductNameWithImage } from "./ProductNameWithImage";
import { ProductPrice } from "./ProductPrice";
import { ProductQuantity } from "./ProductQuantity";

export const productsColumns: ReadonlyArray<Column<Product>> = [
  {
    Header: "Product",
    id: "product",
    Cell: ({ row }) => (
      <ProductNameWithImage
        title={row.original.title}
        featuredImage={row.original.featuredImage}
        url={row.original.url}
      />
    ),
  },
  {
    Header: "Quantity",
    id: "quantity",
    accessor: "totalInventory",
    Cell: ({ value }) => <ProductQuantity quantity={value} />,
  },
  {
    Header: "Price",
    id: "price",
    accessor: "priceRange",
    Cell: ({ value }) => (
      <ProductPrice currencyCode={value.minVariantPrice.currencyCode} amount={value.minVariantPrice.amount} />
    ),
  },
  {
    Header: "Created At",
    id: "createdAt",
    accessor: "createdAt",
    Cell: ({ value }) => <ProductBaseCell content={new Date(value).toLocaleDateString()} />,
  },
  {
    Header: "Vendor",
    accessor: "vendor",
    Cell: ({ value }) => <ProductBaseCell content={value} />,
  },
  {
    Header: "Available",
    id: "available",
    accessor: "availableForSale",
    Cell: ({ value }) => <ProductBaseCell content={value ? "Yes" : "No"} />,
  },
  {
    Header: "Actions",
    id: "id",
    accessor: "id",
    Cell: ({ value, row }) => (
      <ProductActionsCell id={value} vendor={row.original.vendor} previewUrl={row.original.url} />
    ),
  },
];
