import { Choice, Response } from "./common";

export interface CollectionItems {
  getCollectionItemsIds: {
    handler: (res: Response<Choice[]>, rej: Response<string>, extra: { id: string }) => void;
  };
  searchCollectionItems: {
    handler: (res: Response<Choice[]>, rej: Response<string>, extra?: { collectionId: string; search: string }) => void;
  };
  loadCollectionItems: {
    handler: (
      res: Response<Choice[]>,
      rej: Response<string>,
      extra?: { collectionId: string; value: string[] },
    ) => void;
  };
}
