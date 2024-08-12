---
sidebar_position: 1
toc_max_heading_level: 4
---

# 切換開關

Brizy 的切換器控件提供 `on` \| `off` 切換功能。它作為標準複選框的高級替代品。

當切換器處於禁用狀態時的範例：

![Switch Off](/img/controls/switch-off.png)

當切換器處於啟用狀態時的範例：

![Switch On](/img/controls/switch-on.png)

### 參數

| 名稱   | 類型     |    預設值    | 描述    |
| :------- | :--- | :-: | :----- |
| `id`               | `string`                                                                                                                                                                                   |      -       | 切換器保存數據的鍵的識別符                                                                                                                                                                                                                                                                            |
| `type`             | `string`                                                                                                                                                                                   |      -       | 類型應設為 `"switch"` 以使用此控件                                                                                                                                                                                                                                                                    |
| `label?`           | `string`                                                                                                                                                                                   |      -       | 顯示在控件左側的標籤                                                                                                                                                                                                                                                                                  |
| `className?`       | `string`                                                                                                                                                                                   |      -       | 會被設置在控件上的自定義 CSS 類名。它可用於修改控件樣式。                                                                                                                                                                                                                                             |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | 顯示在控件標籤左側的圖標名稱。查看所有 [圖標](/docs-internals/icons/)。                                                                                                                                                                                                                               |
| `position?`        | `number`                                                                                                                                                                                   |      -       | 控件在工具欄中的位置                                                                                                                                                                                                                                                                                  |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | 只有當當前用戶的角色匹配提供的角色數組中的一個時，才會渲染控件。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                            | string`\*\* |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義控件將在哪些設備上渲染。`"all"` 在所有設備上渲染控件。`"desktop"` 僅在桌面設備上渲染控件。`"responsive"` 在平板和手機設備上都渲染控件。                                                                                                                                                           |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | 配置控件在什麼條件下被禁用或啟用。                                                                                                                                                                                                                                                                    |
| `display?`         | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | 配置控件及其標籤的排列方式。如果 `display` 設為 `"inline"`，則標籤和控件將在一行中，如果 `display` 設為 `"block"`，則標籤會在一行中，下方的下一行將是控件。                                                                                                                                           |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | 如果提供，則會在標籤旁顯示一個圖標。當懸停在這個圖標上時，會顯示包含附加信息的工具提示。                                                                                                                                                                                                              |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於輔助圖標的位置。                                                                                                                                                                                                                                                                    |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 允許根據元素的狀態使用不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態， <br/> `"hover"` - 當元素被懸停時的狀態， <br/> `"active"` - 當元素處於活動狀態時的狀態（例如，分頁中的當前頁）                                                |
| `config?.on`       | `string`                                                                                                                                                                                   |    `"on"`    | 控件啟用時的返回值                                                                                                                                                                                                                                                                                    |
| `config?.off`      | `string`                                                                                                                                                                                   |   `"off"`    | 控件禁用時的返回值                                                                                                                                                                                                                                                                                    |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | 控件的默認值。<br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - 控件的自定義初始值 <br/>                                                                                                                                                                                         |
| `style?`           | `function`                                                                                                                                                                                 |      -       | 該函數根據控件的值生成 CSS 輸出。參數是包含 `value` 鍵的對象，該鍵持有控件的當前值。函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的對象。<pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-text": {`<br/> `display: value === "on" ? "flex" : "none"`<br/> `}`<br/> `}`<br/>`}`</pre> |

### 基本範例

標準定義僅包含必要的鍵。此控件將顯示在所有設備上。

```js
{
  id: "loop",
  type: "switch"
}
```

### 返回值

返回值由開啟/關閉屬性的配置決定。默認情況下，當切換器啟用時為 `"on"`，禁用時為 `"off"`。

```js
{
  value: string;
}
```

範例值：

```js
{
  value: "on";
}
```

### 使用方式

#### 標籤範例

在控件的左側添加標籤。

```js
{
  id: "loop",
  label: "Loop",
  type: "switch"
}
```

#### 類名範例

為控件的 DOM 節點添加 CSS 類名。

```js
{
  id: "loop",
  type: "switch",
  className: "mySwitch"
}
```

#### 圖標範例

在控件標籤的左側添加一個「重複」圖標。

```js
{
  id: "loop",
  type: "switch",
  icon: "nc-repeat"
}
```

#### 角色範例

僅向具有管理員和設計師權限的用戶顯示控件。

```js
{
  id: "loop",
  type: "switch",
  roles: ["admin", "designer"]
}
```

#### 設備範例

將在所有設備上渲染。此值可以省略，因為默認設置為 `"all"`。

```js
{
  id: "loop",
  type: "switch",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "loop",
  type: "switch",
  devices: "desktop"
}
```

顯示限制為響應式模式，特別是 `tablet` 和 `mobile`。

```js
{
  id: "loop",
  type: "switch",
  devices: "responsive"
}
```

#### 禁用範例

控件將被禁用。通常，這裡應該是您的動態條件。

```js
{
  id: "loop",
  type: "switch",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控件將被禁用。
`getValue` 是一個 getter 函數，允許我們通過其 id 獲取控件的值。
`"videoType"` 是下面 `"select"` 控件的 id。

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
      id: "loop",
      type: "switch",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 顯示範例

在這個例子中，使用 `display: "block"`，標籤會顯示在第一行，控件會顯示在第二行。

```js
{
  id: "autoplay",
  type: "switch",
  display: "block"
}
```

#### 助手範例

助手對象包含一個內容屬性 `content`，其值為 `"help text"`，將顯示為用戶的額外指導或信息。

```js
{
  id: "autoplay",
  type: "switch",
  helper: {
    content: "help text"
  }
}
```

當助手對象包含一個位置屬性 `position`，其值為 `"top-start"` 時，表示助手文本將顯示在圖標的左上角。

```js
{
  id: "autoplay",
  type: "switch",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### 狀態範例

允許控件在正常和懸停狀態下工作。

```js
{
  id: "display",
  type: "switch",
  states: ["normal", "hover"]
}
```

允許控件在正常、懸停和活動狀態下工作。

```js
{
  id: "display",
  type: "switch",
  states: ["normal", "hover", "active"]
}
```

#### `on` | `off` 配置值範例

當 `switch` 啟用時，將返回 `"true"`。
當 `switch` 禁用時，將返回 `"false"`。

```js
{
  id: "loop",
  type: "switch",
  config: {
    on: "true",
    off: "false"
  }
}
```

當 `switch` 啟用時，將返回 `"1"`。
當 `switch` 禁用時，將返回 `"0"`。

```js
{
  id: "loop",
  type: "switch",
  config: {
    on: "1",
    off: "0"
  }
}
```

當 `switch` 啟用時，將返回 `"round"`。
當 `switch` 禁用時，將返回 `"square"`。

```js
{
  id: "loop",
  type: "switch",
  config: {
    on: "round",
    off: "square"
  }
}
```

#### 默認值範例

在這個範例中，默認值為 `"on"` 的切換控件將被啟用。

```js
{
  id: "autoPlay",
  type: "switch",
  default: {
    value: "on"
  }
}
```

默認值為 `"off"` 的切換控件將被禁用。

```js
{
  id: "autoPlay",
  type: "switch",
  default: {
    value: "off"
  }
}
```

默認值為 `"disabled"` 的切換控件將默認被禁用。

```js
{
  id: "autoPlay",
  type: "switch",
  default: {
    value: "disabled"
  }
}
```

這個切換器將默認被禁用，因為默認值與 `config.off` 匹配。

```js
{
  id: "loop",
  type: "switch",
  default: {
    value: "false"
  },
  config: {
    on: "true",
    off: "false"
  }
}
```

這個切換器將默認啟用，因為默認值與 `config.on` 匹配。

```js
{
  id: "loop",
  type: "switch",
  default: {
    value: "1"
  },
  config: {
    on: "1",
    off: "0"
  }
}
```

#### CSS 範例

使用切換控件的值來顯示或隱藏 `.brz-text` 元素。
如果未提供 `config.on` 和 `config.off`，則切換器的默認值為 `"on"` 或 `"off"`。

```js
{
  id: "loop",
  type: "switch",
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

使用來自 `switch` 控件的自定義值更改 `.brz-text` 元素的透明度。
切換器的值在 `config` 中提供，現在值為 `"1"` 或 `"0"`。

```js
{
  id: "loop",
  type: "switch",
  config: {
    on: "1",
    off: "0"
  },
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text": {
        opacity: value.value
      }
    }
  }
}
```

使用 CSS 更改 `.brz-text` 和 `.brz-map` 元素的 `pointer-events` 和 `display` 屬性。

```js
{
  id: "accesibility",
  type: "switch",
  style: ({ value }) => {
    const isEnabled = value.value === "on";

    return {
      "{{WRAPPER}} .brz-text, {{WRAPPER}} .brz-map": {
        "pointer-events": isEnabled ? "all" : "none",
        "display": isEnabled ? "flex" : "block"
      }
    }
  }
}
```

獲取 `.brz-list` 元素的正常和懸停狀態下的透明度 CSS。
如果我們在正常狀態下啟用切換器，並在懸停狀態下禁用它，則懸停將產生小的淡出效果。

```js
{
  id: "loop",
  type: "switch",
  states: ["normal",

 "hover"],
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-list:hover": {
        opacity: value.value === "on" ? 1 : 0
      }
    }
  }
}
```

獲取 `.brz-list-item` 元素的正常和活動狀態下的顏色 CSS。
例如，如果我們在正常狀態下啟用切換器，並在活動狀態下禁用它，則 `.brz-list-item` 將顯示為黑色，而 `.brz-list-item.active` 將顯示為紅色。

```js
{
  id: "loop",
  type: "switch",
  states: ["normal", "active"],
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-list-item": {
        color: value.value === "on" ? "black" : "red"
      }
    }
  }
}
```

#### 在 HTML 中的使用範例

在下面的範例中，我們使用切換輸出值（默認為 `"on"` | `"off"`）來確定何時在按鈕元素中渲染標籤。
當切換器啟用（`"on"`）時，我們將渲染標籤。
我們還使用相同的切換值來添加 `"data-disabled"` HTML 屬性到 `.brz-button`，並為 `<Icon />` 組件創建一個 `props.size` 值。

```tsx
import { Brizy } from "@brizy/core";
import { Icon } from "./Icon";
import React, { JSX } from "react";

interface Props {
  showLabel: "on" | "off";
}

const Button = (props: Props): JSX.Element => {
  const { showLabel } = props;

  const attributes = {
    "data-disabled": showLabel === "off",
  };

  return (
    <div className="brz-button" {...attributes}>
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
                type: "switch",
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
