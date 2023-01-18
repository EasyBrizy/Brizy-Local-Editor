import { ActionResolve, DynamicContentOption, Target } from "../types/types";
import { ActionTypes } from "./types";

export const dcRichTextRes = (r: DynamicContentOption): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcRichTextRes, data: r }),
});

export const dcRichTextRej = (r: string): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.dcRichTextRej, data: r }),
});
