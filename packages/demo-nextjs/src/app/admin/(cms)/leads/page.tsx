"use client";

import Root from "@/components/Metronic/layout/Root";
import { PageTitle } from "@/components/Metronic/layout/core";
import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import { Breadcrumbs } from "@/constants/Breadcrumbs";
import React, { FC } from "react";

const Leads: FC = () => {
  return (
    <Root>
      <PageTitle breadcrumbs={Breadcrumbs}>Leads</PageTitle>
      <CollectionsListWrapper collection="page" />
    </Root>
  );
};

export default Leads;
