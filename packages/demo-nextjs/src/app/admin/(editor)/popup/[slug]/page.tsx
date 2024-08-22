import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import { getItemConfig } from "@/lib/itemConfig/getItemConfig";
import { getOrigin } from "@/utils";
import { Modes } from "@builder/core/build/es/types/types";
import { headers } from "next/headers";
import React from "react";

interface Props {
  params: { slug: string };
}

export default async function PopupPage(props: Props) {
  const { params } = props;
  const headersList = headers();
  const origin = getOrigin(headersList);

  const slug = params.slug;
  const editorConfig = await getItemConfig({ collection: "popup", item: slug });
  return <Editor config={{ ...editorConfig, mode: Modes.popup }} origin={origin} />;
}
