"use client";

import { toStaticUrl } from "@/components/Metronic/helpers";
import Root from "@/components/Metronic/layout/Root";
import { Content } from "@/components/Metronic/layout/components/content";
import {
  CardsWidget7,
  CardsWidget20,
  EngageWidget10,
  LatestCreatedItems,
} from "@/components/Metronic/partials/widgets";
import React from "react";

export default function AdminPage() {
  return (
    <Root>
      <Content>
        <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
          <div className="col-md-6">
            <CardsWidget20
              className="w-100 h-100 mb-5 mb-xl-10 col-lg-5"
              description="Active Pages"
              color="#F1416C"
              img={toStaticUrl("media/patterns/vector-1.png")}
            />
          </div>

          <div className="col-md-6">
            <CardsWidget7
              className="w-100 h-100 mb-5 mb-xl-10 col-lg-5"
              description="Professionals"
              icon={false}
              stats={15}
              labelColor="dark"
              textColor="gray-300"
            />
          </div>
          {/*<div className="col-md-6">*/}
          {/*  <EngageWidget10 className="h-md-100" />*/}
          {/*</div>*/}
        </div>

        <div className="row gy-5 gx-xl-8">
          <div className="col-xl-12">
            <LatestCreatedItems className="card-xxl-stretch mb-5 mb-xl-8" />
          </div>
        </div>
      </Content>
    </Root>
  );
}
