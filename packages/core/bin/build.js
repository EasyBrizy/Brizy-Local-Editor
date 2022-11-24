const esbuild = require("esbuild");
const path = require("path");
const arguments = process.argv;
const dotenv = require("dotenv");

dotenv.config();

/**
 * @param {string} str
 */
function isValidId(str) {
  try {
    new Function(`var ${str};`);
  } catch (err) {
    return false;
  }
  return true;
}

/*
 * Create a map of replacements for environment variables.
 * @return A map of variables.
 */
function defineProcessEnv() {
  /**
   * @type {{ [key: string]: string }}
   */
  const definitions = {};
  definitions["process.env.NODE_ENV"] = JSON.stringify(process.env.NODE_ENV || "development");
  Object.keys(process.env).forEach((key) => {
    if (isValidId(key)) {
      definitions[`process.env.${key}`] = JSON.stringify(process.env[key]);
    }
  });
  definitions["process.env"] = "{}";

  return definitions;
}

function defineImportEnv() {
  const definitions = {};
  Object.keys(process.env).forEach((key) => {
    if (isValidId(key)) {
      definitions[`import.meta.env.${key}`] = JSON.stringify(process.env[key]);
    }
  });
  definitions["import.meta.env"] = "{}";

  return definitions;
}

/**
 * Pass environment variables to esbuild.
 * @return An esbuild plugin.
 */
function env(options) {
  return {
    name: "env",
    setup(build) {
      const { platform, define = {} } = build.initialOptions;

      if (platform === "node") {
        return;
      }
      build.initialOptions.define = define;
      if (options?.import) {
        Object.assign(build.initialOptions.define, defineImportEnv());
      }
      if (options?.process) {
        Object.assign(build.initialOptions.define, defineProcessEnv());
      }
    },
  };
}

const IS_PRODUCTION = process.env.NODE_ENV === "production";

esbuild
  .build({
    entryPoints: [path.resolve(__dirname, "../src/index.ts")],
    outfile: path.resolve(__dirname, "../public/index.js"),
    bundle: true,
    loader: { ".ts": "ts" },
    watch: arguments.includes("--watch"),
    minify: IS_PRODUCTION,
    sourcemap: !IS_PRODUCTION,
    plugins: [env({ import: true })],
  })
  .then(() => console.log("⚡ Done"))
  .catch(() => process.exit(1));
