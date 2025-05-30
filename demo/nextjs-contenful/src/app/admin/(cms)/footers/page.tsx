"use client";

import Root from "@/components/Metronic/layout/Root";
import { PageTitle } from "@/components/Metronic/layout/core";
import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import { Breadcrumbs } from "@/constants/Breadcrumbs";
import React, { FC } from "react";

const Footers: FC = () => {
  return (
    <Root>
      <PageTitle breadcrumbs={Breadcrumbs}>Footer</PageTitle>
      <CollectionsListWrapper collection="footer" />
    </Root>
  );
};

export default Footers;
