import { Response } from "@/types/common";
import { LayoutsPages, Template } from "@/types/templates";

//#region Meta
type GetLayoutsMeta = (res: Response<Template>, rej: Response<string>) => Promise<void>;
export type LayoutsMetaHandler = (uid: string) => Promise<Template>;

export const getLayoutsMeta = (layoutsMetaHandler: LayoutsMetaHandler, uid: string) => {
  const handler: GetLayoutsMeta = async (res, rej) => {
    try {
      const data = await layoutsMetaHandler(uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching layouts meta";
      rej(message);
    }
  };

  return handler;
};

//#endregion

//#region Data

interface Page {
  id: string;
  layoutId: string;
}

type GetLayoutsData = (res: Response<Record<string, unknown>>, rej: Response<string>, page: Page) => Promise<void>;
export type LayoutsDataHandler = (page: Page, uid: string) => Promise<Record<string, unknown>>;

export const getLayoutsData = (layoutsDataHandler: LayoutsDataHandler, uid: string) => {
  const handler: GetLayoutsData = async (res, rej, page) => {
    try {
      const data = await layoutsDataHandler(page, uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching layouts data";
      rej(message);
    }
  };

  return handler;
};

//#endregion

//#region Pages

type GetLayoutsPages = (res: Response<LayoutsPages>, rej: Response<string>, id: string) => void;
export type LayoutsPagesHandler = (id: string, uid: string) => Promise<LayoutsPages>;

export const getLayoutsPages = (layoutsPagesHandler: LayoutsPagesHandler, uid: string) => {
  const handler: GetLayoutsPages = async (res, rej, id) => {
    try {
      const data = await layoutsPagesHandler(id, uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching layouts pages";
      rej(message);
    }
  };

  return handler;
};

//#endregion
