"use client";

import Root from "@/components/Metronic/layout/Root";
import { PageTitle } from "@/components/Metronic/layout/core";
import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import { Breadcrumbs } from "@/constants/Breadcrumbs";
import React, { FC } from "react";

const config = {
  disabledFields: ["author", "status", "date", "selection"],
  disableHeader: true,
  disablePagination: true,
};

const System: FC = () => {
  return (
    <Root>
      <PageTitle breadcrumbs={Breadcrumbs}>System</PageTitle>
      <CollectionsListWrapper collection="system" config={config} />
    </Root>
  );
};

export default System;
