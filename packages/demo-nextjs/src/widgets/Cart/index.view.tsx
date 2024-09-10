import { Item } from "@brizy/builder-ui/lib/elements/AlphaCart/components/Item";
import { AlphaCartHtml } from "@brizy/builder-ui/lib/elements/AlphaCart/index.html";
import { FC } from "react";
import { Cart } from "./components/Cart";
import { Props } from "./types";
import { AntStyleProvider } from "../components/AntStyleProvider";

const items: Item[] = [];

export const TempThemeIcon = ({ type, name, className }: { type: string; name: string; className?: string }) => (
  <svg className={`brz-icon-svg ${className}`}>
    <use href={`/api/icons/${type}/${name}.svg#nc_icon`} />
  </svg>
);

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
      ThemeIcon={TempThemeIcon}
    />
  </AntStyleProvider>
);
