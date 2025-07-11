"use client";

import Root from "@/components/Metronic/layout/Root";
import { PageTitle } from "@/components/Metronic/layout/core";
import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import { Breadcrumbs } from "@/constants/Breadcrumbs";
import React, { FC } from "react";

const AITemplates: FC = () => {
  return (
    <Root>
      <PageTitle breadcrumbs={Breadcrumbs}>AI Templates</PageTitle>
      <CollectionsListWrapper collection="ai-templates" />
    </Root>
  );
};

export default AITemplates;
