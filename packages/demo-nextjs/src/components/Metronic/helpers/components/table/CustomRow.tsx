import { Row } from "react-table";

interface Props<T extends Record<string, unknown>> {
  row: Row<T>;
}

const CustomRow = <T extends Record<string, unknown>>({ row }: Props<T>): JSX.Element => {
  const { key, ...rowProps } = row.getRowProps();

  return (
    <tr key={key} {...rowProps}>
      {row.cells.map((cell) => {
        const { key, ...cellProps } = cell.getCellProps();
        return (
          <td key={key} {...cellProps}>
            {cell.render("Cell")}
          </td>
        );
      })}
    </tr>
  );
};
export { CustomRow };
