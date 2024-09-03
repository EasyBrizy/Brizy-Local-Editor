import { SelectionHeader } from "@/components/Metronic/helpers/components/table/SelectionHeader";
import { useListView } from "@/components/Metronic/modules/apps/collections/core/ListViewProvider";
import { FC, PropsWithChildren } from "react";
import { HeaderProps } from "react-table";
import { Lead } from "../../../core/types";

type Props = {
  tableProps: PropsWithChildren<HeaderProps<Lead>>;
};

const LeadSelectionHeader: FC<Props> = ({ tableProps }) => {
  const { isAllSelected, onSelectAll } = useListView();

  return <SelectionHeader tableProps={tableProps} isAllSelected={isAllSelected} onSelectAll={onSelectAll} />;
};

export { LeadSelectionHeader };
