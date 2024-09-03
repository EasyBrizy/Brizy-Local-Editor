import { ID, KTIcon } from "@/components/Metronic/helpers";
import { FC, useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { LeadsContext } from "../../../core/LeadsContext";
import { deleteLeads } from "../../../core/_requests";

interface Props {
  id: ID;
}

export const LeadActionsCell: FC<Props> = ({ id }) => {
  const queryClient = useQueryClient();
  const { query } = useContext(LeadsContext);

  const handleDelete = useMutation((id: ID) => deleteLeads([id]), {
    onSuccess: () => {
      queryClient.invalidateQueries(["leads", query]);
    },
  });

  return (
    <span
      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
      data-kt-users-table-filter="delete_row"
      onClick={async () => await handleDelete.mutateAsync(id)}
    >
      <KTIcon iconName="trash" className="fs-3" />
    </span>
  );
};
