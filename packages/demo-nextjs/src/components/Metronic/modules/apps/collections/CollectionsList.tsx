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
  shouldRenderToolbar?: boolean;
  shouldRenderSearch?: boolean;
  shouldRenderInfoFields?: boolean;
}

const CollectionsList = ({ shouldRenderHeader }: { shouldRenderHeader: boolean }) => (
  <KTCard>
    {shouldRenderHeader && <UsersListHeader />}
    <CollectionsTable />
  </KTCard>
);

const CollectionsListWrapper = ({
  collection,
  shouldRenderToolbar = true,
  shouldRenderSearch = true,
  shouldRenderInfoFields = true,
}: Props) => (
  <QueryRequestProvider>
    <QueryResponseProvider
      collection={collection}
      shouldRenderInfoFields={shouldRenderInfoFields}
      shouldRenderSearch={shouldRenderSearch}
    >
      <ListViewProvider>
        {shouldRenderToolbar && <ToolbarWrapper />}
        <CollectionsList shouldRenderHeader={shouldRenderSearch} />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { CollectionsListWrapper };
