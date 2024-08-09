import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import React from "react";

export const SystemPages = () => (
  <CollectionsListWrapper
    collection="system"
    shouldRenderToolbar={false}
    shouldRenderInfoFields={false}
    shouldRenderSearch={false}
  />
);
