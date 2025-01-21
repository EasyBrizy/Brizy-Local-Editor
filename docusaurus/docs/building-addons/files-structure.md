---
sidebar_position: 2
---
# Files Structure

```shell
├── node_modules/
├── package.json
├── package-lock.json
├── prettier.config.js
├── tsconfig.json
├── README.md
├── .editorconfig
└── src/
    ├── <YOUR_WIDGET>/
    │    └── index.tsx
    └── config.json
    └── index.editor.ts
    └── index.view.ts
```
The `<YOUR_WIDGET>` directory contains all necessary files for your custom-built widget.

## Files explanation

- `index.editor.ts` - houses the component's JavaScript logic executed within the editor environment.
- `index.view.ts` - houses the component's JavaScript logic executed within the preview mode.
- `config.json` - includes information about the created library, such as the title, version, category, and the paths to the JavaScript and CSS build files for both editor and preview modes.


The remaining files are part of the standard Brizy third-party package structure.
