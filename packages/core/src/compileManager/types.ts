import { ScriptsFree, ScriptsPro, StylesFree, StylesPro } from "@/types/common";

export type AssetTypes = StylesFree | StylesPro | ScriptsFree | ScriptsPro;

export type AssetTypesKey = keyof AssetTypes;
