---
toc_max_heading_level: 4
---

# 圖示選擇器

Brizy 的 `iconsPicker` 控制類似於複選框，但具有獨特的用戶界面。用戶可以通過圖示進行選擇，藍色的勾選標記會直觀地顯示哪些圖示目前是啟用或選中的。

`iconsPicker` 範例

![圖示選擇器](/img/controls/iconsPicker.png)

選中狀態的 `iconsPicker` 範例

![選中圖示選擇器](/img/controls/iconsPickerChecked.png)

### 參數

| 名稱               | 類型                                                                                                                                                                                       |    預設值    | 描述                                                                                                                                                                                                                                                                                                                                                   |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |      -       | `iconsPicker` 將儲存數據的鍵的標識符                                                                                                                                                                                                                                                                                                                   |
| `type`             | `string`                                                                                                                                                                                   |      -       | 類型應設為 `"iconsPicker"` 以使用此控制                                                                                                                                                                                                                                                                                                                |
| `label?`           | `string`                                                                                                                                                                                   |      -       | 控制左側顯示的標籤                                                                                                                                                                                                                                                                                                                                     |
| `className?`       | `string`                                                                                                                                                                                   |      -       | 將設置在控制上的自訂 CSS 類別名稱。可以用來修改控制樣式。                                                                                                                                                                                                                                                                                              |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | 將顯示在控制標籤左側的圖示名稱。查看所有 [圖示](/docs-internals/icons/)。                                                                                                                                                                                                                                                                              |
| `position?`        | `number`                                                                                                                                                                                   |      -       | 控制在工具列中的位置                                                                                                                                                                                                                                                                                                                                   |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | 僅在當前使用者的角色與提供的數組中的角色匹配時渲染控制。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                     |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義控制將被渲染的設備。`"all"` 在所有設備上渲染控制。`"desktop"` 僅在桌面設備上渲染控制。`"responsive"` 在平板和手機設備上渲染控制。                                                                                                                                                                                                                  |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | 配置控制被禁用或啟用的條件。                                                                                                                                                                                                                                                                                                                           |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 根據元素的狀態允許不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態， <br/> `"hover"` - 當元素被懸停時的狀態， <br/> `"active"` - 當元素處於活動狀態時的狀態（例如，翻頁中的當前頁面）                                                                                                   |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | 如果提供，則在標籤旁邊顯示一個圖示。當懸停在此圖示上時，會顯示帶有附加信息的工具提示。                                                                                                                                                                                                                                                                 |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於幫助圖示的位置。                                                                                                                                                                                                                                                                                                                     |
| `choices`          | `Array<Choice>`                                                                                                                                                                            |      -       | 必需的屬性，定義要渲染為圖示元素的選項對象數組。<br/><br/><b>`Choice: { title: string, icon: string, value: string }`</b> <br/><br/>`title` - 圖示元素的標題。<br/>`icon` - 與圖示元素相關聯的圖示。<br/>`value` - 當選擇此選項時 `iconsPicker` 返回的值。                                                                                             |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | 預設控制值。<br/> <br/> <b>`Default: { value: string; active: string; }`</b> <br/> <br/> `value` - 控制的自訂初始值 <br/> `active` - 預設啟用的圖示                                                                                                                                                                                                    |
| `style?`           | `function`                                                                                                                                                                                 |      -       | 此函數根據控制的值生成 CSS 輸出。參數是包含 `value` 鍵的對象，其中保存了控制的當前值。該函數返回一個具有 CSS 選擇器鍵和 CSS 屬性值的對象。 <pre>`style: ({value}) => {`<br/> `return {`<br/> &nbsp;`"{{WRAPPER}} .brz-text": {`<br/> &nbsp; &nbsp; `display: value === "none" ? "none" : "block"`<br/> &nbsp; &nbsp; `}`<br/> &nbsp; `}`<br/>`}`</pre> |

### 基本範例

使用僅包含必需鍵的標準定義。此控制將顯示在所有設備上。

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ]
}
```

### 返回值

`iconsPicker` 控制的返回值是一個包含兩個屬性的對象：

- `value`: 表示某些值的字串。
- `active`: 指示當前活動狀態的字串。

```js
{
  value: string;
  active: string;
}
```

值的範例：

```js
{
  value: '["value-1", "value-2"]',
  active: "value-1"
}
```

### 用法

#### 標籤範例

在控制的左側添加標籤。

```js
{
  id: "icons",
  label: "樣式",
  type: "iconsPicker",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ]
}
```

#### 類別名稱範例

為控制的 DOM 節點添加 CSS 類別。

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  className: "myClass"
}
```

#### 圖標範例

在控制標籤的左側添加“重複”圖標。

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  icon: "nc-repeat"
}
```

#### 角色範例

僅對具有管理員和設計師權限的用戶顯示控制。

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  roles: ["admin", "designer"]
}
```

#### 設備範例

將在所有設備上渲染。此值可以跳過，因為預設為 `"all"`。

```js
{
  id: "icons",
  type: "iconsPicker",
  devices: "all",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ]
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "icons",
  type: "iconsPicker",
  devices: "desktop",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ]
}
```

僅限於響應模式顯示，特別是 `tablet` 和 `mobile`。

```js
{
  id: "icons",
  type: "iconsPicker",
  devices: "responsive",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ]
}
```

#### 禁用範例

控制將被禁用。通常，這裡應該是你的動態條件。

```js
{
  id: "icons",
  type: "iconsPicker",
  disabled: true,
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ]
}
```

當 `videoType` 變數為 `"custom"` 時，控制將被禁用。
`getValue` 是一個 getter 函數，允許我們通過其 id 獲取控制的值。
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
      id: "icons",
      type: "iconsPicker",
      disabled: videoType === "custom",
      choices: [
        {
          title: "項目 1",
          value: "val1",
          icon: "nc-star",
        },
        {
          title: "項目 2",
          value: "val2",
          icon: "nc-line",
        },
      ],
    },
  ];
};
```

#### 幫助範例

`helper` 對象包含一個內容屬性，其值為 `"Helper"`，將顯示為用戶的附加指導或信息。

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  helper: {
    content: "Helper"
  }
}
```

當 `helper` 對象包含位置屬性，值為 `"top-start"` 時，指示幫助文本將顯示在圖標的頂部起始位置。

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
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
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  states: ["normal", "hover"]
}
```

允許控制在正常、懸停和活動狀態下工作。

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  states: ["normal", "hover", "active"]
}
```

#### 預設值範例

在此範例中，`iconsPicker` 控制預設值為 `"val1"`。而 `"val2"` 項目預設為啟用狀態。

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "項目 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "項目 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  default: {
    value: '["val1"]',
    active: "val2"
  }
}
```

#### CSS 範例

使用來自 `iconsPicker` 控制的自訂值來更改 `.brz-text` 元素的字體大小。

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "小",
      value: "small

",
      icon: "nc-small"
    },
    {
      title: "大",
      value: "big",
      icon: "nc-big"
    }
  ],
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text": {
        "font-size": value.value === "small" ? 12 : 15
      }
    }
  }
}
```

#### HTML 使用範例

在下面的範例中，我們使用 `iconsPicker` 的輸出值來確定按鈕文本的裝飾。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";
import { Icon } from "./Icon";

interface Props {
  style: string;
}

const Button = (props: Props): JSX.Element => {
  const { style } = props;

  const styleClass = style ? JSON.parse(style).join(" ") : "";

  const className = "brz-button" + " " + styleClass;

  return <div className={className}>Click</div>;
};

Brizy.registerComponent({
  id: "ThirdParty.Button",
  component: { editor: Button, view: Button },
  title: "我的按鈕",
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
              title: "按鈕",
            },
            devices: "desktop",
            options: [
              {
                id: "style",
                type: "iconsPicker",
                choices: [
                  {
                    title: "底線",
                    value: "underline",
                    icon: "nc-underline",
                  },
                  {
                    title: "粗體",
                    value: "bold",
                    icon: "nc-bold",
                  },
                  {
                    title: "斜體",
                    value: "italic",
                    icon: "nc-italic",
                  },
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
