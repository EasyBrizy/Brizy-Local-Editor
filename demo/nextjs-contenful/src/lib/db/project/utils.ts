import { Project } from "@/lib/db/types";
import { compressStringBrotli, decompressStringBrotli } from "@/utils/brotli";
import { CreateEntryProps, EntryProps } from "contentful-management";

export const lang = "en-US";

export const toProjectConvertor = (item: EntryProps): Project => ({
  id: item.fields.id[lang],
  data: decompressStringBrotli(item.fields.data[lang].data),
  settings: item.fields.settings?.[lang],
});

export const toCollectionConvertor = (data: Partial<Project>): CreateEntryProps => ({
  fields: {
    ...(data.data && {
      data: {
        [lang]: {
          data: compressStringBrotli(data.data),
        },
      },
    }),
    ...(data.settings && {
      settings: {
        [lang]: JSON.parse(data.settings),
      },
    }),
  },
});
