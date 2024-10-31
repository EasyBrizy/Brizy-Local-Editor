---
sidebar_position: 3
---

# Deployments

## CDN version

The CDN version of Brizy is hosted on Brizy's servers. Choose this version if you don't want to host the editor. This
will let you initialise the editor on your side, but Brizy will host it on its CDN infrastructure.

[![video](/img/deployment.jpg)](https://user-images.githubusercontent.com/10077249/206906576-cc654003-9b6d-4661-88dd-affb63ba538d.mp4)

> For more information on how to use the CDN version of the Editor check the [
`packages/core`](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/core/docs/cdn.MD) file.

## Self-hosted version

The Self-hosted version of Brizy is hosted by you. Choose this version if you want to host the editor locally on your
server.

[![video](/img/deployment.jpg)](https://user-images.githubusercontent.com/10077249/206906566-1d2087fc-847c-4530-8760-9b169dd3ed65.mp4)

> For more information on how to use the Self-hosted version of the Editor check the README [
`packages/core`](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/core/docs/self-hosted.MD) or view the
> demo in [`packages/demo`](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/demo/README.MD)

## Vercel

You can deploy a fresh Brizy project, with a Git repository set up for you, with the following Deploy Button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/EasyBrizy/Brizy-Local-Editor&project-name=brizy-local-editor&repository-name=brizy-local-editor&output-directory=packages/demo/public)

## Third Party

### Creating an App

```shell
npx @brizy/create-thirdparty
cd < my-app >
npm run build
```

Read more about [Third Party](/docs-third-party/brizy-widgets/introduction).

### Usage

After building the third-party library, you can send it to the editor configuration via HTTP URLs.
Here's how you can do it:

1. Host the built library files on a server accessible via HTTP.
2. Get the `host` URL and the `path` folder where the config.json file is located.
3. Add the `extensions` key to the editor configuration with the following structure:

```typescript
const config = {
  // Other config keys...

  extensions: [
    {
      host: "http://<your-library-build-host>",
      path: "<path-to-config-folder>",
    },
  ],
};
```

#### Example:
If `config.json` is located at http://localhost:3000/widgets/config.json, the configuration will look like this:

```typescript
const config = {
  // Other config keys...

  extensions: [
    {
      host: "http://localhost:3000",
      path: "/widgets",
    },
  ],
};
```

The `config.json` file should follow this structure:
```json
{
  "name": "My Library",
  "editorScripts": [
    // List of scripts for the editor
  ],
  "editorStyles": [
    // List of styles for the editor
  ],
  "viewScripts": [
    // List of scripts for the view
  ],
  "viewStyles": [
    // List of styles for the view
  ]
}
```

> For more information about the [`config`](https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/packages/core/docs/cdn.MD#config)
