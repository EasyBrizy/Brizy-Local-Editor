import { Item } from "@/lib/db/types";
import { compressStringBrotli, decompressStringBrotli } from "@/utils/brotli";
import { CreateEntryProps, EntryProps } from "contentful-management";

export const lang = "en-US";

function formatDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formatter.format(date);
}

export const toItemConvertor = (item: EntryProps): Item => ({
  _id: item.sys.id,
  title: item.fields.title?.[lang],
  slug: {
    item: item.fields.slug[lang],
    collection: item.sys.contentType.sys.id,
  },
  createdAt: formatDate(new Date(item.sys.createdAt)),
  config: {
    hasPreview: item.fields.hasPreview?.[lang] ?? false,
    deletable: item.fields.deletable?.[lang] ?? false,
    showInMenu: item.fields.showInMenu?.[lang] ?? false,
  },
  data: item.fields.data?.[lang] ? decompressStringBrotli(item.fields.data[lang].data) : undefined,
});

export const toCollectionConvertor = (item: Partial<Item>): CreateEntryProps => ({
  fields: {
    ...(item.slug?.item && {
      slug: {
        [lang]: item.slug.item,
      },
    }),
    ...(item.title && {
      title: {
        [lang]: item.title,
      },
    }),
    ...(item.config?.showInMenu !== undefined && {
      showInMenu: {
        [lang]: item.config.showInMenu,
      },
    }),
    ...(item.config?.deletable !== undefined && {
      deletable: {
        [lang]: item.config.deletable,
      },
    }),
    ...(item.config?.hasPreview !== undefined && {
      hasPreview: {
        [lang]: item.config.hasPreview,
      },
    }),
    ...(item.data && {
      data: {
        [lang]: { data: compressStringBrotli(item.data) },
      },
    }),
  },
});
