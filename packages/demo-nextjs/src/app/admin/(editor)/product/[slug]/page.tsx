import { Editor } from "@/components/Editor";
import { ConfigProvider } from "@/components/Editor/contexts";
import { ShopifyProvider } from "@/components/Editor/contexts/shopify";
import { CollectionTypes } from "@/lib/db/types";
import { getItemConfig } from "@/lib/itemConfig/getItemConfig";
import { getOrigin } from "@/utils";
import { Modes } from "@builder/core/build/es/types/types";
import { headers } from "next/headers";
import React from "react";

interface Props {
  params: { slug: string };
}

export default async function ProductPage(props: Props) {
  const { params } = props;

  const headersList = headers();
  const origin = getOrigin(headersList);
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
