---
toc_max_heading_level: 4
---

# Transform

Brizy 的 `transform` 控制項讓使用者能夠快速且輕鬆地調整設計中任何元件的位置。這個功能簡化了編輯過程，允許精確定位和即時調整，以提升整體佈局和使用者體驗。

`transform` 的範例：

![Transform](/img/controls/transform.png)

### 參數

| 名稱               | 類型                                                                                                                                                                                       | 預設值  | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |    -    | `transform` 將儲存資料的鍵的識別碼                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `type`             | `string`                                                                                                                                                                                   |    -    | 類型應為 `"transform"` 以使用此控制項                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `label?`           | `string`                                                                                                                                                                                   |    -    | 控制項左側顯示的標籤                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `className?`       | `string`                                                                                                                                                                                   |    -    | 會套用到控制項上的自定義 CSS 類名。可用於修改控制項的樣式。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `icon?`            | `string`                                                                                                                                                                                   |    -    | 將顯示在控制項標籤左側的圖示名稱。查看所有 [圖示](../../icons/)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `position?`        | `number`                                                                                                                                                                                   |    -    | 控制項在工具列中的位置                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |    -    | 僅在當前用戶的角色符合提供的角色數組中的一個角色時渲染控制項。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   | `"all"` | 定義控制項將被渲染在哪些設備上。`"all"` 在所有設備上渲染控制項。`"desktop"` 僅在桌面設備上渲染控制項。`"responsive"` 在平板和移動設備上渲染控制項。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `disabled?`        | `boolean`                                                                                                                                                                                  | `false` | 配置控制項的禁用或啟用條件。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `helper?.content`  | `string`                                                                                                                                                                                   |    -    | 如果提供，將在標籤旁顯示圖示。當懸停在此圖示上時，會顯示帶有附加信息的工具提示。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | 指定工具提示相對於輔助圖示的位置。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `config?.disabled` | `Array<Effect>`                                                                                                                                                                            |  `[]`   | 給定一個列表，你可以在其中禁用效果。 <br/> <br/> <b> Effect = `"vertical"` \| `"horizontal"` \| `"transparency"` \| `"blur"` \| `"rotate"` \| `"scale"` \| `"mouseTrack"` \| `"mouseTilt"` </b>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `default?`         | `Default`                                                                                                                                                                                  |    -    | 控制項的預設值。<br/> <br/> <b>`Default: { active: Active; rotateRotate: number; rotateRotate3D: boolean; rotateRotateX: number; rotateRotateY: number; rotateRotatePerspective: number; rotateEnabled: boolean; offsetOffsetX: number; offsetOffsetY: number; offsetEnabled: boolean; skewSkewX: number; skewSkewY: number; skewEnabled: boolean; scaleScaleX: number; scaleScaleY: number; scaleScaleXY: number; scaleScalePreservedSize: boolean; scaleEnabled: boolean; flipFlipHorizontal: boolean; flipFLipVertical: boolean; flipEnabled: boolean;}` </b><br/><br/>`active` - 表示當前選中的變換，可能是 `"rotate"`、`"offset"`、`"skew"`、`"scale"`、`"flip"`，或 `undefined` <br/> `Active: {undefined \| "rotate" \| "offset" \| "skew" \| "scale" \| "flip"}`<br/><br/> `rotateRotate`- 旋轉角度（以度為單位）。 <br/> `rotateRotate3D` - 表示是否啟用 3D 旋轉。 <br/> `rotateRotateX`- X 軸的旋轉角度。 <br/> `rotateRotateY` - Y 軸的旋轉角度。 <br/> `rotateRotatePerspective` - 3D 旋轉的透視值。 <br/> `rotateEnabled` - 表示是否啟用旋轉效果。 <br/><br/> `offsetOffsetX` - 水平偏移度。 <br/> `offsetOffsetY` - 垂直偏移度。 <br/>`offsetEnabled` - 表示是否啟用偏移效果。 <br/><br/> `skewSkewX`- X 軸的傾斜角度。 <br/> `skewSkewY` - Y 軸的傾斜角度。 <br/> `skewEnabled` - 表示是否啟用傾斜效果。 <br/><br/> `scaleScaleX` - X 軸的縮放因子。 <br/> `scaleScaleY` - Y 軸的縮放因子。 <br/> `scaleScalePreservedSize` - 表示縮放時是否保留大小。 <br/> `scaleXY` - 應用於兩個軸的統一縮放因子。 <br/> `scaleEnabled` - 表示是否啟用縮放效果。 <br/><br/> `flipFlipHorizontal` - 表示物件是否應水平翻轉。 <br/> `flipFlipVertical` - 表示物件是否應垂直翻轉。 `flipEnabled` - 表示是否啟用翻轉效果。 |
| `style?`           | `function`                                                                                                                                                                                 |    -    | 此函數根據控制項的值生成 CSS 輸出。參數為一個包含 `value` 鍵的物件，該鍵保存控制項的當前值。函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的物件。 <pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-text": {`<br/> `transform: scale(${value.scale.scaleX},${value.scale.scaleY}) `<br/> `}`<br/> `}`<br/>`}`</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### 基本範例

僅包含必要鍵的標準定義。此控制項會在所有設備上顯示。

```js
{
  id: "effect",
  type: "transform"
}
```

### 返回值

返回一個包含以下值的物件：

```js
{
  active: undefined | "rotate" | "offset" | "skew" | "scale" | "flip";
  rotate: undefined |
    { rotate: number, rotate3D: boolean, rotateX: number, rotateY: number, rotatePerspective: number };
  offset: undefined | { offsetX: number, offsetY: number };
  skew: undefined | { skewX: number, skewY: number };
  scale: undefined | { scaleX: number, scaleY: number, scalePreserveSize: boolean, scaleXY: number };
  flip: undefined | { flipHorizontal: boolean, flipVertical: boolean };
}
```

- `active` - 表示當前選擇的變換，可能是 `"rotate"`、`"offset"`、`"skew"`、`"scale"`、`"flip"`，或 `undefined`。 <br/>
- `rotate` - CSS 屬性，通過指定角度對元素進行旋轉變換，通常圍繞元素的中心進行旋轉。 <br/>
  - `rotate` - 旋轉角度（以度為單位）。 <br/>
  - `rotate3D` - 表示是否啟用 3D 旋轉。 <br/>
  - `rotateX` - X 軸上的旋轉角度。 <br/>
  - `rotateY` - Y 軸上的旋轉角度。 <br/>
  - `rotatePerspective` - 3D 旋轉的透視值。 <br/>
- `offset` - 定義物件在水平方向和垂直方向上移動的參數。 <br/>
  - `offsetX` - 水平偏移度。 <br/>
  - `offsetY` - 垂直偏移度。 <br/>
- `skew` - 定義物件在 X 和 Y 軸上的傾斜參數。 <br/>
  - `skewX` - X 軸上的傾斜角度。 <br/>
  - `skewY` - Y 軸上的傾斜角度。 <br/>
- `scale` - 定義物件縮放的參數。 <br/>
  - `scaleX` - X 軸上的縮放因子。 <br/>
  - `scaleY` - Y 軸上的縮放因子。 <br/>
  - `scalePreserveSize` - 表示在縮放時是否保留大小。 <br/>
  - `scaleXY` - 應用於兩個軸的統一縮放因子。 <br/>
- `flip` - 定義物件水平或垂直翻轉的參數。 <br/>
  - `flipHorizontal` - 表示物件是否應水平翻轉。 <br/>
  - `flipVertical` - 表示物件是否應垂直翻轉。 <br/>

選擇 `"rotate"` 選項時的值範例：

```js
{
  active: "rotate",
  rotateEnabled: true
}
```

當 `"rotate"` 設置更改時：

```js
{
  rotateRotate: 100,
  rotateRotate3D: false,
  rotateRotatePerspective: 1000,
  rotateRotateX: 0,
  rotateRotateY: 0
}
```

### 使用範例

#### 標籤範例

在控制項的左側添加標籤。

```js
{
  id: "effect",
  type: "transform",
  label: "Transform"
}
```

#### 類名範例

將 CSS 類添加到控制項的 DOM 節點。

```js
{
  id: "effect",
  type: "transform",
  className: "brz-transform"
}
```

#### 圖示範例

在控制項標籤的左側添加 "effects" 圖示。

```js
{
  id: "effect",
  type: "transform",
  icon: "nc-effects"
}
```

#### 角色範例

僅顯示給具有管理員和設計師權限的用戶。

```js
{
  id: "effect",
  type: "transform",
  roles: ["admin", "designer"]
}
```

#### 設備範例

將在所有設備上渲染。此值可以省略，因為預設為 `"all"`。

```js
{
  id: "effect",
  type: "transform",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "effect",
  type: "transform",
  devices: "desktop"
}
```

僅在響應模式下顯示，具體為 `tablet` 和 `mobile`。

```js
{
  id: "effect",
  type: "transform",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是你的動態條件。

```js
{
  id: "effect",
  type: "transform",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個 getter 函數，用於通過其 id 獲取控制項的值。
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
      id: "effect",
      type: "transform",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 輔助範例

輔助物件包含一個 `content` 屬性，值為 `"help text"`，將顯示為額外的指導或信息。

```js
{
  id: "effect",
  type: "transform",
  helper: {
    content: "this is the transform control"
  }
}
```

當輔助物件包含 `position` 屬性，值為 `"top-start"` 時，表示輔助文本將顯示在圖示的左上角。

```js
{
  id: "effect",
  type: "transform",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### 配置 `disabled` 範例

效果 `"skew"` 和 `"flip"` 將被禁用。

```js
{
 id: "effect",
 type: "transform",
 config: {
   disabled: ["skew", "flip"]
 }
}
```

#### 預設值範例

在此範例中，`transform` 控制項的值 `{active: "rotate"}` 將使 `"rotate"` 選項為活動狀態。

```js
{
  id: "effect",
  type: "transform",
  default: {
    active: "rotate"
  }
}
```

設置所有預設值的 `transform` 控制項如下：

```js
{
  id: "effect",
  type: "transform",
  default: {
    active: "offset",
    offsetOffsetX: 2,
    offsetOffsetY: 3,
    offsetEnabled: true,
    rotateRotate: 35,
    rotateRotate3D: true,
    rotateRotateX: 0,
    rotateRotateY: 0,
    rotateRotatePerspective: 0,
    rotateEnabled: true,
    skewEnabled: true,
    skewSkewX: 10,
    skewSkewY: 2,
    scaleEnabled: false,
    scaleScaleX: 0.3,
    scaleScaleY: 0.1,
    flipFlipHorizontal: false,
    flipFlipVertical: true,
    flipEnabled: false
  }
}
```

#### CSS 範例

將旋轉變換值添加到包裹元素。

```js
  {
    id: "effect",
    type: "transform",
    style: ({ value }) => {
      const { offset, flip, rotate, scale, skew } = value;
      let transform = "";

      if (offset)
        transform += `translate(${offset.offsetX}px, ${offset.offsetY}px)`;
      if (rotate) transform += `rotate(${rotate.rotate}deg)`;
      if (scale)
        transform += `scale(${scale.scaleX}, ${scale.scaleY})`;
      if (skew)
        transform += `skew(${skew.skewX}deg, ${skew.skewY}deg)`;
      if (flip)
        transform += `scaleX(${flip.flipHorizontal ? -1 : 1}) scaleY(${flip.flipVertical ? -1 : 1})`;

      return { "{{WRAPPER}}": { transform } };
    }


 }
```

#### 在 HTML 中使用範例

在以下範例中，我們使用 `transform` 輸出值的旋轉和偏移效果來為 HTML 元素添加變換樣式。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  effectRotateRotate: number;
  effectOffsetOffsetX: number;
  effectOffsetOffsetY: number;
}

const Component = (props: Props): JSX.Element => {
  const { effectRotateRotate, effectOffsetOffsetX, effectOffsetOffsetY } = props;

  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
    transform: `rotate(${effectRotateRotate}deg) translate(${effectOffsetOffsetX}px, ${effectOffsetOffsetY}px)`,
  };

  return (
    <div className="brz-wrapper-transform">
      <div style={style}>Content</div>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Component",
  component: { editor: Component, view: Component },
  title: "My Component",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-wrapper-transform",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            devices: "desktop",
            options: [
              {
                id: "effect",
                type: "transform",
              },
            ],
          },
        ],
      },
    ];
  },
});
```
