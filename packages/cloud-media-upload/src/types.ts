import { Config } from "@brizy/media-gallery/lib/app";
import type { AddMediaExtra } from "@builder/core";
import { z } from "zod";
import { credentialSchema } from "./utils/validation";

export type Literal = string | number;

type EmptyObject = Record<string, never>;

export type ProjectCredential = z.infer<typeof credentialSchema>;

export type MediaGalleryParam<T extends string, U> = Record<T, NonNullable<U>> | EmptyObject;

export type Response<R> = (r: R) => void;

export interface HandlerArgs {
  res: Response<AddImageData>;
  rej: Response<Error>;
  extra: AddMediaExtra;
}

export type OnInsertFiles = (
  res: Response<AddImageData>,
  rej: Response<Error>,
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
