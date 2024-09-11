import { ActionTypes } from "@/actions/types";
import { Choice } from "@/types/common";
import { ActionResolve, Target } from "@/types/types";

export const getCollectionItemsIdsRes = (r: Choice[], uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.getCollectionItemsIdsRes, data: r }),
});

export const getCollectionItemsIdsRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.getCollectionItemsIdsRej, data: r }),
});
