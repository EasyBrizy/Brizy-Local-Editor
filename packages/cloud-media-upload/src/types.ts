import type { AddMediaExtra } from "@builder/core/build/es/types/media";
import { Config } from "@brizy/media-gallery/lib/app";

export type Literal = string | number;

type EmptyObject = Record<string, never>;

export interface ProjectCredential {
  projectId: Literal;
  token: string;
}

export type MediaGalleryParam<T extends string, U> = Record<T, NonNullable<U>> | EmptyObject;

export type Response<R> = (r: R) => void;

export interface HandlerArgs {
  res: Response<AddImageData>;
  rej: Response<string>;
  extra: AddMediaExtra;
}

export type OnInsertFiles = (
  res: Response<any>,
  rej: Response<string>,
  handleClose: VoidFunction,
) => Config["onInsertFiles"];

export interface Item {
  id: number;
  uid: string;
  fileName: string;
  extension: string;
  name: string;
  url: string;
  altTitle: string | undefined;
  isStockPhoto: boolean;
}

export interface AddImageData {
  uid: string;
  fileName: string;
  altTitle?: string;
}
