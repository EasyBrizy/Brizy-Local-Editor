import { KTCard } from "../../../helpers";
import { Content } from "../../../layout/components/content";
import { ToolbarWrapper } from "../../../layout/components/toolbar";
import { UsersListHeader } from "./components/header/UsersListHeader";
import { ListViewProvider } from "./core/ListViewProvider";
import { QueryRequestProvider } from "./core/QueryRequestProvider";
import { QueryResponseProvider } from "./core/QueryResponseProvider";
import { CollectionsTable } from "./table/CollectionsTable";

interface Props {
  collection: string;
}

const CollectionsList = () => (
  <KTCard>
    <UsersListHeader />
    <CollectionsTable />
  </KTCard>
);

const CollectionsListWrapper = ({ collection }: Props) => (
  <QueryRequestProvider>
    <QueryResponseProvider collection={collection}>
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
