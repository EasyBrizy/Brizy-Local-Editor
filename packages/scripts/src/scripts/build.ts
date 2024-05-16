import bfj from "bfj";
import chalk from "chalk";
import fs from "fs-extra";
import webpack from "webpack";
import paths from "../config/paths";
import configFactory from "../config/webpack.config";
import { formatWebpackMessages } from "../utils";

process.env.NODE_ENV = "production";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", (err) => {
  throw err;
});

function build() {
  // Generate configuration
  const config = configFactory("production");
  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages;
      if (err) {
        if (!err.message) {
          return reject(err);
        }

        let errMessage = err.message;

        // Add additional information for postcss errors
        if (Object.prototype.hasOwnProperty.call(err, "postcssNode")) {
          //@ts-expect-error: PostCss plugin
          errMessage += "\nCompileError: Begins at CSS selector " + err["postcssNode"].selector;
        }

        messages = formatWebpackMessages({
          errors: [errMessage],
          warnings: [],
        });
      } else {
        messages = formatWebpackMessages(stats?.toJson({ all: false, warnings: true, errors: true }));
      }
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join("\n\n")));
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== "string" || process.env.CI.toLowerCase() !== "false") &&
        messages.warnings.length
      ) {
        const filteredWarnings = messages.warnings.filter((w) => !/Failed to parse source map/.test(w));
        if (filteredWarnings.length) {
          console.log(
            chalk.yellow(
              "\nTreating warnings as errors because process.env.CI = true.\n" +
                "Most CI servers set it automatically.\n",
            ),
          );
          return reject(new Error(filteredWarnings.join("\n\n")));
        }
      }

      const resolveArgs = {
        stats,
        warnings: messages.warnings,
      };

      return resolve(resolveArgs);
    });
  });
}

function bootstrap() {
  // Remove all content but keep the directory so that
  // if you're in it, you don't end up in Trash
  fs.emptyDirSync(paths.appBuild);

  // Build code base
  return build();
}

bootstrap();
