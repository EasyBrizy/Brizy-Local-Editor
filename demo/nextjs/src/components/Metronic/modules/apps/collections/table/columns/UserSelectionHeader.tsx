import { SelectionHeader } from "@/components/Metronic/helpers/components/table/SelectionHeader";
import { FC, PropsWithChildren } from "react";
import { HeaderProps } from "react-table";
import { useListView } from "../../core/ListViewProvider";
import { Collection } from "../../core/_models";

type Props = {
  tableProps: PropsWithChildren<HeaderProps<Collection>>;
};

const UserSelectionHeader: FC<Props> = ({ tableProps }) => {
  const { isAllSelected, onSelectAll } = useListView();

  return <SelectionHeader tableProps={tableProps} isAllSelected={isAllSelected} onSelectAll={onSelectAll} />;
};

export { UserSelectionHeader };
