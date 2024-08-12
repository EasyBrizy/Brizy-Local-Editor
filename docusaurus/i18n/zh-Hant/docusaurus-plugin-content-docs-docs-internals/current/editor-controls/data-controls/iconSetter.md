# Icon Setter

Brizy 的 `iconSetter` 控制功能是一個圖標選擇器，允許從預設的圖標庫中進行選擇，從而促進設計工作流程中現有圖標的整合。

控制範例：

![IconSetter](/img/controls/iconSetter.png)

### 參數

| 名稱                | 類型                                                                                                                                                                                       |    預設值    | 描述                                                                                                                                                                                                                                                                                                                                 |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                | `string`                                                                                                                                                                                   |      -       | `iconSetter` 將儲存資料的鍵值識別碼                                                                                                                                                                                                                                                                                                  |
| `type`              | `string`                                                                                                                                                                                   |      -       | 若要使用此控制，類型應設為 `"iconSetter"`                                                                                                                                                                                                                                                                                            |
| `label?`            | `string`                                                                                                                                                                                   |      -       | 顯示在控制左側的標籤                                                                                                                                                                                                                                                                                                                 |
| `className?`        | `string`                                                                                                                                                                                   |      -       | 將設置在控制上的自定義 CSS 類別名稱。可用於修改控制樣式                                                                                                                                                                                                                                                                              |
| `icon?`             | `string`                                                                                                                                                                                   |      -       | 將渲染在控制標籤左側的圖標名稱。查看所有 [icons](../../icons/)                                                                                                                                                                                                                                                                       |
| `position?`         | `number`                                                                                                                                                                                   |      -       | 控制在工具欄中的位置                                                                                                                                                                                                                                                                                                                 |
| `roles?`            | `Array<Role>`                                                                                                                                                                              |      -       | 只有當當前使用者的角色匹配提供陣列中的角色之一時才渲染控制 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                |
| `devices?`          | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義控制將在哪些設備上渲染。`"all"` 會在所有設備上渲染控制，`"desktop"` 只會在桌面設備上渲染控制，`"responsive"` 則會在平板和移動設備上渲染控制                                                                                                                                                                                      |
| `disabled?`         | `boolean`                                                                                                                                                                                  |   `false`    | 配置控制禁用或啟用的條件                                                                                                                                                                                                                                                                                                             |
| `display?`          | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | 配置控制和標籤的排列方式。如果 `display` 設為 `"inline"`，則標籤和控制會在一行顯示；如果 `display` 設為 `"block"`，則標籤會顯示在第一行，控制會顯示在第二行                                                                                                                                                                          |
| `helper?.content`   | `string`                                                                                                                                                                                   |      -       | 如果提供，將顯示在標籤旁的圖標。當滑鼠懸停在此圖標上時，會出現包含附加信息的工具提示                                                                                                                                                                                                                                                 |
| `helper?.position`  | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於輔助圖標的位置                                                                                                                                                                                                                                                                                                     |
| `states?`           | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 允許根據元素的狀態設置不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態 <br/> `"hover"` - 當元素被懸停時的狀態 <br/> `"active"` - 元素處於活動狀態時（例如，分頁中的當前頁面）                                                                                         |
| `config.canDelete?` | `boolean`                                                                                                                                                                                  |   `false`    | 決定是否可以刪除圖標                                                                                                                                                                                                                                                                                                                 |
| `default?`          | `Default`                                                                                                                                                                                  |      -       | 控制的預設值 <br/> <br/> <b>`Default: { name: string; type: string; filename: string; }`</b> <br/> <br/> `name` - 控制圖標的名稱<br/> `type` - 控制圖標的類型 <br/> `filename` - 控制圖標的檔案名稱 <br/>                                                                                                                            |
| `style?`            | `function`                                                                                                                                                                                 |      -       | 此函數根據控制的值生成 CSS 輸出。參數是一個包含 `value` 鍵的物件，其中保存了控制的當前值。該函數返回一個具有 CSS 選擇器鍵和 CSS 屬性值的物件。 <pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-icon": {`<br/> `color: value.name === "shape-arrow" ? "red" :` <br/> `  "black"`<br/> `}`<br/> `}`<br/>`}`</pre> |

### 基本範例

僅使用必需鍵值的標準定義。此控制將顯示在所有設備上。

```js
{
  id: "icon",
  type: "iconSetter"
}
```

### 返回值

返回一個具有以下值的物件：

```js
{
  name: string;
  type: string;
  filename: string;
}
```

`name` - 圖標的名稱；<br/>
`type` - 圖標的類型；<br/>
`filename` - 圖標檔案名稱；<br/>

值的範例：

```js
{
  name: "shape-arrow",
  type: "outline",
  filename: "Arrow.svg"
}
```

### 使用方法

#### 標籤範例

在控制的左側添加標籤。

```js
{
  id: "icon",
  type: "iconSetter",
  label: "Icon"
}
```

#### 類別名稱範例

向控制的 DOM 節點添加 CSS 類別。

```js
{
  id: "icon",
  type: "iconSetter",
  className: "myIconSetter"
}
```

#### 圖標範例

在控制的標籤左側添加一個 "file" 圖標。

```js
{
  id: "icon",
  type: "iconSetter",
  icon: "nc-file"
}
```

#### 角色範例

僅對擁有 admin 和 designer 權限的使用者顯示此控制。

```js
{
  id: "icon",
  type: "iconSetter",
  roles: ["admin", "designer"]
}
```

#### 設備範例

它將在所有設備上渲染。此值可以省略，因為預設為 `"all"`。

```js
{
  id: "icon",
  type: "iconSetter",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "icon",
  type: "iconSetter",
  devices: "desktop"
}
```

僅在響應模式中顯示，即 `tablet` 和 `mobile`。

```js
{
  id: "icon",
  type: "iconSetter",
  devices: "responsive"
}
```

#### 禁用範例

控制將被禁用。通常，這裡應該是你的動態條件。

```js
{
  id: "icon",
  type: "iconSetter",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控制將被禁用。
`getValue` 是一個 getter 函數，用於通過其 id 獲取控制的值。
`"videoType"` 是下面 `"select"` 控制的 id。

```js
const getToolbarContols = ({ getValue }) => {
  const videoType = getValue("videoType");

  return [
    {
      id: "videoType",
      type: "select",
      choices: [
        { title: "Youtube", value: "youtube" },
        { title: "Custom", value: "custom" },
      ],
    },
    {
      id: "icon",
      type: "iconSetter",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 顯示範例

在此範例中，使用 `display: "block"`，標籤將顯示在第一行，控制將顯示在第二行。

```js
{
  id: "icon",
  type: "iconSetter",
  display: "block"
}
```

#### 幫助範例

幫助物件包含 `content` 屬性，其值為 `"help text"`，將顯示為用戶的附加指導或信息。

```js
{
  id: "icon",
  type: "iconSetter",
  helper: {
    content: "Helper"
  }
}
```

當幫助物件包含 `position` 屬性，其值為 `"top-start"` 時，表示幫助文字將顯示在圖標的左上角。

```js
{
  id: "icon",
  type: "iconSetter",
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```

#### 狀態範例

允許控制在正常和懸停狀態下工作。

```js
{
  id: "icon",
  type: "iconSetter",
  states: ["normal", "hover"]
}
```

允許控制在正常、懸停和活動狀態下工作。

```js
{
  id: "icon",
  type: "iconSetter",
  states: ["normal", "hover", "active"]
}
```

#### `canDelete` 配置值範例

控制配置為允許刪除選擇的圖標。

```js
{
  id: "icon",
  type: "iconSetter",
  config: {
    canDelete: true
  }
}
```

#### 預設值範例

在此範例中，`iconSetter` 控制具有預設的 `name`、`type` 和 `filename`。

```js
{
  id: "icon",
  type: "iconSetter",
  default: {
    name: "shape-arrow",
    type: "outline",
    filename: ""
  }
}
```

#### CSS 範例

使用 `iconSetter` 控制值更改 `.brz-icon` 元素的邊框。在此範例中，如果 `value.type` 等於 `"outline"`，邊框設為 `"1px solid red"`，否則移除邊框。

```js
{
  id: "icon",
  type: "iconSetter",
  style: ({ value }) => {
    if (value.type === "outline") {
      return {
        "{{WRAPPER}} .brz-icon": {
          border: "1px solid red"
        }
      };
    }

    return {
      "{{WRAPPER}} .brz-icon": {
        border: "none"
      }
    };
  }
}
```

#### HTML 使用範例

在下面的範例中，從 `iconSetter` 控制返回的值（`iconType`、`iconFilename`、`iconName`）用於設置和顯示圖標。

```tsx
import { Brizy } from "@brizy/core";
import { getIconUrl } from "./utils";
import React, { JSX } from "react";

interface Props {
  iconType: string;
  iconFilename: string;
  iconName: string;
}

const Icon = (props: Props): JSX.Element => {
  const { iconType, iconFilename, iconName } = props;

  const src = getIconUrl({
    iconType,
    iconFilename,
    iconName,
  });

  const style = {
    mask: `url(${src}) no-repeat center / contain`,
  };

  return <div className=".brz-icon" style={style} />;
};

Brizy.registerComponent({
  id: "ThirdParty.Icon",
  component: { editor: Icon, view: Icon },
  title: "My Icon",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-icon",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-icon",
              title: "Icon",
            },
            devices: "desktop",
            options: [
              {
                id: "icon",
                type: "iconSetter",
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
