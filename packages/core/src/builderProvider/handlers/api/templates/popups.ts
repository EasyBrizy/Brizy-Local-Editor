import { Response } from "@/types/common";
import { DefaultBlockWithID, KitItem, Popup } from "@/types/templates";

//#region Meta
type GetPopupsMeta = (res: Response<Popup>, rej: Response<string>) => Promise<void>;
export type PopupsMetaHandler = (uid: string) => Promise<Popup>;

export const getPopupsMeta = (popupsMetaHandler: PopupsMetaHandler, uid: string) => {
  const handler: GetPopupsMeta = async (res, rej) => {
    try {
      const data = await popupsMetaHandler(uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching popups meta";
      rej(message);
    }
  };

  return handler;
};

//#endregion

//#region Data
type GetPopupsData = (res: Response<DefaultBlockWithID>, rej: Response<string>, kit: KitItem) => Promise<void>;
export type PopupsDataHandler = (kit: KitItem, uid: string) => Promise<DefaultBlockWithID>;

export const getPopupsData = (popupsDataHandler: PopupsDataHandler, uid: string) => {
  const handler: GetPopupsData = async (res, rej, kit) => {
    try {
      const data = await popupsDataHandler(kit, uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching popups data";
      rej(message);
    }
  };

  return handler;
};

//#endregion
