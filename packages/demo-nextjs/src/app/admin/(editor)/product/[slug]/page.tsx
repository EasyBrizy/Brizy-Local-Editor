import { Editor } from "@/components/Editor";
import { ConfigProvider } from "@/components/Editor/contexts";
import { ShopifyProvider } from "@/components/Editor/contexts/shopify";
import { CollectionTypes } from "@/lib/db/types";
import { getItemConfig } from "@/lib/itemConfig/getItemConfig";
import { getOrigin } from "@/utils/origin";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

interface Props {
  params: { slug: string };
}

export default async function ProductPage(props: Props) {
  const { params } = props;

  const origin = await getOrigin();
  const slug = params.slug;

  const pagePreview = `${origin}/product/${slug}`;

  const editorConfig = await getItemConfig({ collection: CollectionTypes.product, item: slug });

  const baseConfig = {
    ...editorConfig,
    mode: Modes.page,
    pagePreview,
  };

  return (
    <ConfigProvider config={baseConfig} origin={origin}>
      <ShopifyProvider>
        <Editor />
      </ShopifyProvider>
    </ConfigProvider>
  );
}
