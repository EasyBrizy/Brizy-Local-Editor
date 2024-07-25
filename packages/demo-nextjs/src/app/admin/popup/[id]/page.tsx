import { Editor } from "@/components/Editor";
import { getConfig } from "@/config";
import "@/lib/footer/getFooters";
import { getPopupConfigById } from "@/lib/popup/getPopups";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

interface Props {
  params: { id: string };
}

export default async function PopupPage(props: Props) {
  const { params } = props;
  const popupId = params.id;
  const pagePreview = `${getConfig().host}/preview/popup/${popupId}`;
  const editorConfig = await getPopupConfigById(popupId);
  return <Editor config={{ ...editorConfig, mode: Modes.popup, pagePreview }} />;
}
