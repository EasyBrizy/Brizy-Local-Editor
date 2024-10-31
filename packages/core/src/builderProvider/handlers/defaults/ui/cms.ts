import { Handler } from "@/builderProvider/types/type";
import * as Comlink from "comlink";

//#region openCMS
export type OpenCMSHandler = (cb: VoidFunction, uid: string) => Promise<void>;

export const getOpenCMS = (openCMSHandler: OpenCMSHandler, uid: string) => {
  const handler: Handler<void, string, string> = async (cb: VoidFunction) => {
    try {
      const onClose = Comlink.proxy(cb);
      await openCMSHandler(onClose, uid);
    } catch (e) {
      console.error("Error in OpenCMSHandler", e);
    }
  };

  return handler;
};

//#endregion
