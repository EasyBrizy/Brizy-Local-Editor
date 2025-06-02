import { Editor } from "@/components/Editor";
import { ConfigProvider } from "@/components/Editor/contexts";
import { CollectionTypes } from "@/lib/db/types";
import { getItemConfig } from "@/lib/itemConfig/getItemConfig";
import { getMenuItems } from "@/lib/itemConfig/getMenuItems";
import { getOrigin } from "@/utils/origin";
import "@brizy/cloud-media-upload/dist/style.css";
import { Modes } from "@builder/core/build/es/types/types";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { slug: Array<string> };
}

export default async function EditorPage(props: Props) {
  const origin = await getOrigin();

  const { params } = props;
  let [collection, item] = params.slug;

  // Rollback to page collection when the item is missing
  if (!item) {
    item = collection;
    collection = CollectionTypes.page;
  }

  const pagePreview = collection === CollectionTypes.page ? `${origin}/${item}` : `${origin}/${collection}/${item}`;

  try {
    const editorConfig = await getItemConfig({ item, collection });

    const menu = [...(editorConfig?.menu ?? []), ...(await getMenuItems())];

    const baseConfig = {
      ...editorConfig,
      mode: Modes.page,
      pagePreview,
      menu,
    };

    return (
      <ConfigProvider config={baseConfig} origin={origin}>
        <Editor />
      </ConfigProvider>
    );
  } catch (e) {
    return notFound();
  }
}
