import { ThemeIconPreview } from "@brizy/core";
import { AddToCart } from "./AddToCart";
import { Props } from "./types";

export const AddToCartView = ({ iconType, iconName, itemId, title }: Props) => (
  <AddToCart iconType={iconType} iconName={iconName} title={title} itemId={itemId} ThemeIcon={ThemeIconPreview} />
);
