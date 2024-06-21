import AdmZip from "adm-zip";
import chalk from "chalk";
import { sync as glob } from "fast-glob";
import * as path from "path";
import Paths from "../config/paths";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", (err) => {
  throw err;
});

function zip() {
  const appPackage = require(Paths.appPackageJson);
  const appName = appPackage.name;
  const zipFileName = appName.replace(/\//g, "-");

  return new Promise<void>(async (resolve, reject) => {
    console.log(chalk.cyan(`Creating archive for \`${zipFileName}\`... \n`));

    const zip = new AdmZip();
    const files = glob(["./**"], {
      cwd: Paths.appBuild,
    });

    if (files.length === 0) {
      console.log(chalk.red("Missing build directory or build directory is empty. You must build your app first."));
      return reject();
    }

    files.forEach((file) => {
      console.log(`Adding \`${file}\`.\n`);
      const zipDirectory = path.dirname(file);
      const filePath = path.resolve(Paths.appBuild, file);
      zip.addLocalFile(filePath, zipDirectory !== "." ? zipDirectory : "");
    });

    zip.writeZip(`./${zipFileName}.zip`);
    console.log(chalk.cyan(`Done. \`${zipFileName}.zip\` is ready! 🎉`));
    resolve();
  });
}

function bootstrap() {
  return zip();
}

bootstrap();
