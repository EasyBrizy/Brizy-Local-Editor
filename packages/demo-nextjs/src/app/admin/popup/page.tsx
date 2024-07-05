import { Editor } from "@/components/Editor";
import { getEditorConfig } from "@/lib/editorConfig";
import { popupPageId, projectId } from "@/utils/mock";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

export default async function EditorPage() {
  const editorConfig = await getEditorConfig({ pageId: popupPageId, projectId, mode: Modes.popup });
  return <Editor config={editorConfig} />;
}
