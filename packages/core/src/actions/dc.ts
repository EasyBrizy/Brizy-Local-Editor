import { BaseDCItem, ConfigDCItem } from "@/types/dynamicContent";
import { ActionResolve, Target } from "@/types/types";
import { Dictionary } from "@/utils/types";
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

export const dcPlaceholderRes = (r: Dictionary<string>, uid: string) => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcPlaceholderDataRes, data: r }),
});

export const dcPlaceholderRej = (r: string, uid: string) => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcPlaceholderDataRej, data: r }),
});

export const dcHandlerRes = (r: ConfigDCItem[], uid: string) => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcHandlerRes, data: r }),
});

export const dcHandlerRej = (r: string, uid: string) => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcHandlerRej, data: r }),
});
