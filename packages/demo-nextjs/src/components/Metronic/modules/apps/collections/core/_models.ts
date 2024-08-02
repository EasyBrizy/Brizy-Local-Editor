import { ID, Response } from "../../../../helpers";

export type Collection = {
  id: ID;
  slug: {
    collection: string;
    item: string;
  };
  config?: {
    hasPreview: boolean;
    deletable?: boolean;
  };
  data?: Record<string, unknown>;
  createdAt?: string;
};

export type CollectionsQueryResponse = Response<Array<Collection>>;
