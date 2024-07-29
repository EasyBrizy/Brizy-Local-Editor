---
sidebar_position: 3
---

# Next.js Integration

Integrating Brizy third-party widgets into a Next.js project is done the same way as in Cloud or WordPress: by setting a script URL in `config.extensions`.
To test, use the `demo-nextjs` package from [Brizy Local](https://github.com/EasyBrizy/Brizy-Local-Editor) as an example.

## Steps
1. The first step is to build your addons package or turn on watch mode:
```shell
npm run start
```
By default it will run on `http://localhost:2222/`. <br/>

2. Next, you need to add your server URL, where your build files are stored, to the `demo-nextjs` editor config. <br/>
So, open the `Brizy-Local-Editor/packages/demo-nextjs/src/lib/editorConfig/demoConfig.ts` file and add the `host` URL and `path` to the server where the files will be fetched, within the `demoConfig.extensions` object. <br/>

```ts
export interface Extension {
  host?: string;
  path: string;
}

interface Config {
  // ...other keys
  extensions: Array<Extension>
}
```

Example:
<img  class="brz-img--border" src="/img/next-js-integration-extensions.png" /> <br/><br/>

In the above example, all third-party `.js` and `.css` files in your Next.js project will be fetched from `http://localhost:2222`. <br/>
Examples: `http://localhost:2222/main.js`, `http://localhost:2222/index.css` etc.

3. At this step, it only remains to start the `demo-nextjs` project with the command:
```shell
npm run start
```
Go to `http://localhost:3000/admin/page/home` and check the result. <br/>
Your widgets will be available in the left sidebar when adding elements:
<img  class="brz-img--border" src="/img/next-js-integration-widgets-example.png" /> <br/><br/>
