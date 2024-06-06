import chalk from "chalk";
import { sync as glob } from "fast-glob";
import { readFileSync } from "fs-extra";
import * as path from "path";
import Paths from "../config/paths";
import { getConfigJsonScriptFields } from "./getConfigJSON";
import { isAbsoluteUrl } from "./isAbsoluteUrl";

export function getWebpackEntry() {
  return () => {
    const appSrc = Paths.appSrc;
    const appPath = Paths.appPath;
    const blockMetadataFiles = glob("**/config.json", {
      absolute: true,
      cwd: appSrc,
    });

    if (blockMetadataFiles.length > 0) {
      const entryPoints: Record<string, string> = {};

      for (const blockMetadataFile of blockMetadataFiles) {
        const fileContents = readFileSync(blockMetadataFile);
        let parsedBlockJson;

        try {
          parsedBlockJson = JSON.parse(`${fileContents}`);
        } catch (error) {
          console.log(chalk.red(`Invalid JSON: ${error}`));
          continue;
        }

        const fields = getConfigJsonScriptFields(parsedBlockJson);

        if (!fields) {
          continue;
        }

        for (const value of Object.values(fields).flat()) {
          const v = value;

          if (isAbsoluteUrl(v)) {
            continue;
          }

          const filepath = path.join(path.dirname(blockMetadataFile), v);

          if (!filepath.startsWith(appSrc)) {
            console.log(
              chalk.yellow(
                `Skipping "${v}" listed in "${blockMetadataFile.replace(
                  appPath,
                  "",
                )}". File is located outside of the "${appSrc}" directory.`,
              ),
            );
            return "";
          }

          const entryName = filepath.replace(path.extname(filepath), "").replace(`${appSrc}/`, "").replace(/\\/g, "/");

          const [entryFilepath] = glob(`${entryName}.?(m)[jt]s?(x)`, {
            absolute: true,
            cwd: appSrc,
          });

          if (!entryFilepath) {
            console.log(
              chalk.yellow(
                `Skipping "${v}" listed in "${blockMetadataFile.replace(
                  appPath,
                  "",
                )}". File does not exist in the "${appSrc}" directory.`,
              ),
            );
            return "";
          }
          entryPoints[entryName] = entryFilepath;
        }
      }

      if (Object.keys(entryPoints).length > 0) {
        return entryPoints;
      }
    }

    return Paths.appIndexJs;
  };
}
