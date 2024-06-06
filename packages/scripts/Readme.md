# Scripts

## Introduction

Welcome to Brizy Scripts! This project leverages `brizy-scripts` to streamline the build and development processes. It provides an efficient way to manage your project's assets and configurations.

## Installation

```shell
npm install @brizy/scripts --save-dev
```
> Note: This package requires Node.js 18 or later, and npm 8 or later. It is not compatible with older versions.

## Scripts

### `build`

Builds the project for production to the `build` folder. It optimizes the build for the best performance.

### `start`

Starts the development server. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Start Options
- `--no-watch`: Starts the build for development without starting the watcher.
- `--no-server`: Starts the build for development without starting the server.
 
### Common Options
- `--webpack-build-dir`: Allows customization of the build code directory. Default is `build`.
- `--webpack-src-dir`: Allows customization of the source code directory. Default is `src`.

## Configuration
The project is configured using a JSON file, which should be placed in the `src` folder. 
Below is the required configuration:

```json
{
  "name": "Brizy.ThirdParty",
  "title": "Notice",
  "version": "1.0.3",
  "category": "cat",
  "keywords": [
    "third party"
  ],
  "editorScripts": [
    "index.editor.ts"
  ],
  "viewScripts": [
    "index.view.ts"
  ],
  "editorStyles": [
    "index.editor.css"
  ],
  "viewStyles": [
    "index.view.css"
  ]
}
```

#### Fields Description
- name: The unique identifier for your project. In this case, it is Brizy.ThirdParty.
- title: A human-readable title for your project. Here, it is set to Notice.
- version: The version of your project. Follows semantic versioning, currently 1.0.3.
- category: The category under which your project falls. This is set to cat.
- keywords: An array of keywords to help identify and categorize your project. Here, it includes third party.
- editorScripts: An array of paths to the scripts to be used in the Brizy editor. It includes file:./index.editor.ts.
- viewScripts: An array of paths to the scripts to be used in the Brizy viewer. It includes file:./index.view.ts.
- editorStyles: An array of paths to the styles to be used in the Brizy editor. It includes file:./index.editor.css.
- viewStyles: An array of paths to the styles to be used in the Brizy viewer. It includes file:./index.view.css.
