import { Response } from "./common";

export interface AddMediaData {
  fileName: string;
}

export interface AddMediaExtra {
  acceptedExtensions: Array<string>;
}

export interface Media {
  mediaResizeUrl?: string;

  addMedia?: {
    handler: (res: Response<AddMediaData>, rej: Response<string>, extra: AddMediaExtra) => void;
  };
}
