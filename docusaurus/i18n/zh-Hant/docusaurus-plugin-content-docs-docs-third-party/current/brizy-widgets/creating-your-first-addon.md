---
sidebar_position: 3
---

# 創建你的第一個附加元件

讓我們創建一個簡單的 Brizy 第三方附加元件，引入兩個新小部件到 Brizy 中。第一個是基本的 **Button** 小部件，第二個是一個更複雜的小部件，其中包含在工具欄中的選項。

### 安裝

你可以使用 npm 安裝這個庫。打開你的終端機並運行以下命令：

```shell
npx @brizy/create-thirdparty
cd < my-app >
```

上述命令將生成以下文件夾結構：

```shell
# 第三方文件夾的根目錄

├── README.md
├── node_modules
├── package-lock.json
├── package.json
└── src
    ├── Map
    │   └── index.tsx
    └── index.ts
```

要開始構建，請在終端機中運行以下命令：

```shell
npm run build
```

> 有關可用腳本的更多信息，請查看 [`README`](https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/packages/scripts/Readme.md)。

### 使用

構建完第三方庫後，你可以通過 HTTP URL 將其發送到編輯器配置中。以下是如何操作：

1. 將構建的庫文件托管在可通過 HTTP 訪問的伺服器上。
2. 獲取構建的 JavaScript 文件的 HTTP URL（例如 `main.js`）。
3. 在編輯器配置中，指定這些 URL 以加載庫：

```typescript
const config = {
  // 配置的其他鍵值...

  thirdPartyUrls: [
    {
      scriptUrl: "https://<library-build-host>/main.js",
    },
  ],
};
```

> 有關編輯器配置的更多信息，請查看 [`README`](https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/packages/core/docs/self-hosted.MD#config)。

將 `"http://<library-build-host>/main.js"` 替換為你構建的庫文件的實際 HTTP URL。通過將此 URL 添加到編輯器配置中的 `thirdPartyUrls` 陣列中，庫將被加載並可在編輯器環境中使用。

要查看新的元件，請按照以下步驟操作：

1. 轉到編輯器的左側邊欄。
2. 查找“添加元件”部分。
3. 點擊“添加元件”以展開該部分。
4. 你應該會看到可用的元件或組件列表。
5. 在這個列表中查找新添加的元件。
   ![image](https://github.com/EasyBrizy/Brizy-Local-Editor/assets/18303258/eb021ebd-7a61-44f7-aa3c-ddf6f1d60b18)

### 示例

```tsx
import { Brizy } from "@brizy/core";
import React from "react";

export function Button(): JSX.Element {
  return <div className="button">這個按鈕會在編輯器中渲染</div>;
}

export function Button(): JSX.Element {
  return <div className="button">這個按鈕會在視圖中渲染</div>;
}

Brizy.registerComponent({
  id: "ThirdParty.Button",
  component: {
    editor: Button,
    view: Button,
  },
  title: "我的按鈕",
});
```

### 建構器中的選項類型

在創建自定義元件時，你可以選擇包含各種工具欄選項以進一步自定義。

#### 示例：

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
    view: Map,
  },
  title: "我的地圖",
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
              title: "地圖",
            },
            devices: "desktop",
            options: [
              {
                id: "tabsCurrentElement",
                type: "tabs",
                tabs: [
                  {
                    id: "tabCurrentElement",
                    label: "地圖",
                    options: [
                      {
                        id: "address",
                        label: "地址",
                        type: "inputText",
                        placeholder: "輸入地址",
                        default: {
                          value: "基希納烏",
                        },
                      },
                      {
                        id: "zoom",
                        label: "縮放",
                        type: "slider",
                        config: {
                          min: 1,
                          max: 21,
                        },
                        default: {
                          value: 9,
                          suffix: "英寸",
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

你現在已經體驗了創建你的第一個 Brizy 附加元件的簡單性。
