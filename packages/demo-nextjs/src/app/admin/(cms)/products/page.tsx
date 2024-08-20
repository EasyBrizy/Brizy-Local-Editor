"use client";

import { KTCard } from "@/components/Metronic/helpers";
import Root from "@/components/Metronic/layout/Root";
import { Content } from "@/components/Metronic/layout/components/content";
import { ToolbarWrapper } from "@/components/Metronic/layout/components/toolbar";
import { PageTitle } from "@/components/Metronic/layout/core";
import { ProductsTable } from "@/components/Metronic/modules/apps/products/components/table";
import { ProductsProvider } from "@/components/Metronic/modules/apps/products/core/ProductsProvider";
import { Breadcrumbs } from "@/constants/Breadcrumbs";
import { FC } from "react";

const Products: FC = () => (
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

export default Products;
