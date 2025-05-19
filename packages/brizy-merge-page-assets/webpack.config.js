const path = require("path");

module.exports = [
  {
    mode: "production",
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.cjs.js",
      libraryTarget: "commonjs2", // Use CommonJS2 module format
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: "swc-loader",
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
  },

  // ESM Build
  {
    mode: "production",
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.esm.js",
      library: {
        type: "module", // Use ESM format
      },
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: "swc-loader",
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    experiments: {
      outputModule: true, // Enable module output for ESM
    },
  },
];
