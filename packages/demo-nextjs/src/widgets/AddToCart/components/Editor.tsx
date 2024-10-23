import { Props } from "./types";
import { ThemeIconEditor } from "@brizy/core";
import { AddToCart } from "./AddToCart";

export const AddToCartEditor = ({ iconType, iconName, itemId, title }: Props) => (
  <AddToCart iconType={iconType} iconName={iconName} title={title} itemId={itemId} ThemeIcon={ThemeIconEditor} />
);
