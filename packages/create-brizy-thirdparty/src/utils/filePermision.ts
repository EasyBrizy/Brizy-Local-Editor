import { Compiler } from "webpack";
import path from "path";
import fs from "fs-extra";

type PermissionNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
type ChmodPermission = `${PermissionNumber}${PermissionNumber}${PermissionNumber}`;
interface PermissionProps {
  mode?: ChmodPermission;
}

export class OutputFilePermissionPlugin {
  mode: ChmodPermission;

  constructor({ mode = "755" }: PermissionProps) {
    this.mode = mode;
  }

  apply(compiler: Compiler) {
    compiler.hooks.done.tap("FilePermision", (compiler) => {
      const { outputPath, assetsByChunkName } = compiler.toJson();

      if (!outputPath || !assetsByChunkName) {
        console.log("Webpack FilePermision: Not exist output files");
        return;
      }

      Object.values(assetsByChunkName).forEach((assets) => {
        assets.forEach((asset) => {
          const assetPath = path.resolve(outputPath, asset);
          fs.chmodSync(assetPath, this.mode);
        });
      });
    });
  }
}
