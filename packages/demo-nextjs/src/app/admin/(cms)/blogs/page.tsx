"use client";

import Root from "@/components/Metronic/layout/Root";
import { PageTitle } from "@/components/Metronic/layout/core";
import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import { Breadcrumbs } from "@/constants/Breadcrumbs";
import React, { FC } from "react";

const Blogs: FC = () => {
  return (
    <Root>
      <PageTitle breadcrumbs={Breadcrumbs}>Blogs</PageTitle>
      <CollectionsListWrapper collection="blog" />
    </Root>
  );
};

export default Blogs;
