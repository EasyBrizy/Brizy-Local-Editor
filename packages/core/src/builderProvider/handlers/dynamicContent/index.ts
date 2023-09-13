import { HandlerData } from "@/builderProvider/types/type";
import { getIn, setIn } from "timm";
import { addImageDCHandler } from "./image";
import { addLinkDCHandler } from "./link";
import { addRichTextDCHandler } from "./text";

interface DC extends HandlerData {
  dynamicContent: Record<string, unknown>;
}

export const getDynamicContent = (data: DC) => {
  const { uid, target, event, dynamicContent } = data;
  let dc = dynamicContent;
  const richTextDC = getIn(dynamicContent, ["groups", "richText", "handler"]) as undefined | Record<string, unknown>;
  const imageDC = getIn(dynamicContent, ["groups", "image", "handler"]) as undefined | Record<string, unknown>;
  const linkDC = getIn(dynamicContent, ["groups", "link", "handler"]) as undefined | Record<string, unknown>;

  if (richTextDC && richTextDC.enable) {
    dc = setIn(dc, ["groups", "richText"], {
      handler: addRichTextDCHandler({ uid, target, event }),
    }) as Record<string, unknown>;
  }

  if (imageDC && imageDC.enable) {
    dc = setIn(dc, ["groups", "image"], {
      handler: addImageDCHandler({ uid, target, event }),
    }) as Record<string, unknown>;
  }

  if (linkDC && linkDC.enable) {
    dc = setIn(dc, ["groups", "link"], {
      handler: addLinkDCHandler({ uid, target, event }),
    }) as Record<string, unknown>;
  }

  return dc;
};
