---
sidebar_position: 3
---

# Deployments

## CDN version
The CDN version of Brizy Local is hosted on Brizy's servers. Choose this version if you don't want to host the editor. This will let you initialise the editor on your side, but Brizy will host it on its CDN infrastructure.

[![video](/img/deployment.jpg)](https://user-images.githubusercontent.com/10077249/206906576-cc654003-9b6d-4661-88dd-affb63ba538d.mp4)

> For more information on how to use the CDN version of the Editor check the [`packages/core`](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/core/docs/cdn.MD) file.

## Self-hosted version

The Self-hosted version of Brizy Local is hosted by you. Choose this version if you want to host the editor locally on your server.

[![video](/img/deployment.jpg)](https://user-images.githubusercontent.com/10077249/206906566-1d2087fc-847c-4530-8760-9b169dd3ed65.mp4)

> For more information on how to use the Self-hosted version of the Editor check the README [`packages/core`](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/core/docs/self-hosted.MD) or view the demo in [`packages/demo`](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/demo/README.MD)

## Vercel

You can deploy a fresh Brizy Local project, with a Git repository set up for you, with the following Deploy Button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/EasyBrizy/Brizy-Local-Editor&project-name=brizy-local-editor&repository-name=brizy-local-editor&output-directory=packages/demo/public)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Third Party

### Creating an App

```shell
npx @brizy/create-thirdparty
cd < my-app >
npm run build
```

Read more about [Third Party](/docs-third-party/start-coding/requirements).

### Usage
After building the third-party library, you can send it to the editor configuration via HTTP URLs. 
Here's how you can do it:

1. Host the built library files on a server accessible via HTTP.
2. Obtain the HTTP URLs for the built JavaScript files (e.g., `main.js`).
3. In the editor configuration, specify these URLs to load the library:


```typescript
const config = {
  // Other keys of the config...
  
  thirdPartyUrls: [
    {
      scriptUrl: "http://<the-build-host-of-library>/main.js"
    }
  ]
};
```

> For more information about the [`config`](https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/packages/core/docs/cdn.MD#config)

Replace `https://<the-build-host-of-library>/main.js` with the actual HTTP URL of your built library file. 
By adding this URL to the `thirdPartyUrls` array in your editor configuration, the library will be loaded and available for use within the editor environment.
