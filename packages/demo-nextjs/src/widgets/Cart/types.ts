import { Item } from "@brizy/builder-ui/lib/elements/AlphaCart/components/Item";

export interface Props {
  openSidebar: "on" | "off";
  cartHeaderTitle: string;
  sidebarPosition: "left" | "right";
  sidebarWidth: number;
  sidebarWidthSuffix: "px" | "%";
  showCloseBtn: "on" | "off";
  items: Item[];
  iconName: string;
  iconType: string;
}
