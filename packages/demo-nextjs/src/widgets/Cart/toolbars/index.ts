import { Getter } from "../../types/options";
import { getToolbarBtnCart } from "./toolbarBtnCart";
import { toolbarBtnCartCounter } from "./toolbarBtnCartCounter";
import { toolbarBtnCheckout } from "./toolbarBtnCheckout";
import { toolbarCartHeaderClose } from "./toolbarCartHeaderClose";
import { toolbarCartHeaderTitle } from "./toolbarCartHeaderTitle";
import { toolbarCartItemPrice } from "./toolbarCartItemPrice";
import { toolbarCartItemRemove } from "./toolbarCartItemRemove";
import { toolbarCartItemTitle } from "./toolbarCartItemTitle";
import { toolbarCartItemVariant } from "./toolbarCartItemVariant";
import { toolbarCartQuantity } from "./toolbarCartQuantity";
import { toolbarFooterDescription } from "./toolbarFooterDescription";
import { toolbarFooterItemSubtotal } from "./toolbarFooterItemSubtotal";
import { toolbarProductImage } from "./toolbarProductImage";

export const getToolbarOptions = ({ getValue }: { getValue: Getter }) => [
  getToolbarBtnCart(getValue),
  toolbarBtnCartCounter,
  toolbarCartHeaderTitle,
  toolbarCartHeaderClose,
  toolbarCartItemRemove,
  toolbarCartItemTitle,
  toolbarCartItemVariant,
  toolbarCartItemPrice,
  toolbarFooterItemSubtotal,
  toolbarFooterDescription,
  toolbarBtnCheckout,
  toolbarCartQuantity,
  toolbarProductImage,
];
