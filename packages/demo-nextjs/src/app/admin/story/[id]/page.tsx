import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import { getStoryConfigById } from "@/lib/story/getStories";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

interface Props {
  params: { id: string };
}

export default async function StoryPage(props: Props) {
  const { params } = props;
  const storyId = params.id;
  const pagePreview = `${getConfig().host}/preview/story/${storyId}`;
  const editorConfig = await getStoryConfigById(storyId);
  return <Editor config={{ ...editorConfig, mode: Modes.story, pagePreview }} />;
}
