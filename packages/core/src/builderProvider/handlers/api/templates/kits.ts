import { Response } from "@/types/common";
import { BlockWithThumbs, Kit, KitItem, KitsWithThumbs } from "@/types/templates";


//#region Base
export type KitsHandler = (uid: string) => Promise<Array<Kit>>;
type GetKitsHandler = (res: Response<Array<Kit>>, rej: Response<string>) => Promise<void>;

export const getKits = (kitsHandler: KitsHandler, uid: string) => {
  const handler: GetKitsHandler = async (res, rej) => {
    try {
      const data = await kitsHandler(uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching kits";
      rej(message);
    }
  };

  return handler;
};

//#endregion

//#region Meta
export type KitsMetaHandler = (kit: KitItem, uid: string) => Promise<KitsWithThumbs>;
type GetKitsMeta = (res: Response<KitsWithThumbs>, rej: Response<string>, kit: KitItem) => Promise<void>;

export const getKitsMeta = (kitsMetaHandler: KitsMetaHandler, uid: string) => {
  const handler: GetKitsMeta = async (res, rej, kit) => {
    try {
      const data = await kitsMetaHandler(kit, uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching kits meta";
      rej(message);
    }
  };

  return handler;
};

//#endregion

//#region Data
export type KitsDataHandler = (kit: BlockWithThumbs, uid: string) => Promise<Record<string, unknown>>;
type GetKitsData = (
  res: Response<Record<string, unknown>>,
  rej: Response<string>,
  kit: BlockWithThumbs,
) => Promise<void>;

export const getKitsData = (kitsDataHandler: KitsDataHandler, uid: string) => {
  const handler: GetKitsData = async (res, rej, kit) => {
    try {
      const data = await kitsDataHandler(kit, uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching kits data";
      rej(message);
    }
  };

  return handler;
};

//#endregion
