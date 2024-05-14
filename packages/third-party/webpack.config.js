const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env, argv) {
  const IS_PRODUCTION = argv.mode === "production";
  const MODE = IS_PRODUCTION ? "production" : "development";
  // const WATCH = argv.watch === true;

  const entry = path.resolve(__dirname, "src/index.tsx");
  const outputPath = path.resolve(__dirname, "dist");
  console.log("path:", outputPath);

  return {
    entry,
    output: {
      path: outputPath,
      filename: "index.js",
    },
    mode: MODE,
    resolve: {
      extensions: [".js", ".json", ".ts", ".tsx", ".css"],
    },
    module: {
      rules: [
        {
          test: /\.(ts)x?$/,
          exclude: /(node_modules)/,
          use: {
            loader: "swc-loader",
            options: {
              sourceMap: !IS_PRODUCTION,
              minify: IS_PRODUCTION,
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                  },
                },
              },
            },
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name][ext]",
          },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "index.css",
      }),
    ],
    devServer: {
      static: {
        directory: "./dist",
      },
      port: "5432",
    },
    externals: { react: "React", "react-dom": "ReactDOM" },
  };
};
