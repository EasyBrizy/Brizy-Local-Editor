import { Choice, Response } from "./common";

export interface CollectionTypes {
  loadCollectionTypes: {
    handler: (
      res: Response<Choice[]>,
      rej: Response<string>,
      extraData?: { defaultTitle?: string; defaultValue?: string },
    ) => void;
  };
}
