---
sidebar_position: 1
toc_max_heading_level: 4
---

# 邊距 (Padding)

Brizy 的 `padding` 控制項提供了一組滑桿，允許你調整元件在四個方向上的邊距：`上`、`下`、`左` 和 `右`。

### `grouped` 控制項範例

![GroupedUnits](/img/controls/paddingGroupUnits.png)
![Grouped](/img/controls/paddingGroup.png)

### `ungrouped` 控制項範例

![Ungrouped](/img/controls/paddingUngroup.png)

### 參數

| 名稱            | 類型                                    |    預設值    | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :-------------- | :-------------------------------------- | :----------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`            | `string`                                |      -       | 控制項儲存邊距數據的鍵的標識符                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `type`          | `string`                                |      -       | 類型應設為 `"padding"` 以使用此控制項                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `label?`        | `string`                                |      -       | 顯示在控制項左側的標籤                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `icon?`         | `string`                                |      -       | 顯示在控制項標籤左側的圖示名稱。查看所有 [圖示](../../icons/)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `position?`     | `number`                                |      -       | 控制項在工具欄中的位置                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `roles?`        | `Array<Role>`                           |      -       | 僅在當前用戶的角色與提供的角色數組中的一個匹配時渲染控制項。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `devices?`      | `"all"` \|`"desktop"` \| `"responsive"` |   `"all"`    | 定義控制項將在哪些設備上渲染。`"all"` 表示在所有設備上渲染控制項。`"desktop"` 表示僅在桌面設備上渲染控制項。`"responsive"` 表示在平板和手機設備上渲染控制項。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `disabled?`     | `boolean`                               |   `false`    | 配置控制項禁用或啟用的條件。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `states?`       | `Array<State>`                          | [`"normal"`] | 允許根據元素的狀態使用不同的樣式。<br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態，<br/> `"hover"` - 當元素被懸停時的狀態，<br/> `"active"` - 當元素處於活動狀態（例如，分頁中的當前頁面）時的狀態。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `config?.units` | `Array<Unit>`                           | `["px","%"]` | 顯示在滑桿值旁邊的測量單位。<br/> 支援 CSS 單位 (`"px"`, `"%"`) <br/> <br/> <b>`type Unit = "px" \| "%"`</b>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `default?`      | `Default`                               |      -       | 控制項的預設值。<br/> <br/> <b>`Default: { type: "grouped" \| "ungrouped"; value: number; suffix: Unit; top: number; topSuffix: Unit; right: number; rightSuffix: Unit; bottom: number; bottomSuffix: Unit; left: number; leftSuffix: Unit;}`</b> <br/> <br/><b> `type Unit = "px" \| "%"`</b> <br/> <br/> `type` - 指示所有空間是否應用相同的邊距 (`"grouped"`) 或每個空間是否有不同的邊距 (`"ungrouped"`)； <br/> `value` - 當 `paddingType` 為 `"grouped"` 時，應用於所有空間的邊距值； <br/> `suffix` - 統一邊距的單位，`"px"` 表示像素，`"%"` 表示百分比； <br/> `top` - 特定應用於上方空間的邊距值； <br/> `topSuffix` - 上方空間邊距的單位，`"px"` 或 `"%"`； <br/> `right` - 特定應用於右側空間的邊距值； <br/> `rightSuffix` - 右側空間邊距的單位，`"px"` 或 `"%"`； <br/> `bottom` - 特定應用於下方空間的邊距值； <br/> `bottomSuffix` - 下方空間邊距的單位，`"px"` 或 `"%"`； <br/> `left` - 特定應用於左側空間的邊距值； <br/> `leftSuffix` - 左側空間邊距的單位，`"px"` 或 `"%"`； <br/> |
| `selector?`     | `string`                                |      -       | 要應用樣式的 CSS 選擇器                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `style?`        | `function`                              |      -       | 此函數根據控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，該鍵持有控制項的當前值。函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的對象。<pre>`style: ({value}) => { `<br/> `const {`<br/> ` top,`<br/> `topUnit,`<br/> `right,`<br/> `rightUnit,`<br/> `bottom,`<br/> `bottomUnit,`<br/> `left,`<br/> `leftUnit`<br/> `} = value;`<br/> ` `<br/> `return {`<br/> `  "{{WRAPPER}} .brz-text": {`<br/> `    "padding-top": ${top}${topUnit},`<br/> `    "padding-right": ${right}${rightUnit},`<br/> `    "padding-bottom": ${bottom}${bottomUnit},`<br/> `    "padding-left": ${left}${leftUnit}` <br/> `  }` <br/>`  };`<br/>};</pre>                                                                                                                                                                                                                                                                                                                                                           |

### 基本範例

標準定義僅包含必需的鍵。這個控制項將在所有設備上顯示。

```js
{
  id: "padding",
  type: "padding"
}
```

### 返回值

返回一個包含以下值的對象：

```js
{
  type: "grouped" | "ungrouped";
  value: number;
  unit: "px" | "%";
  top: number;
  topUnit: "px" | "%";
  right: number;
  rightUnit: "px" | "%";
  bottom: number;
  bottomUnit: "px" | "%";
  left: number;
  leftUnit: "px" | "%";
}
```

值的範例：

```js
{
  type: "grouped",
  value: 10,
  unit: "px",
  top: 0,
  topUnit: "px",
  right: 0,
  rightUnit: "px",
  bottom: 0,
  bottomUnit: "px",
  left: 0,
  leftUnit: "px"
}
```

### 使用範例

#### 標籤範例

在控制項左側添加標籤。

```js
{
  id: "padding",
  label: "間距",
  type: "padding"
}
```

#### 圖示範例

在控制項標籤左側添加 `"padding"` 圖示。

```js
{
  id: "padding",
  type: "padding",
  icon: "nc-padding"
}
```

#### 角色範例

僅向擁有 `admin` 和 `designer` 權限的用戶顯示控制項。

```js
{
  id: "padding",
  type: "padding",
  roles: ["admin", "designer"]
}
```

#### 設備範例

將在所有設備上渲染。這個值可以被忽略，因為默認值為 `"all"`。

```js
{
  id: "padding",
  type: "padding",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "padding",
  type: "padding",
  devices: "desktop"
}
```

顯示限制為響應式模式，即 `tablet` 和 `mobile`。

```js
{
  id: "padding",
  type: "padding",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常這裡應該是你的動態條件。

```js
{
  id: "padding",
  type: "padding",
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
      id: "padding",
      type: "padding",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 狀態範例

允許控制項在正常和懸停狀態下工作。

```js
{
  id: "padding",
  type: "padding",
  states: ["normal", "hover"]
}
```

允許控制項在正常、懸停和活動狀態下工作。

```js
{
  id: "padding",
  type: "padding",
  states: ["normal", "hover", "active"]
}
```

#### `units` 配置值範例

`units` 屬性設為 `"%"`，表示配置值將以百分比形式相對於元素的尺寸進行解釋。

```js
{
  id: "padding",
  type: "padding",
  config: {
    units: ["%"]
  }
}
```

#### 預設值範例

在這個範例中，`padding` 控制項定義了幾個預設值以指定其初始狀態。`id` 和 `type` 屬性都指示這個控制項處理 `padding` 設置。控制項內的 `default` 對象包含屬性及其預設值。

```js
{
  id: "padding",
  type: "padding",
  default: {
    type: "ungrouped",
    value: 10,
    suffix: "px",
    top: 0,
    topSuffix: "px",
    right: 0,
    rightSuffix: "px",
    bottom: 0,
    bottomSuffix: "px",
    left: 0,
    leftSuffix: "px"
  }
}
```

#### CSS 範例 (`selector`, `style`)

使用 `selector` 配置 `.brz-container` 元素的 CSS `padding` 屬性。所有樣式將自動應用。

```js
{
  id: "padding",
  type: "padding",
  selector: ".brz-container"
}
```

這段代碼根據 `type` 值動態調整 `.brz-container` 類別的 `padding` 樣式。如果 `type` 為 `"ungrouped"`，則元素將具有 `ungroupedPadding`；否則，它們將具有 `groupedPaddings`。

```js
{
  id: "padding",
  type: "padding",
  style: ({ value }) => {
    const { type, value, unit, top, topUnit, bottom, bottomUnit } = value;

    const groupedPadding = `${value}${unit}`;
    const ungroupedPadding = `${top}${topUnit} ${bottom}${bottomUnit}`;
    const padding = type === "grouped" ? groupedPadding : ungroupedPadding;

    return {
      ".brz-container": { padding }
    }
  }
}
```

#### HTML 使用範例

在下面的範例中，我們使用 `padding` 屬性值動態設置按鈕內 `span` 元素的內聯樣式。`padding` 值可以是 `像素` ("px") 或 `百分比` ("%")。按鈕組件接受不同類型的邊距 props，包括一個分組的 `padding` 和每個側邊的單獨邊距。這些 props 控制按鈕標籤周圍的間距。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

type Unit = "px" | "%";

interface Props {
  paddingType: "grouped" | "ungrouped";
  padding: number;
  paddingSuffix: Unit;
  paddingTop: number;
  paddingTopSuffix: Unit;
  paddingRight: number;
  paddingRightSuffix: Unit;
  paddingBottom: number;
  paddingBottomSuffix: Unit;
  paddingLeft: number;
  paddingLeftSuffix: Unit;
}

const Button = (props: Props): JSX.Element => {
  const {
    paddingType,
    padding,
    paddingSuffix,
    paddingTop,
    paddingTopSuffix,
    paddingRight,
    paddingRightSuffix,
    paddingBottom,
    paddingBottomSuffix,
    paddingLeft,
    paddingLeftSuffix,
  } = props;

  const groupedPadding = `${padding}${paddingSuffix}`;
  const ungroupedPadding = `${paddingTop}${paddingTopSuffix} ${paddingRight}${paddingRightSuffix} ${paddingBottom}${paddingBottomSuffix} ${paddingLeft}${paddingLeftSuffix}`;

  return (
    <div className="brz-button">
      <span style={{ padding: paddingType === "grouped" ? groupedPadding : ungroupedPadding }}>Click</span>
    </div>
  );
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
            id: "settingsTabs",
            type: "tabs",
            tabs: [
              {
                id: "settingsStyling",
                label: "基本",
                icon: "nc-styling",
                options: [
                  {
                    id: "padding",
                    label: "邊距",
                    type: "padding",
                    devices: "desktop",
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
