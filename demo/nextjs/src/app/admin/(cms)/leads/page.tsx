"use client";

import { LeadsContent } from "@/app/admin/(cms)/leads/components/Content";
import Root from "@/components/Metronic/layout/Root";
import { QueryRequestProvider } from "@/components/Metronic/modules/apps/collections/core/QueryRequestProvider";
import { LeadsProvider } from "@/components/Metronic/modules/apps/leads/core/LeadsProvider";
import React, { FC } from "react";
import { Header } from "./components/Header";

const Leads: FC = () => {
  return (
    <Root>
      <QueryRequestProvider>
        <LeadsProvider>
          <Header />
          <LeadsContent />
        </LeadsProvider>
      </QueryRequestProvider>
    </Root>
  );
};

export default Leads;
