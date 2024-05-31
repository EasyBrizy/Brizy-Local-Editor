---
sidebar_position: 3
---

# Creating Your First Addon

Let's create a simple Brizy third-party addon that introduces two new widgets to Brizy. 
The first will be a basic **Button** widget, and the second will be a more complex widget 
with options contained within the toolbar.

### Installation
You can install the library using npm. Open your terminal and run the following command:

```shell
npx @brizy/create-thirdparty
cd < my-app >
```

The previous command will generate the following folder structure:
```shell
# root directory of your thirdparty folder

├── README.md
├── node_modules
├── package-lock.json
├── package.json
└── src
    ├── Map
    │   └── index.tsx
    └── index.ts
```

To start the build, run the following command in your terminal:
```shell
npm run build
```

> For more information about the available scripts, check the [`README`](https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/packages/scripts/Readme.md).

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

> For more information about the config of the Editor, check the [`README`](https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/packages/core/docs/self-hosted.MD#config).

Replace `"http://<the-build-host-of-library>/main.js"` with the actual HTTP URL of your built library file. 
By adding this URL to the `thirdPartyUrls` array in your editor configuration, the library will be loaded and available for use within the editor environment.

To view the new component, follow these steps:

1. Go to the Left Sidebar of the editor.
2. Look for the "Add Elements" section.
3. Click on "Add Elements" to expand the section.
4. You should see a list of available elements or components.
5. Look for the newly added component within this list.
![image](https://github.com/EasyBrizy/Brizy-Local-Editor/assets/18303258/eb021ebd-7a61-44f7-aa3c-ddf6f1d60b18)

### Example

```tsx
import { Brizy } from "@brizy/core";
import React from "react";

export function Button(): JSX.Element {
  return <div className="button">This button will be render in editor</div>;
}

export function Button(): JSX.Element {
  return <div className="button">This button will be render in View</div>;
}

Brizy.registerComponent({
  id: "ThirdParty.Button",
  component:{
    editor:Button,
    view:Button
  },
  title: "My Button",
});
```

### Options types in Builder
When creating custom components, you have the option to include various toolbar options for further customization.


#### Example:

```tsx
import { Brizy } from "@brizy/core";
import React from "react";

interface Props {
  address: string;
  zoom: number;
}

const URL = "https://www.google.com/maps/embed/v1/place";
const KEY = "AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw";

export function Map(props: Props): JSX.Element {
  const { address, zoom } = props;
  const iframeSrc = `${URL}?key=${KEY}&q=${address}&zoom=${zoom}`;

  return (
    <div className="mapThirdComponent" style={{ pointerEvents: "none" }}>
      <iframe src={iframeSrc} title="Map" />
    </div>
  );
}

Brizy.registerComponent({
  id: "ThirdParty.Map",
  component: {
    editor: Map,
    view: Map
  },
  title: "My Map",
  options: (props) => {
    return [
      {
        selector: ".mapThirdComponent",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-pin",
              title: "Map",
            },
            devices: "desktop",
            options: [
              {
                id: "tabsCurrentElement",
                type: "tabs",
                tabs: [
                  {
                    id: "tabCurrentElement",
                    label: "Map",
                    options: [
                      {
                        id: "address",
                        label: "Address",
                        type: "inputText",
                        placeholder: "Enter address",
                        default: {
                          value: "Chisinau",
                        },
                      },
                      {
                        id: "zoom",
                        label: "Zoom",
                        type: "slider",
                        config: {
                          min: 1,
                          max: 21,
                        },
                        default: {
                          value: 9,
                          suffix: "inch",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  },
});
```

You've now experienced the simplicity of creating your first Brizy addon.
