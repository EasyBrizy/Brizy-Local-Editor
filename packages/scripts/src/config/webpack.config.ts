import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCSSExtractPlugin from "mini-css-extract-plugin";
import * as path from "node:path";
import TerserPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";
import { convertExtension } from "../utils/extenstion";
import { getConfigJsonScriptFields } from "../utils/getConfigJSON";
import { getWebpackEntry } from "../utils/getWebpackEntry";
import Paths from "./paths";

const baseFactory = (env: "production" | "development"): Configuration => {
  const isProduction = env === "production";
  const mode = isProduction ? "production" : "development";

  const cssLoaders = [
    {
      loader: MiniCSSExtractPlugin.loader,
    },
    {
      loader: require.resolve("css-loader"),
      options: {
        importLoaders: 1,
        sourceMap: !isProduction,
        modules: {
          auto: true,
        },
      },
    },
    {
      loader: require.resolve("postcss-loader"),
    },
  ];

  return {
    mode,
    entry: getWebpackEntry(),
    output: {
      filename: "[name].js",
      path: Paths.appBuild,
      // Used relative path to some static files
      // On the widgets we use getMetaData().pluginHost url
      publicPath: "",
      assetModuleFilename: "static/[name].[hash:8][ext]",
    },
    resolve: {
      extensions: [".js", ".json", ".ts", ".tsx", ".css"],
    },
    optimization: {
      concatenateModules: isProduction,
      splitChunks: {
        cacheGroups: {
          default: false,
        },
      },
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              passes: 2,
            },
            output: {
              comments: false,
              ascii_only: true,
            },
          },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.m?(j|t)sx?$/,
          exclude: /node_modules/,
          use: {
            loader: "swc-loader",
            options: {
              sourceMap: !isProduction,
              minify: isProduction,
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
          test: /\.css$/,
          use: cssLoaders,
        },
        {
          test: /\.pcss$/,
          use: cssLoaders,
        },
        {
          test: /\.(sc|sa)ss$/,
          use: [
            ...cssLoaders,
            {
              loader: require.resolve("sass-loader"),
              options: {
                sourceMap: !isProduction,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: require.resolve("@svgr/webpack"),
              options: {
                prettier: false,
                svgo: false,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
                ref: true,
              },
            },
            {
              loader: require.resolve("file-loader"),
              options: {
                name: "static/[name].[hash:8].[ext]",
              },
            },
          ],
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
          },
        },
        {
          test: /\.(bmp|png|jpe?g|gif|webp)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },

    stats: {
      children: false,
    },

    plugins: [
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ["!fonts/**", "!images/**"],
        cleanStaleWebpackAssets: false,
      }),

      new CopyWebpackPlugin({
        patterns: [
          {
            from: "**/config.json",
            context: Paths.appSrc,
            noErrorOnMissing: true,
            transform(content, absoluteFrom) {
              if (path.basename(absoluteFrom) === "config.json") {
                const blockJson = JSON.parse(`${content}`);
                const fields = getConfigJsonScriptFields(blockJson);

                if (fields) {
                  for (const [key, value] of Object.entries(fields)) {
                    if (Array.isArray(value)) {
                      blockJson[key] = value.map(convertExtension);
                    } else if (typeof value === "string") {
                      blockJson[key] = convertExtension(value);
                    }
                  }
                }

                return JSON.stringify(blockJson, null, 2);
              }

              return content;
            },
          },
        ],
      }),

      new MiniCSSExtractPlugin({
        filename: "[name].css",
      }),
    ],
    externals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
  };
};

export default baseFactory;
