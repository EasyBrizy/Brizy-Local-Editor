import { Item } from "@brizy/builder-ui/lib/elements/AlphaCart/components/Item";
import { AlphaCartHtml } from "@brizy/builder-ui/lib/elements/AlphaCart/index.html";
import { FC } from "react";
import { Cart } from "./components/Cart";
import { Props } from "./types";
import { ThemeIconPreview } from "@brizy/core";

const items: Item[] = [];

export const CartView: FC<Props> = ({
  cartHeaderTitle,
  sidebarPosition,
  sidebarWidth,
  sidebarWidthSuffix,
  showCloseBtn,
  iconName,
  iconType,
}) => (
  <Cart
    cartHeaderTitle={cartHeaderTitle}
    sidebarPosition={sidebarPosition}
    sidebarWidth={sidebarWidth}
    sidebarWidthSuffix={sidebarWidthSuffix}
    showCloseBtn={showCloseBtn}
    items={items}
    isOpen={false}
    cartElement={<AlphaCartHtml items={items} title="" />}
    iconName={iconName}
    iconType={iconType}
    ThemeIcon={ThemeIconPreview}
  />
);
