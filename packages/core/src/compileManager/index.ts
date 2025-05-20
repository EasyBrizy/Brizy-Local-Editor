import {
  Assets,
  BlockOutput,
  BuilderPublishedData,
  DraftBlock,
  PageCompiled,
} from "@/builderProvider/types/builderOutput";
import { isDraftBlock } from "@/builderProvider/utils/guards";
import { PageJsonOutput } from "@/types/common";
import { BuilderOutput } from "@/types/types";
import { mergeWith } from "es-toolkit";
import { isT } from "fp-utilities";
import { AssetTypes, AssetTypesKey } from "./types";
import { mergeArrayAsset } from "./utils/mergeArrayAsset";

class CompileManager {
  private blocks: Map<string, DraftBlock>;

  constructor() {
    this.blocks = new Map();
  }

  private getBlocks(blocks: Array<BlockOutput>): Array<DraftBlock> {
    const data = blocks.map((block) => (isDraftBlock(block) ? block : this.blocks.get(block.id))).filter(isT);

    // Clear all blocks
    this.blocks.clear();

    // Attached latest updated blocks
    data.forEach((b) => {
      this.blocks.set(b.id, b);
    });

    return data;
  }

  private rootHTML(page: PageCompiled, blocks: Array<DraftBlock>): string {
    const root = document.createElement("div");
    const { rootClassNames, rootAttributes = {} } = page;

    rootClassNames?.forEach((className) => {
      root.classList.add(className);
    });

    Object.entries(rootAttributes).forEach(([attrName, attrValue]) => {
      root.setAttribute(attrName, `${attrValue}`);
    });

    blocks.forEach(({ html }) => {
      const rootHTML = root.innerHTML;

      if (html) {
        root.innerHTML = rootHTML + html;
      }
    });

    const wrap = document.createElement("div");
    wrap.append(root);

    return wrap.innerHTML;
  }

  private mergeAsset<T extends AssetTypesKey>(a: AssetTypes[T], b: AssetTypes[T]) {
    const fonts = new Map();
    const assets = new Set<string>();

    if (Array.isArray(a)) {
      a.forEach((asset) => {
        mergeArrayAsset(asset, assets, fonts);
      });
    }

    if (Array.isArray(b)) {
      b.forEach((asset) => {
        mergeArrayAsset(asset, assets, fonts);
      });
    }

    if (fonts.size || assets.size) {
      return [...fonts.values(), ...assets.values()];
    }
  }

  private getAssets(blocks: Array<DraftBlock>): Assets {
    const assets: Assets = {
      freeScripts: {
        // @ts-expect-error TMP
        main: {},
        generic: [],
        libsMap: [],
        libsSelectors: [],
      },
      freeStyles: {
        // @ts-expect-error TMP
        main: {},
        generic: [],
        libsMap: [],
        libsSelectors: [],
        pageFonts: [],
        pageStyles: [],
      },
    };

    blocks.forEach((block) => {
      assets.freeStyles = mergeWith(assets.freeStyles, block.assets.freeStyles, this.mergeAsset);
      assets.freeScripts = mergeWith(assets.freeScripts, block.assets.freeScripts, this.mergeAsset);

      if (block.assets.proScripts) {
        assets.proScripts = mergeWith(assets.proScripts ?? {}, block.assets.proScripts, this.mergeAsset);
      }

      if (block.assets.proStyles) {
        assets.proStyles = mergeWith(assets.proStyles ?? {}, block.assets.proStyles, this.mergeAsset);
      }
    });

    return assets;
  }

  private preparePage(page: PageCompiled): PageJsonOutput {
    const blocks = this.getBlocks(page.blocks);
    const html = this.rootHTML(page, blocks);
    const assets = this.getAssets(blocks);

    return { html, assets };
  }

  prepareHTML(data: BuilderPublishedData): BuilderOutput {
    const { projectData, pageData, error, mode } = data;

    if (error) {
      return {
        mode,
        error,
      };
    }

    if (!pageData) {
      return {
        mode,
        projectData,
      };
    }

    const { compiled, ...page } = pageData;

    if (!compiled) {
      return {
        mode,
        projectData,
        pageData: page,
      };
    }

    return {
      mode,
      projectData,
      pageData: {
        ...page,
        compiled: this.preparePage(compiled),
      },
    };
  }
}

export type CompileManagerType = CompileManager;
export { CompileManager };
