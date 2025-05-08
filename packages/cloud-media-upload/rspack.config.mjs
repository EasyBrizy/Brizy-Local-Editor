export default function(env, argv) {
  const isProduction = process.env.NODE_ENV === "production";
  console.log("Procces env: ", process.env.NODE_ENV);

  console.log("isProduction", isProduction);
  return {
    entry: "./src/index.ts",
    devtool: isProduction ? "source-map" : "eval",
    output: {
      filename: "index.js", //"[name].bundle.js"
      library: {
        type: "module",
      },
    },
    experiments: {
      outputModule: true,
      css:true
    },
    module: {
      rules: [
        {
          test: /\.(ts)x?$/,
          exclude: [/node_modules/],
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
              },
            },
          },
          type: "javascript/auto",
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/svg/[hash][ext][query]'
            // filename: 'assets/[name][ext]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/fonts/[name][ext]"
          }
        },

        // {
        //   test: /\.(png|jpe?g|svg)$/,
        //   loader: "file-loader",
        //   include: /static\/images/,
        //   options: {
        //     name: "assets/[name].[ext]"
        //   }
        // }
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    optimization: {
      minimize: isProduction,
    },
    devServer: {
      devMiddleware:{
        writeToDisk:true
      }
    },
    externals:{
      react: 'react',
      "ReactDOM": "react-dom",
    }
  };
}
