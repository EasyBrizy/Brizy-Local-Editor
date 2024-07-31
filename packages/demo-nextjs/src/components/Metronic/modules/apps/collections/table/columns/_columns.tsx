import { Column } from "react-table";
import { Collection } from "../../core/_models";
import { UserActionsCell } from "./UserActionsCell";
import { UserCustomHeader } from "./UserCustomHeader";
import { UserInfoCell } from "./UserInfoCell";
import { UserSelectionCell } from "./UserSelectionCell";
import { UserSelectionHeader } from "./UserSelectionHeader";

const usersColumns: ReadonlyArray<Column<Collection>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: "selection",
    Cell: ({ ...props }) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Name" className="min-w-125px" />,
    id: "name",
    Cell: ({ ...props }) => <UserInfoCell collection={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Actions" className="text-end min-w-100px" />,
    id: "actions",
    Cell: ({ ...props }) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
];

export { usersColumns };
