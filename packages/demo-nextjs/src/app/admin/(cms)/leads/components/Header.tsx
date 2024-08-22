import { ToolbarWrapper } from "@/components/Metronic/layout/components/toolbar";
import { PageTitle } from "@/components/Metronic/layout/core";
import { Breadcrumbs } from "@/constants/Breadcrumbs";
import React from "react";

export const Header = () => (
  <>
    <PageTitle breadcrumbs={Breadcrumbs}>Leads</PageTitle>
    <ToolbarWrapper />
  </>
);
