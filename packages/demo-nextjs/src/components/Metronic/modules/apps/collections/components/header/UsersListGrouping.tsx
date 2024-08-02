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

  return (
    <div className="d-flex justify-content-end align-items-center">
      <div className="fw-bolder me-5">
        <span className="me-2">{selected.length}</span> Selected
      </div>

      <button
        type="button"
        className="btn btn-danger"
        data-kt-indicator={handleDeleteItems.isLoading ? "on" : "off"}
        onClick={async () => await handleDeleteItems.mutateAsync()}
      >
        <span className="indicator-label">Delete Selected</span>
        <span className="indicator-progress">
          Please wait...
          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
        </span>
      </button>
    </div>
  );
};

export { UsersListGrouping };
