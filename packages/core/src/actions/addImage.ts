import { ActionResolve, AddMediaData, Target } from "../types/types";
import { ActionTypes } from "./types";

export const addMediaRes = (r: AddMediaData, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.addMediaRes, data: r }),
});

export const addMediaRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.addMediaRej, data: r }),
});
