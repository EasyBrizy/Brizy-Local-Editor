---
sidebar_position: 5
toc_max_heading_level: 4
---

# 顏色選擇器

Brizy 的 `colorPicker` 控制項提供了一個用戶友好的顏色選擇器字段，內置了不透明度滑塊、色調滑塊和預定義的調色板顏色。

`colorPicker` 的範例：

![ColorPicker](/img/controls/colorPicker.png)

禁用不透明度的 `colorPicker` 範例：

![ColorPicker](/img/controls/colorPickerNoOpacity.png)

禁用顏色調色板的 `colorPicker` 範例：

![ColorPicker](/img/controls/сolorPickerNoPalette.png)

### 參數

| 名稱                      | 類型                                     |    預設值    | 說明                                                                                                                                                                                                                                                                                                                                                                          |
| :------------------------ | :--------------------------------------- | :----------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                 |      -       | `colorPicker` 將保存您的數據的鍵標識符                                                                                                                                                                                                                                                                                                                                        |
| `type`                    | `string`                                 |      -       | 要使用此控制項，類型應設為 `"colorPicker"`                                                                                                                                                                                                                                                                                                                                    |
| `className?`              | `string`                                 |      -       | 將設置在控制項上的自定義 CSS 類名。它可用於修改控制項樣式。                                                                                                                                                                                                                                                                                                                   |
| `position?`               | `number`                                 |      -       | 工具列中控制項的位置                                                                                                                                                                                                                                                                                                                                                          |
| `roles?`                  | `Array<Role>`                            |      -       | 僅當當前用戶的角色與提供的陣列中的某一角色匹配時才會渲染控制項。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                    |
| `devices?`                | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | 定義控制項在哪些設備上渲染。 `"all"` 會在所有設備上渲染控制項。 `"desktop"` 僅在桌面設備上渲染控制項。 `"responsive"` 在平板電腦和移動設備上渲染控制項。                                                                                                                                                                                                                      |
| `disabled?`               | `boolean`                                |   `false`    | 配置控制項的啟用或禁用條件。                                                                                                                                                                                                                                                                                                                                                  |
| `states?`                 | `Array<State>`                           | `["normal"]` | 允許控制項在不同狀態下工作。 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態, <br/> `"hover"` - 當元素被懸停時的狀態, <br/> `"active"` - 元素處於活動狀態時 (如: 在分頁中顯示當前頁面)                                                                                                                                   |
| `config?.opacity`         | `boolean`                                |    `true`    | 控制是否可以更改顏色的不透明度。如果設置為 `false`，則不會顯示不透明度滑塊。                                                                                                                                                                                                                                                                                                  |
| `config?.isPaletteHidden` | `boolean`                                |   `false`    | 控制是否可以更改顏色調色板。如果設置為 `true`，則不會顯示顏色調色板。                                                                                                                                                                                                                                                                                                         |
| `default?  `              | `Default`                                |      -       | 控制項的預設值。 <br/> <br/> <b>`Default: { hex: string; palette: string; opacity: number; }`</b> <br/> <br/> `hex` - 控制項的自定義 hex 值 <br/> `palette` - 控制項的自定義調色板值 <br/> `opacity` - 控制項的自定義不透明度值                                                                                                                                               |
| `style?`                  | `function`                               |      -       | 該函數根據控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，其中保存控制項的當前值。該函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的對象。 <pre>`style: ({value}) => {`<br/> `return {`<br/> &nbsp;`"{{WRAPPER}} .brz-text": {`<br/> &nbsp; &nbsp; `color: value.hex`,<br/> &nbsp; &nbsp; `opacity: value.opacity`<br/> &nbsp; &nbsp; `}`<br/> &nbsp; `}`<br/>`}`</pre> |

### 基本範例

僅使用必要鍵的標準定義。此控制項將在所有設備上可見。

```js
{
  id: "color",
  type: "colorPicker"
}
```

### 返回值

返回一個包含以下值的對象：

```js
{
  hex: string;
  opacity: number;
  palette: string | undefined;
}
```

`hex` - 以十六進制格式定義陰影的顏色；<br/>
`opacity` - 表示陰影的不透明度；<br/>
`palette` - 從全局樣式中預定義的調色板；<br/>

值的範例：

```js
{
  hex: "#ffffff",
  opacity: 1,
  palette: "color5"
}
```

### 用法

#### 類名範例

將 CSS 類名添加到控制項的 DOM 節點。

```js
{
  id: "color",
  type: "colorPicker",
  className: "myClass"
}
```

#### 角色範例

僅向具有管理員和設計師權限的用戶顯示此控制項。

```js
{
  id: "color",
  type: "colorPicker",
  roles: ["admin", "designer"]
}
```

#### 設備範例

它將在所有設備上呈現。此值可以省略，因為默認為 `"all"`。

```js
{
  id: "color",
  type: "colorPicker",
  devices: "all"
}
```

僅在 `desktop` 上呈現。

```js
{
  id: "color",
  type: "colorPicker",
  devices: "desktop"
}
```

顯示僅限於響應模式，特定於 `tablet` 和 `mobile`。

```js
{
  id: "color",
  type: "colorPicker",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是你的動態條件。

```js
{
  id: "color",
  type: "colorPicker",
  disabled: true
}
```

當 `videoType` 變量為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個允許我們通過 ID 獲取控制項值的獲取函數。
`"videoType"` 是下方 `"select"` 控制項的 ID。

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
      id: "color",
      type: "colorPicker",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 狀態範例

允許控制項在正常和懸停狀態下工作。

```js
{
  id: "color",
  type: "colorPicker",
  states: ["normal", "hover"]
}
```

允許控制項在正常、懸停和激活狀態下工作。

```js
{
  id: "color",
  type: "colorPicker",
  states: ["normal", "hover", "active"]
}
```

#### `opacity` 配置範例

關閉不透明度滑塊

```js
{
  id: "color",
  type: "colorPicker",
  config: {
    opacity: false
  }
}
```

#### `isPaletteHidden` 配置範例

關閉顏色調色板

```js
{
  id: "color",
  type: "colorPicker",
  config: {
    isPaletteHidden: true
  }
}
```

#### 預設值範例

在此範例中，`colorPicker` 控制項的預設值為 `"#d02213"`。

```js
{
  id: "color",
  type: "colorPicker",
  default: {
    hex: "#d02213",
    opacity: 1,
    palette: ""
  }
}
```

#### CSS 範例

使用 `colorPicker` 控制項中的自定義值來更改 `.brz-text` 元素的顏色。

```js
{
  id: "color",
  type: "colorPicker",
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text": {
        color: value.value.hex
      },
      "{{WRAPPER}}":{
        opacity: value.value.opacity
      }
    }
  }
}
```

#### HTML 用法範例

在下面的範例中，我們使用 colorPicker 的輸出值來決定按鈕元素中圖標的顏色。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";
import { Icon } from "./Icon";

interface Props {
  colorHex: string;
  colorOpacity: number;
}

const Button = (props: Props): JSX.Element => {
  const { colorHex, colorOpacity } = props;

  return (
    <div className="brz-button">
      <Icon size={16} color={colorHex} opacity={colorOpacity} />
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
                id: "color",
                type: "colorPicker",
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
