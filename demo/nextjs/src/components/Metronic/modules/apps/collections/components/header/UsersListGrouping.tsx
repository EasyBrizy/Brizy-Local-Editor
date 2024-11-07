import { ListGrouping } from "@/components/Metronic/helpers/components/list/ListGrouping";
import { useCallback } from "react";
import { useMutation, useQueryClient } from "react-query";
import { QUERIES } from "../../../../../helpers";
import { useListView } from "../../core/ListViewProvider";
import { useQueryResponse } from "../../core/QueryResponseProvider";
import { deleteSelectedItems } from "../../core/_requests";

const UsersListGrouping = () => {
  const { selected, clearSelected } = useListView();
  const queryClient = useQueryClient();
  const { query } = useQueryResponse();

  const handleDeleteItems = useMutation(() => deleteSelectedItems(selected), {
    onError() {
      alert("Fail to delete items");
    },
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.COLLECTIONS_LIST}-${query}`]);
      clearSelected();
    },
  });

  const handleDelete = useCallback(async () => {
    await handleDeleteItems.mutateAsync();
  }, [handleDeleteItems]);

  return <ListGrouping count={selected.length} isLoading={handleDeleteItems.isLoading} onDelete={handleDelete} />;
};

export { UsersListGrouping };
