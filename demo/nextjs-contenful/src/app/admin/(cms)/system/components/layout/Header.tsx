import { ToolbarWrapper } from "@/components/Metronic/layout/components/toolbar";
import { PageTitle } from "@/components/Metronic/layout/core";
import { Breadcrumbs } from "@/constants/Breadcrumbs";
import React, { FC } from "react";

export const Header: FC = () => (
  <>
    <PageTitle breadcrumbs={Breadcrumbs}>Project Settings</PageTitle>
    <ToolbarWrapper />
  </>
);
