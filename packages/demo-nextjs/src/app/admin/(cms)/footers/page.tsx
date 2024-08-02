"use client";

import Root from "@/components/Metronic/layout/Root";
import { PageTitle } from "@/components/Metronic/layout/core";
import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import React, { FC } from "react";

const Footers: FC = () => {
  return (
    <Root>
      <PageTitle>Footers</PageTitle>
      <CollectionsListWrapper collection="footer" />
    </Root>
  );
};

export default Footers;
