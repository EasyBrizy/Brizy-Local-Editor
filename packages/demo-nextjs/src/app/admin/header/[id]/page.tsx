import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import { getHeaderConfigById } from "@/lib/header/getHeaders";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

interface Props {
  params: { id: string };
}

export default async function HeaderPage(props: Props) {
  const { params } = props;
  const headerId = params.id;
  const pagePreview = `${getConfig().host}/preview/header/${headerId}`;
  const editorConfig = await getHeaderConfigById(headerId);
  return <Editor config={{ ...editorConfig, mode: Modes.page, pagePreview }} />;
}
