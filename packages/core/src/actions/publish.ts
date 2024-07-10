import { PublishData } from "@/types/publish";
import { ActionResolve, HtmlOutputType, Target } from "@/types/types";
import { ActionTypes } from "./types";

export const publishRes = (r: PublishData<HtmlOutputType>, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.uiPublishRes, data: r }),
});

export const publishRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.uiPublishRej, data: r }),
});
