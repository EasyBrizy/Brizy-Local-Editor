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
