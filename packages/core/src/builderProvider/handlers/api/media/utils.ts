import { MValue } from "@/utils/types";

const rgx = /\.[^.]+$/;

export const getFileFormat = (src: string): MValue<string> => {
  const result = rgx.exec(src);

  if (!result || !result.length) {
    return undefined;
  }

  const [ext] = result; // .ext
  return ext.replace(".", "").trimEnd().toLowerCase();
};
