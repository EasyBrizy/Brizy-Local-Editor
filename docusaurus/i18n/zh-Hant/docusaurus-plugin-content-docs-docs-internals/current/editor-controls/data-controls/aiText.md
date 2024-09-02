---
toc_max_heading_level: 4
---

# AI 文字

Brizy 的 `aiText` 控制項使使用者可以根據指定的提示生成文字。這項功能利用先進的 AI 技術來產生符合上下文且連貫的文字，讓內容創作變得輕鬆自如。

`aiText` 控制項範例：

![AiText](/img/controls/aiText.png)

### 參數

| 名稱             | 類型                                     |    預設值    | 描述                                                                                                                                                                                                                                                                                                      |
| :--------------- | :--------------------------------------- | :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`             | `string`                                 |      -       | `aiText` 儲存資料的鍵值識別碼                                                                                                                                                                                                                                                                             |
| `type`           | `string`                                 |      -       | 類型應為 `"aiText"` 才能使用此控制項                                                                                                                                                                                                                                                                      |
| `position?`      | `number`                                 |      -       | 控制項在工具列中的位置                                                                                                                                                                                                                                                                                    |
| `devices?`       | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | 定義控制項將顯示在哪些設備上。 `"all"` 會在所有設備上顯示控制項。 `"desktop"` 只在桌面設備上顯示控制項。 `"responsive"` 在平板和手機設備上顯示控制項。                                                                                                                                                    |
| `disabled?`      | `boolean`                                |   `false`    | 配置控制項在何種條件下被禁用或啟用。                                                                                                                                                                                                                                                                      |
| `roles?`         | `Array<Role>`                            |      -       | 僅在當前使用者的角色與提供的角色陣列中的一個匹配時渲染控制項。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                  |
| `states?`        | `Array<State>`                           | [`"normal"`] | 根據元素的狀態允許不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態，<br/> `"hover"` - 當元素被懸停時的狀態，<br/> `"active"` - 當元素處於活動狀態（例如，分頁中的當前頁面）                                                                |
| `selectedValue?` | `string`                                 |      -       | 用於生成新文字的上下文值。你可以硬編碼一個預設上下文，不會被輸入上下文覆蓋。                                                                                                                                                                                                                              |
| `default?`       | `Default`                                |      -       | 控制項的預設值。<br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - 控制項的自訂初始值。<br/> 如果未設置 `selectedValue`，則將使用預設值作為上下文                                                                                                                                     |
| `style?`         | `function`                               |      -       | 此函數根據控制項的值生成 CSS 輸出。參數是包含 `value` 鍵的物件，該鍵保存控制項的當前值。函數返回一個具有 CSS 選擇器鍵和 CSS 屬性值的物件。 <pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-text": {`<br/> `display: value === "" ? "none" : "block"`<br/> `}`<br/> `}`<br/>`}`</pre> |

### 基本範例

僅使用必要的鍵進行標準定義。此控制項將在所有設備上顯示。

```js
{
  id: "text",
  type: "aiText"
}
```

### 返回值

返回值是 `string`，表示生成的文字值。

```js
{
  value: string;
}
```

值範例：

```js
{
  value: "Brizy 是一個用戶友好且直觀的網站建設工具，讓你可以在不具備任何編程知識的情況下創建美觀而專業的網站。";
}
```

### 使用範例

#### 設備範例

將在所有設備上渲染。此值可以省略，因為預設為 `"all"`。

```js
{
  id: "text",
  type: "aiText",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "text",
  type: "aiText",
  devices: "desktop"
}
```

顯示僅限於響應模式，具體為 `tablet` 和 `mobile`。

```js
{
  id: "text",
  type: "aiText",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是你的動態條件。

```js
{
  id: "text",
  type: "aiText",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個 getter 函數，允許我們通過其 id 獲取控制項的值。
`"videoType"` 是下面 `"select"` 控制項的 id。

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
      id: "text",
      type: "aiText",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 角色範例

僅顯示給具有管理員和編輯者權限的使用者。

```js
{
  id: "text",
  type: "aiText",
  roles: ["admin", "editor"]
}
```

#### 狀態範例

允許控制項在正常和懸停狀態下工作。

```js
  {
    id: "text",
    type: "aiText",
    states: ["normal", "hover"]
  }
```

允許控制項在正常、懸停和活動狀態下工作。

```js
  {
    id: "text",
    type: "aiText",
    states: ["normal", "hover", "active"]
  }
```

#### `selectedValue` 範例

`selectedValue` 鍵用於提供 AI 文字生成的上下文。

```js
{
  id: "text",
  type: "aiText",
  selectedValue: "快速的棕色狐狸跳過懶狗。"
}
```

#### 預設值範例

在這個範例中，`aiText` 控制項具有 `"這是一段用於 AI 測試的文字"` 的值，並將基於此值生成新文字。

```js
{
  id: "text",
  type: "aiText",
  default: {
    value: "這是一段用於 AI 測試的文字"
  }
}
```

#### CSS 範例

根據文字長度顯示或隱藏 `.brz-text` 元素。

```js
{
  id: "text",
  type: "aiText",
  style: ({ value }) => ({
    "{{WRAPPER}} .brz-text": {
      display: value.value.length > 0 ? "block" : "none"
    }
  })
}
```

#### HTML 使用範例

在下面的範例中，我們使用 `aiText` 輸出值來在 UI 中顯示生成的文字。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  text: string
}

const GeneratedText = (props: Props): JSX.Element => {
  const { text } = props;

  return (
    <div className="brz-ai-text">
      <h3>你的文字：</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: text ?? ""
        }}
      />
    </div>
  );
};

Brizy.registerComponent(GeneratedText, {
  id: "ThirdParty.GeneratedText",
  title: "生成的文字",
  options: (props) => {
    return [
      {
        selector: ".brz-ai-text",
        toolbar: [
          {
            id: "aiText",
            type: "popover",
            config: {
              icon: "t2-star-shapes",
              size: "auto",
              title: "

AiText"
            },
            roles: ["admin"],
            position: 10,
            options: [
              {
                id: "text",
                type: "aiText"
              }
            ]
          }
        ]
      }
    ];
  }
});
```
