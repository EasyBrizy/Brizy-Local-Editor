---
toc_max_heading_level: 4
---

# Select

`select` 控制項作為傳統 `select` 框的進階替代品，提供了更為精緻和直觀的選擇介面。

`select` 關閉時的範例：

![Select Closed](/img/controls/select-closed.png)

`select` 開啟時的範例：

![Select Opened](/img/controls/select-opened.png)

帶有輔助資訊的 `select` 範例：

![Select Helper](/img/controls/select-helper.png)

### 參數

| 名稱               |                                                                                     類型                                                                                      |       默認值 | 說明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               |                                                                                   `string`                                                                                    |            - | 控制項將儲存數據的鍵的識別符。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `type`             |                                                                                   `string`                                                                                    |            - | 類型應設為 `"select"` 以使用此控制項。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `label?`           |                                                                                   `string`                                                                                    |            - | 控制項左側顯示的標籤。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `className?`       |                                                                                   `string`                                                                                    |            - | 控制項的自定義 CSS 類名，用於修改控制項樣式。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `icon?`            |                                                                                   `string`                                                                                    |            - | 顯示在控制項標籤左側的圖示名稱。查看所有 [圖示](/docs-internals/icons/)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `position?`        |                                                                                   `number`                                                                                    |            - | 控制項在工具欄中的位置。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `roles?`           |                                                                                 `Array<Role>`                                                                                 |            - | 僅在當前用戶角色與提供的角色數組中的角色之一匹配時顯示控制項。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `devices?`         |                                                                   `"all"` \| `"desktop"` \| `"responsive"`                                                                    |      `"all"` | 定義控制項顯示的設備。`"all"` 會在所有設備上顯示控制項。`"desktop"` 只在桌面設備上顯示控制項。`"responsive"` 會在平板和手機設備上顯示控制項。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `disabled?`        |                                                                                   `boolean`                                                                                   |      `false` | 配置控制項禁用或啟用的條件。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `display?`         |                                                                             `"inline" \| "block"`                                                                             |   `"inline"` | 配置控制項及其標籤的排列方式。如果 `display` 設為 `"inline"`，則標籤和控制項將在同一行。如果 `display` 設為 `"block"`，則標籤在一行，控制項在下一行。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `helper?.content`  |                                                                                   `string`                                                                                    |            - | 如果提供，將顯示一個圖示在標籤旁邊。當懸停在該圖示上時，會顯示額外信息的工具提示。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `helper?.position` | `"top-start" \| "top" \| "top-end" \| "right-start" \| "right" \| "right-end" \| "bottom-end" \| "bottom" \| "bottom-start" \| "left-end" \| "left" \| "left-start" \| "top"` |      `"top"` | 指定工具提示相對於輔助圖示的位置。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `states?`          |                                                                                `Array<State>`                                                                                 | [`"normal"`] | 根據元素狀態允許不同樣式的設置。<br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態， <br/> `"hover"` - 元素懸停時的狀態， <br/> `"active"` - 元素處於活動狀態（例如，當前頁面在分頁中）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `choices`          |                                                                         `ChoicesSync \| ChoicesAsync`                                                                         |            - | `choices` 屬性可以配置為同步或異步提供選擇列表。此屬性可以是 `ChoicesSync` 或 `ChoicesAsync`。<br/><br/>**ChoicesSync**<br/><br/>`ChoicesSync` 是直接提供給組件的 `Choice` 對象的數組。<br/><br/>**`Choice: { icon?: { name?: string; className?: string; }; title: string; value: string; }`**<br/><br/> 每個 `Choice` 對象定義了以下屬性：<br/>`icon?.name` - 圖示名稱。<br/>`icon?.className` - 用於樣式化圖示的 CSS 類名。<br/>`title` - 表示選擇顯示標題的字符串。<br/>`value` - 表示選擇的字符串值。當選擇被選中時，返回該值。<br/><br/>**ChoicesAsync**<br/><br/>`ChoicesAsync` 用於通過異步函數動態加載選擇。它是一個定義了以下屬性的對象：<br/><br/>**`ChoiceAsync: { load: (abortSignal?: AbortSignal) => Promise<Choice[]>; emptyLoad?: { title?: string; }; }`**<br/><br/>`load` - 一個函數，返回一個解析為 `Choice` 對象數組的 `Promise`。此函數可以選擇性地接受 `AbortSignal` 以處理加載過程中的中斷。<br/>`emptyLoad?.title` - 當選擇列表為空時顯示的文本字符串。 |
| `onLoad?`          |                                                                                  `function`                                                                                   |            - | 當異步選擇成功加載後將執行的空函數。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `default?`         |                                                                                   `Default`                                                                                   |            - | 控制項的預設值。<br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - 控制項的自定義初始值。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `style?`           |                                                                                  `function`                                                                                   |            - | 此函數根據控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，該鍵保存了控制項的當前值。函數返回一個具有 CSS 選擇器鍵和 CSS 屬性值的對象。<pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-text": {`<br/> `display: value === "on" ? "flex" : "none"`<br/> `}`<br/> `}`<br/>`}`</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### 基本範例

標準定義，僅包含必要的鍵。此控制項將顯示在所有設備上。

```js
{
  id: "navIcon",
  type: "select",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

### 返回值

返回所選選項的值。

```js
{
  value: string;
}
```

值的範例：

```js
{
  value: "round";
}
```

### 使用方法

#### 標籤範例

在控制項的左側添加標籤。

```js
{
  id: "navIcon",
  type: "select",
  label: "Icon",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### 類名範例

向控制項的 DOM 節點添加 CSS 類名。

```js
{
  id: "navIcon",
  type: "select",
  className: "mySelect",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### 圖示範例

在控制項的標籤左側添加 "star" 圖示。

```js
{
  id: "navIcon",
  type: "select",
  icon: "nc-star",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### 角色範例

僅對擁有 admin 和 designer 權限的用戶顯示控制項。

```js
{
  id: "navIcon",
  type: "select",
  roles: ["admin", "manager"],
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### 設備範例

將在所有設備上渲染。此值可以忽略，因為預設為 `"all"`。

```js
{
  id: "navIcon",
  type: "select",
  devices: "all",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

僅在 `desktop` 設備上渲染。

```js
{
  id: "navIcon",
  type: "select",
  devices: "desktop",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

僅在響應模式（`tablet` 和 `mobile`）下顯示。

```js
{
  id: "navIcon",
  type: "select",
  devices: "responsive",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應是動態條件。

```js
{
  id: "navIcon",
  type: "select",
  disabled: true,
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個 getter 函數，用於通過其 id 獲取控制項的值。
`"videoType"` 是下面第一個 `"select"` 控制項的 id。

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
      id: "navIcon",
      type: "select",
      disabled: videoType === "custom",
      choices: [
        {
          value: "none",
          title: "None",
        },
        {
          value: "thin",
          title: "Thin",
        },
        {
          value: "heavy",
          title: "Heavy",
        },
      ],
    },
  ];
};
```

#### 顯示範例

在這個範例中，使用 `display: "block"`，標籤將在第一行渲染，控制項將在第二行渲染。

```js
{
  id: "navIcon",
  type: "select",
  display: "block",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### 輔助範例

輔助對象包含內容屬性，其值為 `"Helper"`，這將顯示為額外的指導或信息。

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    {
      value: "small",
      title: "Small"
    },
    {
      value: "medium",
      title: "Medium"
    },
    {
      value: "large",
      title: "Large"
    }
  ],
  helper: {
    content: "Helper"
  }
}
```

當輔助對象包含位置屬性，其值為 `"top-start"`，表示輔助文本將顯示在圖示的頂部起始位置。

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    {
      value: "small",
      title: "Small"
    },
    {
      value: "medium",
      title: "Medium"
    },
    {
      value: "large",
      title: "Large"
    }
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
  id: "navIcon",
  type: "select",
  states: ["normal", "hover"],
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

允許控制項在正常、懸停和活動狀態下工作。

```js
{
  id: "navIcon",
  type: "select",
  states: ["normal", "hover", "active"],
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### 異步選擇範例

`getChoices`：這個函數是一個異步函數，用於從指定的 URL 獲取選擇列表。該函數接受一個 AbortSignal 作為參數，允許在必要時中斷獲取操作。

```js
const getChoices = async (abortSignal: AbortSignal): Promise<Choice[]> => {
  const response = await fetch(URL, { signal: abortSignal });

  return response.json();
};

{
  id: "navIcon",
  type: "select",
  choices: {
    load: getChoices,
    emptyLoad: {
      title: "There are no choices"
    }
  }
}
```

#### 帶有圖示的選擇範例

```js
{
  id: "border",
  type: "select",
  choices: [
    { value: "solid", icon: { name: "nc-solid" }, title: "solid" },
    { value: "dashed", icon: { name: "nc-dashed" }, title: "dashed" },
    { value

: "dotted", icon: { name: "nc-dotted" }, title: "dotted" }
  ]
}
```

#### `onLoad` 範例

```js
{
  id: "navIcon",
  type: "select",
  choices: {
    load: getChoices,
    emptyLoad: {
      title: "There are no choices"
    }
  },
  onLoad: () => { console.log("Choices Loaded") }
}
```

#### 預設值範例

在這個範例中，具有 `"thin"` 預設值的 `select` 控制項將被選中。

```js
{
  id: "navIcon",
  type: "select",
  default: {
    value: "thin"
  },
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

具有 `"heavy"` 預設值的 `select` 控制項將被選中。

```js
{
  id: "navIcon",
  type: "select",
  default: {
    value: "heavy"
  },
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### CSS 範例

使用 CSS 更改 `.brz-text` 元素顏色，根據 `select` 控制項的值。

```js
{
  id: "navIcon",
  type: "select",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ],
  style: ({ value }) => {
    if (value.value === "thin") {
      return {
        "{{WRAPPER}} .brz-text": {
          color: "blue"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-text": {
        color: "grey"
      }
    }
  }
}
```

#### 在 HTML 中使用範例

在下面的範例中，我們使用 `select` 的輸出值來確定在按鈕元素中渲染哪個圖示。
當選擇的值為 `"male"` 時，我們會在按鈕中渲染男性圖示，當選擇的值為 `"female"` 時，我們會渲染女性圖示。

```tsx
import { Brizy } from "@brizy/core";
import { Icon } from "./Icon";
import React, { JSX } from "react";

interface Props {
  gender: "male" | "female";
}

const Button = (props: Props): JSX.Element => {
  const { gender } = props;

  return (
    <div className="brz-button">
      <Icon name={gender === "male" ? "nc-male" : "nc-female"} />
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
                id: "gender",
                type: "select",
                choices: [
                  {
                    title: "Female",
                    value: "female",
                  },
                  {
                    title: "Male",
                    value: "male",
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
