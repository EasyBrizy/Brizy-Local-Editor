import type { Response } from "@/types/common";
import type { HtmlOutputType } from "@/types/types";

export interface HandlerData {
  event: MessageEvent;
  uid: string;
  target: string;
}
export interface PublishHandlerData extends HandlerData {
  assetsType: HtmlOutputType;
}

export type Handler<T, R, E> = (res: Response<T>, rej: Response<R>, extra?: E) => void;
