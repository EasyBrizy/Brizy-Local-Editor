import { Editor } from "@/components/Editor";
import { getItemConfig } from "@/lib/itemConfig/getItemConfig";
import { getMenuItems } from "@/lib/itemConfig/getMenuItems";
import { getOrigin } from "@/utils";
import { Modes } from "@builder/core/build/es/types/types";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { slug: Array<string> };
}

export default async function EditorPage(props: Props) {
  const headersList = headers();
  const origin = getOrigin(headersList);

  const { params } = props;
  let [collection, item] = params.slug;

  // Rollback to page collection when the item is missing
  if (!item) {
    item = collection;
    collection = "page";
  }

  const pagePreview = `${origin}/${collection}/${item}`;

  try {
    const editorConfig = await getItemConfig({ item, collection });
    const menu = [...(editorConfig?.menu ?? []), ...(await getMenuItems())];

    const baseConfig = {
      ...editorConfig,
      mode: Modes.page,
      pagePreview,
      menu,
    };

    console.log(editorConfig);

    return <Editor config={baseConfig} origin={origin} />;
  } catch (e) {
    return notFound();
  }
}
