import { Collection } from "mongoose";
import { Column } from "react-table";
import { CollectionActionsCell } from "./CollectionActionsCell";
import { CollectionBaseCell } from "./CollectionBaseCell";
import { CollectionInfoCell } from "./CollectionInfoCell";
import { CollectionStatusCell } from "./CollectionStatusCell";
import { UserCustomHeader } from "./UserCustomHeader";
import { UserSelectionCell } from "./UserSelectionCell";
import { UserSelectionHeader } from "./UserSelectionHeader";

const getUsersColumns = (shouldRenderFields: boolean) =>
  [
    shouldRenderFields && {
      Header: (props) => <UserSelectionHeader tableProps={props} />,
      id: "selection",
      Cell: (props) => <UserSelectionCell id={props.data[props.row.index].id} />,
    },
    {
      Header: (props) => <UserCustomHeader tableProps={props} title="Title" className="min-w-325px" />,
      id: "title",
      Cell: (props) => <CollectionInfoCell collection={props.data[props.row.index]} />,
    },
    shouldRenderFields && {
      Header: (props) => <UserCustomHeader tableProps={props} title="Status" className="min-w-125px" />,
      id: "status",
      Cell: () => <CollectionStatusCell status="Publish" />,
    },

    shouldRenderFields && {
      Header: (props) => <UserCustomHeader tableProps={props} title="Author" className="min-w-125px" />,
      id: "author",
      Cell: () => <CollectionBaseCell content="admin" />,
    },
    shouldRenderFields && {
      Header: (props) => <UserCustomHeader tableProps={props} title="Date" />,
      id: "date",
      Cell: (props) => (
        <CollectionBaseCell content={props.data[props.row.index].createdAt ?? `${new Date().toLocaleDateString()}`} />
      ),
    },
    {
      Header: (props) => <UserCustomHeader tableProps={props} title="Actions" className="text-end" />,
      id: "actions",
      Cell: (props) => (
        <CollectionActionsCell
          id={props.data[props.row.index].id}
          deletable={props.data[props.row.index].config?.deletable}
          slug={props.data[props.row.index].slug}
        />
      ),
    },
  ].filter(Boolean);

export { getUsersColumns };
