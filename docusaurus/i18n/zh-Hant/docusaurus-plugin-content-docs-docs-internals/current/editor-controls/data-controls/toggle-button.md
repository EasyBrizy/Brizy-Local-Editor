---
toc_max_heading_level: 4
---

# 切換按鈕

`toggleButton` 組件是一個簡單的 `開啟` | `關閉` 切換按鈕，可以顯示圖示並根據其類型改變外觀。此組件支持通過各種屬性進行自定義，以控制對齊方式、外觀和行為。

禁用或啟用時的 `toggleButton` 範例：

![切換按鈕關閉](/img/controls/toggle-button-off.png) ![切換按鈕開啟](/img/controls/toggle-button-on.png)

### 參數

| 名稱                   | 類型                                                                                                                                                                                       |   預設值    | 描述                                                                                                                                                                                                                                                                                                            |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                   | `string`                                                                                                                                                                                   |      -      | `toggleButton` 將儲存數據的鍵的識別符                                                                                                                                                                                                                                                                           |
| `type`                 | `string`                                                                                                                                                                                   |      -      | 類型應為 `"toggleButton"` 以使用此控制項                                                                                                                                                                                                                                                                        |
| `label?`               | `string`                                                                                                                                                                                   |      -      | 顯示在控制項左側的標籤                                                                                                                                                                                                                                                                                          |
| `className?`           | `string`                                                                                                                                                                                   |      -      | 設置在控制項上的自定義 CSS 類名。可用於修改控制項樣式。                                                                                                                                                                                                                                                         |
| `icon?`                | `string`                                                                                                                                                                                   |      -      | 將顯示在控制項標籤左側的圖示名稱。查看所有 [圖示](../../icons/)。                                                                                                                                                                                                                                               |
| `position?`            | `number`                                                                                                                                                                                   |      -      | 控制項在工具欄中的位置                                                                                                                                                                                                                                                                                          |
| `roles?`               | `Array<Role>`                                                                                                                                                                              |      -      | 只有當當前用戶的角色與提供的角色數組中的角色之一匹配時，才渲染控制項。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                |
| `devices?`             | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`   | 定義控制項將在哪些設備上渲染。`"all"` 在所有設備上渲染控制項。`"desktop"` 僅在桌面設備上渲染控制項。`"responsive"` 在平板和移動設備上渲染控制項                                                                                                                                                                 |
| `disabled?`            | `boolean`                                                                                                                                                                                  |   `false`   | 配置控制項禁用或啟用的條件                                                                                                                                                                                                                                                                                      |
| `display?`             | `"inline" \| "block"`                                                                                                                                                                      | `"inline"`  | 配置控制項及其標籤的排列方式。如果 `display` 為 `"inline"`，則標籤和控制項會在同一行。如果 `display` 為 `"block"`，則標籤會在一行，下一行為控制項。                                                                                                                                                             |
| `align?`               | `"left"` \| `"center"` \| `"right"`                                                                                                                                                        | `"center"`  | 指定按鈕內內容的對齊方式。這控制了圖示在按鈕內的定位方式                                                                                                                                                                                                                                                        |
| `helper?.content`      | `string`                                                                                                                                                                                   |      -      | 如果提供，則顯示在標籤旁邊的圖示。當懸停在此圖示上時，會顯示具有附加信息的工具提示                                                                                                                                                                                                                              |
| `helper?.position`     | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`   | 指定工具提示相對於輔助圖示的位置                                                                                                                                                                                                                                                                                |
| `config.icon`          | `string`                                                                                                                                                                                   |      -      | 要顯示的圖示名稱                                                                                                                                                                                                                                                                                                |
| `config?.title`        | `string`                                                                                                                                                                                   |      -      | 設置按鈕的 title 屬性，通常在用戶懸停在按鈕上時提供附加信息                                                                                                                                                                                                                                                     |
| `config?.type`         | `"square"` \| `"default"`                                                                                                                                                                  | `"default"` | 確定按鈕的樣式：<br/> `"default"` - 僅顯示圖示 <br/> `"square"` - 在圖示的父元素上添加背景                                                                                                                                                                                                                      |
| `config?.reverseTheme` | `boolean`                                                                                                                                                                                  |   `true`    | 如果啟用，將反轉圖示的顏色主題。僅適用於 `"default"` 類型                                                                                                                                                                                                                                                       |
| `config?.on`           | `string`                                                                                                                                                                                   |   `"on"`    | 控制項啟用時的返回值                                                                                                                                                                                                                                                                                            |
| `config?.off`          | `string`                                                                                                                                                                                   |   `"off"`   | 控制項禁用時的返回值                                                                                                                                                                                                                                                                                            |
| `default?`             | `Default`                                                                                                                                                                                  |      -      | 控制項的預設值。<br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - 控制項的自定義初始值 <br/>                                                                                                                                                                                               |
| `style?`               | `function`                                                                                                                                                                                 |      -      | 該函數根據控制項的值生成 CSS 輸出。參數為一個包含 `value` 鍵的物件，該鍵包含控制項的當前值。該函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的物件。<pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-text": {`<br/> `display: value === "on" ? "flex" : "none"`<br/> `}`<br/> `}`<br/>`}`</pre> |

### 基本範例

僅包含所需鍵的標準定義。此控制項將顯示在所有設備上。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

### 返回值

控制項返回一個物件，其中 `value` 默認為 `"on"` | `"off"`，或為 `config.on` 和 `config.off` 中傳遞的值。

```js
{
  value: config.on | config.off;
}
```

值的範例：

```js
{
  value: "on";
}
```

### 使用方式

#### 標籤範例

在控制項的左側添加一個標籤。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  label: "Flip",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### 類名範例

將 CSS 類添加到控制項的 DOM 節點。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  className: "myCustomClass"
}
```

#### 圖示範例

在控制項標籤的左側添加一個 "repeat" 圖示。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  icon: "nc-repeat"
}
```

#### 角色範例

僅向具有 admin 和 designer 權限的用戶顯示控制項。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  roles: ["admin", "designer"]
}
```

#### 設備範例

將在所有設備上渲染。此值可以跳過，因為預設為 `"all"`。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  devices: "all",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  devices: "desktop",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

顯示僅限於響應模式，即 `tablet` 和 `mobile`。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  devices: "responsive",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是您的動態條件。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  disabled: true,
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個 getter 函數，可以根據 id 獲取控制項的值。
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
      id: "shapeTopHorizontal",
      type: "toggleButton",
      disabled: videoType === "custom",
      config: {
        icon: "nc-flip-horizontal",
      },
    },
  ];
};
```

#### 顯示範例

在這個範例中，使用 `display: "block"`，標籤將顯示在第一行，控制項顯示在第二行。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  display: "block"
}
```

#### 對齊範例

指定按鈕內內容的對齊方式。這控制了圖示在按鈕內的位置。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  align: "left",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### 助手範例

助手物件包含 `content` 屬性，值為 `"help text"`，這將顯示為用戶的附加指導或信息。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  helper: {
    content: "help text"
  },
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

當助手物件包含 `position` 屬性，值為 `"top-start"` 時，這表示助手文本將顯示在圖示的左上角。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  helper: {
    content: "help text",
    position: "top-start"
  },
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### 配置標題範例

設置按鈕的 title 屬性，通常在用戶懸停在按鈕上時提供附加信息。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    title: "Title"
  }
}
```

#### 配置類型範例

確定按鈕的樣式，在這個例子中，類型 `"square"` 為圖示的父元素添加背景。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    type: "square"
  }
}
```

可以不使用 `icon` 僅顯示 `on` | `off` 按鈕。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    type: "square"
  }
}
```

#### 配置反轉主題範例

如果啟用，則反轉圖示的顏色主題。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    reverseTheme: false
  }
}
```

#### 配置 `on` | `off` 的值範例

當 `toggleButton` 啟用時，將返回 `"1"`。
當 `toggleButton` 禁用時，將返回 `"0"`。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    on: "1",
    off: "0"
  }
}
```

當 `toggleButton` 啟用時，將返回 `"true"`。
當 `toggleButton` 禁用時，將返回 `"false"`。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    on: "true",
    off: "false"
  }
}
```

當 `toggleButton` 啟用時，將返回 `"enabled"`。
當 `toggleButton` 禁用時，將返回 `"disabled"`。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    on: "enabled",
    off: "disabled"
  }
}
```

#### 預設值範例

在這個範例中，`toggleButton` 控制項的預設值為 `"on"` 將被啟用。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  default: {
    value: "on"
  }
}
```

`toggleButton` 控制項的預設值為 `"off"` 將被禁用。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  default: {
    value: "off"
  }
}
```

#### CSS 範例

使用 CSS 根據 `toggleButton` 控制項的值顯示或隱藏 `.brz-text` 元素。
如果未提供 `config.on` 和 `config.off`，則 `toggleButton` 的預設值為 `"on"` 或 `"off"`。

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  style: ({ value }) => {
    if (value.value === "on") {


      return {
        "{{WRAPPER}} .brz-text": {
          display: "block"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-text": {
        display: "none"
      }
    }
  }
}
```

#### HTML 使用範例

在下面的範例中，我們使用 `toggleButton` 輸出值（默認為 `"on"` | `"off"`）來決定何時在按鈕元素中渲染標籤。
當 `toggleButton` 啟用（`"on"`）時，我們將渲染標籤。

```tsx
import { Brizy } from "@brizy/core";
import { Icon } from "./Icon";
import React, { JSX } from "react";

interface Props {
  showLabel: "on" | "off";
}

const Button = (props: Props): JSX.Element => {
  const { showLabel } = props;

  return (
    <div className="brz-button">
      {showLabel === "on" && <span>Click</span>}
      <Icon name="next" size={showLabel === "on" ? 16 : 24} />
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
                id: "showLabel",
                type: "toggleButton",
                config: {
                  icon: "nc-flip-horizontal",
                },
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
