import { Response } from "@/types/common";

export interface HandlerData {
  event: MessageEvent;
  uid: string;
  target: string;
}

export type Handler<T, R, E> = (res: Response<T>, rej: Response<R>, extra?: E) => void;
