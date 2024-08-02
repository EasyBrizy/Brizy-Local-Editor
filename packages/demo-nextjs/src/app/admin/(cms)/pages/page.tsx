"use client";

import Root from "@/components/Metronic/layout/Root";
import { PageTitle } from "@/components/Metronic/layout/core";
import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import React, { FC } from "react";

const Pages: FC = () => {
  return (
    <Root>
      <PageTitle>Pages</PageTitle>
      <CollectionsListWrapper collection="page" />
    </Root>
  );
};

export default Pages;
