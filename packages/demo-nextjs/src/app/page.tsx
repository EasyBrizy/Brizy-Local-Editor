import { Editor } from "@/components/Editor";
import { getEditorConfig } from "@/lib/editorConfig";
import React from "react";

export default async function EditorPage() {
  const editorConfig = await getEditorConfig();
  return <Editor config={editorConfig} />;
}
