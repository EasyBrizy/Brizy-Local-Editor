---
toc_max_heading_level: 4
---

# 多選擇

`multiSelect` 控制項允許使用者從列表中選擇多個選項，顯示所選項目的數量和個別選擇。它提供了同步和異步載入選項的功能，提高了靈活性和使用體驗。

未選擇的 `multiSelect` 範例：

![Multiselect Deselected](/img/controls/multiselect-deselected.png)

單一選擇的 `multiSelect` 範例：

![Multiselect Selected1](/img/controls/multiselect-selected1.png)

多項選擇的 `multiSelect` 範例：

![Multiselect Selected2](/img/controls/multiselect-selected2.png)

### 參數

| 名稱                | 類型                                                                                                                                                                                       |    預設值    | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| `id`                | `string`                                                                                                                                                                                   |      -       | 控制項保存數據的識別碼                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `type`              | `string`                                                                                                                                                                                   |      -       | 類型應設為 `"multiSelect"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `label?`            | `string`                                                                                                                                                                                   |      -       | 控制項左側顯示的標籤                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `icon?`             | `string`                                                                                                                                                                                   |      -       | 將顯示在控制項標籤左側的圖示名稱。查看所有 [圖示](../../icons/)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `placeholder?`      | `string`                                                                                                                                                                                   |      -       | 在多選框字段中顯示的佔位符文本。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `position?`         | `number`                                                                                                                                                                                   |      -       | 控制項在工具欄中的位置                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `roles?`            | `Array<Role>`                                                                                                                                                                              |      -       | 只有當當前使用者的角色符合提供的角色陣列中的一個角色時，才會顯示控制項。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `devices?`          | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義控制項將在哪些設備上顯示。 `"all"` 會在所有設備上顯示控制項。 `"desktop"` 只會在桌面設備上顯示控制項。 `"responsive"` 會在平板和移動設備上顯示控制項。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `disabled?`         | `boolean`                                                                                                                                                                                  |   `false`    | 配置控制項的禁用或啟用條件                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `display?`          | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | 配置控制項及其標籤的排列方式。如果 `display` 為 `"inline"`，則標籤和控制項會在一行中，如果 `display` 為 `"block"`，則標籤會在一行中，控制項會在下一行。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `helper?.content`   | `string`                                                                                                                                                                                   |      -       | 如果提供，則在標籤旁邊顯示圖示。當懸停在此圖示上時，會顯示包含額外資訊的提示。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `helper?.position`  | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定提示相對於輔助圖示的位置。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `states?`           | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 根據元素的狀態允許不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態， <br/> `"hover"` - 當元素被懸停時的狀態， <br/> `"active"` - 當元素處於活動狀態（例如，分頁中的當前頁）時的狀態                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `choices`           | `ChoicesSync \| ChoicesAsync`                                                                                                                                                              |      -       | `choices` 屬性可以配置為同步或異步提供給定組件的可選選項列表。此屬性可以有兩種形式：`ChoicesSync` 或 `ChoicesAsync`。<br/><br/>**ChoicesSync**<br/><br/> `ChoicesSync` 是一個直接提供給組件的 `Choice` 對象數組。<br/><br/>**`Choice: { title: string; value: string }`**<br/><br/> 每個 `Choice` 對象定義了以下屬性：<br/>`title` - 表示選項顯示標題的字符串。<br/>`value` - 表示選項的值。當選擇該選項時，此值將返回。<br/><br/>**ChoicesAsync**<br/><br/>`ChoicesAsync` 用於通過異步函數動態加載選項。它是一個定義了以下屬性的對象：<br/><br/>**`ChoicesAsync: { load: (value: Array<string>, abortSignal?: AbortSignal) => Promise<Choice[]>; search: (search: string, abortSignal?: AbortSignal) => Promise<Choice[]>; }`**<br/><br/>`load` - 一個函數，接受 `value` 和可選的 `AbortSignal`，返回一個 Promise，解析為 `Choice` 對象的數組。此函數用於加載選擇選項。<br/>`search` - 一個函數，接受來自搜尋輸入的 `search` 字符串和可選的 `AbortSignal`，返回一個 Promise，解析為基於搜尋條件的 `Choice` 對象數組。此函數用於根據用戶輸入動態搜尋和加載選項。<br/> |     |
| `config?.search`    | `boolean`                                                                                                                                                                                  |      -       | 如果提供並設置為 `true`，則在控制項上方顯示一個輸入字段以搜尋項目。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `config?.showArrow` | `boolean`                                                                                                                                                                                  |      -       | 如果提供並設置為 `true`，則顯示右側的箭頭。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `default?`          | `Default`                                                                                                                                                                                  |      -       | 控制項的默認值。 <br/> <br/> <b>`Default: { value: Array<string> }`</b> <br/> <br/> `value` - 控制項的自訂初始值 <br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `style?`            | `function`                                                                                                                                                                                 |      -       | 此函數根據控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，該鍵保存控制項的當前值。該函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的對象。 <pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-text": {`<br/> `color: value.includes("events") ? "green" : "black"`<br/> `}`<br/> `}`<br/>`}`</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### 基本範例

標準定義僅包含必要的鍵。此控制項將顯示在所有設備上。

```js
{
  id: "type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

### 回傳值

`multiSelect` 控制項的回傳值是選擇的 `Choices` 標題的字串化陣列。

```js
{
  value: string;
}
```

範例值：

```js
{
  value: "['events', 'timeline']";
}
```

### 使用方法

#### 標籤範例

在控制項的左側添加標籤。

```js
{
  id: "type",
  label: "Layout",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### 圖示範例

在控制項標籤的左側添加「星星」圖示。

```js
{
  id: "type",
  type: "multiSelect",
  icon: "nc-star",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### 角色範例

僅顯示給具有 admin 和 designer 權限的使用者。

```js
{
  id: "type",
  type: "multiSelect",
  roles: ["admin", "designer"],
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### 佔位符範例

在多選框字段中顯示的佔位符文本。

```js
{
  id: "type",
  type: "multiSelect",
  placeholder: "Select choices",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### 設備範例

此控制項將在所有設備上顯示。此值可以省略，因為預設為 `"all"`。

```js
{
  id: "type",
  type: "multiSelect",
  devices: "all",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "type",
  type: "multiSelect",
  devices: "desktop",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

顯示限制為響應模式，即 `tablet` 和 `mobile`。

```js
{
  id: "type",
  type: "multiSelect",
  devices: "responsive",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應有您的動態條件。

```js
{
  id: "type",
  type: "multiSelect",
  disabled: true,
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個 getter 函數，允許我們通過 id 獲取控制項的值。
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
      id: "type",
      type: "multiSelect",
      disabled: videoType === "custom",
      choices: [
        { title: "Timeline", value: "timeline" },
        { title: "Events", value: "events" },
      ],
    },
  ];
};
```

#### 顯示範例

在此範例中，使用 `display: "block"`，標籤將顯示在第一行，控制項將顯示在第二行。

```js
{
  id: "type",
  type: "multiSelect",
  display: "block",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### 助手範例

助手對象包含一個內容屬性，值為 `"Helper"`，這將顯示為額外的指導或信息。

```js
{
  id: "type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ],
  helper: {
    content: "Helper"
  }
}
```

當助手對象包含一個位置屬性，值為 `"top-start"`，表示助手文本將顯示在圖示的左上角。

```js
{
  id: "type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ],
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```

#### 狀態範例

允許控制項在正常和懸停狀態下工作。

```js
{
  id: "type",
  type: "multiSelect",
  states: ["normal", "hover"],
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

允許控制項在正常、懸停和活動狀態下工作。

```js
{
  id: "type",
  type: "multiSelect",
  states: ["normal", "hover", "active"],
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### 異步選項範例

`loadChoices`：此異步函數從 URL 獲取 `Choice` 對象的列表。
它返回一個 `Choice` 對象的數組。`parameter` 代表當前在控制項中選擇的 `Choice`。此 `value` 可用於各種目的，如過濾結果、填充表單的其他部分或以編程方式與選擇的選項互動。
該函數還接受 `AbortSignal` 參數，允許在需要時取消取回操作。

`searchChoices`：類似於 `loadChoices`，此函數根據控制項輸入字段中輸入的搜尋詞返回 `Choice` 對象的數組。

```js
const loadChoices = async (value: Value, abortSignal: AbortSignal): Promise<Choice[]> => {
  const response = await fetch(URL, { signal: abortSignal });

  return response.json();
};

const searchChoices = async (search: string, abortSignal: AbortSignal): Promise<Choice[]> => {
  const body = JSON.stringify({ searchCriteria: search });

  const response = await fetch(URL, { signal: abortSignal, body });

  return response.json();
};

{
  id: "type",
  type: "multiSelect",
  choices: {
    load: loadChoices,
    search: searchChoices
  }
}
```

#### 配置 `search` 範例

在下面的範例中，會在下拉框上方顯示一個輸入字段，允許用戶輕鬆根據標題找到選擇。

```js
{
  id: "type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ],
  config: {
    search: true
  }
}
```

#### 配置 `showArrow` 範例

`multiSelect` 右側顯示一個箭頭圖示。

```js
{
  id: "type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ],
  config: {
    showArrow: true
  }
}
```

#### 預設值範例

在此範例中，`multiSelect` 控制項的預設值為 `"['events']"`。

```js
{
  id: "

type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ],
  default: {
    value: "['events']"
  }
}
```

#### CSS 範例

使用 CSS 根據 `multiSelect` 控制項的值更改 `.brz-text` 元素顏色。

```js
{
  id: "type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ],
  style: ({ value }) => {
    if (value.value.includes("events")) {
      return {
        "{{WRAPPER}} .brz-text": {
          "color": "orange"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-text": {
        "color": "black"
      }
    }
  }
}
```

#### 在 HTML 中使用範例

在下面的範例中，我們使用 `multiSelect` 輸出值來決定何時在按鈕元素中渲染標籤。
當 `multiSelect` 包含 `"events"` 時，我們將渲染標籤。
我們還使用相同的 `multiSelect` 值為 `.brz-button` 添加 `"data-disabled"` HTML 屬性。

```tsx
import { Brizy } from "@brizy/core";
import { Icon } from "./Icon";
import React, { JSX } from "react";

interface Props {
  type: string;
}

const Button = (props: Props): JSX.Element => {
  const { type } = props;

  const parsed = JSON.parse(type);

  const attributes = {
    "data-disabled": parsed.includes("events"),
  };

  return (
    <div className="brz-button" {...attributes}>
      {parsed.includes("events") && <span>Show Events</span>}
      <Icon name="calendar" />
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
                id: "type",
                type: "multiSelect",
                choices: [
                  { title: "Timeline", value: "timeline" },
                  { title: "Events", value: "events" },
                ],
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
