import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import { getEditorConfig } from "@/lib/editorConfig";
import { footerId as pageId, projectId } from "@/utils/mock";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

export default async function FooterPage() {
  const pagePreview = `${getConfig().host}/preview/footer/${pageId}`;
  const editorConfig = await getEditorConfig({ pageId, projectId, mode: Modes.page });
  return <Editor config={{ ...editorConfig, pagePreview }} />;
}
