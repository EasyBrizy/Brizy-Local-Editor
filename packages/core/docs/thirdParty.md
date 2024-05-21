### Prerequisites
1. Code Editor
2. Node.js development tools
3. Brizy local editor environment

### Basics

### Installation
You can install the library using npm. Open your terminal and run the following command:

```shell
npx @brizy/create-thirdparty
cd < my-app >
npm run build
```

### Scripts

#### `npm start`
Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

#### `npm run build`
Builds the app for production to the build folder.
Your app is ready to be deployed.

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
      scriptUrl: "https://<the-build-host-of-library>/main.js"
    }
  ]
};
```

Replace `"http://<the-build-host-of-library>/main.js"` with the actual HTTP URL of your built library file. 
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
