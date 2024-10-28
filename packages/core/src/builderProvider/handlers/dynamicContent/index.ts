import { getIn, set, setIn } from "timm";
import { ExposedHandlers } from "../../types/type";
import { baseDCHandler } from "./handler";
import { addImageDCHandler } from "./image";
import { addLinkDCHandler } from "./link";
import { getPlaceholderDataHandler } from "./placeholder";
import { addRichTextDCHandler } from "./text";

export function getDCConfig(dynamicContent: Record<string, unknown>, handlers: ExposedHandlers, uid: string) {
  let dc = dynamicContent;

  //#region DC groups

  const richTextDC = getIn(dynamicContent, ["groups", "richText", "handler"]) as undefined | Record<string, unknown>;
  const imageDC = getIn(dynamicContent, ["groups", "image", "handler"]) as undefined | Record<string, unknown>;
  const linkDC = getIn(dynamicContent, ["groups", "link", "handler"]) as undefined | Record<string, unknown>;
  const handler = getIn(dynamicContent, ["handler"]) as undefined | Record<string, unknown>;

  const { handleDCRichText, handleDCLink, handleDCImage, dcHandler, getPlaceholderData } = handlers;

  if (richTextDC && richTextDC.enable) {
    dc = setIn(dc, ["groups", "richText"], addRichTextDCHandler(handleDCRichText, uid)) as Record<string, unknown>;
  }

  if (imageDC && imageDC.enable) {
    dc = setIn(dc, ["groups", "image"], addImageDCHandler(handleDCImage, uid)) as Record<string, unknown>;
  }

  if (linkDC && linkDC.enable) {
    dc = setIn(dc, ["groups", "link"], addLinkDCHandler(handleDCLink, uid)) as Record<string, unknown>;
  }

  if (handler && handler.enable) {
    dc = set(dc, "handler", baseDCHandler(dcHandler, uid)) as Record<string, unknown>;
  }

  //#endregion

  const placeholderData = getIn(dynamicContent, ["getPlaceholderData"]) as undefined | Record<string, unknown>;

  if (placeholderData && placeholderData.enable)
    dc = setIn(dc, ["getPlaceholderData"], getPlaceholderDataHandler(getPlaceholderData, uid)) as Record<
      string,
      unknown
    >;

  return dc;
}
