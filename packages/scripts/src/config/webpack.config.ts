import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCSSExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";
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
    entry: Paths.appIndexJs,
    output: {
      filename: "[name].js",
      path: Paths.appBuild,
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
          },
          extractComments: false,
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
                name: "media/[name].[hash:8].[ext]",
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
          generator: {
            filename: "media/[name].[hash:8].[ext]",
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "media/[name].[hash:8].[ext]",
          },
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
      new MiniCSSExtractPlugin({
        filename: "index.css",
      }),
    ],
    externals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
  };
};

export default baseFactory;
