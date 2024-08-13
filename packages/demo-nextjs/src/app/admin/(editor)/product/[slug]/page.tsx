import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import { getItemConfig } from "@/lib/items/getItemConfig";
import { Modes } from "@builder/core/build/es/types/types";
import { notFound } from "next/navigation";
import React from "react";

export default async function ProductPage(props) {
  const { params } = props;
  const slug = params.slug;
  const pagePreview = `${getConfig().host}/preview/product/${slug}`;

  const editorConfig = await getItemConfig({ collection: "product", item: slug });
  return <Editor config={{ ...editorConfig, mode: Modes.page, pagePreview }} />;
}
