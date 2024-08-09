import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import React from "react";

export const SystemPages = () => (
  <div className="-mt-8">
    <CollectionsListWrapper collection="system" shouldRenderToolbar={false} />
  </div>
);
