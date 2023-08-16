import { HandlerData } from "@/builderProvider/types/type";
import { getIn, merge, setIn } from "timm";
import { addExplodePlaceholder } from "./explodePlaceholder";
import { addImageDCHandler } from "./image";
import { addLinkDCHandler } from "./link";
import { addMakePlaceholder } from "./makePlaceholder";
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
  const enableMakePlaceholder = getIn(dynamicContent, ["makePlaceholder", "enable"]);
  const enableExplodePlaceholder = getIn(dynamicContent, ["explodePlaceholder", "enable"]);

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

  if (enableMakePlaceholder) {
    dc = merge(dc, { makePlaceholder: addMakePlaceholder({ uid, target, event }) });
  }

  if (enableExplodePlaceholder) {
    dc = merge(dc, { explodePlaceholder: addExplodePlaceholder({ uid, target, event }) });
  }

  return dc;
};
