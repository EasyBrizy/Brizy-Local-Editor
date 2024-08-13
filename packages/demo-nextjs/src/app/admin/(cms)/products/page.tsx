"use client";

import { ProductsTable } from "@/app/admin/(cms)/products/components/table/ProductsTable";
import { KTCard } from "@/components/Metronic/helpers";
import Root from "@/components/Metronic/layout/Root";
import { Content } from "@/components/Metronic/layout/components/content";
import { ToolbarWrapper } from "@/components/Metronic/layout/components/toolbar";
import { PageTitle } from "@/components/Metronic/layout/core";
import { Breadcrumbs } from "@/constants/Breadcrumbs";
import React, { FC } from "react";
import { ProductsProvider } from "./components/core/ProductsProvider";

const Page: FC = () => (
  <Root>
    <ProductsProvider>
      <PageTitle breadcrumbs={Breadcrumbs}>Products</PageTitle>
      <ToolbarWrapper />
      <Content>
        <KTCard>
          <ProductsTable />
        </KTCard>
      </Content>
    </ProductsProvider>
  </Root>
);

export default Page;
