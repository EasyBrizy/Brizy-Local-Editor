import { useListView } from "../../core/ListViewProvider";
import { useQueryResponse } from "../../core/QueryResponseProvider";
import { CollectionListToolbar } from "./UserListToolbar";
import { UsersListGrouping } from "./UsersListGrouping";
import { UsersListSearchComponent } from "./UsersListSearchComponent";

const UsersListHeader = () => {
  const { selected } = useListView();
  const { collection } = useQueryResponse();

  return (
    <div className="card-header border-0 pt-6">
      <UsersListSearchComponent />

      {collection !== "system" && (
        <div className="card-toolbar">{selected.length > 0 ? <UsersListGrouping /> : <CollectionListToolbar />}</div>
      )}
    </div>
  );
};

export { UsersListHeader };
