import { Asset, AssetFonts, AssetLibsMap } from "@/types/common";
import { MValue } from "@/utils/types";
import { Styles } from "../types";
import { attributesToRecord } from "./attributesToRecord";

type Assets = Asset | AssetFonts | AssetLibsMap;

export const makeStyles = (asset: Assets): MValue<Array<Styles>> => {
  const { content } = asset;
  switch (content.type) {
    case "inline": {
      return [
        {
          type: "style",
          html: content.content,
          attr: content.attr ?? {},
        },
      ];
    }
    case "code": {
      const div = document.createElement("div");
      div.innerHTML = content.content;
      const styleNodes = div.querySelectorAll("style");
      const linkNodes = div.querySelectorAll("link");

      if (styleNodes.length > 0) {
        const styles: Array<Styles> = [];

        styleNodes.forEach(function (el) {
          const attr = attributesToRecord(el);
          const html = el.innerHTML;

          styles.push({ type: "style" as const, attr, html });
        });

        return styles;
      }

      if (linkNodes.length > 0) {
        const links: Array<Styles> = [];

        linkNodes.forEach(function (el) {
          const attr = attributesToRecord(el);

          links.push({ type: "link" as const, attr });
        });

        return links;
      }
      return undefined;
    }
    case "file": {
      return [
        {
          type: "link",
          attr: { ...(content.attr ?? {}), href: content.url },
        },
      ];
    }
  }
};
