"use client";

import Root from "@/components/Metronic/layout/Root";
import { Content } from "@/components/Metronic/layout/components/content";
import { PageTitle } from "@/components/Metronic/layout/core";

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <Root>
      <PageTitle>Menu Configuration</PageTitle>
      <Content>{children}</Content>
    </Root>
  );
}
