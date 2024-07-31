import { KTCard } from "../../../helpers";
import { Content } from "../../../layout/components/content";
import { ToolbarWrapper } from "../../../layout/components/toolbar";
import { UsersListHeader } from "./components/header/UsersListHeader";
import { ListViewProvider } from "./core/ListViewProvider";
import { QueryRequestProvider } from "./core/QueryRequestProvider";
import { QueryResponseProvider } from "./core/QueryResponseProvider";
import { CollectionsTable } from "./table/CollectionsTable";

const CollectionsList = () => {
  return (
    <KTCard>
      <UsersListHeader />
      <CollectionsTable />
    </KTCard>
  );
};

interface Props {
  collection: "page" | "story" | "header" | "footer" | "popup";
}

const CollectionsListWrapper = (props: Props) => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ToolbarWrapper />
        <Content>
          <CollectionsList />
        </Content>
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { CollectionsListWrapper };
