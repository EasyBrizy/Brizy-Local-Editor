---
sidebar_position: 3
toc_max_heading_level: 4
---

# 數字

Brizy 的 `number` 控制項提供了一個簡單的數字輸入欄位，允許您設定最小值和最大值限制，並定義調整值的步長。

`number` 控制項範例：

![Number](/img/controls/number.png)

大型 `number` 控制項範例：

![NumberLarge](/img/controls/numberLarge.png)

禁用旋轉器的 `number` 控制項範例：

![NumberNoSpinner](/img/controls/numberNoSpinner.png)

### 參數

| 名稱                 | 類型                                                                                                                                                                                       |    預設值    | 描述                                                                                                                                                                                                                                                                                                                            |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                 | `string`                                                                                                                                                                                   |      -       | `number` 控制項儲存數據的鍵名稱                                                                                                                                                                                                                                                                                                 |
| `type`               | `string`                                                                                                                                                                                   |      -       | 類型應為 `"number"` 才能使用此控制項                                                                                                                                                                                                                                                                                            |
| `label?`             | `string`                                                                                                                                                                                   |      -       | 出現在控制項左側的文字                                                                                                                                                                                                                                                                                                          |
| `className?`         | `string`                                                                                                                                                                                   |      -       | 將設定到控制項上的自定義 CSS 類名稱。可用來修改控制項樣式。                                                                                                                                                                                                                                                                     |
| `icon?`              | `string`                                                                                                                                                                                   |      -       | 將顯示在控制項標籤左側的圖示名稱。查看所有 [圖示](/docs-internals/icons/)。                                                                                                                                                                                                                                                     |
| `position?`          | `number`                                                                                                                                                                                   |      -       | 控制項在工具列中的位置                                                                                                                                                                                                                                                                                                          |
| `roles?`             | `Array<Role>`                                                                                                                                                                              |      -       | 僅在當前用戶的角色匹配提供的數組中的一個角色時才渲染控制項。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                         |
| `devices?`           | `string`                                                                                                                                                                                   |   `"all"`    | 定義控制項將在哪些設備上渲染。`"all"` 在所有設備上渲染控制項。`"desktop"` 僅在桌面設備上渲染控制項。`"responsive"` 在平板電腦和手機設備上渲染控制項。                                                                                                                                                                           |
| `disabled?`          | `boolean`                                                                                                                                                                                  |   `false`    | 配置控制項在何種條件下禁用或啟用。                                                                                                                                                                                                                                                                                              |
| `display?`           | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | 配置控制項及其標籤的排列方式。如果 `display` 為 `"inline"`，則標籤和控制項將在同一行；如果 `display` 為 `"block"`，則標籤將在一行，而控制項將顯示在下一行。                                                                                                                                                                     |
| `config?.min`        | `number`                                                                                                                                                                                   |     `0`      | 最小數值                                                                                                                                                                                                                                                                                                                        |
| `config?.max`        | `number`                                                                                                                                                                                   |    `100`     | 最大數值                                                                                                                                                                                                                                                                                                                        |
| `config?.step`       | `number`                                                                                                                                                                                   |     `1`      | 使用控制項的旋轉器時，將遞增或遞減的間隔值。                                                                                                                                                                                                                                                                                    |
| `config?.spinner`    | `boolean`                                                                                                                                                                                  |    `true`    | 啟用或禁用顯示增加或減少數字的箭頭                                                                                                                                                                                                                                                                                              |
| `config?.updateRate` | `number`                                                                                                                                                                                   |     `50`     | 組件更新其值的速率，以毫秒為單位指定。這可以控制輸入值變更的頻率。                                                                                                                                                                                                                                                              |
| `config?.size`       | `"short"` \| `"medium"` \| `"large"` \| `"auto"`                                                                                                                                           |  `"short"`   | 指定輸入欄位的大小的字符串。常見值可能包括：                                                                                                                                                                                                                                                                                    |
| `helper?.content`    | `string`                                                                                                                                                                                   |      -       | 如果提供，圖示將顯示在標籤旁邊。當懸停在此圖示上時，將顯示帶有附加信息的工具提示。                                                                                                                                                                                                                                              |
| `helper?.position`   | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於輔助圖示的位置。                                                                                                                                                                                                                                                                                              |
| `states?`            | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 根據元素的狀態允許不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態， <br/> `"hover"` - 當元素被懸停時的狀態， <br/> `"active"` - 當元素處於活動狀態時的狀態（例如，分頁中的當前頁面）                                                                            |
| `default?`           | `Default`                                                                                                                                                                                  |      -       | 控制項的預設值。 <br/> <br/> <b>`Default: { value: number; }`</b> <br/> <br/> `value` - 控制項的自定義初始值 <br/>                                                                                                                                                                                                              |
| `style?`             | `function`                                                                                                                                                                                 |      -       | 此函數根據控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，其中保存了控制項的當前值。該函數返回一個具有 CSS 選擇器鍵和 CSS 屬性值的對象。<pre>`style: ({value}) => {`<br/> `return {`<br/> &nbsp;`"{{WRAPPER}} .brz-text": {`<br/> &nbsp; &nbsp; `opacity: value`<br/> &nbsp; &nbsp; `}`<br/> &nbsp; `}`<br/>`}`</pre> |

### 基本範例

僅使用必要鍵的標準定義。此控制項將顯示在所有設備上。

```js
{
  id: "rows",
  type: "number"
}
```

### 返回值

返回值是一個 `number`，表示文本欄位的值。

```js
{
  value: number;
}
```

值的範例：

```js
{
  value: 33;
}
```

### 使用方法

#### 標籤範例

在控制項左側添加標籤。

```js
{
  id: "rows",
  type: "number",
  label: "Number"
}
```

#### 類名範例

將 CSS 類添加到控制項的 DOM 節點。

```js
{
  id: "rows",
  type: "number",
  className: "myCustomClass"
}
```

#### 圖示範例

在控制項標籤左側添加一個“數字”圖示。

```js
{
  id: "rows",
  type: "number",
  icon: "nc-numbers"
}
```

#### 角色範例

僅對具有管理員和設計師權限的用戶顯示控制項。

```js
{
  id: "rows",
  type: "number",
  roles: ["admin", "designer"]
}
```

#### 設備範例

將在所有設備上渲染。此值可以省略，因為預設為 `"all"`。

```js
{
  id: "rows",
  type: "number",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "rows",
  type: "number",
  devices: "desktop"
}
```

顯示僅限於響應模式，具體為 `tablet` 和 `mobile`。

```js
{
  id: "rows",
  type: "number",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常，此處應該是您的動態條件。

```js
{
  id: "rows",
  type: "number",
  disabled: true
}
```

當 `switchId` 變數為 `"on"` 時，控制項將被禁用。
`getValue` 是一個 getter 函數，允許我們通過 id 獲取控制項的值。
`"switchId"` 是下面 `"switch"` 控制項的 id。

```js
const getToolbarContols = ({ getValue }) => {
  const switchId = getValue("switchId");

  return [
    {
      id: "switchId",
      type: "switch",
    },
    {
      id: "rows",
      type: "number",
      disabled: switchId === "on",
    },
  ];
};
```

#### 顯示範例

在此範例中，使用 `display: "block"`，標籤將顯示在第一行，控制項顯示在第二行。

```js
{
  id: "rows",
  type: "number",
  display: "block"
}
```

#### `min` 配置值範例

`min` 屬性設為 `100`，表示最小輸入欄位值為 `100`。

```js
{
  id: "rows",
  type: "number",
  config: {
    min: 100
  }
}
```

#### `max` 配置值範例

`max` 屬性設為 `1000`，表示最大輸入欄位值為 `1000`。

```js
{
  id: "rows",
  type: "number",
  config: {
    max: 1000
  }
}
```

#### `step` 配置值範例

`step` 屬性設為 `100`，表示每次輸入欄位將增加或減少 `100`。

```js
{
  id: "rows",
  type: "number",
  config: {
    step: 100
  }
}
```

#### `spinner` 配置值範例

`spinner` 屬性設為 `false`，表示輸入欄位將不顯示旋轉器箭頭。

```js
{
  id: "rows",
  type: "number",
  config: {
    spinner: false
  }
}
```

#### `updateRate` 配置值範例

`updateRate` 屬性設為 `60`，表示輸入欄位將在 `60` 毫秒內更新。

```js
{
  id: "rows",
  type: "number",
  config: {
    updateRate: 60
  }
}
```

#### 大小配置範例

`size` 屬性設為 `"medium"`，表示輸入欄位將以中等尺寸顯示。

```js
{
  id: "rows",
  type: "number",
  config: {
    size: "medium"
  }
}
```

#### 幫助範例

`helper` 對象包含一個 `content` 屬性，值為 `"help text"`，這將顯示為額外的指導或信息。

```js
{
  id: "rows",
  type: "number",
  helper: {
    content: "help text"
  }
}
```

當 `helper` 對象包含一個 `position` 屬性，值為 `"top-start"` 時，表示幫助文本將顯示在圖示的左上角。

```js
{
  id: "rows",
  type: "number",
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
  id: "rows",
  type: "number",
  states: ["normal", "hover"]
}
```

允許控制項在正常、懸停和活動狀態下工作。

```js
{
  id: "rows",
  type: "number",
  states: ["normal", "hover", "active"]
}
```

#### 預設值範例

在此範例中，數字控制項預設值為 `33`。

```js
{
  id: "rows",
  type: "number",
  default: {
    value: 33
  }
}
```

#### CSS 範例

使用 `number` 控制項值設置 `.brz-text` 元素的字體大小。

```js
{
  id: "rows",
  type: "number",
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text": {
        "font-size": `${value.value}px`
      }
    }
  }
}
```

使用 `number` 控制項的自定義值改變 `.brz-text` 元素的透明度。

```js
{
  id: "rows",
  type: "number",
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text": {
        opacity: value.value
      }
    }
  }
}
```

#### 在 HTML 中的使用範例

在下面的範例中，我們使用 `number` 輸出值來設置按鈕元素的圖示大小。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";
import { Icon } from "./Icon";

interface Props {
  size: number;
}

const Button = (props: Props): JSX.Element => {
  const { size } = props;

  return (
    <div className="brz-button">
      <span>Click</span>
      <Icon name="next" size={size} />
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
                id: "size",
                type: "number",
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
