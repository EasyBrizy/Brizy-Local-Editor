import Link from "next/link";
import { FC, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { MenuComponent } from "../../../../../assets/ts/components";
import { ID, KTIcon, QUERIES } from "../../../../../helpers";
import { useQueryResponse } from "../../core/QueryResponseProvider";
import { deleteItem } from "../../core/_requests";

type Props = {
  id: ID;
  slug: {
    item: string;
    collection: string;
  };
  deletable?: boolean;
  editable?: boolean;
};

const CollectionActionsCell: FC<Props> = (props) => {
  const { id, slug, deletable, editable } = props;

  const { query } = useQueryResponse();
  const queryClient = useQueryClient();

  useEffect(() => {
    MenuComponent.reinitialization();
  }, []);

  const handleDelete = useMutation(() => deleteItem(id), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.COLLECTIONS_LIST}-${query}`]);
    },
  });

  return (
    <div className="d-flex justify-content-end flex-shrink-0">
      {editable && (
        <Link
          href={`/admin/${slug.collection}/${slug.item}`}
          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
        >
          <KTIcon iconName="pencil" className="fs-3" />
        </Link>
      )}
      {deletable && (
        <span
          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
          data-kt-users-table-filter="delete_row"
          onClick={async () => await handleDelete.mutateAsync()}
        >
          <KTIcon iconName="trash" className="fs-3" />
        </span>
      )}
    </div>
  );
};

export { CollectionActionsCell };
