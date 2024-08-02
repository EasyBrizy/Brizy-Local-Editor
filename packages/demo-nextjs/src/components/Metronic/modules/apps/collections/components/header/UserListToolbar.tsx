import { useMutation, useQueryClient } from "react-query";
import { KTIcon, QUERIES } from "../../../../../helpers";
import { useQueryResponse } from "../../core/QueryResponseProvider";
import { createCollection } from "../../core/_requests";

const CollectionListToolbar = () => {
  const { query, collection } = useQueryResponse();

  const queryClient = useQueryClient();

  const handleAdd = useMutation(
    () => {
      const id = Math.random().toString(36).slice(2);
      return createCollection({
        id,
        slug: {
          collection,
          item: `${collection}-${id}`,
        },
        config: {
          deletable: true,
          hasPreview: true,
        },
      });
    },
    {
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: () => {
        // ✅ update detail view directly
        queryClient.invalidateQueries([`${QUERIES.COLLECTIONS_LIST}-${query}`]);
      },
    },
  );

  return (
    <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
      <button
        type="button"
        className="btn btn-primary"
        data-kt-indicator={handleAdd.isLoading ? "on" : "off"}
        onClick={async () => await handleAdd.mutateAsync()}
      >
        <span className="indicator-label">
          <span className="d-flex align-items-center">
            <KTIcon iconName="plus" className="fs-2" />
            <span>
              Add <span className="capitalize">{collection}</span>
            </span>
          </span>
        </span>
        <span className="indicator-progress">
          Please wait...
          <span className="spinner-border spinner-border-sm align-middle ms-2" />
        </span>
      </button>
    </div>
  );
};

export { CollectionListToolbar };
