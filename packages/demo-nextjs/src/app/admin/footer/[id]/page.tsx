import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import { getFooterConfigById } from "@/lib/footer/getFooters";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

interface Props {
  params: { id: string };
}
export default async function FooterPage(props: Props) {
  const { params } = props;
  const footerId = params.id;
  const pagePreview = `${getConfig().host}/preview/footer/${footerId}`;
  const editorConfig = await getFooterConfigById(footerId);
  return <Editor config={{ ...editorConfig, mode: Modes.page, pagePreview }} />;
}
