import { FC, createContext, useContext, useMemo, useState } from "react";
import {
  ID,
  ListViewContextProps,
  WithChildren,
  calculateIsAllDataSelected,
  calculatedGroupingIsDisabled,
  groupingOnSelect,
  groupingOnSelectAll,
  initialListView,
} from "../../../../helpers";
import { useQueryResponse } from "./QueryResponseProvider";

const ListViewContext = createContext<ListViewContextProps>(initialListView);

interface ListViewProviderProps extends WithChildren {
  data: Array<any>;
  isLoading: boolean;
}

const ListViewProvider: FC<ListViewProviderProps> = ({ children, data, isLoading }) => {
  const [selected, setSelected] = useState<Array<ID>>(initialListView.selected);
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(initialListView.itemIdForUpdate);
  const disabled = useMemo(() => calculatedGroupingIsDisabled(isLoading, data), [isLoading, data]);
  const isAllSelected = useMemo(() => calculateIsAllDataSelected(data, selected), [data, selected]);

  return (
    <ListViewContext.Provider
      value={{
        selected,
        itemIdForUpdate,
        setItemIdForUpdate,
        disabled,
        isAllSelected,
        onSelect: (id: ID) => {
          groupingOnSelect(id, selected, setSelected);
        },
        onSelectAll: () => {
          groupingOnSelectAll(isAllSelected, setSelected, data);
        },
        clearSelected: () => {
          setSelected([]);
        },
      }}
    >
      {children}
    </ListViewContext.Provider>
  );
};

const useListView = () => useContext(ListViewContext);

export { ListViewProvider, useListView };
