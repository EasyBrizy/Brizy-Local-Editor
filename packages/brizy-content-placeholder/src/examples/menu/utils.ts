import { Menu } from "./MenuBasePlaceholder"

export const readMenuItemId = (menuItem: unknown) =>
  typeof menuItem === "object" && menuItem !== null
    ? String(menuItem["id"])
    : ""

export const isMenuData = (data: unknown): data is Menu[] =>
  Array.isArray(data) &&
  data.length > 0 &&
  data.every(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      "id" in item &&
      "items" in item,
  )
