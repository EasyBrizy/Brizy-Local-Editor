---
sidebar_position: 2
toc_max_heading_level: 4
---

# 文字輸入

Brizy 的 `inputText` 控制提供了一個簡單的輸入框，用於文本輸入，使用戶可以輕鬆輸入和編輯文字。

`inputText` 的範例：

![InputText](/img/controls/inputText.png)

### 參數

| 名稱               | 類型                                                                                                                                                                                       |    預設值    | 說明                                                                                                                                                                                                                                                                                                            |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |      -       | 控制保存數據的鍵的標識符                                                                                                                                                                                                                                                                                        |
| `type`             | `string`                                                                                                                                                                                   |      -       | 類型應設為 `"inputText"` 以使用此控制                                                                                                                                                                                                                                                                           |
| `placeholder?`     | `string`                                                                                                                                                                                   |      -       | 顯示在輸入框中的佔位符文本                                                                                                                                                                                                                                                                                      |
| `label?`           | `string`                                                                                                                                                                                   |      -       | 顯示在控制左側的標籤                                                                                                                                                                                                                                                                                            |
| `className?`       | `string`                                                                                                                                                                                   |      -       | 將應用於控制的自訂 CSS 類名。可用於修改控制樣式。                                                                                                                                                                                                                                                               |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | 在控制標籤左側顯示的圖標名稱。查看所有 [圖標](/docs-internals/icons/)。                                                                                                                                                                                                                                         |
| `position?`        | `number`                                                                                                                                                                                   |      -       | 控制在工具欄中的位置                                                                                                                                                                                                                                                                                            |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | 僅在當前用戶的角色匹配提供的角色數組中的一個角色時渲染控制。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                         |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義控制將渲染的設備。 `"all"` 在所有設備上渲染控制。 `"desktop"` 僅在桌面設備上渲染控制。 `"responsive"` 在平板和手機設備上渲染控制                                                                                                                                                                            |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | 配置控制禁用或啟用的條件                                                                                                                                                                                                                                                                                        |
| `display?`         | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | 配置控制及其標籤的排列方式。如果 `display` 為 `"inline"`，則標籤和控制將在同一行。如果 `display` 為 `"block"`，則標籤將在一行中，控制將在下一行中                                                                                                                                                               |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | 如果提供，則會在標籤旁邊顯示圖標。當懸停在此圖標上時，會顯示帶有附加信息的工具提示                                                                                                                                                                                                                              |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於幫助圖標的位置                                                                                                                                                                                                                                                                                |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 允許根據元素的狀態使用不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態，<br/> `"hover"` - 當元素被懸停時的狀態，<br/> `"active"` - 元素活動時的狀態（例如，當前頁面在分頁中）                                                                    |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | 預設控制值。 <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - 控制的自訂初始值 <br/>                                                                                                                                                                                                      |
| `style?`           | `function`                                                                                                                                                                                 |      -       | 該函數根據控制的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，該鍵包含控制的當前值。該函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的對象 <pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-border": {`<br/> `display: value.length > 0 ? "block" : "none"`<br/> `}`<br/> `}`<br/>`}`</pre> |

### 基本範例

只有必要鍵的標準定義。此控制將在所有設備上可見。

```js
{
  id: "link",
  type: "inputText"
}
```

### 返回值

返回值是一個 `string`，表示文本框的值。

```js
{
  value: string;
}
```

值的範例：

```js
{
  value: "text inside an input";
}
```

### 用法

#### 佔位符範例

為控制添加佔位符文本。

```js
{
  id: "link",
  type: "inputText",
  placeholder: "http://"
}
```

#### 標籤範例

在控制的左側添加標籤。

```js
{
  id: "link",
  type: "inputText",
  label: "Link"
}
```

#### 類名範例

為控制的 DOM 節點添加 CSS 類。

```js
{
  id: "link",
  type: "inputText",
  className: "myInputText"
}
```

#### 圖標範例

在控制標籤的左側添加「link」圖標。

```js
{
  id: "link",
  type: "inputText",
  icon: "nc-link"
}
```

#### 角色範例

僅向具有管理員和設計師權限的用戶顯示控制。

```js
{
  id: "link",
  type: "inputText",
  roles: ["admin", "designer"]
}
```

#### 設備範例

它將在所有設備上渲染。由於預設為 `"all"`，因此此值可以省略。

```js
{
  id: "link",
  type: "inputText",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "link",
  type: "inputText",
  devices: "desktop"
}
```

僅在響應模式下顯示，即 `tablet` 和 `mobile`。

```js
{
  id: "link",
  type: "inputText",
  devices: "responsive"
}
```

#### 禁用範例

控制將被禁用。通常，這裡應該是你的動態條件。

```js
{
  id: "link",
  type: "inputText",
  disabled: true
}
```

當 `videoType` 變量為 `"custom"` 時，控制將被禁用。
`getValue` 是一個 getter 函數，允許我們通過其 id 獲取控件的值。
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
      id: "link",
      type: "inputText",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 顯示範例

在此範例中，`display: "block"`，標籤將顯示在第一行，控制顯示在第二行。

```js
{
  id: "link",
  type: "inputText",
  display: "block"
}
```

#### 幫助範例

幫助對象包含一個內容屬性，值為 `"help text"`，將顯示為對用戶的額外指導或信息。

```js
{
  id: "link",
  type: "inputText",
  helper: {
    content: "help text"
  }
}
```

當幫助對象包含位置屬性，值為 `"top-start"` 時，這表示幫助文本將顯示在圖標的左上角。

```js
{
  id: "link",
  type: "inputText",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### 狀態範例

允許控制在正常和懸停狀態下工作。

```js
{
  id: "link",
  type: "inputText",
  states: ["normal", "hover"]
}
```

允許控制在正常、懸停和活動狀態下工作。

```js
{
  id: "link",
  type: "inputText",
  states: ["normal", "hover", "active"]
}
```

#### 預設值範例

在此範例中，inputText 控制的初始值為 `"https://www.google.com/"`。

```js
{
  id: "link",
  type: "inputText",
  default: {
    value: "https://www.google.com/"
  }
}
```

#### CSS 範例

使用 `inputText` 控制值顯示或隱藏 `.brz-border` 元素。

```js
{
  id: "link",
  type: "inputText",
  style: ({ value }) => {
    if (value.value.length > 0) {
      return {
        "{{WRAPPER}} .brz-border": {
          display: "block"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-border": {
        display: "none"
      }
    }
  }
}
```

#### HTML 使用範例

提供的代碼定義了一個名為 `Input` 的 React 函數組件。此組件作為一個可自訂的輸入控制，適用於需要文本輸入的表單或其他用戶界面。

```tsx
import classNames from "classnames";
import React, { JSX } from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export const Input = (props: Props): JSX.Element => {
  const { value, onChange } = props;
  return (
    <div className="brz-input">
      <input type="text" value={value} onChange={({ target: { value } }): void => onChange(value)} />
    </div>
  );
};

Brizy.registerComponent(Input, {
  id: "ThirdParty.Input",
  title: "My Input",
  options: (props) => {
    return [
      {
        selector: ".brz-input",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-input",
              title: "Input",
            },
            devices: "desktop",
            options: [
              {
                id: "link",
                type: "inputText",
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
