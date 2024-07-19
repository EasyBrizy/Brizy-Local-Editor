import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import { getEditorConfig } from "@/lib/editorConfig";
import { headerId as pageId, projectId } from "@/utils/mock";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

export default async function HeaderPage() {
  const pagePreview = `${getConfig().host}/preview/header/${pageId}`;
  const editorConfig = await getEditorConfig({ pageId, projectId, mode: Modes.page });
  return <Editor config={{ ...editorConfig, pagePreview }} />;
}
