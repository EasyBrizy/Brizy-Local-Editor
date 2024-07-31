"use client";

import Root from "@/components/Metronic/layout/Root";
import { PageLink, PageTitle } from "@/components/Metronic/layout/core";
import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import React, { FC } from "react";

const breadcrumbs: Array<PageLink> = [
  {
    title: "Collections",
    path: "/apps/user-management/users",
    isSeparator: false,
    isActive: false,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const Pages: FC = () => {
  return (
    <Root>
      <PageTitle breadcrumbs={breadcrumbs}>Collections Page</PageTitle>
      <CollectionsListWrapper collection="page" />
    </Root>
  );
};

export default Pages;
