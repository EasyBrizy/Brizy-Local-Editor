import { ColumnInstance } from "react-table";

interface Props<T extends Record<string, unknown>> {
  column: ColumnInstance<T>;
}

const CustomHeaderColumn = <T extends Record<string, unknown>>({ column }: Props<T>): JSX.Element => {
  const { key, ...props } = column.getHeaderProps();

  return (
    <>
      {column.Header && typeof column.Header === "string" ? (
        <th key={key} {...props}>
          {column.render("Header")}
        </th>
      ) : (
        column.render("Header")
      )}
    </>
  );
};

export { CustomHeaderColumn };
