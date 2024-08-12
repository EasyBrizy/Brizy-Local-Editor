import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import React from "react";

const config = {
  disableHeader: true,
  disablePagination: true,
  disabledFields: ["author", "date", "status"],
  disableToolbar: true,
};

export const SystemPages = () => (
  <div className="-ml-9">
    <CollectionsListWrapper collection="system" config={config} />
  </div>
);
