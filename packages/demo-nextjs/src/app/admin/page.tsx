"use client";

import { toAbsoluteUrl } from "@/components/Metronic/helpers";
import Root from "@/components/Metronic/layout/Root";
import { Content } from "@/components/Metronic/layout/components/content";
import { CardsWidget7, CardsWidget20, EngageWidget10, TablesWidget10 } from "@/components/Metronic/partials/widgets";
import React from "react";

export default function AdminPage() {
  return (
    <Root>
      <Content>
        <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
          <div className="col-md-6 mb-xl-10">
            <CardsWidget20
              className="h-md-50 mb-5 mb-xl-10"
              description="Active Projects"
              color="#F1416C"
              img={toAbsoluteUrl("media/patterns/vector-1.png")}
            />
            <CardsWidget7
              className="h-md-50 mb-5 mb-xl-10"
              description="Professionals"
              icon={false}
              stats={357}
              labelColor="dark"
              textColor="gray-300"
            />
          </div>

          <div className="col-md-6">
            <EngageWidget10 className="h-md-100" />
          </div>
        </div>

        <div className="row gy-5 gx-xl-8">
          <div className="col-xl-12">
            <TablesWidget10 className="card-xxl-stretch mb-5 mb-xl-8" />
          </div>
        </div>
      </Content>
    </Root>
  );
}
