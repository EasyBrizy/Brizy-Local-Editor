import { Response } from "@/types/common";

export interface FontFile {
  [type: string]: {
    [fileType: string]: File | null;
  };
}

export interface UploadFont {
  type: "uploaded";
  family: string;
  id: string;
  weights: string[];
}

export interface UploadedFont extends UploadFont {
  deleted?: boolean;
}

export interface UploadFontExtra {
  id: string;
  name: string;
  files: FontFile;
}

export type UploadedFontsIntegration = {
  get(res: Response<Array<UploadedFont>>, rej: Response<string>): void;
  upload(res: Response<UploadFont>, rej: Response<string>, extra: UploadFontExtra): void;
  delete(res: Response<string>, rej: Response<string>, fontId: string): void;
};
