import path = require("path");
import webpack = require("webpack");

// @ts-expect-error: import file
import { OutputFilePermissionPlugin } from "./src/utils/filePermision.ts";

export default function (_: any, argv: any): webpack.Configuration {
  const IS_PRODUCTION = argv.mode === "production";
  const MODE = IS_PRODUCTION ? "production" : "development";
  const watch = argv.watch === true;

  const entry = path.resolve(__dirname, "src/index.ts");
  const outputPath = path.resolve(__dirname, "bin");

  return {
    entry,
    watch,
    output: {
      path: outputPath,
      filename: "index.js",
      clean: true,
    },
    target: "node",
    mode: MODE,
    resolve: {
      extensions: [".js", ".json", ".ts"],
    },
    module: {
      rules: [
        {
          test: /\.(ts)?$/,
          exclude: /(node_modules)/,
          use: {
            loader: "swc-loader",
            options: {
              sourceMap: !IS_PRODUCTION,
              minify: IS_PRODUCTION,
              jsc: {
                parser: {
                  syntax: "typescript",
                },
              },
            },
          },
        },
      ],
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: "#! /usr/bin/env node",
        raw: true,
      }),
      new OutputFilePermissionPlugin({}),
    ],
  };
}
