---
sidebar_position: 3
toc_max_heading_level: 4
---

# 文本區域

Brizy 的 `textarea` 控件提供了一個傳統的文本區域欄位，並可以設定行數。

`textarea` 範例：

![Textarea](/img/controls/textarea.png)

帶有佔位符和 2 行的 `textarea` 範例：

![TextareaWithPlaceholder](/img/controls/textareaPlaceholder.png)

### 參數

| 名稱               | 類型                                                                                                                                                                                       |    預設值    | 描述                                                                                                                                                                                                                                                                                                                                                   |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |      -       | 文本區域儲存數據的鍵的識別符                                                                                                                                                                                                                                                                                                                           |
| `type`             | `string`                                                                                                                                                                                   |      -       | 類型應為 `"textarea"` 以使用此控件                                                                                                                                                                                                                                                                                                                     |
| `label?`           | `string`                                                                                                                                                                                   |      -       | 控件左側顯示的標籤                                                                                                                                                                                                                                                                                                                                     |
| `className?`       | `string`                                                                                                                                                                                   |      -       | 自定義 CSS 類名，將會應用於控件上。可以用來修改控件樣式。                                                                                                                                                                                                                                                                                              |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | 會顯示在控件標籤左側的圖標名稱。查看所有 [圖標](/docs-internals/icons/)。                                                                                                                                                                                                                                                                              |
| `position?`        | `number`                                                                                                                                                                                   |      -       | 控件在工具條中的位置                                                                                                                                                                                                                                                                                                                                   |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | 只有當當前用戶的角色匹配提供的角色數組中的一個時，控件才會渲染。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                            |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義控件將在哪些設備上渲染。`"all"` 在所有設備上渲染控件。`"desktop"` 僅在桌面設備上渲染控件。`"responsive"` 在平板電腦和手機設備上渲染控件。                                                                                                                                                                                                          |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | 配置控件在何種條件下被禁用或啟用。                                                                                                                                                                                                                                                                                                                     |
| `display?`         | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | 配置控件及其標籤的排列方式。如果 `display` 為 `"inline"`，則標籤和控件將在同一行；如果 `display` 為 `"block"`，則標籤會在一行，控件會在下一行。                                                                                                                                                                                                        |
| `placeholder?`     | `string`                                                                                                                                                                                   |      -       | 顯示在輸入欄位中的佔位符文本。                                                                                                                                                                                                                                                                                                                         |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | 如果提供，將在標籤旁顯示一個圖標。當懸停在此圖標上時，會顯示帶有額外信息的工具提示。                                                                                                                                                                                                                                                                   |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於助手圖標的位置。                                                                                                                                                                                                                                                                                                                     |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 允許根據元素的狀態應用不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態，<br/> `"hover"` - 當元素被懸停時的狀態，<br/> `"active"` - 當元素處於活動狀態（例如，分頁中的當前頁）時的狀態                                                                                                   |
| `config?.lines`    | `number`                                                                                                                                                                                   |      -       | 指定文本區域組件的行數。                                                                                                                                                                                                                                                                                                                               |
| `config?.size`     | `"short"` \| `"medium"` \| `"large"` \| `"auto"`                                                                                                                                           |   `"auto"`   | 字符串，指定輸入欄位的大小。                                                                                                                                                                                                                                                                                                                           |
| `default?  `       | `Default`                                                                                                                                                                                  |      -       | 默認控件值。 <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - 控件的自定義初始值 <br/>                                                                                                                                                                                                                                           |
| `style?`           | `function`                                                                                                                                                                                 |      -       | 此函數根據控件的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，該鍵持有控件的當前值。函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的對象。 <pre>`style: ({value}) => {`<br/> `return {`<br/> &nbsp;`"{{WRAPPER}} .brz-text": {`<br/> &nbsp; &nbsp; `display: value === "none" ? "none" : "block"`<br/> &nbsp; &nbsp; `}`<br/> &nbsp; `}`<br/>`}`</pre> |

### 基本範例

只使用必要鍵的標準定義。此控件將在所有設備上顯示。

```js
{
  id: "description",
  type: "textarea"
}
```

### 返回值

返回值為 `string`，表示文本欄位的值。

```js
{
  value: string;
}
```

值的範例：

```js
{
  value: "demo example value";
}
```

### 使用方式

#### 標籤範例

在控件的左側添加標籤。

```js
{
  id: "description",
  type: "textarea",
  label: "Description"
}
```

#### 類名範例

將 CSS 類名添加到控件的 DOM 節點。

```js
{
  id: "description",
  type: "textarea",
  className: "myClass"
}
```

#### 圖標範例

在控件標籤的左側添加“重複”圖標。

```js
{
  id: "description",
  type: "textarea",
  icon: "nc-repeat"
}
```

#### 角色範例

僅對擁有 admin 和 designer 權限的用戶顯示控件。

```js
{
  id: "description",
  type: "textarea",
  roles: ["admin", "designer"]
}
```

#### 設備範例

此控件將在所有設備上渲染。這個值可以省略，因為默認為 `"all"`。

```js
{
  id: "description",
  type: "textarea",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "description",
  type: "textarea",
  devices: "desktop"
}
```

僅在響應模式下顯示，特別是 `tablet` 和 `mobile`。

```js
{
  id: "description",
  type: "textarea",
  devices: "responsive"
}
```

#### 禁用範例

控件將被禁用。通常這裡應該是你的動態條件。

```js
{
  id: "description",
  type: "textarea",
  disabled: true
}
```

當 `videoType` 變量為 `"custom"` 時，控件將被禁用。
`getValue` 是一個 getter 函數，允許我們通過 id 獲取控件的值。
`"videoType"` 是下方 `"select"` 控件的 id。

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
      id: "description",
      type: "textarea",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 顯示範例

在此範例中，使用 `display: "block"`，標籤將顯示在第一行，控件將顯示在第二行。

```js
{
  id: "description",
  type: "textarea",
  display: "block"
}
```

#### 佔位符範例

為控件添加佔位符文本。

```js
{
  id: "description",
  type: "textarea",
  placeholder: "Start typing here..."
}
```

#### 助手範例

助手對象包含一個內容屬性，值為 `"help text"`，將顯示為額外的指導或信息。

```js
{
  id: "description",
  type: "textarea",
  helper: {
    content: "help text"
  }
}
```

當助手對象包含位置屬性，值為 `"top-start"` 時，表示助手文本將顯示在圖標的左上角。

```js
{
  id: "description",
  type: "textarea",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### 狀態範例

允許控件在正常和懸停狀態下工作。

```js
{
  id: "description",
  type: "textarea",
  states: ["normal", "hover"]
}
```

允許控件在正常、懸停和活動狀態下工作。

```js
{
  id: "description",
  type: "textarea",
  states: ["normal", "hover", "active"]
}
```

#### 配置值範例（`lines`）

指定文本區域組件的行數。這決定了文本區域輸入欄位的可見高度。

```js
{
  id: "description",
  type: "textarea",
  config: {
    lines: 3
  }
}
```

#### 配置 `size` 範例

`size` 屬性設置為 `"medium"`，表示輸入欄位將以中等尺寸渲染。

```js
{
  id: "description",
  type: "textarea",
  config: {
    size: "medium"
  }
}
```

#### 默認值範例

在此範例中，文本區域控件默認值為 `"Default text"`。

```js
{
  id: "description",
  type: "textarea",
  default: {
    value: "Default text"
  }
}
```

#### CSS 範例

使用來自 `textarea` 控件的自定義值更改 `.brz-text::after` 元素的內容。

```js
{
  id: "description",
  type: "textarea",
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text::after": {
        content: value.value
      }
    }
  }
}
```

#### HTML 使用範例

在下面的範例中，我們使用 textarea 的輸出值來確定 Text 元素中的標籤內容。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  description: string;
}

const Text = (props: Props): JSX.Element => {
  const { description } = props;

  return (
    <div className="brz-text">
      <span>{description}</span>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Text",
  component: { editor: Text, view: Text },
  title: "My Text",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-text",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-text",
              title: "Text",
            },
            devices: "desktop",
            options: [
              {
                id: "description",
                type: "textarea",
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
