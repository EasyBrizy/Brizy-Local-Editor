"use client";

import { useConfig } from "@/components/Editor/contexts";
import { WithChildren } from "@/components/Metronic/helpers";
import { _Config } from "@/hooks/useEditor/types";
import { LeftSidebarOptionsIds, ShopifyElementTypes } from "@builder/core/build/es/types/leftSidebar";
import { ShopifyTemplate } from "@builder/core/build/es/types/types";
import { FC, useEffect } from "react";
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

const shopifySidebarTab = {
  id: "shopify",
  type: LeftSidebarOptionsIds.addElements,
  title: "Add Shopify Elements",
  icon: "nc-shopify-logo",
  elements: [
    {
      label: "base",
      moduleNames: [
        ShopifyElementTypes.ProductTitle,
        ShopifyElementTypes.ProductDescription,
        ShopifyElementTypes.ProductImage,
      ],
    },
    {
      label: "products",
      moduleNames: [
        ShopifyElementTypes.ProductList,
        ShopifyElementTypes.Price,
        ShopifyElementTypes.Quantity,
        ShopifyElementTypes.Variant,
        ShopifyElementTypes.Vendor,
      ],
    },
  ],
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

    const topTabsOrder = newConfig.ui?.leftSidebar?.topTabsOrder || [];

    const addElementsTabIndex = topTabsOrder.findIndex((tab) => tab.id === LeftSidebarOptionsIds.addElements);
    const shopifyElementsTabIndex = topTabsOrder.findIndex((tab) => tab.id === shopifySidebarTab.id);

    if (shopifyElementsTabIndex === -1) {
      if (addElementsTabIndex !== -1) {
        topTabsOrder.splice(addElementsTabIndex + 1, 0, shopifySidebarTab);
      } else {
        topTabsOrder.push(shopifySidebarTab);
      }
    }

    if (JSON.stringify(newConfig) !== JSON.stringify(config)) {
      setConfig(newConfig);
    }
  }, [config, setConfig]);

  return <>{children}</>;
};
