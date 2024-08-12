---
sidebar_position: 2
toc_max_heading_level: 4
---

# 切換開關

Brizy 中的切換控件作為一個可互動的切換元素，使使用者能夠在多個狀態之間切換。

切換開關範例：

![Toggle](/img/controls/toggle-left.png)<br/>
![Toggle](/img/controls/toggle-center.png)<br/>
![Toggle](/img/controls/toggle-right.png)<br/>

### 參數

| 名稱               | 類型                                                                                                                                                                                       | 預設值  | 描述                                                                                                                                                                                                                                                                                                   |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |    -    | 切換控件將儲存數據的鍵的識別碼                                                                                                                                                                                                                                                                         |
| `type`             | `string`                                                                                                                                                                                   |    -    | 類型應為 `"toggle"` 以使用此控件                                                                                                                                                                                                                                                                       |
| `label?`           | `string`                                                                                                                                                                                   |    -    | 顯示在控件左側的標籤                                                                                                                                                                                                                                                                                   |
| `className?`       | `string`                                                                                                                                                                                   |    -    | 將設定於控件上的自訂 CSS 類名。可以用來修改控件的樣式                                                                                                                                                                                                                                                  |
| `position?`        | `number`                                                                                                                                                                                   |    -    | 控件在工具列中的位置                                                                                                                                                                                                                                                                                   |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |    -    | 僅在當前用戶的角色與提供的角色數組中的其中一個匹配時渲染控件 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   | `"all"` | 定義控件將在哪些設備上渲染。`"all"` 在所有設備上渲染控件。`"desktop"` 僅在桌面設備上渲染控件。`"responsive"` 在平板和手機設備上渲染控件                                                                                                                                                                |
| `disabled?`        | `boolean`                                                                                                                                                                                  | `false` | 配置控件在何種條件下被禁用或啟用                                                                                                                                                                                                                                                                       |
| `helper?.content`  | `string`                                                                                                                                                                                   |    -    | 如果提供，將在標籤旁顯示一個圖標。當懸停在該圖標上時，將顯示包含額外信息的工具提示                                                                                                                                                                                                                     |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | 指定工具提示相對於助手圖標的位置                                                                                                                                                                                                                                                                       |
| `choices`          | `Array<Choice>`                                                                                                                                                                            |  `[]`   | `choices` 是一個對象數組，每個對象代表一個選項，包含 `title`、`value` 和 `icon`。 <br/><br/><b>`Choice: { title: string, icon: string, value: string }`</b> <br/><br/>`title`：顯示在懸停時的標題。<br/>`icon`：與選項關聯的圖標。<br/>`value`：選擇一個選項時控件返回的值。                           |
| `default?`         | `Default`                                                                                                                                                                                  |    -    | 默認控件值 <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - 控件的自訂初始值 <br/>                                                                                                                                                                                               |
| `style?`           | `function`                                                                                                                                                                                 |    -    | 該函數根據控件的值生成 CSS 輸出。參數是包含 `value` 鍵的對象，該鍵持有控件的當前值。函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的對象 <pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-toggle": {`<br/> `color: value === "left" ? "red" : "black"`<br/> `}`<br/> `}`<br/>`}`</pre> |

### 基本範例

標準定義只包含必需的鍵值。
<br/>此控件將在所有設備上顯示。

```js
{
  id: "align",
  type: "toggle",
  choices: [
    { icon: "nc-text-align-left", title: "左對齊", value: "left" },
    { icon: "nc-text-align-center", title: "置中", value: "center" },
    { icon: "nc-text-align-right", title: "右對齊", value: "right" }
  ]
}
```

### 返回值

返回值由選項配置中的 `choices.value` 屬性決定。

```js
{
  value: string;
}
```

值的範例：

```js
{
  value: "center";
}
```

### 使用範例

#### 標籤範例

在控件的左側添加標籤。

```js
{
  id: "align",
  type: "toggle",
  label: "對齊",
  choices: [
    { icon: "nc-text-align-left", title: "左對齊", value: "left" },
    { icon: "nc-text-align-center", title: "置中", value: "center" },
    { icon: "nc-text-align-right", title: "右對齊", value: "right" }
  ]
}
```

#### 類名範例

為控件的 DOM 節點添加 CSS 類名。

```js
{
  id: "align",
  type: "toggle",
  className: "myAlignToggle",
  choices: [
    { icon: "nc-text-align-left", title: "左對齊", value: "left" },
    { icon: "nc-text-align-center", title: "置中", value: "center" },
    { icon: "nc-text-align-right", title: "右對齊", value: "right" }
  ]
}
```

#### 角色範例

僅顯示給具有 admin 和 designer 權限的用戶。

```js
{
  id: "align",
  type: "toggle",
  roles: ["admin", "designer"],
  choices: [
    { icon: "nc-text-align-left", title: "左對齊", value: "left" },
    { icon: "nc-text-align-center", title: "置中", value: "center" },
    { icon: "nc-text-align-right", title: "右對齊", value: "right" }
  ]
}
```

#### 設備範例

將在所有設備上渲染。此值可以省略，因為預設為 `"all"`。

```js
{
  id: "align",
  type: "toggle",
  devices: "all",
  choices: [
    { icon: "nc-text-align-left", title: "左對齊", value: "left" },
    { icon: "nc-text-align-center", title: "置中", value: "center" },
    { icon: "nc-text-align-right", title: "右對齊", value: "right" }
  ]
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "align",
  type: "toggle",
  devices: "desktop",
  choices: [
    { icon: "nc-text-align-left", title: "左對齊", value: "left" },
    { icon: "nc-text-align-center", title: "置中", value: "center" },
    { icon: "nc-text-align-right", title: "右對齊", value: "right" }
  ]
}
```

顯示限於響應式模式，具體為 `tablet` 和 `mobile`。

```js
{
  id: "align",
  type: "toggle",
  devices: "responsive",
  choices: [
    { icon: "nc-text-align-left", title: "左對齊", value: "left" },
    { icon: "nc-text-align-center", title: "置中", value: "center" },
    { icon: "nc-text-align-right", title: "右對齊", value: "right" }
  ]
}
```

#### 禁用範例

控件將被禁用。通常，這裡應該是你的動態條件。

```js
{
  id: "align",
  type: "toggle",
  disabled: true,
  choices: [
    { icon: "nc-text-align-left", title: "左對齊", value: "left" },
    { icon: "nc-text-align-center", title: "置中", value: "center" },
    { icon: "nc-text-align-right", title: "右對齊", value: "right" }
  ]
}
```

當 `videoType` 變量為 `"custom"` 時，控件將被禁用。
`getValue` 是一個 getter 函數，允許我們通過控件的 id 獲取其值。
`"videoType"` 是下面 `"select"` 控件的 id。

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
      id: "align",
      type: "toggle",
      disabled: videoType === "custom",
      choices: [
        { icon: "nc-text-align-left", title: "左對齊", value: "left" },
        { icon: "nc-text-align-center", title: "置中", value: "center" },
        { icon: "nc-text-align-right", title: "右對齊", value: "right" },
      ],
    },
  ];
};
```

#### 助手範例

助手對象包含一個 `content` 屬性，值為 `"help text"`，這將顯示為額外的指導或信息。

```js
{
  id: "align",
  type: "toggle",
  helper: {
    content: "help text"
  },
  choices: [
    { icon: "nc-text-align-left", title: "左對齊", value: "left" },
    { icon: "nc-text-align-center", title: "置中", value: "center" },
    { icon: "nc-text-align-right", title: "右對齊", value: "right" }
  ]
}
```

當助手對象包含 `position` 屬性，值為 `"top-start"` 時，表示助手文本將顯示在圖標的左上角。

```js
{
  id: "align",
  type: "toggle",
  helper: {
    content: "help text",
    position: "top-start"
  },
  choices: [
    { icon: "nc-text-align-left", title: "左對齊", value: "left" },
    { icon: "nc-text-align-center", title: "置中", value: "center" },
    { icon: "nc-text-align-right", title: "右對齊", value: "right" }
  ]
}
```

#### 默認值範例

在此範例中，切換控件默認值為 `"center"`。

```js
{
  id: "align",
  type: "toggle",
  choices: [
    { icon: "nc-text-align-left", title: "左對齊", value: "left" },
    { icon: "nc-text-align-center", title: "置中", value: "center" },
    { icon: "nc-text-align-right", title: "右對齊", value: "right" }
  ],
  default: {
    value: "center"
  }
}
```

#### CSS 範例

使用 CSS 更改 `.brz-toggle` 元素的顏色，基於 `toggle` 控件的值。在此範例中，若值為 `"left"`，則顏色設為紅色，否則設為藍色。

```js
{
  id: "align",
  type: "toggle",
  choices: [
    { icon: "nc-text-align-left", title: "左對齊", value: "left" },
    { icon: "nc-text-align-center", title: "置中", value: "center" },
    { icon: "nc-text-align-right", title: "右對齊", value: "right" }
  ],
  style: ({ value }) => {
    if (value.value === "left") {
      return {
        "{{WRAPPER}} .brz-toggle": {
          "justify-content": "start"
        }
      };
    } else if (value.value === "right") {
      return {
        "{{WRAPPER}} .brz-toggle": {
          "justify-content": "end"
        }
      };
    } else {
      return {
        "{{WRAPPER}} .brz-toggle": {
          "justify-content": "center"
        }
      };
    }
  }
}
```

#### HTML 使用範例

在下列範例中，我們使用切換輸出值（默認為 `string`）來確定

子元素的對齊方式。當切換設為 `"left"` 時，標籤和子元素將左對齊。

```tsx
import { Brizy } from "@brizy/core";
import { Icon } from "./Icon";
import React, { JSX } from "react";

interface Props {
  align: string;
}

const Container = (props: Props): JSX.Element => {
  const { align } = props;

  return (
    <div className={`brz-container brz-jc-${align}`}>
      <Icon name="next" />
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Container",
  component: { editor: Container, view: Container },
  title: "我的容器",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-container",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-align",
              title: "容器",
            },
            devices: "desktop",
            options: [
              {
                id: "align",
                type: "toggle",
                devices: "desktop",
                choices: [
                  { icon: "nc-text-align-left", title: "左對齊", value: "left" },
                  { icon: "nc-text-align-center", title: "置中", value: "center" },
                  { icon: "nc-text-align-right", title: "右對齊", value: "right" },
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
