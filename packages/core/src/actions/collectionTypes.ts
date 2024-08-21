import { ActionTypes } from "@/actions/types";
import { Choice } from "@/types/common";
import { ActionResolve, Target } from "@/types/types";

export const loadCollectionRes = (r: Choice[], uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.loadCollectionTypesRes, data: r }),
});

export const loadCollectionRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.loadCollectionTypesRej, data: r }),
});
