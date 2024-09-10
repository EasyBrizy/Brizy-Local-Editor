import { ActionTypes } from "@/actions/types";
import { Choice } from "@/types/common";
import { ActionResolve, Target } from "@/types/types";

export const getCollectionItemsRes = (r: Choice[], uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.getCollectionItemsRes, data: r }),
});

export const getCollectionItemsRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.getCollectionItemsRej, data: r }),
});
