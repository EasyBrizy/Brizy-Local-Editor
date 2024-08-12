# 範圍

`range` 輸入，通常稱為 `range` 滑桿，是一種互動控制項，允許用戶在指定的數值區間內選擇一個範圍。

`range` 的範例：<br/>
![Range](/img/controls/range.png)<br/>
帶單位的 `range` 範例：<br/>
![Range](/img/controls/rangeUnit.png)<br/>
帶助手的 `range` 範例：<br/>
![Range](/img/controls/rangeHelp.png)<br/>
帶開始和結束標籤的 `range` 範例：<br/>
![Range](/img/controls/rangeLabel.png)<br/>

### 參數

| 名稱                 | 類型                                                                                                                                                                                       |    預設值    | 描述                                                                                                                                                                                                                                                                                                                   |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                 | `string`                                                                                                                                                                                   |      -       | `range` 將保存數據的鍵的標識符                                                                                                                                                                                                                                                                                         |
| `type`               | `string`                                                                                                                                                                                   |      -       | 類型應為 `"range"` 以使用此控制項                                                                                                                                                                                                                                                                                      |
| `label?`             | `string`                                                                                                                                                                                   |      -       | 控制項左側顯示的標籤                                                                                                                                                                                                                                                                                                   |
| `className?`         | `string`                                                                                                                                                                                   |      -       | 將設置在控制項上的自定義 CSS 類名。可以用於修改控制項樣式                                                                                                                                                                                                                                                              |
| `icon?`              | `string`                                                                                                                                                                                   |      -       | 控制項標籤左側顯示的圖示名稱。查看所有 [圖示](/docs-internals/icons/)                                                                                                                                                                                                                                                  |
| `position?`          | `number`                                                                                                                                                                                   |      -       | 控制項在工具欄中的位置                                                                                                                                                                                                                                                                                                 |
| `roles?`             | `Array<Role>`                                                                                                                                                                              |      -       | 僅在當前用戶的角色匹配提供的角色數組中的一個角色時渲染控制項。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                              |
| `devices?`           | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義控制項將在哪些設備上渲染。`"all"` 在所有設備上渲染控制項。`"desktop"` 僅在桌面設備上渲染控制項。`"responsive"` 在平板和手機設備上渲染控制項。                                                                                                                                                                      |
| `disabled?`          | `boolean`                                                                                                                                                                                  |   `false`    | 配置控制項禁用或啟用的條件                                                                                                                                                                                                                                                                                             |
| `display?`           | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | 配置控制項及其標籤的排列方式。如果 `display` 為 `"inline"`，則標籤和控制項會在一行中顯示；如果 `display` 為 `"block"`，則標籤會顯示在一行中，控制項會顯示在下一行。                                                                                                                                                    |
| `helper?.content`    | `string`                                                                                                                                                                                   |      -       | 如果提供，會在標籤旁顯示一個圖示。當懸停在這個圖示上時，會顯示附加信息的提示框                                                                                                                                                                                                                                         |
| `helper?.position`   | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定提示框相對於助手圖示的位置                                                                                                                                                                                                                                                                                         |
| `states?`            | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 根據元素的狀態允許不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態，<br/> `"hover"` - 當元素被懸停時的狀態，<br/> `"active"` - 元素的活動狀態（例如分頁中的當前頁面）                                                                                   |
| `config?.min`        | `number`                                                                                                                                                                                   |     `0`      | 範圍刻度上允許的最小值                                                                                                                                                                                                                                                                                                 |
| `config?.max`        | `number`                                                                                                                                                                                   |    `100`     | 範圍刻度上允許的最大值                                                                                                                                                                                                                                                                                                 |
| `config?.step`       | `number`                                                                                                                                                                                   |     `1`      | 範圍刻度上值之間的增量步長                                                                                                                                                                                                                                                                                             |
| `config?.updateRate` | `number`                                                                                                                                                                                   |     `50`     | 值更新的頻率，通常以毫秒為單位                                                                                                                                                                                                                                                                                         |
| `config?.unit`       | `string`                                                                                                                                                                                   |      -       | 範圍刻度上顯示值的單位                                                                                                                                                                                                                                                                                                 |
| `config?.startLabel` | `string`                                                                                                                                                                                   |      -       | 表示範圍起始點的標籤                                                                                                                                                                                                                                                                                                   |
| `config?.endLabel`   | `string`                                                                                                                                                                                   |      -       | 表示範圍結束點的標籤                                                                                                                                                                                                                                                                                                   |
| `default?`           | `Default`                                                                                                                                                                                  |      -       | 預設控制項值。 <br/> <br/> <b>`Default: { from: number;  to: number;}`</b> <br/> <br/> `from` - 控制項的起始值 <br/> `to` - 控制項的結束值                                                                                                                                                                             |
| `style?`             | `function`                                                                                                                                                                                 |      -       | 此函數根據控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，該鍵包含控制項的當前值。該函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的對象。 <pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-range": {`<br/> `background: value.from >= 10 ? "red" : "green"`<br/> `}`<br/> `}`<br/>`}`</pre> |

### 基本範例

使用僅包含必要鍵值的標準定義。此控制項將在所有設備上顯示。

```js
{
  id: "interval",
  type: "range"
}
```

### 返回值

`range` 控制項的返回值表示當前選擇的範圍值。<br/>

```js
{
  from: number;
  to: number;
}
```

`from` - 範圍的起始值；<br/>
`to` - 範圍的結束值；<br/>

值的範例：

```js
{
  from: 10,
  to: 90
}
```

### 用法

#### 標籤範例

在控制項左側添加標籤。

```js
{
  id: "interval",
  type: "range",
  label: "範圍"
}
```

#### 類名範例

將 CSS 類名添加到控制項的 DOM 節點。

```js
{
  id: "interval",
  type: "range",
  className: "myRange"
}
```

#### 圖示範例

在控制項標籤左側添加一個 "range" 圖示。

```js
{
  id: "interval",
  type: "range",
  icon: "nc-range"
}
```

#### 角色範例

僅向具有 admin 和 designer 權限的用戶顯示控制項。

```js
{
  id: "interval",
  type: "range",
  roles: ["admin", "designer"]
}
```

#### 設備範例

它將在所有設備上渲染。這個值可以省略，因為預設為 `"all"`。

```js
{
  id: "interval",
  type: "range",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "interval",
  type: "range",
  devices: "desktop"
}
```

顯示僅限於響應式模式，特別是 `tablet` 和 `mobile`。

```js
{
  id: "interval",
  type: "range",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是您的動態條件。

```js
{
  id: "interval",
  type: "range",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個 getter 函數，允許我們通過它們的 id 獲取控制項的值。
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
      id: "interval",
      type: "range",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 顯示範例

在這個範例中，使用 `display: "block"`，標籤會顯示在第一行，控制項會顯示在第二行。

```js
{
  id: "interval",
  type: "range",
  display: "block"
}
```

#### 助手範例

助手對象包含一個內容屬性，值為 `"help text"`，這將顯示為對用戶的附加指導或信息。

```js
{
  id: "interval",
  type: "range",
  helper: {
    content: "help text"
  }
}
```

當助手對象包含一個位置屬性，值為 `"top-start"` 時，表示助手文本將顯示在圖示的左上角。

```js
{
  id: "interval",
  type: "range",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### 狀態範例

允許控制項在正常和懸停狀態下工作。

```js
{
  id: "interval",
  type: "range",
  states: ["normal", "hover"]
}
```

允許控制項在正常、懸停和活動狀態下工作。

```js
{
  id: "interval",
  type: "range",
  states: ["normal", "hover", "active"]
}
```

#### 配置 `min` 範例

定義範圍刻度上允許的最小值。

```js
{
  id: "interval",
  type: "range",
  config: {
    min: 10
  }
}
```

#### 配置 `max` 範例

定義範圍刻度上允許的最大值。

```js
{
  id: "interval",
  type: "range",
  config: {
    max: 50
  }
}
```

#### 配置 `step` 範例

指定範圍刻度上值之間的增量步長。

```js
{
  id: "interval",
  type: "range",
  config: {
    step: 10
  }
}
```

#### 配置 `updateRate` 範例

確定值更新的頻率，通常以毫秒為單位。

```js
{
  id: "interval",
  type: "range",
  config: {
    updateRate: 100
  }
}
```

#### 配置 `unit` 範例

指定範圍刻度上顯示值的單位。

```js
{
  id: "interval",
  type: "range",
  config: {
    unit: "%"
  }
}
```

#### 配置 `startLabel` 範例

指定範圍起始點的標籤。

```js
{
  id: "interval",
  type: "range",
  config: {
    startLabel: "10"
  }
}
```

#### 配置 `endLabel` 範例

指定範圍結束點的標籤。

```js
{
  id: "interval",
  type: "range",
  config: {
    endLabel: "50"
  }
}
```

#### 預設值範例

在這個範例中，`range` 控制項的預設值將從 `10` 開始，到 `100` 結束。

```js
{
  id: "interval",
  type: "range",
  default: {
    from: 10,
    to: 100
  }
}
```

#### CSS 範例

根據 `range` 控制項的值更改 `.brz-range` 元素的背景顏色。如果 `value.from` 大於或等於 20，顏色為紅色；否則，顏色為綠色。

```js
{
  id: "interval",
  type: "range",
  style: ({ value }) => {
    if (value.from >= 20) {
      return {
        "{{WRAPPER}} .brz-range": {
          background: "red"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-range": {
        background: "green"
      }
    }
  }
}
```

#### HTML 用法範例

在下面的範例中，我們使用 Range 輸出值（ `priceFrom` 和 `priceTo` ）。Range 組件將渲染一個 `range` 輸入控制項，最小值為 `priceFrom`，最大值為 `priceTo`。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  priceFrom: number;
  priceTo: number;
}

const Price = (props: Props): JSX.Element => {
  const { priceFrom, priceTo } = props;

  return (
    <div>
      <h3>篩選價格範圍</h3>
      <span>從: {priceFrom}</span>
      <span>到: {priceTo}</span>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Price",
  component: { editor: Price, view: Price },
  title: "我的價格",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-range",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-price",
              title: "範圍",
            },
            devices: "desktop",
            options: [
              {
                id: "price",
                type: "range",
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
