---
toc_max_heading_level: 4
---

# 邊角

`corners` 控制項提供了一個介面，用於修改元素的 CSS `border-radius` 屬性。

分組的 `corners` 示例：<br/>
![CornersGrouped](/img/controls/cornerGrouped.png)<br/>
![CornersGrouped](/img/controls/cornerGroupedSecond.png)<br/><br/>
未分組的 `corners` 示例：<br/>
![CornersUngrouped](/img/controls/cornerUngrouped.png)

### 參數

| 名稱               | 類型                                                                                                                                                                                       |    預設值    | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |      -       | 控制項將儲存數據的鍵的識別碼                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `type`             | `string`                                                                                                                                                                                   |      -       | 類型應為 `"corners"` 以使用此控制項                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `label?`           | `string`                                                                                                                                                                                   |      -       | 顯示在控制項左側的標籤                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | 將在控制項標籤的左側渲染的圖示名稱。查看所有[圖示](/docs-internals/icons/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `position?`        | `number`                                                                                                                                                                                   |      -       | 控制項在工具欄中的位置                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | 僅當當前使用者的角色符合提供的陣列中的角色之一時，才渲染此控制項 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義在何種裝置上渲染此控制項。`"all"` 會在所有裝置上渲染此控制項。`"desktop"` 只會在桌面裝置上渲染此控制項。`"responsive"` 則會在平板和手機裝置上渲染此控制項                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | 配置控制項何時被禁用或啟用的條件                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | 如果提供，會在標籤旁顯示一個圖示。當滑鼠懸停在該圖示上時，將顯示包含附加資訊的工具提示                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於輔助圖示的位置                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 允許根據元素的狀態設定不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態，<br/> `"hover"` - 當元素被懸停時的狀態，<br/> `"active"` - 當元素處於活動狀態（例如，在分頁中的當前頁面）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `config?.units`    | `Array<Unit>`                                                                                                                                                                              | `["px","%"]` | 顯示在滑桿值旁的度量單位。<br/> 接受 CSS 單位（`"px"`、`"%"`） <br/> <br/> <b>`Unit = "px" \| "%"`</b>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | 控制項的預設值。 <br/> <br/> <b>`Default: { value: {radiusType: string; radius: number; radiusSuffix: string; topLeftRadius: number; topLeftRadiusSuffix: string; topRightRadius: number; topRightRadiusSuffix: string; bottomRightRadius: number; bottomRightRadiusSuffix: string; bottomLeftRadius: number; bottomLeftRadiusSuffix: string;}; }`</b> <br/> <br/> `radiusType`- 表示是否將相同的半徑應用於所有邊角（`"grouped"`）或每個邊角具有不同的半徑（`"ungrouped"`）；<br/>`radius`- 當 `radiusType` 為 `"grouped"` 時，應用於所有邊角的半徑值；<br/>`radiusSuffix` - 統一半徑的單位，為像素 `"px"` 或百分比 `"%"`；<br/>`topLeftRadius` - 特別應用於左上角的半徑值；<br/>`topLeftRadiusSuffix`- 左上角半徑的單位，為 `"px"` 或 `"%"`；<br/>`topRightRadius`- 特別應用於右上角的半徑值；<br/>`topRightRadiusSuffix` - 右上角半徑的單位，為 `"px"` 或 `"%"`；<br/>`bottomRightRadius` - 特別應用於右下角的半徑值；<br/>`bottomRightRadiusSuffix` - 右下角半徑的單位，為 `"px"` 或 `"%"`；<br/>`bottomLeftRadius` - 特別應用於左下角的半徑值；<br/>`bottomLeftRadiusSuffix` - 左下角半徑的單位，為 `"px"` 或 `"%"`；<br/> |
| `selector?`        | `string`                                                                                                                                                                                   |      -       | 應用樣式的 CSS 選擇器                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `style?`           | `function`                                                                                                                                                                                 |      -       | 此函數根據控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的物件，該鍵包含控制項的當前值。此函數返回一個帶有 CSS 選擇器鍵和 CSS 屬性值的物件。<pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-ui-ed-map-content": {`<br/> `display: value.type === "grouped" ? "flex" : "none"`<br/> `}`<br/> `}`<br/>`}`</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### 基本範例

僅包含必需鍵的標準定義。此控制項將顯示在所有裝置上。

```js
{
  id: "radius",
  type: "corners"
}
```

### 返回值

返回包含以下值的物件：

```js
{
  radiusType: "grouped" | "ungrouped",
  radius: number,
  radiusSuffix: "px" | "%",
  topLeftRadius: number,
  topLeftRadiusSuffix: "px" | "%",
  topRightRadius: number,
  topRightRadiusSuffix: "px" | "%",
  bottomRightRadius: number,
  bottomRightRadiusSuffix: "px" | "%",
  bottomLeftRadius: number,
  bottomLeftRadiusSuffix: "px" | "%"
}
```

值的範例：

`radiusType` - 指示是否將相同的圓角半徑應用於所有角落 (`"grouped"`) 或每個角落有不同的半徑 (`"ungrouped"`); <br/>
`radius` - 當 `radiusType` 為 `"grouped"` 時應用於所有角落的圓角半徑值；<br/>
`radiusSuffix` - 統一的半徑單位，可以是 `"px"` 表示像素或 `"%"` 表示百分比；<br/>
`topLeftRadius` - 專門應用於左上角的圓角半徑值；<br/>
`topLeftRadiusSuffix` - 左上角半徑的單位，`"px"` 或 `"%"`；<br/>
`topRightRadius` - 專門應用於右上角的圓角半徑值；<br/>
`topRightRadiusSuffix` - 右上角半徑的單位，`"px"` 或 `"%"`；<br/>
`bottomRightRadius` - 專門應用於右下角的圓角半徑值；<br/>
`bottomRightRadiusSuffix` - 右下角半徑的單位，`"px"` 或 `"%"`；<br/>
`bottomLeftRadius` - 專門應用於左下角的圓角半徑值；<br/>
`bottomLeftRadiusSuffix` - 左下角半徑的單位，`"px"` 或 `"%"`；<br/>

```js
{
  radiusType: "ungrouped",
  radius: 10,
  radiusSuffix: "%",
  topLeftRadius: 10,
  topLeftRadiusSuffix: "px",
  topRightRadius: 20,
  topRightRadiusSuffix: "%",
  bottomRightRadius: 20,
  bottomRightRadiusSuffix: "px",
  bottomLeftRadius: 10,
  bottomLeftRadiusSuffix: "px"
}
```

### 使用方式

#### 標籤範例

在控制項左側添加一個標籤。

```js
{
  id: "radius",
  type: "corners",
  label: "Corner"
}
```

#### 圖標範例

在控制項的標籤左側添加一個 "round" 圖標。

```js
{
  id: "radius",
  type: "corners",
  icon: "nc-round"
}
```

#### 角色範例

僅向具有 admin 和 designer 權限的使用者顯示此控制項。

```js
{
  id: "radius",
  type: "corners",
  roles: ["admin", "designer"]
}
```

#### 裝置範例

將在所有裝置上呈現。此值可以省略，因為預設設置為 `"all"`。

```js
{
  id: "radius",
  type: "corners",
  devices: "all"
}
```

僅在 `desktop` 裝置上呈現。

```js
{
  id: "radius",
  type: "corners",
  devices: "desktop"
}
```

顯示將限於響應模式，具體來說是 `tablet` 和 `mobile`。

```js
{
  id: "radius",
  type: "corners",
  devices: "responsive"
}
```

#### 停用範例

控制項將被停用。通常這裡應該有動態條件。

```js
{
  id: "radius",
  type: "corners",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被停用。  
`getValue` 是一個獲取器函數，允許我們通過 id 獲取控制項的值。  
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
      id: "radius",
      type: "corners",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 助手範例

`helper` 物件包含一個名為 `content` 的屬性，其值為 `"Border Radius"`，將作為使用者的額外指導或信息顯示。

```js
{
  id: "radius",
  type: "corners",
  helper: {
    content: "Border Radius"
  }
}
```

當 `helper` 物件包含 `position` 屬性，其值為 `"top-start"` 時，表示輔助文本將顯示在圖標的左上角。

```js
{
  id: "radius",
  type: "corners",
  helper: {
    content: "Border Radius",
    position: "top-start"
  }
}
```

#### 狀態範例

允許控制項在正常和懸停狀態下運作。

```js
{
  id: "radius",
  type: "corners",
  states: ["normal", "hover"]
}
```

允許控制項在正常、懸停和激活狀態下運作。

```js
{
  id: "radius",
  type: "corners",
  states: ["normal", "hover", "active"]
}
```

#### 配置 `units` 範例

`config.units` 屬性設置為 `"%"`，表示配置值將被解釋為相對於元素尺寸的百分比。

```js
{
  id: "radius",
  type: "corners",
  config: {
    units: ["%"]
  }
}
```

#### 預設值範例

在此範例中，角落為 `ungrouped`，並為元素的每個角落指定了預設值。

```js
{
  id: "radius",
  type: "corners",
  default: {
    radiusType: "ungrouped",
    topLeftRadius: 10,
    topLeftRadiusSuffix: "px",
    topRightRadius: 20,
    topRightRadiusSuffix: "%",
    bottomRightRadius: 20,
    bottomRightRadiusSuffix: "px",
    bottomLeftRadius: 10,
    bottomLeftRadiusSuffix: "px"
  }
}
```

在此範例中，角落為 `grouped`，僅為邊框圓角設定了一個值，並使用 `"px"` 作為單位。

```js
{
  id: "radius",
  type: "corners",
  default: {
   radiusType: "grouped",
   radius: "10",
   radiusSuffix: "px"
  }
}
```

#### CSS 範例 (`selector`, `style`)

使用 `selector` 配置 `.brz-ui-ed-map-content` 元素的 CSS `border-radius` 屬性。所有樣式將自動應用。

```js
{
  id: "radius",
  type: "corners",
  selector: "{{WRAPPER}} .brz-ui-ed-map-content"
}
```

使用圓角控制項值顯示或隱藏 `.brz-ui-ed-map-content` 元素的 CSS。

```js
{
  id: "radius",
  type: "corners",
  style: ({ value }) => {
    if (value.type === "grouped") {
      return {
        "{{WRAPPER}} .brz-ui-ed-map-content": {
          display: "block"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-ui-ed-map-content": {
        display: "none"
      }
    }
  }
}

```

變更 `.brz-ui-ed-map-content` 和 `.brz-map` 元素的 `pointer-events` 和 `display` 屬性。

```js
{
  id: "radius",
  type: "corners",
  style: ({ value }) => {
    const isEnabled = value.unit === "px" && value.value.length > 0;

    return {
      "{{WRAPPER}} .brz-ui-ed-map-content, {{WRAPPER}} .brz-map": {
        "pointer-events": isEnabled ? "all" : "none",
        "display": isEnabled ? "flex": "block"
      }
    }
  }
}
```

樣式函數根據控制項是 `grouped` 還是 `ungrouped` 動態生成 CSS。如果控制項是 `ungrouped`，則對每個角落分別應用個別值和單位。如果控制項是 `grouped`，則對所有角落應用單一的值和單位。

```js
{
  id: "radius",
  type: "corners",
  style: ({ value }) => {
    if (value.type === "ungrouped") {
      return {
        "{{WRAPPER}} .brz-ui-ed-map-content": {
          "border-top-left-radius": `${value.topLeft}${value.topLeftUnit}`,
          "border-top-right-radius": `${value.topRight}${value.topRightUnit}`,
          "border-bottom-left-radius": `${value.bottomLeft}${value.bottomLeftUnit}`,
          "border-bottom-right-radius": `${value.bottomRight}${value.bottomRightUnit}`
        }
      };
    }

    return {
      "{{WRAPPER}} .brz-ui-ed-map-content": {
        "border-radius": `${value.value}${value.unit}`
      }
    };
  }
}

```

#### HTML 中的使用範例

`corners` 控制項是一個 React 函數組件，旨在管理和顯示帶有單位的角落值。它從 `value` prop 中提取各種屬性，包括角落尺寸及其相應單位，並將它們組織成一個結構化的物件。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  borderRadiusType: "ungrouped" | "grouped";
  borderRadius: number;
  borderRadiusSuffix: "%" | "px";
  borderTopLeftRadius: number;
  borderTopLeftRadiusSuffix: "%" | "px";
  borderTopRightRadius: number;
  borderTopRightRadiusSuffix: "%" | "px";
  borderBottomRightRadius: number;
  borderBottomRightRadiusSuffix: "%" | "px";
  borderBottomLeftRadius: number;
  borderBottomLeftRadiusSuffix: "%" | "px";
}

export const Corners = (props: Props): JSX.Element => {
  const {
    borderRadiusType,
    borderRadius,
    borderRadiusSuffix,
    borderTopLeftRadius,
    borderTopLeftRadiusSuffix,
    borderTopRightRadius,
    borderTopRightRadiusSuffix,
    borderBottomRightRadius,
    borderBottomRightRadiusSuffix,
    borderBottomLeftRadius,
    borderBottomLeftRadiusSuffix,
    children,
  } = props;

  const groupedStyle = {
    borderRadius: `${borderRadius}${borderRadiusSuffix}`,
  };

  const ungroupedStyle = {
    borderTopLeftRadius: `${borderTopLeftRadius}${borderTopLeftRadiusSuffix}`,
    borderTopRightRadius: `${borderTopRightRadius}${borderTopRightRadiusSuffix}`,
    borderBottomRightRadius: `${borderBottomRightRadius}${borderBottomRightRadiusSuffix}`,
    borderBottomLeftRadius: `${borderBottomLeftRadius}${borderBottomLeftRadiusSuffix}`,
  };

  return <div style={borderRadiusType === "grouped" ? groupedStyle : ungroupedStyle}>{children}</div>;
};

Brizy.registerComponent(Corners, {
  id: "ThirdParty.Corners",
  component: { editor: Corners, view: Corners },
  title: "Border Radius",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: "{{WRAPPER}} .brz-ui-ed-map-content",
        id: "borderRadiusType",
        type: "select",
        choices: [
          { title: "Grouped", value: "grouped" },
          { title: "Ungrouped", value: "ungrouped" },
        ],
      },
      {
        selector: "{{WRAPPER}} .brz-ui-ed-map-content",
        id: "borderRadius",
        type: "input",
        suffix: borderRadiusSuffix,
        when: (values) => values.borderRadiusType === "grouped",
      },
      {
        selector: "{{WRAPPER}} .brz-ui-ed-map-content",
        id: "borderTopLeftRadius",
        type: "input",
        suffix: borderTopLeftRadiusSuffix,
        when: (values) => values.borderRadiusType === "ungrouped",
      },
      {
        selector: "{{WRAPPER}} .brz-ui-ed-map-content",
        id: "borderTopRightRadius",
        type: "input",
        suffix: borderTopRightRadiusSuffix,
        when: (values) => values.borderRadiusType === "ungrouped",
      },
      {
        selector: "{{WRAPPER}} .brz-ui-ed-map-content",
        id: "borderBottomRightRadius",
        type: "input",
        suffix: borderBottomRightRadiusSuffix,
        when: (values) => values.borderRadiusType === "ungrouped",
      },
      {
        selector: "{{WRAPPER}} .brz-ui-ed-map-content",
        id: "borderBottomLeftRadius",
        type: "input",
        suffix: borderBottomLeftRadiusSuffix,
        when: (values) => values.borderRadiusType === "ungrouped",
      },
    ];
  },
});
```
