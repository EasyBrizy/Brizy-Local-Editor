"use client";

import Root from "@/components/Metronic/layout/Root";
import { PageTitle } from "@/components/Metronic/layout/core";
import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import React, { FC } from "react";

const Headers: FC = () => {
  return (
    <Root>
      <PageTitle>Headers</PageTitle>
      <CollectionsListWrapper collection="header" />
    </Root>
  );
};

export default Headers;
