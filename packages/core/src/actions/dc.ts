import { ActionResolve, BaseDCItem, Target } from "../types/types";
import { ActionTypes } from "./types";

export const dcRichTextRes = (r: BaseDCItem, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcRichTextRes, data: r }),
});

export const dcRichTextRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcRichTextRej, data: r }),
});

export const dcImageRes = (r: BaseDCItem, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcImageRes, data: r }),
});

export const dcImageRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcImageRej, data: r }),
});

export const dcLinkRes = (r: BaseDCItem, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcLinkRes, data: r }),
});

export const dcLinkRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcLinkRej, data: r }),
});
