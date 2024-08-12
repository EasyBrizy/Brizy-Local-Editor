---
toc_max_heading_level: 4
---

# Code Mirror

Brizy 的 `codeMirror` 控制項具備帶有文字區域介面的代碼編輯器。

`codeMirror` 控制項的範例：

![Code Mirror](/img/controls/codeMirror.png)

### 參數

| 名稱               | 類型                                                                                                                                                                                       |    預設值    | 描述                                                                                                                                                                                                                                                                                                               |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |      -       | `aiText` 儲存數據時所使用的鍵值的識別符                                                                                                                                                                                                                                                                            |
| `type`             | `string`                                                                                                                                                                                   |      -       | 此控制項的類型應為 `"aiText"`                                                                                                                                                                                                                                                                                      |
| `placeholder`      | `string`                                                                                                                                                                                   |      -       | 顯示在輸入欄位中的預設提示文字                                                                                                                                                                                                                                                                                     |
| `label?`           | `string`                                                                                                                                                                                   |      -       | 顯示在控制項左側的標籤                                                                                                                                                                                                                                                                                             |
| `className?`       | `string`                                                                                                                                                                                   |      -       | 將自訂的 CSS 類名設定到控制項上，可用於修改控制項的樣式                                                                                                                                                                                                                                                            |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | 將在控制項標籤左側顯示的圖標名稱，查看所有 [圖標](/docs-internals/icons/)。                                                                                                                                                                                                                                        |
| `position?`        | `number`                                                                                                                                                                                   |      -       | 控制項在工具列中的位置                                                                                                                                                                                                                                                                                             |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | 只有當目前使用者的角色與提供的陣列中的角色相匹配時，才會顯示控制項。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                    |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義在哪些裝置上渲染控制項。`"all"` 表示在所有裝置上渲染控制項，`"desktop"` 僅在桌面裝置上渲染控制項，`"responsive"` 在平板和移動裝置上渲染控制項。                                                                                                                                                                |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | 設定控制項的啟用或禁用條件                                                                                                                                                                                                                                                                                         |
| `display?`         | `"inline"` \| `"block"`                                                                                                                                                                    |  `"inline"`  | 設定控制項及其標籤的排列方式。如果 `display` 為 `"inline"`，則標籤和控制項將在同一行；如果 `display` 為 `"block"`，則標籤在一行，控制項在下一行。                                                                                                                                                                  |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | 如果提供了內容，將在標籤旁邊顯示一個圖標，當滑鼠懸停在此圖標上時，將出現帶有額外資訊的工具提示。                                                                                                                                                                                                                   |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於助手圖標的位置。                                                                                                                                                                                                                                                                                 |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 根據元素的狀態允許不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態，<br/> `"hover"` - 當元素被懸停時的狀態，<br/> `"active"` - 當元素處於活動狀態時（例如，分頁中的當前頁面）。                                                                     |
| `config?.size?`    | `"short"` \| `"medium"` \| `"large"` \| `"auto"`                                                                                                                                           |  `"medium"`  | 設定文字區域的大小。                                                                                                                                                                                                                                                                                               |
| `config?.language` | `"html"` \| `"css"` \| `"markdown"` \| `"xml"`                                                                                                                                             |   `"css"`    | 指定代碼將以何種語言編寫。                                                                                                                                                                                                                                                                                         |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | 控制項的預設值。<br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - 控制項的自訂初始值 <br/>                                                                                                                                                                                                    |
| `style?`           | `function`                                                                                                                                                                                 |      -       | 此函數根據控制項的值生成 CSS 輸出。該參數是一個包含 `value` 鍵的物件，該鍵持有控制項的當前值。此函數返回一個帶有 CSS 選擇器鍵和 CSS 屬性值的物件。 <pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-text": {`<br/> `display: value === "on" ? "flex" : "none"`<br/> `}`<br/> `}`<br/>`}`</pre> |

### 基本範例

僅使用必要鍵值的標準定義。此控制項將顯示在所有裝置上。

```js
{
  id: "code",
  type: "codeMirror"
}
```

### 返回值

返回值是一個 `string`，代表文字區域的內容。

```js
{
  value: string;
}
```

範例值：

```js
{
  "value": ".brz-btn {\n  width: 100px;\n  height: 100px;\n}"
}
```

### 用法

#### Placeholder 範例

為控制項添加 `placeholder` 提示文字。

```js
{
  id: "code",
  type: "codeMirror",
  placeholder: "代碼..."
}
```

#### 標籤範例

在控制項左側添加一個標籤。

```js
{
  id: "code",
  label: "自訂 CSS",
  type: "codeMirror"
}
```

#### 類名範例

為控制項的 DOM 節點添加 CSS 類名。

```js
{
  id: "code",
  type: "codeMirror",
  className: "myCode"
}
```

#### 圖標範例

在控制項標籤左側添加 `"code"` 圖標。

```js
{
  id: "code",
  type: "codeMirror",
  icon: "nc-code"
}
```

#### 角色範例

僅對具有 `admin` 和 `designer` 權限的使用者顯示控制項。

```js
{
  id: "code",
  type: "codeMirror",
  roles: ["admin", "designer"]
}
```

#### 裝置範例

將在所有裝置上渲染。此值可以省略，因為默認設置為 `"all"`。

```js
{
  id: "code",
  type: "codeMirror",
  devices: "all"
}
```

將僅在 `desktop` 上渲染。

```js
{
  id: "code",
  type: "codeMirror",
  devices: "desktop"
}
```

顯示僅限於響應模式，特別是 `tablet` 和 `mobile`。

```js
{
  id: "code",
  type: "codeMirror",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常這裡應該是動態條件。

```js
{
  id: "code",
  type: "codeMirror",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個允許我們通過其 id 檢索控制項值的函數。
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
      id: "code",
      type: "codeMirror",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 顯示範例

在此範例中，使用 `display: "block"` 時，標籤將在第一行渲染，控制項將在第二行渲染。

```js
{
  id: "code",
  type: "codeMirror",
  display: "block"
}
```

#### 助手範例

助手對象包含一個值為 `"help text"` 的內容屬性，該屬性將作為用戶的額外指導或資訊顯示。

```js
{
  id: "code",
  type: "codeMirror",
  helper: {
    content: "幫助文本"
  }
}
```

當助手對象包含值為 `"top-start"` 的位置屬性時，表示助手文本將顯示在圖標的左上角。

```js
{
  id: "code",
  type: "codeMirror",
  helper: {
    content: "幫助文本",
    position: "top-start"
  }
}
```

#### 狀態範例

允許控制項在 `normal` 和 `hover` 狀態下工作。

```js
{
  id: "code",
  type: "codeMirror",
  states: ["normal", "hover"]
}
```

允許控制項在 `normal`、`hover` 和 `active` 狀態下工作。

```js
{
  id: "code",
  type: "codeMirror",
  states: ["normal", "hover", "active"]
}
```

#### 配置 `size` 的範例

當你在配置中添加 size 屬性時，會定義文字區域的尺寸。

```js
{
  id: "code",
  type: "codeMirror",
  config: {
    size: "short"
  }
}
```

```js
{
  id: "code",
  type: "codeMirror",
  config: {
    size: "medium"
  }
}
```

```js
{
  id: "code",
  type: "codeMirror",
  config: {
    size: "large"
  }
}
```

```js
{
  id: "code",
  type: "codeMirror",
  config: {
    size: "auto"
  }
}
```

#### 配置 `language` 的範例

在以下範例中，我們指定了編寫代碼的語言。

```js
{
  id: "code",
  type: "codeMirror",
  config: {
    language: "html"
  }
}
```

```js
{
  id: "code",
  type: "codeMirror",
  config: {
    language: "css"
  }
}
```

```js
{
  id: "code",
  type: "codeMirror",
  config: {
    language: "markdown"
  }
}
```

```js
{
  id: "code",
  type: "codeMirror",
  config: {
    language: "xml"
  }
}
```

#### 預設值範例

在此範例中，`codeMirror` 控制項的預設值為 `".brz-button { background-color: purple; }"`。

```js
{
  id: "code",
  type: "codeMirror",
  default: {
    value: ".brz-button { background-color: purple; }"
  }
}
```

#### CSS 範例

根據 `codeMirror` 控制項的內容動態更改 `.brz-text` 元素的外觀。當組件的長度為 `0` 時，文字顏色變為 `綠色` 並添加 `下劃線` 樣式。否則，文字顏色變為 `藍色` 並使用 `斜體` 樣式，在指定的包裹器（`{{WRAPPER}}`）內。

```js
{
  id: "code",
  type: "codeMirror",
  style: ({ value }) => {
    if (value.value.length > 0) {
      return {
        "{{WRAPPER}} .brz-button": {
          "color": "green",
          "text-decoration": "underline"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-button": {
        "color": "blue",
        "font-style": "italic"
      }
    }
  }
}
```

檢索 `.brz-button` 元素的 `normal` 和 `active` 狀態的 CSS 樣式。例如，如果在 `normal` 狀態下填入了一個值，而在 `active` 狀態下刪除了該值，則 `.brz-button` 將以 `block` 顯示，`.brz-button.active` 將以 `none` 顯示。

```js
{
  id: "code",
  type: "codeMirror",
  states: ["normal", "active"],
  style: ({ value }) => {
  return {
    "{{WRAPPER}} .brz-text": {
      display: value.value.length === 0 ? "none" : "block"
    }
   }
  }
}
```

#### HTML 中的用法範例

在以下範例中，為 Brizy 編輯器定義了一個自訂 `Container` 組件，該組件支持通過注入自訂 HTML 來進行自訂。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  customHtml: string;
}

const Container = (props: Props): JSX.Element => {
  const { customHtml } = props;

  return (
    <div className="brz-container">
      {value ? <div dangerouslySetInnerHTML={{ __html: customHtml }} /> : <p>無內容</p>}
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Container",
  component: { editor: Container, view: Container },
  title: "我的容器",
  category: "基本",
  options: (props) => {
    return [
      {
        selector: ".brz-container",
        toolbar: [
          {
            id: "sidebarTabs",
            type: "sidebarTabs",
            tabs: [
              {
                id: "moreSettingsAdvanced",
                label: "進階",
                icon: "nc-code",
                options: [
                  {
                    id: "customHtml",
                    label: "自訂 HTML",
                    type: "codeMirror",
                    config: {
                      language: "html",
                    },
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
