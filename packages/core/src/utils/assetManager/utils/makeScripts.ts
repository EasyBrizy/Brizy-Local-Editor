import { Asset, AssetLibsMap } from "@/types/common";
import { MValue } from "@/utils/types";
import { Scripts } from "../types";
import { attributesToRecord } from "./attributesToRecord";

type Assets = Asset | AssetLibsMap;

export const makeScripts = (asset: Assets): MValue<Array<Scripts>> => {
  const { content } = asset;
  switch (content.type) {
    case "inline": {
      return [
        {
          attr: content.attr ?? {},
          html: content.content,
        },
      ];
    }

    case "code": {
      const div = document.createElement("div");
      div.innerHTML = content.content;
      const scriptNodes = div.querySelectorAll("script");

      if (scriptNodes.length > 0) {
        const scripts: Array<Scripts> = [];

        scriptNodes.forEach(function (el) {
          const attr = attributesToRecord(el);

          if ("src" in attr) {
            scripts.push({ attr: attr });
          } else {
            const html = el.innerHTML;

            scripts.push({ attr, html });
          }
        });

        return scripts;
      }
      return undefined;
    }
    case "file": {
      return [
        {
          attr: {
            ...(content.attr ?? {}),
            src: content.url,
          },
        },
      ];
    }
  }
};
