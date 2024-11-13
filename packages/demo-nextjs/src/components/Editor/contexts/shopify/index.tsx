"use client";

import { useConfig } from "@/components/Editor/contexts";
import { WithChildren } from "@/components/Metronic/helpers";
import { BRZ_CURRENT_CONTEXT } from "@/constants/EntityType";
import { _Config } from "@/hooks/useEditor/types";
import { CollectionTypes } from "@/lib/db/types";
import { Response } from "@builder/core/build/es/types/common";
import { PostsSources } from "@builder/core/build/es/types/posts";
import { ShopifyTemplate } from "@builder/core/build/es/types/types";
import { FC, useEffect } from "react";
import { mergeDeep } from "timm";

const shopifyConfig: Pick<_Config, "platform" | "contentDefaults" | "elements"> = {
  platform: "shopify",
  contentDefaults: {
    AddToCart: {
      sourceType: CollectionTypes.product,
    },
    Quantity: {
      sourceType: CollectionTypes.product,
    },
    Variant: {
      sourceType: CollectionTypes.product,
    },
    Price: {
      sourceType: CollectionTypes.product,
    },
    Vendor: {
      sourceType: CollectionTypes.product,
    },
    ProductList: {
      collectionTypeId: CollectionTypes.product,
      component: CollectionTypes.product,
      source: BRZ_CURRENT_CONTEXT,
    },
  },
  elements: {
    posts: {
      includeQueryMultiOptions: false,
      querySource: false,
      handler: (res: Response<PostsSources>) => {
        const orderBy = [
          { title: "ID", id: "id" },
          { title: "Title", id: "title" },
        ];

        const sources = [
          { title: "Auto", id: BRZ_CURRENT_CONTEXT, orderBy },
          { title: "Manual", id: CollectionTypes.product, orderBy },
        ];

        return res({
          sources,
          refsById: [],
        });
      },
    },
  },
};

export const ShopifyProvider: FC<WithChildren> = ({ children }) => {
  const { config, setConfig } = useConfig() ?? {};

  useEffect(() => {
    if (!config) return;

    const newConfig = mergeDeep(config, shopifyConfig, {
      templateType: {
        id: config.pageData.id,
        type: ShopifyTemplate.Page,
      },
    }) as _Config;

    if (JSON.stringify(newConfig) !== JSON.stringify(config)) {
      setConfig(newConfig);
    }
  }, [config, setConfig]);

  return <>{children}</>;
};
