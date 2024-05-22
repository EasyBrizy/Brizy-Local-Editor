import { input } from "@inquirer/prompts";
import { getAppFolderPath, copyTemplate, validateNpmName, getCMD, fireCommand, printInstruction } from "./utils";

(async () => {
  try {
    const appName = await input({
      message: "enter package name new",
      default: "brizy-local-starter",
      validate: (v) => {
        const validate = validateNpmName(v);
        return validate.valid ? true : validate.problems.toString();
      },
    });

    await createApp({ appName });
  } catch (e) {
    const message = e instanceof Error ? e.message : e;
    console.log("Abort: ", message);
  }
})();

async function createApp({ appName }: { appName: string }) {
  let appPath = await getAppFolderPath({ appName });
  const CMD = getCMD({ appPath });

  copyTemplate({ appPath, appName });
  fireCommand(CMD.INSTALL_DEPENDENCY);
  printInstruction({ appName });
}
