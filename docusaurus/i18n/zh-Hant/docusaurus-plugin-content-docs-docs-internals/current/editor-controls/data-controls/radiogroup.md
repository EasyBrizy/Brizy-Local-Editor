---
toc_max_heading_level: 4
---

# 單選按鈕組

`radioGroup` 控制項在 Brizy 中提供了一個選擇選項的方式。它作為標準單選按鈕的高級替代方案。

`radioGroup` 的範例

![Radio Group](/img/controls/radio-group.png)

帶有標籤的 `radioGroup` 範例

![Radio Group](/img/controls/radio-group-label.png)

帶有輔助資訊的 `radioGroup` 範例

![Radio Group](/img/controls/radio-group-helper.png)

### 參數

| 名稱               | 類型                                                                                                                                                                                       |    預設值    | 描述                                                                                                                                                                                                                                                                                       |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |      -       | `radioGroup` 將保存數據的鍵的識別符                                                                                                                                                                                                                                                        |
| `type`             | `string`                                                                                                                                                                                   |      -       | 類型應設為 `"radioGroup"` 才能使用此控制項                                                                                                                                                                                                                                                 |
| `label?`           | `string`                                                                                                                                                                                   |      -       | 控制項左側顯示的標籤                                                                                                                                                                                                                                                                       |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | 會在控制項標籤左側顯示的圖示名稱。查看所有 [圖示](/docs-internals/icons/)。                                                                                                                                                                                                                |
| `position?`        | `number`                                                                                                                                                                                   |      -       | 控制項在工具欄中的位置                                                                                                                                                                                                                                                                     |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | 只有當當前用戶的角色匹配提供的數組中的角色之一時才會渲染控制項。<br/><br/> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                    |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義控制項將在哪些設備上渲染。`"all"` 在所有設備上渲染控制項。`"desktop"` 僅在桌面設備上渲染控制項。`"responsive"` 在平板電腦和移動設備上渲染控制項。                                                                                                                                      |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | 配置控制項的禁用或啟用條件。                                                                                                                                                                                                                                                               |
| `display?`         | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | 配置控制項及其標籤的排列方式。如果 `display` 為 `"inline"`，則標籤和控制項會在同一行；如果 `display` 為 `"block"`，則標籤會在一行，控制項會在下一行。                                                                                                                                      |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | 如果提供，會在標籤旁邊顯示一個圖示。當懸停在這個圖示上時，會顯示一個包含附加信息的工具提示。                                                                                                                                                                                               |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於輔助圖示的位置。                                                                                                                                                                                                                                                         |
| `choices`          | `Array<Choice>`                                                                                                                                                                            |      -       | 必需的屬性，用於定義要渲染為單選元素的選項對象數組。<br/><br/>**`Choice: { title?: string, icon: string, value: string }`**<br/><br/>`title?` - 單選元素的標題，當懸停時顯示。<br/>`icon` - 與單選元素關聯的圖示。<br/>`value` - 當選擇此選項時單選組返回的值。                            |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 根據元素的狀態允許不同的樣式。<br/><br/>**`State = "normal" \| "hover" \| "active"`**<br/><br/> `"normal"` - 元素的正常狀態，<br/> `"hover"` - 當元素被懸停時的狀態，<br/> `"active"` - 元素的活動狀態（例如，分頁中的當前頁面）                                                           |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | 控制項的預設值。<br/><br/>**`Default: { value: string; }`**<br/><br/> `value` - 控制項的自訂初始值 <br/>                                                                                                                                                                                   |
| `style?`           | `function`                                                                                                                                                                                 |      -       | 此函數基於控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，其中保存了控制項的當前值。該函數返回一個具有 CSS 選擇器鍵和 CSS 屬性值的對象。<pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-text": {`<br/> `"font-size": value`<br/> `}`<br/> `}`<br/>`}`</pre> |

### 基本範例

僅使用必要鍵的標準定義。此控制項將顯示在所有設備上。

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" }
  ]
}
```

### 返回值

返回值由所提供對象中 `choices` 屬性的配置決定。

```js
{
  value: string;
}
```

值的範例：

```js
{
  value: "medium";
}
```

### 使用方式

#### 標籤範例

在控制項左側添加標籤

```js
{
  id: "size",
  label: "Size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

#### 圖示範例

在控制項標籤的左側添加 "size" 圖示。

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  icon: "nc-size"
}
```

#### 角色範例

僅對具有 admin 和 designer 權限的用戶顯示控制項。

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  roles: ["admin", "designer"]
}
```

#### 設備範例

它將在所有設備上渲染。此值可以省略，因為預設為 `"all"`。

```js
{
  id: "size",
  type: "radioGroup",
  devices: "all",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "size",
  type: "radioGroup",
  devices: "desktop",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

顯示僅限於響應模式，具體為 `tablet` 和 `mobile`。

```js
{
  id: "size",
  type: "radioGroup",
  devices: "responsive",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是你的動態條件。

```js
{
  id: "size",
  type: "radioGroup",
  disabled: true,
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個 getter 函數，允許我們通過其 id 獲取控制項的值。
`"videoType"` 是下方 `"select"` 控制項的 id。

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
      id: "size",
      type: "radioGroup",
      disabled: videoType === "custom",
      choices: [
        { value: "small", icon: "nc-32" },
        { value: "medium", icon: "nc-48" },
        { value: "large", icon: "nc-64" },
        { value: "custom", icon: "nc-more" },
      ],
    },
  ];
};
```

#### 顯示範例

在此範例中，使用 `display: "block"`，標籤將渲染在第一行，控制項則在第二行。

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  display: "block"
}
```

#### 輔助資訊範例

輔助資訊對象包含一個 `content` 屬性，其值為 `"Helper"`，這將顯示為用戶的額外指導或信息。

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  helper: {
    content: "Helper"
  }
}
```

當輔助資訊對象包含 `position` 屬性，值為 `"top-start"`，表示輔助文本將顯示在圖示的上方起始位置。

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```

#### 帶標題的選項範例

為單選元素添加標題，當懸停時顯示。

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32", title: "32" },
    { value: "medium", icon: "nc-48", title: "48" },
    { value: "large", icon: "nc-64", title: "64" },
    { value: "custom", icon: "nc-more", title: "custom" }
  ]
}
```

#### 狀態範例

允許控制項在正常和懸停狀態下工作。

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  states: ["normal", "hover"]
}
```

#### 預設值範例

在此範例中，`radioGroup` 的預設值為 `"medium"`，將被啟用。

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  default: {
    value: "medium"
  }
}
```

#### CSS 範例

使用 `radioGroup` 控制項值設置 `.brz-text` 元素的字體大小。

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value

: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" }
  ],
  style: ({ value }) => {
    if (value.value === "small") {
      return {
        "{{WRAPPER}} .brz-text": {
          "font-size": 32
        }
      }
    }

    if (value.value === "large") {
      return {
        "{{WRAPPER}} .brz-text": {
          "font-size": 64
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-text": {
        "font-size": 48
      }
    }
  }
}
```

#### HTML 使用範例

在下例中，我們使用 `radioGroup` 輸出值來確定按鈕元素中圖示的大小。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";
import { Icon } from "./Icon";

interface Props {
  size: number;
}

const Button = (props: Props): JSX.Element => {
  const { size } = props;

  return (
    <div className="brz-button">
      <Icon name="next" size={size} />
    </div>
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
                id: "size",
                type: "radioGroup",
                choices: [
                  { value: 32, icon: "nc-32" },
                  { value: 48, icon: "nc-48" },
                  { value: 64, icon: "nc-64" },
                ],
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
