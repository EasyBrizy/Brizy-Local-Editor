import { FC } from "react";
import { KTCard } from "../../../helpers";
import { Content } from "../../../layout/components/content";
import { ToolbarWrapper } from "../../../layout/components/toolbar";
import { UsersListHeader } from "./components/header/UsersListHeader";
import { ListViewProvider } from "./core/ListViewProvider";
import { QueryRequestProvider } from "./core/QueryRequestProvider";
import { QueryResponseProvider, useCollectionQuery, useQueryResponseLoading } from "./core/QueryResponseProvider";
import { CollectionsTable } from "./table/CollectionsTable";
import { Config } from "./types";

interface Props {
  collection: string;
  config?: Config;
}

const CollectionsList: FC<Pick<Props, "config">> = ({ config }) => {
  const collections = useCollectionQuery();
  const isLoading = useQueryResponseLoading();

  return (
    <KTCard>
      {!config?.disableHeader && <UsersListHeader />}
      <CollectionsTable config={config} collections={collections} isLoading={isLoading} />
    </KTCard>
  );
};

const CollectionsListWrapper = ({ collection, config }: Props) => (
  <QueryRequestProvider>
    <QueryResponseProvider collection={collection}>
      <ListViewProvider>
        {!config?.disableToolbar && <ToolbarWrapper />}
        <Content>
          <CollectionsList config={config} />
        </Content>
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { CollectionsListWrapper };
