import { BaseDCItem, DCPlaceholderObj } from "@/types/dynamicContent";
import { ActionResolve, Target } from "@/types/types";
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

export const dcMakePlaceholderRes = (r: BaseDCItem, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcMakePlaceholderRes, data: r }),
});

export const dcMakePlaceholderRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcMakePlaceholderRej, data: r }),
});

export const dcExplodePlaceholderRes = (r: DCPlaceholderObj, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcExplodePlaceholderRes, data: r }),
});

export const dcExplodePlaceholderRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcExplodePlaceholderRej, data: r }),
});
