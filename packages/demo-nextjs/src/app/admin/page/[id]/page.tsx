import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import { getEditorConfig } from "@/lib/editorConfig";
import { projectId } from "@/utils/mock";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

interface Props {
  params: { id: string };
}

export default async function EditorPage(props: Props) {
  const { params } = props;
  const pageId = params.id;
  const pagePreview = `${getConfig().host}/preview/page/${pageId}`;
  const editorConfig = await getEditorConfig({ pageId: params.id, projectId, mode: Modes.page });
  return <Editor config={{ ...editorConfig, pagePreview }} />;
}
