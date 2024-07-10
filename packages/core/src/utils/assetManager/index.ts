import { Asset } from "@/types/common";
import { Err } from "@brizy/readers";
import { Assets, PageAssetEntry, ProjectAssetEntry, Styles } from "./types";
import { getAssetBySelector } from "./utils/getAssetBySelector";
import { makeScripts } from "./utils/makeScripts";
import { makeStyles } from "./utils/makeStyles";
import { sortAsset } from "./utils/sortAsset";

export const getPageAssets = (data: PageAssetEntry): Assets => {
  const { freeStyles, freeScripts, proStyles, proScripts } = data;
  const freeStylesLib = getAssetBySelector(freeStyles.libsMap, freeStyles.libsSelectors);
  const freeScriptsLib = getAssetBySelector(freeScripts.libsMap, freeScripts.libsSelectors);
  const allStylesFree: Array<Asset> = [
    ...freeStyles.generic,
    ...freeStyles.pageFonts,
    ...freeStyles.pageStyles,
    ...(freeStylesLib ? [freeStylesLib] : []),
  ];
  const allScriptsFree: Array<Asset> = [...freeScripts.generic, ...(freeScriptsLib ? [freeScriptsLib] : [])];
  let allScriptsPro: Array<Asset> = [];
  let allStylesPro: Array<Asset> = [];

  if (proScripts) {
    const libs = getAssetBySelector(proScripts.libsMap, proScripts.libsSelectors);
    allScriptsPro = [...proScripts.generic, ...(libs ? [libs] : []), proScripts.main];
  } else {
    allScriptsFree.push(freeScripts.main);
  }

  if (proStyles) {
    const libs = getAssetBySelector(proStyles.libsMap, proStyles.libsSelectors);
    allStylesPro = [...proStyles.generic, ...(libs ? [libs] : []), proStyles.main];
  } else {
    allStylesFree.push(freeStyles.main);
  }

  const styles = [...allStylesFree, ...allStylesPro].sort(sortAsset).map(makeStyles).flat().filter(Err.isT);
  const scripts = [...allScriptsFree, ...allScriptsPro].sort(sortAsset).map(makeScripts).flat().filter(Err.isT);

  return { styles, scripts };
};

export const getProjectAssets = (data: ProjectAssetEntry): Array<Styles> => {
  const { styles } = data;
  return styles.map(makeStyles).flat().filter(Err.isT);
};
