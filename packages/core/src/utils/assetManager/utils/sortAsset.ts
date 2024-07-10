import { Asset } from "@/types/common";

export const sortAsset = (a: Asset, b: Asset): number => a.score - b.score;
