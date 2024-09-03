import { FC } from "react";
import { KTCard, WithChildren } from "../../../helpers";
import { Content } from "../../../layout/components/content";
import { ToolbarWrapper } from "../../../layout/components/toolbar";
import { UsersListHeader } from "./components/header/UsersListHeader";
import { ListViewProvider } from "./core/ListViewProvider";
import { QueryRequestProvider } from "./core/QueryRequestProvider";
import { QueryResponseProvider, useCollectionQuery, useQueryResponse } from "./core/QueryResponseProvider";
import { CollectionsTable } from "./table/CollectionsTable";
import { Config } from "./types";

interface Props {
  collection: string;
  config?: Config;
}

const CollectionsList: FC<Pick<Props, "config">> = ({ config }) => (
  <KTCard>
    {!config?.disableHeader && <UsersListHeader />}
    <CollectionsTable config={config} />
  </KTCard>
);

const ListViewWrapper: FC<WithChildren> = ({ children }) => {
  const data = useCollectionQuery();
  const { isLoading } = useQueryResponse();

  return (
    <ListViewProvider data={data} isLoading={isLoading}>
      {children}
    </ListViewProvider>
  );
};

const CollectionsListWrapper = ({ collection, config }: Props) => (
  <QueryRequestProvider>
    <QueryResponseProvider collection={collection}>
      <ListViewWrapper>
        {!config?.disableToolbar && <ToolbarWrapper />}
        <Content>
          <CollectionsList config={config} />
        </Content>
      </ListViewWrapper>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { CollectionsListWrapper };
