import { KTCard } from "@/components/Metronic/helpers";
import { Content } from "@/components/Metronic/layout/components/content";
import { ListViewProvider } from "@/components/Metronic/modules/apps/collections/core/ListViewProvider";
import { LeadsListHeader } from "@/components/Metronic/modules/apps/leads/components/LeadsListHeader";
import { LeadsTable } from "@/components/Metronic/modules/apps/leads/components/table";
import { LeadsContext } from "@/components/Metronic/modules/apps/leads/core/LeadsContext";
import React, { useContext } from "react";

export const LeadsContent = () => {
  const { data, isLoading } = useContext(LeadsContext);
  const { leads } = data;

  return (
    <ListViewProvider data={leads} isLoading={isLoading}>
      <Content>
        <KTCard>
          <LeadsListHeader />
          <LeadsTable />
        </KTCard>
      </Content>
    </ListViewProvider>
  );
};
