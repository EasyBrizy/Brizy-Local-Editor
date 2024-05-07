### Prerequisites
1. Code Editor
2. Node.js development tools
3. Brizy local editor environment

### Basics

### Installation
You can install the library using npm. Open your terminal and run the following command:

```shell
npm install esbuild esbuild-plugin-alias-path minimist --save-dev
npm install @brizy/core --save
```

### Building the Library
Build library using `esbuild`
It's important to note that the React and React-DOM libraries must be used externally. 
When the component will be rendered inside the editor, React is exported globally.

Example `esbuild.config.js`

```js
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
  entryPoints: ["src/index.ts"],
  bundle: true,
  loader: { ".ts": "tsx" },
  jsx: "automatic",
  minify: minify,
  sourcemap: IS_PRODUCTION ? false : "inline",
  outdir: "build",
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
    console.log("[LOGS]: ⚾ Watching for changes...");
    let ctx = await esbuild.context(config);

    await ctx.watch();
  } else {
    console.log("[LOGS]: ⚡ ThirdParty Done");
  }
});
```

### Usage
After building the third-party library using esbuild, you can send it to the editor configuration via HTTP URLs. 
Here's how you can do it:

1. Host the built library files on a server accessible via HTTP.
2. Obtain the HTTP URLs for the built JavaScript files (e.g., `library.js`).
3. In the editor configuration, specify these URLs to load the library:

```typescript
const config = {
  // Other keys of the config...
  
  thirdPartyUrls: [
    {
      scriptUrl: "http://<the-build-host-of-library>/library.js"
    }
  ]
};
```

Replace `"http://<the-build-host-of-library>/library.js"` with the actual HTTP URL of your built library file. 
By adding this URL to the `thirdPartyUrls` array in your editor configuration, the library will be loaded and available for use within the editor environment.

To view the new component, follow these steps:

1. Go to the Left Sidebar of the editor.
2. Look for the "Add Elements" section.
3. Click on "Add Elements" to expand the section.
4. You should see a list of available elements or components.
5. Look for the newly added component within this list.
![image](https://github.com/EasyBrizy/Brizy-Local-Editor/assets/18303258/eb021ebd-7a61-44f7-aa3c-ddf6f1d60b18)

#### Example

```tsx
import { Brizy } from "@brizy/core";
import React from "react";

interface Props {}

export function Button(props: Props): JSX.Element {
  return <div className="componentToolbar">Button</div>;
}

Brizy.registerComponent(Button, {
  id: "ThirdParty.Button",
  title: "My Button",
});
```
