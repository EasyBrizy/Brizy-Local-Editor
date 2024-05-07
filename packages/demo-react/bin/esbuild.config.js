const esbuild = require("esbuild");
const Minimist = require("minimist");
const { aliasPath } = require("esbuild-plugin-alias-path");

const argv_ = Minimist(process.argv.slice(2));
const IS_PRODUCTION = Boolean(argv_.production);
const WATCH = Boolean(argv_.watch);
const minify = Boolean(argv_.minify);

const skipReactImports = {
  name: "skipReactImports",
  setup(build) {
    build.onResolve({ filter: /^react(-dom)?$/ }, (args) => {
      return {
        path: args.path,
        namespace: `globalExternal_${args.path}`,
      };
    });

    build.onLoad({ filter: /.*/, namespace: "globalExternal_react" }, () => {
      return {
        contents: `module.exports = globalThis.React`,
        loader: "jsx",
      };
    });

    build.onLoad({ filter: /.*/, namespace: "globalExternal_react-dom" }, () => {
      return {
        contents: `module.exports = globalThis.ReactDOM`,
        loader: "jsx",
      };
    });
  },
};

const config = {
  entryPoints: ["src/thirdParty/index.ts"],
  bundle: true,
  loader: { ".ts": "tsx" },
  jsx: "automatic",
  minify: minify,
  sourcemap: IS_PRODUCTION ? false : "inline",
  outdir: "public/thirdParty",
  plugins: [
    skipReactImports,
    aliasPath({
      alias: {
        "react/jsx-dev-runtime": require.resolve("react/jsx-dev-runtime"),
        "react/jsx-runtime": require.resolve("react/jsx-runtime"),
      },
    }),
  ],
  external: ["react", "react-dom"],
  define: {
    TARGET: JSON.stringify("browser"),
  },
};

esbuild.build(config).then(async () => {
  if (WATCH) {
    console.log("[LOGS]: ⚾ ThirdParty watching for changes...");
    let ctx = await esbuild.context(config);

    await ctx.watch();
  } else {
    console.log("[LOGS]: ⚡ ThirdParty Done");
  }
});
