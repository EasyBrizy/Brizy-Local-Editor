import { SelectionCell } from "@/components/Metronic/helpers/components/table/columns/SelectionCell";
import { FC, useMemo } from "react";
import { ID } from "../../../../../helpers";
import { useListView } from "../../core/ListViewProvider";

type Props = {
  id: ID;
};

const UserSelectionCell: FC<Props> = ({ id }) => {
  const { selected, onSelect } = useListView();
  const isSelected = useMemo(() => selected.includes(id), [id, selected]);

  return <SelectionCell isSelected={isSelected} onSelect={() => onSelect(id)} />;
};

export { UserSelectionCell };
