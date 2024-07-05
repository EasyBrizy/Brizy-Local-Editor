import { Editor } from "@/components/Editor";
import { getEditorConfig } from "@/lib/editorConfig";
import { projectId, storyPageId } from "@/utils/mock";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

export default async function EditorPage() {
  const editorConfig = await getEditorConfig({ pageId: storyPageId, projectId, mode: Modes.story });
  return <Editor config={editorConfig} />;
}
