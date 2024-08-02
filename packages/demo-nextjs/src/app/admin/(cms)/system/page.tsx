"use client";

import Root from "@/components/Metronic/layout/Root";
import { PageTitle } from "@/components/Metronic/layout/core";
import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import React, { FC } from "react";

const System: FC = () => {
  return (
    <Root>
      <PageTitle>System</PageTitle>
      <CollectionsListWrapper collection="system" />
    </Root>
  );
};

export default System;
