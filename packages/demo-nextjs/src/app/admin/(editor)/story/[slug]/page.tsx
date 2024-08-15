import { Editor } from "@/components/Editor";
import { getItemConfig } from "@/lib/itemConfig/getItemConfig";
import { getOrigin } from "@/utils";
import { Modes } from "@builder/core/build/es/types/types";
import { headers } from "next/headers";
import React from "react";

interface Props {
  params: { slug: string };
}

export default async function StoryPage(props: Props) {
  const { params } = props;
  const headersList = headers();
  const origin = getOrigin(headersList);

  const slug = params.slug;
  const pagePreview = `${origin}/story/${slug}`;
  const editorConfig = await getItemConfig({ collection: "story", item: slug });
  return <Editor config={{ ...editorConfig, mode: Modes.story, pagePreview }} origin={origin} />;
}
