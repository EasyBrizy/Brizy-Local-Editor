import * as fs from "fs";
import * as path from "path";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

const buildPath = process.env.BUILD_PATH || "build";

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
  appIndexJs: resolveModule(resolveApp, "src/index"),
  // appPath: resolveApp("."),
  // appPackageJson: resolveApp("package.json"),
  // appSrc: resolveApp("src"),
};
