import * as fs from "fs";
import Minimist from "minimist";
import * as path from "path";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

const argv_ = Minimist(process.argv.slice(2));
const srcPath = argv_["webpack-src-dir"] || "src";
const buildPath = argv_["webpack-build-dir"] || "build";

const moduleFileExtensions = [
  "web.mjs",
  "mjs",
  "web.js",
  "js",
  "web.ts",
  "ts",
  "web.tsx",
  "tsx",
  "json",
  "web.jsx",
  "jsx",
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn: Function, filePath: string) => {
  const extension = moduleFileExtensions.find((extension) => fs.existsSync(resolveFn(`${filePath}.${extension}`)));

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

export default {
  appBuild: resolveApp(buildPath),
  appIndexJs: resolveModule(resolveApp, `${srcPath}/index`),
  // appPath: resolveApp("."),
  // appPackageJson: resolveApp("package.json"),
  // appSrc: resolveApp("src"),
};
