import { CollectionTypes } from "@/lib/db/types";

//#region Project

export const projectId = "1";

//#region Header & Footer

export const headerQuery = { type: CollectionTypes.header, item: "home" };
export const footerQuery = { type: CollectionTypes.footer, item: "home" };

//#endregion

//#region Shopify
export const SHOPIFY_BASE_URL = "https://admin.shopify.com/store";
//#endregion
