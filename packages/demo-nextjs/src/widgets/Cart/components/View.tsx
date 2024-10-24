import { Item } from "@brizy/builder-ui/lib/elements/AlphaCart/components/Item";
import { AlphaCartHtml } from "@brizy/builder-ui/lib/elements/AlphaCart/index.html";
import { ThemeIconPreview } from "@brizy/core";
import { FC } from "react";
import { AntStyleProvider } from "../../components/AntStyleProvider";
import { Props } from "../types";
import { Cart } from "./Cart";

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
  <AntStyleProvider>
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
  </AntStyleProvider>
);
