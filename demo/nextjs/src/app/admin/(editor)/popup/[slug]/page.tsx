import { Editor } from "@/components/Editor";
import { ConfigProvider } from "@/components/Editor/contexts";
import { getItemConfig } from "@/lib/itemConfig/getItemConfig";
import { getOrigin } from "@/utils/origin";
import { Modes } from "@builder/core/build/es/types/types";
import { headers } from "next/headers";
import React from "react";

interface Props {
  params: { slug: string };
}

export default async function PopupPage(props: Props) {
  const { params } = props;
  const origin = await getOrigin();

  const slug = params.slug;
  const editorConfig = await getItemConfig({ collection: "popup", item: slug });

  const baseConfig = {
    ...editorConfig,
    mode: Modes.popup,
  };

  return (
    <ConfigProvider config={baseConfig} origin={origin}>
      <Editor />
    </ConfigProvider>
  );
}
