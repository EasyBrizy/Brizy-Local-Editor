import { CollectionTypes } from "@/lib/db/types";

//#region Project

export const projectId = 1;

//#region Header & Footer

export const headerQuery = { "slug.collection": CollectionTypes.header, "slug.item": "home" };
export const footerQuery = { "slug.collection": CollectionTypes.footer, "slug.item": "home" };

//#endregion
