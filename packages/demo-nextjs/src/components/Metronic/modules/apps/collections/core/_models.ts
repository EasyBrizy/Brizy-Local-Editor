import { ID, Response } from "../../../../helpers";

export type Collection = {
  id?: ID;
  data: string;
  slug: {
    collection: string;
    item: string;
  };
};

export type CollectionsQueryResponse = Response<Array<Collection>>;
