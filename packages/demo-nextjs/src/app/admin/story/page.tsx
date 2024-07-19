import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import { getEditorConfig } from "@/lib/editorConfig";
import { projectId, storyPageId } from "@/utils/mock";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

export default async function StoryPage() {
  const pagePreview = `${getConfig().host}/preview/story`;
  const editorConfig = await getEditorConfig({ pageId: storyPageId, projectId, mode: Modes.story });
  return <Editor config={{ ...editorConfig, pagePreview }} />;
}
