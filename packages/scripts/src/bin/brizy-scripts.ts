#!/usr/bin/env node
import * as spawn from "cross-spawn";

process.on("unhandledRejection", (err) => {
  throw err;
});

const args = process.argv.slice(2);
const allowScripts = ["build", "start", "zip"];

const scriptIndex = args.findIndex((x) => x === "build" || x === "start");
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

if (allowScripts.includes(script)) {
  const result = spawn.sync(
    process.execPath,
    nodeArgs.concat(require.resolve("../scripts/" + script)).concat(args.slice(scriptIndex + 1)),
    { stdio: "inherit" },
  );

  if (result.signal) {
    if (result.signal === "SIGKILL") {
      console.log(
        "The build failed because the process exited too early. " +
          "This probably means the system ran out of memory or someone called " +
          "`kill -9` on the process.",
      );
    } else if (result.signal === "SIGTERM") {
      console.log(
        "The build failed because the process exited too early. " +
          "Someone might have called `kill` or `killall`, or the system could " +
          "be shutting down.",
      );
    }
    process.exit(1);
  }

  process.exit(result.status ?? 0);
} else {
  console.log('Unknown script "' + script + '".');
  console.log("Perhaps you need to update brizy-scripts?");
}
