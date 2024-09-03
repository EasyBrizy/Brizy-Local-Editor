import { Column } from "react-table";
import { UserSelectionCell } from "../../../../collections/table/columns/UserSelectionCell";
import { Lead } from "../../../core/types";
import { LeadActionsCell } from "./LeadActionsCell";
import { LeadSelectionHeader } from "./LeadSelectionHeader";
import { LeadsDataCell } from "./LeadsDataCell";

export const leadsColumns: ReadonlyArray<Column<Lead>> = [
  {
    accessor: "id",
    id: "selection",
    Header: (props) => <LeadSelectionHeader tableProps={props} />,
    Cell: ({ value }) => <UserSelectionCell id={value} />,
  },
  { Header: "Leads Details", accessor: "data", Cell: ({ value }) => <LeadsDataCell data={value} /> },
  {
    Header: "Data received on",
    accessor: "createdAt",
    id: "createdAt",
  },
  {
    Header: "Actions",
    id: "actions",
    accessor: "id",
    Cell: ({ value }) => <LeadActionsCell id={value} />,
  },
];
