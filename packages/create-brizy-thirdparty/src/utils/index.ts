import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "fs-extra";
import chalk from "chalk";
import { confirm } from "@inquirer/prompts";

export { validateNpmName } from "./validate-pkg.js";

export function fireCommand(command: string) {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
}

const devDependencies = ["@brizy/scripts", "typescript", "@types/react", "prettier"].join(" ");
const dependencies = ["@brizy/core"].join(" ");

export function getCMD({ appPath }: { appPath: string }) {
  return {
    // Others bash CMD if need, ex:
    // REPO_CLONE_CMD: `git clone ${BRIZY_LOCAL_GIT_URL} ${repoName}`,
    // GENERATE_PACKAGE_JSON: "echo generate...",
    INSTALL_DEPENDENCY: `cd ${appPath} && npm i ${dependencies} && npm i -D ${devDependencies}`,
  };
}

export function copyTemplate({ appPath, appName }: { appPath: string; appName: string }) {
  const __dirname = fileURLToPath(import.meta.url);
  const templatesPath = path.resolve(path.dirname(__dirname), "../../templates");
  fs.copySync(templatesPath, appPath);

  // #region Update packageJson name
  const packageJsonPath = `${appPath}/package.json`;
  const packageJson = fs.readJSONSync(packageJsonPath);
  packageJson.name = appName;
  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
  // #endregion
}

export async function getAppFolderPath({ appName }: { appName: string }) {
  const cwd = process.cwd();

  let appPath = path.resolve(cwd, appName);

  if (!fs.pathExistsSync(appPath)) {
    fs.ensureDirSync(appPath);
  } else {
    await confirm({
      message: `${chalk.red("Warn!")} Folder ${chalk.cyan(appName)} already exist !\n Would you like to clear the folder?`,
      default: false,
    }).then((canClear) => {
      if (canClear) {
        fs.emptyDirSync(appPath);
      } else {
        throw new Error("Your Folder isn't Empty! App installation must be done in empty folder");
      }
    });
  }
  return appPath;
}

export function printInstruction({ appName }: { appName: string }) {
  const message = `
  Run in project folder by running ${chalk.green(`cd ${appName}`)}
  -> To build project run follow command: ${chalk.green("npm run build")}
  -> To start project run follow command: ${chalk.green("npm run start")}
  `;

  console.log(message);
}
