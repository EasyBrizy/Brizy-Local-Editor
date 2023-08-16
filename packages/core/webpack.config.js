const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

dotenv.config();

module.exports = (env) => {
  const PUBLIC_HOST = env.PUBLIC_HOST ?? process.env.PUBLIC_HOST;
  const IS_PRODUCTION = process.env.NODE_ENV === "production";

  return {
    entry: {
      builder: path.resolve(__dirname, "src/builderProvider/index.ts"),
      index: path.resolve(__dirname, "src/index.ts"),
    },
    output: {
      path: path.resolve(__dirname, "build"),
    },
    resolve: {
      extensions: [".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    mode: IS_PRODUCTION ? "production" : "development",
    module: {
      rules: [
        {
          test: /\.(ts|js)?$/,
          loader: "swc-loader",
          exclude: "/node_modules/",
          options: {
            module: {
              type: "commonjs",
            },
            sourceMap: !IS_PRODUCTION,
            minify: IS_PRODUCTION,
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: false,
              },
            },
          },
        },
      ],
    },
    devtool: IS_PRODUCTION ? false : "eval-cheap-module-source-map",
    plugins: [
      new webpack.DefinePlugin({
        PUBLIC_HOST: JSON.stringify(PUBLIC_HOST),
        "process.env.NODE_ENV": JSON.stringify(IS_PRODUCTION ? "production" : "development"),
      }),
      new HtmlWebpackPlugin({
        minify: IS_PRODUCTION,
        template: "public/index.html",
        filename: "index.html",
        templateParameters: {
          host: PUBLIC_HOST,
        },
      }),
      new CopyPlugin({
        patterns: [
          {
            // Terser skip this file for minimization
            info: { minimized: true },
            from: path.resolve(__dirname, "public/dist"),
            to: path.resolve(__dirname, "build/dist"),
          },
        ],
        options: {
          concurrency: 100,
        },
      }),
    ],
  };
};
