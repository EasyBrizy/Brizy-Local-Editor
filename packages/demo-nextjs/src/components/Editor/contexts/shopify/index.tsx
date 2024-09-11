"use client";

import { useConfig } from "@/components/Editor/contexts";
import { WithChildren } from "@/components/Metronic/helpers";
import { _Config } from "@/hooks/useEditor/types";
import { PlaceholderType } from "@/placeholders/types/types";
import { ShopifyTemplate } from "@builder/core/build/es/types/types";
import { FC, useCallback, useEffect } from "react";
import { mergeDeep } from "timm";

const shopifyConfig: Pick<_Config, "platform" | "contentDefaults"> = {
  platform: "shopify",
  contentDefaults: {
    AddToCart: {
      sourceType: ShopifyTemplate.Product,
    },
    Quantity: {
      sourceType: ShopifyTemplate.Product,
    },
    Variant: {
      sourceType: ShopifyTemplate.Product,
    },
    Price: {
      sourceType: ShopifyTemplate.Product,
    },
    Vendor: {
      sourceType: ShopifyTemplate.Product,
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
