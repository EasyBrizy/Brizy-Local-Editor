import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import { getItemConfig } from "@/lib/items/getItemConfig";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

interface Props {
  params: { slug: string };
}

export default async function StoryPage(props: Props) {
  const { params } = props;
  const slug = params.slug;
  const pagePreview = `${getConfig().host}/preview/story/${slug}`;
  const editorConfig = await getItemConfig({ collection: "story", item: slug });
  return <Editor config={{ ...editorConfig, mode: Modes.story, pagePreview }} />;
}
