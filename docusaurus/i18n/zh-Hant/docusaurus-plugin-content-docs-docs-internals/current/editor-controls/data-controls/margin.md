---
toc_max_heading_level: 4
---

# 邊距

Brizy 的 `margin` 控制提供了一組滑桿，允許你調整組件在四個方向上的邊距：`上`、`下`、`左` 和 `右`。

`grouped` 控制的示例：

![GroupedUnits](/img/controls/marginGroupedUnits.png)
![Grouped](/img/controls/marginGrouped.png)

`ungrouped` 控制的示例：

![Ungrouped](/img/controls/marginUngrouped.png)

### 參數

| 名稱            | 類型                                      |    預設值    | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :-------------- | :---------------------------------------- | :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`            | `string`                                  |      -       | `margin` 將儲存你的數據的鍵的識別碼。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `type`          | `string`                                  |      -       | 類型應為 `"margin"` 以使用此控制。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `label?`        | `string`                                  |      -       | 顯示在控制的左側的標籤。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `icon?`         | `string`                                  |      -       | 會顯示在控制標籤左側的圖標名稱。查看所有 [圖標](../../icons/)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `position?`     | `number`                                  |      -       | 控制在工具欄中的位置。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `roles?`        | `Array<Role>`                             |      -       | 僅在當前用戶的角色匹配提供的角色數組中的一個角色時，渲染控制。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `devices?`      | `"all"` \| `"desktop"` \| `"responsive"`  |   `"all"`    | 定義控制將在哪些設備上渲染。`"all"` 在所有設備上渲染控制。`"desktop"` 僅在桌面設備上渲染控制。`"responsive"` 在平板和移動設備上渲染控制。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `disabled?`     | `boolean`                                 |   `false`    | 配置控制何時禁用或啟用的條件。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `states?`       | `Array<State>`                            | [`"normal"`] | 根據元素的狀態允許不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態，<br/> `"hover"` - 當元素被懸停時的狀態，<br/> `"active"` - 當元素處於活動狀態（例如，分頁中的當前頁面）時的狀態。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `config?.edges` | `"all"` \| `"vertical"` \| `"horizontal"` |   `"all"`    | 邊緣配置值決定了哪些軸上的操作被啟用。設置為 `"horizontal"` 時，啟用 x 軸上的操作。設置為 `"vertical"` 時，啟用 y 軸上的操作。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `config?.units` | `Array<Unit>`                             | `["px","%"]` | 顯示在滑桿值旁邊的測量單位。<br/> 接受 CSS 單位 (`"px"`, `"%"`) <br/> <br/> <b>`type Unit = "px" \| "%"`</b>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `default?`      | `Default`                                 |      -       | 預設控制值。 <br/> <br/> <b>`Default: { type: "grouped" \| "ungrouped"; value: number; suffix: Unit; top: number; topSuffix: Unit; right: number; rightSuffix: Unit; bottom: number; bottomSuffix: Unit; left: number; leftSuffix: Unit;}`</b> <br/> <br/> <b>`type Unit = "px" \| "%"`</b> <br/> <br/> `type` - 表示所有空間應用相同的邊距 (`"grouped"`) 還是每個空間有不同的邊距 (`"ungrouped"`); <br/> `value` - 當 `type` 為 `"grouped"` 時應用於所有空間的邊距值; <br/> `value` - 均勻邊距的單位，可以是 `"px"`（像素）或 `"%"`（百分比）; <br/> `top` - 專門應用於上方空間的邊距值; <br/> `topSuffix` - 上方空間邊距的單位，可以是 `"px"` 或 `"%"`; <br/> `right` - 專門應用於右側空間的邊距值; <br/> `rightSuffix` - 右側空間邊距的單位，可以是 `"px"` 或 `"%"`; <br/> `bottom` - 專門應用於下方空間的邊距值; <br/> `bottomSuffix` - 下方空間邊距的單位，可以是 `"px"` 或 `"%"`; <br/> `left` - 專門應用於左側空間的邊距值; <br/> `leftSuffix` - 左側空間邊距的單位，可以是 `"px"` 或 `"%"`; <br/> |
| `selector?`     | `string`                                  |      -       | 將應用樣式的 CSS 選擇器                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `style?`        | `function`                                |      -       | 該函數根據來自控制的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，其中保存了控制的當前值。該函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的對象。 <pre>`style: ({value}) => { `<br/> `const {`<br/> ` top,`<br/> `topUnit,`<br/> `right,`<br/> `rightUnit,`<br/> `bottom,`<br/> `bottomUnit,`<br/> `left,`<br/> `leftUnit`<br/> `} = value;`<br/> ` `<br/> `return {`<br/> `  "{{WRAPPER}} .brz-text": {`<br/> `    "margin-top": ${top}${topUnit},`<br/> `    "margin-right": ${right}${rightUnit},`<br/> `    "margin-bottom": ${bottom}${bottomUnit},`<br/> `    "margin-left": ${left}${leftUnit}` <br/> `  }` <br/>`  };`<br/>};</pre>                                                                                                                                                                                                                                                                                                                                                              |

### 基本示例

使用僅包含必要鍵的標準定義。此控制將顯示在所有設備上。後綴

```js
{
  id: "margin",
  type: "margin"
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

值的示例：

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

### 使用方法

#### 標籤示例

在控制的左側添加標籤。

```js
{
  id: "margin",
  label: "空間",
  type: "margin"
}
```

#### 圖標示例

在控制的標籤左側添加 `"margin"` 圖標。

```js
{
  id: "margin",
  type: "margin",
  icon: "nc-margin"
}
```

#### 角色示例

僅向擁有 `admin` 和 `designer` 權限的用戶顯示控制。

```js
{
  id: "margin",
  type: "margin",
  roles: ["admin", "designer"]
}
```

#### 設備示例

將在所有設備上渲染。此值可以省略，因為預設為 `"all"`。

```js
{
  id: "margin",
  type: "margin",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "margin",
  type: "margin",
  devices: "desktop"
}
```

顯示僅限於響應模式，特別是 `tablet` 和 `mobile`。

```js
{
  id: "margin",
  type: "margin",
  devices: "responsive"
}
```

#### 禁用示例

控制將被禁用。通常，這裡應該是你的動態條件。

```js
{
  id: "margin",
  type: "margin",
  disabled: true
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
      id: "margin",
      type: "margin",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 狀態示例

允許控制在正常和懸停狀態下工作。

```js
{
  id: "margin",
  type: "margin",
  states: ["normal", "hover"]
}
```

允許控制在正常、懸停和活動狀態下工作。

```js
{
  id: "margin",
  type: "margin",
  states: ["normal", "hover", "active"]
}
```

#### `units` 配置值示例

`units` 屬性設置為 `"%"`，表示配置值將被解釋為相對於元素尺寸的百分比。

```js
{
  id: "margin",
  type: "margin",
  config: {
    units: ["%"]
  }
}
```

#### `edges` 配置值示例

當 `edges` 為 `horizontal` 時，將啟用 `x` 軸上的操作。
當 `edges` 為 `vertical` 時，將啟用 `y` 軸上的操作。

```js
{
  id: "margin",
  type: "margin",
  config: {
    edges: "horizontal"
  }
}
```

```js
{
  id: "margin",
  type: "margin",
  config: {
    edges: "vertical"
  }
}
```

#### 預設值示例

在此示例中，`margin` 控制被定義為具有多個預設值，以指定其初始狀態。`id` 和 `type` 屬性都表示此控制處理 `margin` 設置。控制內的 `default` 對象包含屬性及其預設值。

```js
{
  id: "margin",
  type: "margin",
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

#### CSS 示例 (`selector`, `style`)

使用 `selector` 配置 `.brz-container` 元素的 CSS `margin` 屬性。所有樣式將自動應用。

```js
{
  id: "margin",
  type: "margin",
  selector: ".brz-container"
}
```

此代碼根據 `type` 值動態調整具有 `.brz-container` 類別的元素的 `margin` 樣式。如果 `type` 為 `"ungrouped"`，則元素將具有 `ungroupedMargin`；否則，將具有 `groupedMargin`。

```js
{
  id: "margin",
  type: "margin",
  style: ({ value }) => {
    const { type, value, unit, top, topUnit, bottom , bottomUnit} = value;

    const groupedMargin = `${value}${unit}`;
    const ungroupedMargin = `${top}${topUnit} ${bottom}${bottomUnit}`;
    const margin = type === "grouped" ? groupedMargin : ungroupedMargin;

   return {
      ".brz-container": { margin  }
     }
   }
}
```

#### HTML 使用示例

在下面的示例中，我們使用 `margin` 屬性值動態設置按鈕內的 span 元素的內聯樣式。`margin` 值可以是 `像素`（"px"）或 `百分比`（"%"）。按鈕組件接受不同類型邊距的 props，包括分組邊距和每個側面的單獨邊距。這些 props 控制按鈕標籤周圍的間距。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

type Unit = "px" | "%";

interface Props {
  marginType: "grouped" | "ungrouped";
  margin: number;
  marginSuffix: Unit;
  marginTop: number;
  marginTopSuffix: Unit;
  marginRight: number;
  marginRightSuffix: Unit;
  marginBottom: number;
  marginBottomSuffix: Unit;
  marginLeft: number;
  marginLeftSuffix: Unit;
}

const Button = (props: Props): JSX.Element => {
  const {
    marginType,
    margin,
    marginSuffix,
    marginTop,
    marginTopSuffix,
    marginRight,
    marginRightSuffix,
    marginBottom,
    marginBottomSuffix,
    marginLeft,
    marginLeftSuffix,
  } = props;

  const groupedMargin = `${margin}${marginSuffix}`;
  const ungroupedMargin = `${marginTop}${marginTopSuffix} ${marginRight}${marginRightSuffix} ${marginBottom}${marginBottomSuffix} ${marginLeft}${marginLeftSuffix}`;

  return (
    <div className="brz-button">
      <span style={{ margin: marginType === "grouped" ? groupedMargin : ungroupedMargin }}>Click</span>
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
                    id: "margin",
                    label: "邊距",
                    type: "margin",
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
