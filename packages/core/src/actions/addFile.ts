import { AddFileData } from "@/types/customFile";
import { ActionResolve, Target } from "@/types/types";
import { ActionTypes } from "./types";

export const addFileRes = (r: AddFileData, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.addFileRes, data: r }),
});

export const addFileRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.addFileRej, data: r }),
});
