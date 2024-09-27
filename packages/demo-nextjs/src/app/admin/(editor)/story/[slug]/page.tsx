import { Editor } from "@/components/Editor";
import { ConfigProvider } from "@/components/Editor/contexts";
import { CollectionTypes } from "@/lib/db/types";
import { getItemConfig } from "@/lib/itemConfig/getItemConfig";
import { getOrigin } from "@/utils/origin";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

interface Props {
  params: { slug: string };
}

export default async function StoryPage(props: Props) {
  const { params } = props;
  const origin = await getOrigin();

  const slug = params.slug;
  const pagePreview = `${origin}/story/${slug}`;
  const editorConfig = await getItemConfig({ collection: CollectionTypes.story, item: slug });

  const baseConfig = {
    ...editorConfig,
    mode: Modes.story,
    pagePreview,
  };

  return (
    <ConfigProvider config={baseConfig} origin={origin}>
      <Editor />
    </ConfigProvider>
  );
}
