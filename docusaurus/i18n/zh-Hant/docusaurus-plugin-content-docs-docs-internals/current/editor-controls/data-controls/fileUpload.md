---
toc_max_heading_level: 4
---

# 文件上傳

`fileUpload` 控件顯示一個文件選擇區域，允許使用者從其設備存儲中選擇一個或多個文件。

未選擇文件時的 `fileUpload` 範例：

![未選擇文件的 FileUpload](/img/controls/fileupload-without-file.png)

選擇文件後的 `fileUpload` 範例：

![選擇文件的 FileUpload](/img/controls/fileupload-with-file.png)

### 參數

| 名稱   | 類型     |    預設值    | 描述    |
| :------- | :--- | :-: | :----- |
| `id`                        | `string`                                                                                                                                                                                   |      -       | 控件將儲存數據的鍵值標識符                                                                                                                                                                                                                                                                                                                |
| `type`                      | `string`                                                                                                                                                                                   |      -       | 類型應設為 `"fileUpload"` 以使用此控件                                                                                                                                                                                                                                                                                                    |
| `label?`                    | `string`                                                                                                                                                                                   |      -       | 顯示在控件左側的標籤                                                                                                                                                                                                                                                                                                                      |
| `icon?`                     | `string`                                                                                                                                                                                   |      -       | 將顯示在控件標籤左側的圖標名稱。查看所有 [圖標](/docs-internals/icons/)。                                                                                                                                                                                                                                                                 |
| `position?`                 | `number`                                                                                                                                                                                   |      -       | 控件在工具列中的位置                                                                                                                                                                                                                                                                                                                      |
| `roles?`                    | `Array<Role>`                                                                                                                                                                              |      -       | 只有當當前使用者的角色符合所提供數組中的某個角色時才渲染此控件。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                | string`\*\* |
| `devices?`                  | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義控件將在哪些設備上渲染。`"all"` 會在所有設備上渲染此控件，`"desktop"` 只會在桌面設備上渲染，`"responsive"` 則會在平板電腦和行動設備上渲染。                                                                                                                                                                                           |
| `disabled?`                 | `boolean`                                                                                                                                                                                  |   `false`    | 設定控件在何種情況下被禁用或啟用。                                                                                                                                                                                                                                                                                                        |
| `display?`                  | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | 設定控件及其標籤的排列方式。如果 `display` 設為 `"inline"`，則標籤和控件會在同一行；如果設為 `"block"`，則標籤會在一行，控件會在下一行。                                                                                                                                                                                                  |
| `helper?.content`           | `string`                                                                                                                                                                                   |      -       | 如果提供了此參數，則會在標籤旁顯示一個圖標。當滑鼠懸停在此圖標上時，會出現包含額外資訊的工具提示。                                                                                                                                                                                                                                        |
| `helper?.position`          | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於輔助圖標的位置。                                                                                                                                                                                                                                                                                                        |
| `states?`                   | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 根據元素的狀態允許不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態，<br/> `"hover"` - 元素被懸停時的狀態，<br/> `"active"` - 元素被激活時的狀態（例如分頁中的當前頁面）                                                                                                    |
| `config?.allowedExtensions` | `Array<string>`                                                                                                                                                                            |      -       | 指定允許上傳的文件擴展名的字串數組。此設定確保只有符合指定擴展名的文件可以上傳，增強了安全性並控制使用者可上傳的文件類型。 <br/><br/>例如：<br/>**`["video/*", ".jpg", ".png]`**<br/><br/>此設定允許上傳任何視頻格式，以及 JPEG、JPG 和 PNG 圖片格式。<br/><br/> 如果未提供 `config?.allowedExtensions`，則允許使用者上傳任何類型的文件。 |
| `default?`                  | `Default`                                                                                                                                                                                  |      -       | 控件的預設值。<br/> <br/> <b>`Default: { id: string; name: string }`</b> <br/> <br/> `Default` - 控件的自定義初始值 <br/>                                                                                                                                                                                                                 |
| `style?`                    | `function`                                                                                                                                                                                 |      -       | 此函數根據控件的值生成 CSS 輸出。參數是一個包含 `value` 鍵的物件，該鍵保存了控件的當前值。此函數返回一個具有 CSS 選擇器鍵及其對應的 CSS 屬性值的物件。 <pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-download": {`<br/> `display: value ? "flex" : "none"`<br/> `}`<br/> `}`<br/>`}`</pre>                         |

### 基本範例

僅包含必需鍵的標準定義。此控件將顯示在所有設備上。

```js
{
  id: "file",
  type: "fileUpload"
}
```

### 返回值

返回值是一個包含文件 `ID` 和 `name` 的 `string`，兩者以 "|||" 分隔。

```js
{
  value: string;
}
```

值的範例：

```js
{
  value: "a8e41e74c4cba914345096f1|||eagle.jpg";
}
```

### 用法

#### 標籤範例

在控件左側添加一個標籤。

```js
{
  id: "file",
  type: "fileUpload",
  label: "File"
}
```

#### 圖標範例

在控件標籤左側添加一個 "star" 圖標。

```js
{
  id: "file",
  type: "fileUpload",
  icon: "nc-star"
}
```

#### 角色範例

僅對具有管理員和設計師權限的使用者顯示此控件。

```js
{
  id: "file",
  type: "fileUpload",
  roles: ["admin", "designer"]
}
```

#### 設備範例

此控件將在所有設備上渲染。此值可以省略，因為它預設為 `"all"`。

```js
{
  id: "file",
  type: "fileUpload",
  devices: "all"
}
```

此控件僅會在 `desktop` 上渲染。

```js
{
  id: "file",
  type: "fileUpload",
  devices: "desktop"
}
```

此顯示僅限於響應模式，具體包括 `tablet` 和 `mobile`。

```js
{
  id: "file",
  type: "fileUpload",
  devices: "responsive"
}
```

#### 禁用範例

控件將被禁用。通常，這裡應該是您的動態條件。

```js
{
  id: "file",
  type: "fileUpload",
  disabled: true
}
```

當 `selectType` 變數為 `"youtube"` 時，控件將被禁用。
`getValue` 是一個允許我們通過其 id 獲取控件值的 getter 函數。
`"selectType"` 是下方 `"select"` 控件的 id。

```js
const getToolbarContols = ({ getValue }) => {
  const selectType = getValue("selectType");

  return [
    {
      id: "selectType",
      type: "select",
      choices: [
        { title: "Youtube", value: "youtube" },
        { title: "Custom", value: "custom" },
      ],
    },
    {
      id: "file",
      type: "fileUpload",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 顯示範例

在此範例中，使用 `display: "block"` 時，標籤將顯示在第一行，控件顯示在第二行。

```js
{
  id: "file",
  type: "fileUpload",
  display: "block"
}
```

#### 輔助範例

輔助對象包含一個值為 `"Helper"` 的 content 屬性，該屬性將顯示為使用者的額外指導或資訊。

```js
{
  id: "file",
  type: "fileUpload",
  helper: {
    content: "Helper"
  }
}
```

當輔助對象包含值為 `"top-start"` 的 position 屬性時，它表示輔助文本將顯示在圖標的左上角。

```js
{
  id: "file",
  type: "fileUpload",
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```

#### 狀態範例

允許控件在正常和懸停狀態下工作。

```js
{
  id: "file",
  type: "fileUpload",
  states: ["normal", "hover"]
}
```

允許控件在正常、懸停和活動狀態下工作。

```js
{
  id: "file",
  type: "fileUpload",
  states: ["normal", "hover", "active"]
}
```

#### 配置 `allowedExtensions` 範例

在此情況下，`fileUpload` 控件僅允許上傳 `.png`、`.jpg`、`.jpeg` 和 `.mp4` 文件。

```js
{
  id: "file",
  type: "fileUpload",
  config: {
    allowedExtensions: [".png", ".jpg", ".mp4"]
  }
}
```

#### CSS 範例

使用 `multiSelect` 控件的值來更改 `.brz-download` 元素的顏色。
如果 `value` 存在，則 `.brz-download` 的顏色將變為 `green`。

```js
{
  id: "file",
  type: "fileUpload",
  style: ({ value }) => {
    if (value) {
      return {
        "{{WRAPPER}} .brz-download": {
          color: "green"
        }
      }
    }
  }
}
```

#### 在 HTML 中的用法範例

在下面的範例中，我們使用視頻的輸出值來確定何時在按鈕元素中渲染標籤。
當視頻上傳後，我們將渲染標籤。
我們還使用相同的視頻值來添加 `"data-disabled"` HTML 屬性到 `.brz-button`，並為 `<Icon />` 組件創建一個 `props.size` 值。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  file: string;
}

const Button = (props: Props): JSX.Element => {
  const { file } = props;

  const isDisabled = !file;

  const buttonClassName = isDisabled ? "brz-button brz-button-disabled" : "brz-button";

  return (
    <button className={buttonClassName} disabled={isDisabled}>
      Submit
    </button>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Button",
  component: { editor: Button, view: Button },
  title: "My Button",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-button",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-button",
              title: "Button",
            },
            devices: "desktop",
            options: [
              {
                id: "file",
                type: "fileUpload",
                devices: "desktop",
              },
            ],
          },
        ],
      },
    ];
  },
});
```
