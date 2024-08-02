import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import { getItemConfig } from "@/lib/items/getItemConfig";
import { Modes } from "@builder/core/build/es/types/types";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { slug: Array<string> };
}

export default async function EditorPage(props: Props) {
  const { params } = props;
  let [collection, item] = params.slug;

  // Rollback to page collection when the item is missing
  if (!item) {
    item = collection;
    collection = "page";
  }

  const pagePreview = `${getConfig().host}/preview/${collection}/${item}`;

  try {
    const editorConfig = await getItemConfig({ item, collection });
    return <Editor config={{ ...editorConfig, mode: Modes.page, pagePreview }} />;
  } catch (e) {
    return notFound();
  }
}
