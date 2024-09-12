export interface Props {
  iconName: string;
  iconType: string;
  itemId: string;
  title: string;
}

export enum Sizes {
  Small = "small",
  Medium = "medium",
  Large = "large",
  Custom = "custom",
}

export enum FillTypes {
  Filled = "filled",
  Outline = "outline",
  Default = "default",
}

export enum RadiusType {
  Square = "square",
  Rounded = "rounded",
  Custom = "custom",
}
