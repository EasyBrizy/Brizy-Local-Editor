import { Choice, Response } from "./common";

export interface CollectionItems {
  getCollectionItemsIds: {
    handler: (res: Response<Choice[]>, rej: Response<string>, extra: { id: string }) => void;
  };
}
