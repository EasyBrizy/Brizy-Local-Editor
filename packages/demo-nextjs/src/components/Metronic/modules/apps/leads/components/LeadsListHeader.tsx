import { ListGrouping } from "@/components/Metronic/helpers/components/list/ListGrouping";
import { useCallback, useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useListView } from "../../collections/core/ListViewProvider";
import { LeadsContext } from "../core/LeadsContext";
import { deleteLeads } from "../core/_requests";

export const LeadsListHeader = () => {
  const { selected, clearSelected } = useListView();
  const { query } = useContext(LeadsContext);
  const queryClient = useQueryClient();
  const count = selected.length;

  const handleDeleteItems = useMutation(() => deleteLeads(selected), {
    onError() {
      alert("Fail to delete leads");
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["leads", query]);
      clearSelected();
    },
  });

  const handleDelete = useCallback(async () => {
    await handleDeleteItems.mutateAsync();
  }, [handleDeleteItems]);

  return (
    !!count && (
      <div className="card-header border-0 pt-6 d-flex justify-content-end">
        <ListGrouping count={count} isLoading={handleDeleteItems.isLoading} onDelete={handleDelete} />
      </div>
    )
  );
};
