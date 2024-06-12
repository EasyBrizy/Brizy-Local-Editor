import chalk from "chalk";
import webpack from "webpack";
import WebpackDevServer, { Configuration } from "webpack-dev-server";
import { Args, getArgs } from "../config/getArgs";
import configFactory from "../config/webpack.config";
import { choosePort } from "../utils";

process.env.NODE_ENV = "development";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", (err) => {
  throw err;
});

const PORT = process.env.PORT || "3000";
const DEFAULT_PORT = parseInt(PORT, 10) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

function devServer(_: Args) {
  const config = configFactory("development");
  const compiler = webpack(config);

  return choosePort(HOST, DEFAULT_PORT)
    .then((port: number | null) => {
      if (port == null) {
        console.log(chalk.yellow("We have not found a port."));
        return;
      }

      const serverConfig: Configuration = {
        host: HOST,
        port,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        devMiddleware: {
          writeToDisk: true,
        },
        allowedHosts: "auto",
        webSocketServer: false,
      };
      const devServer = new WebpackDevServer(serverConfig, compiler);

      // Launch WebpackDevServer.
      devServer.startCallback(() => {
        console.log(chalk.cyan("Starting the development server...\n"));
      });

      ["SIGINT", "SIGTERM"].forEach(function (sig) {
        process.on(sig, function () {
          devServer.stop();
          process.exit();
        });
      });

      if (process.env.CI !== "true") {
        // Gracefully exit when stdin ends
        process.stdin.on("end", function () {
          devServer.stop();
          process.exit();
        });
      }
    })
    .catch((err: unknown) => {
      if (err && typeof err === "object" && "message" in err) {
        console.log(err.message);
      }
      process.exit(1);
    });
}

function dev(args: Args) {
  const config = configFactory("development");

  return webpack({ ...config, watch: args.watch }, (_, stats) => {
    if (stats?.hasErrors()) {
      console.log(chalk.red(stats.toString("errors-only")));
    } else {
      console.log(chalk.cyan(stats));
    }
  });
}

function bootstrap() {
  const args = getArgs();

  if (args.server) {
    return devServer(args);
  }

  return dev(args);
}

bootstrap();
