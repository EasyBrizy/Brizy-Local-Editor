import { FC } from "react";
import { Row } from "react-table";
import { Collection } from "../../core/_models";

type Props = {
  row: Row<Collection>;
};

const CustomRow: FC<Props> = ({ row }) => {
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
