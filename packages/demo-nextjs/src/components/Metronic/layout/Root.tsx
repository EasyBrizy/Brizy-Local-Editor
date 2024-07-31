"use client";

import "@/components/Metronic/assets/fonticon/fonticon.css";
import "@/components/Metronic/assets/keenicons/duotone/style.css";
import "@/components/Metronic/assets/keenicons/outline/style.css";
import "@/components/Metronic/assets/keenicons/solid/style.css";
import "@/components/Metronic/assets/sass/style.react.scss";
import "@/components/Metronic/assets/sass/style.scss";
import { MasterLayout } from "@/components/Metronic/layout/MasterLayout";
import { LayoutProvider } from "@/components/Metronic/layout/core";
import { ThemeModeProvider } from "@/components/Metronic/partials";
import dynamic from "next/dynamic";
import React, { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const MasterInit = dynamic(() => {
  if (typeof window === "undefined") {
    const element = () => <></>;
    return Promise.resolve(element);
  }
  return import("@/components/Metronic/layout/MasterInit").then((mod) => mod.MasterInit);
});

const queryClient = new QueryClient();

export interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <ThemeModeProvider>
          <MasterLayout>{props.children}</MasterLayout>
          <MasterInit />
        </ThemeModeProvider>
      </LayoutProvider>
    </QueryClientProvider>
  );
};

export default Layout;
