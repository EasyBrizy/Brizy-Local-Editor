import { AlphaCartReact } from "@brizy/builder-ui/lib/elements/AlphaCart/index.react";
import { FC } from "react";
import { Cart } from "./Cart";
import { Props } from "../types";
import { cartItems } from "../utils";
import { ThemeIconEditor } from "@brizy/core";

export const CartEditor: FC<Props> = ({
  cartHeaderTitle,
  sidebarPosition,
  sidebarWidth,
  sidebarWidthSuffix,
  showCloseBtn,
  openSidebar,
  iconName,
  iconType,
}) => (
  <Cart
    cartHeaderTitle={cartHeaderTitle}
    sidebarPosition={sidebarPosition}
    sidebarWidth={sidebarWidth}
    sidebarWidthSuffix={sidebarWidthSuffix}
    showCloseBtn={showCloseBtn}
    items={cartItems}
    isOpen={openSidebar === "on"}
    cartElement={<AlphaCartReact items={cartItems} title="" />}
    iconType={iconType}
    iconName={iconName}
    ThemeIcon={ThemeIconEditor}
    className="third-party-cart-editor"
  />
);
