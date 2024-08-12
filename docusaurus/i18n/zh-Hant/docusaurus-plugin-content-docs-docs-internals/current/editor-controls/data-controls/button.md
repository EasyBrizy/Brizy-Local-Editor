---
toc_max_heading_level: 4
---

# 按鈕

Brizy 的控制按鈕包含一個面板按鈕，能夠根據使用者互動觸發點擊事件。

`button` 的範例：

![Button](/img/controls/button.png)

### 參數

| 名稱                   | 類型                                     | 預設值  | 描述                                                                                                                                                               |
| :--------------------- | :--------------------------------------- | :-----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                   | `string`                                 |    -    | 用於區分按鈕的識別符。                                                                                                                                             |
| `type`                 | `string`                                 |    -    | 類型應設為 `"button"` 才能使用此控制項。                                                                                                                           |
| `className?`           | `string`                                 |    -    | 將設置在控制項上的自定義 CSS 類名，可用於修改控制項樣式。                                                                                                          |
| `position?`            | `number`                                 |    -    | 控制項在工具列中的位置。                                                                                                                                           |
| `roles?`               | `Array<Role>`                            |    -    | 僅當當前使用者的角色與提供的角色陣列中的某一個匹配時，才會顯示該控制項。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`** |
| `devices?`             | `"all"` \| `"desktop"` \| `"responsive"` | `"all"` | 定義在哪些裝置上顯示控制項。`"all"` 表示在所有裝置上顯示控制項；`"desktop"` 僅在桌上型裝置上顯示控制項；`"responsive"` 則在平板和行動裝置上顯示控制項。            |
| `disabled?`            | `boolean`                                | `false` | 配置在什麼條件下控制項應該被禁用或啟用。                                                                                                                           |
| `onClick`              | `function`                               |    -    | 按鈕被點擊時將調用的函數。                                                                                                                                         |
| `config.icon`          | `string`                                 |    -    | 按鈕的圖示名稱。                                                                                                                                                   |
| `config?.text`         | `string`                                 |    -    | 顯示在按鈕上的文本。                                                                                                                                               |
| `config?.reverse`      | `boolean`                                | `false` | 決定按鈕佈局是否反轉。                                                                                                                                             |
| `config?.reverseTheme` | `boolean`                                | `false` | 配置按鈕主題是否反轉。                                                                                                                                             |
| `config?.title`        | `string`                                 |    -    | 按鈕的工具提示標題。                                                                                                                                               |

### 基本範例

僅使用必需的鍵的標準定義。該控制項將顯示在所有裝置上。<br/>
`onClick` 函數會在按鈕被點擊時觸發。

```js
{
  id: "duplicate",
  type: "button",
  onClick: () => {}
}
```

### 返回值

Brizy 的 `button` 控制項作為一個可互動的元素，在點擊時觸發動作，但不返回任何值。

### 用法

#### 類名範例

將 CSS 類名添加到控制項的 DOM 節點。

```js
{
  id: "duplicate",
  type: "button",
  onClick: () => {},
  className: "myButton"
}
```

#### 角色範例

僅對擁有 admin 和 designer 權限的使用者顯示控制項。

```js
{
  id: "duplicate",
  type: "button",
  onClick: () => {},
  roles: ["admin", "designer"]
}
```

#### 裝置範例

將在所有裝置上顯示。此值可跳過，因為它默認設為 `"all"`。

```js
{
  id: "duplicate",
  type: "button",
  onClick: () => {},
  devices: "all"
}
```

僅在 `desktop` 顯示。

```js
{
  id: "duplicate",
  type: "button",
  onClick: () => {},
  devices: "desktop"
}
```

僅在響應式模式（即 `tablet` 和 `mobile`）下顯示。

```js
{
  id: "duplicate",
  type: "button",
  onClick: () => {},
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是您的動態條件。

```js
{
  id: "duplicate",
  type: "button",
  onClick: () => {},
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。  
`getValue` 是一個允許我們通過 id 獲取控制項值的 getter 函數。  
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
      id: "duplicate",
      type: "button",
      onClick: () => {},
      disabled: videoType === "custom",
    },
  ];
};
```

#### 配置 `icon` 範例

`icon` 屬性指定按鈕的圖示。<br/>這裡 `"nc-add"` 是圖示的名稱。

```js
{
  id: "duplicate",
  type: "button",
  onClick: () => {},
  config: {
    icon: "nc-add"
  }
}
```

#### 配置 `text` 範例

`text` 屬性指定顯示在按鈕上的文本。

```js
{
  id: "duplicate",
  type: "button",
  onClick: () => {},
  config: {
    text: "example"
  }
}
```

#### 配置 `reverse` 範例

設為 `true` 時，佈局將被反轉。<br/>
設為 `false` 時，佈局不反轉。

```js
{
  id: "duplicate",
  type: "button",
  onClick: () => {},
  config: {
    reverse: true
  }
}
```

#### 配置 `reverseTheme` 範例

設為 `true` 時，主題將被反轉。<br/>
設為 `false` 時，主題不反轉。

```js
{
  id: "duplicate",
  type: "button",
  onClick: () => {},
  config: {
    reverseTheme: true
  }
}
```

#### 配置 `title` 範例

`title` 屬性指定按鈕的工具提示文本。

```js
{
  id: "duplicate",
  type: "button",
  onClick: () => {},
  config: {
    title: "example"
  }
}
```

### 基本範例

只使用必要的鍵進行標準定義。此控制項將顯示在所有設備上。

```js
{
  id: "boxShadow",
  type: "boxShadow"
}
```

### 回傳值

回傳一個包含以下值的物件：

```js
{
  blur: number;
  value: "none" | "inset" | "outset";
  spread: number;
  hex: string;
  horizontal: string;
  opacity: number;
  palette: string | undefined;
  vertical: number;
}
```

值的範例：

`blur` - 指定陰影的模糊半徑；<br/>
`value` - 指示目前的陰影類型。可取以下三種值之一："none"、"inset" 和 "outset"；<br/>
`spread` - 定義陰影的擴展半徑。正值將導致陰影擴展並變大，而負值將使其縮小；<br/>
`hex` - 以十六進制格式定義陰影的顏色；<br/>
`horizontal` - 陰影的水平偏移量；<br/>
`opacity` - 指示元素本身的透明度，而不是陰影的透明度；<br/>
`palette` - 來自全局樣式的預定義調色盤；<br/>
`vertical` - 陰影的垂直偏移量；<br/>

```js
{
  blur: "10",
  value: "inset",
  spread: "5",
  hex: "#ffffff",
  horizontal: "0",
  opacity: "50",
  palette: "default",
  vertical: "0"
}
```

### 使用方式

#### Class name 範例

為控制項的 DOM 節點新增 CSS class。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  className: "myBoxShadow"
}
```

#### 角色範例

僅對具有 admin 和 designer 權限的使用者顯示此控制項。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  roles: ["admin", "designer"]
}
```

#### 設備範例

它將在所有設備上呈現。此值可以省略，因為默認情況下設置為 `"all"`。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  devices: "all"
}
```

只會在 `desktop` 上進行渲染。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  devices: "desktop"
}
```

顯示僅限於響應模式，特別是 `tablet` 和 `mobile`。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是您的動態條件。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  disabled: true
}
```

當 `videoType` 變量為 `"custom"` 時，控制項將被禁用。<br/>
`getValue` 是一個 getter 函數，允許我們通過 id 檢索控制項的值。<br/>
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
      id: "boxShadow",
      type: "boxShadow",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 狀態範例

允許控制項在 `"normal"` 和 `"hover"` 狀態下工作。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  states: ["normal", "hover"]
}
```

允許控制項在 `"normal"`、`"hover"` 和 `"active"` 狀態下工作。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  states: ["normal", "hover", "active"]
}
```

#### 配置 `type` 範例

`config.type` 參數決定了陰影效果的類型。<br/>
當類型設置為 `"outset"` 時，下拉菜單將僅包含 `None` 和 `Outset` 選項。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  config: {
    type: "outset"
  }
}
```

#### 配置 `opacity` 範例

`config.opacity` 設置為 `false`，表示禁用陰影透明度的設置。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  config: {
    opacity: false
  }
}
```

#### 預設值範例

在此範例中，`boxShadow` 控制項有其屬性的預設值。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  default: {
    blur: "10",
    value: "inset",
    spread: "5",
    hex: "#ffffff",
    horizontal: "0",
    opacity: "50",
    palette: "default",
    vertical: "0"
  }
}
```

#### CSS 範例（`selector`、`style`）

使用 `selector` 配置 `.brz-image` 元素的 CSS `box-shadow` 屬性。所有樣式都將自動應用。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  states: ["normal", "hover"],
  selector: "{{WRAPPER}}:hover .brz-image"
}
```

此範例演示了如何動態應用 `boxShadow` 樣式。樣式函數根據 value 屬性生成適當的 CSS。

```js
{
  id: "boxShadow",
  type: "boxShadow",
  style: ({ value }) => {
    if (value.value !== "none") {
      return {
        "{{WRAPPER}} .brz-container": {
          "box-shadow": `${value.horizontal}px
          ${value.vertical}px ${value.blur}px ${value.spread}px ${hexToRgba(value.hex,value.opacity)}`
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-container": {
        "box-shadow": "none"
      }
    }
  }
}
```

#### HTML 範例中的用法

要獲取 CSS `box-shadow` 屬性的值，請使用以下規則從組件的 props 中訪問所需的值：將 `boxShadow` 控制項的 `id` 與要提取的值連接起來。以下範例展示了如何從 `boxShadow` 控制項中提取所有可能的值，並將其用於為 `div` 元素添加陰影。

```tsx
import { Brizy } from "@brizy/core";
import { hexToRgba } from "./utils";
import React, { JSX } from "react";

interface Props {
  boxShadow: "none" | "inset" | "outset";
  boxShadowBlur: number;
  boxShadowSpread: number;
  boxShadowColorHex: string;
  boxShadowHorizontal: string;
  boxShadowColorOpacity: number;
  boxShadowColorPalette: string | undefined;
  boxShadowVertical: number;
}

const Container = (props: Props): JSX.Element => {
  const {
    boxShadow,
    boxShadowColorOpacity,
    boxShadowColorHex,
    boxShadowHorizontal,
    boxShadowVertical,
    boxShadowBlur,
    boxShadowSpread,
    children,
  } = props;

  return (
    <div
      style={{
        boxShadow: `${boxShadow} ${boxShadowHorizontal}px ${boxShadowVertical}px 
        ${boxShadowBlur}px ${boxShadowSpread}px ${hexToRgba(boxShadowColorHex, boxShadowColorOpacity)}`,
      }}
    >
      {children}
    </div>
  );
};

Brizy.registerComponent(Container, {
  id: "ThirdParty.Container",
  component: { editor: Container, view: Container },
  title: "My Container",
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
              icon: "nc-container",
              title: "Container",
            },
            devices: "desktop",
            options: [
              {
                id: "boxShadow",
                type: "boxShadow",
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
