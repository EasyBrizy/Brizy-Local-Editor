import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import { getPageConfigBySlug } from "@/lib/pages/getPages";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

interface Props {
  params: { slug: string };
}

export default async function EditorPage(props: Props) {
  const { params } = props;
  const pageSlug = params.slug;
  const pagePreview = `${getConfig().host}/preview/page/${pageSlug}`;
  const editorConfig = await getPageConfigBySlug(pageSlug);
  return <Editor config={{ ...editorConfig, mode: Modes.page, pagePreview }} />;
}
