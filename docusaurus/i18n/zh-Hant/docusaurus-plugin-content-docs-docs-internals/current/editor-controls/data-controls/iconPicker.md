---
toc_max_heading_level: 4
---

# 圖示選擇器

`iconPicker` 控件代表一組單選按鈕，這些按鈕可以包含圖示和標題，以增強資訊的豐富性。

控件範例：

![圖示選擇器](/img/controls/iconPicker.png)

### 參數

| 名稱               | 類型                                                                                                                                                                                       |    預設值    | 說明                                                                                                                                                                                                                                                                                                                        |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |      -       | 控件將儲存您的資料的 `iconPicker` 鍵的識別符                                                                                                                                                                                                                                                                                |
| `type`             | `string`                                                                                                                                                                                   |      -       | 類型應設為 `"iconPicker"` 以使用此控件                                                                                                                                                                                                                                                                                      |
| `label?`           | `string`                                                                                                                                                                                   |      -       | 顯示在控件上方的標籤                                                                                                                                                                                                                                                                                                        |
| `className?`       | `string`                                                                                                                                                                                   |      -       | 將設置在控件上的自訂 CSS 類名。可用於修改控件樣式                                                                                                                                                                                                                                                                           |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | 顯示在控件標籤左側的圖示名稱。查看所有[圖示](/docs-internals/icons/)                                                                                                                                                                                                                                                        |
| `position?`        | `number`                                                                                                                                                                                   |      -       | 控件在工具列中的位置                                                                                                                                                                                                                                                                                                        |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | 僅在當前使用者的角色與提供的陣列中的角色匹配時渲染此控件。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                       |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義控件將在哪些設備上渲染。`"all"` 在所有設備上渲染控件。`"desktop"` 僅在桌上型電腦設備上渲染控件。`"responsive"` 在平板和行動設備上渲染控件                                                                                                                                                                               |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | 配置控件被禁用或啟用的條件                                                                                                                                                                                                                                                                                                  |
| `states?`          | `Array<State>`                                                                                                                                                                             | `["normal"]` | 允許控件在不同狀態下工作。 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態, <br/> `"hover"` - 元素被懸停時的狀態, <br/> `"active"` - 元素處於活動狀態時（例如，分頁中的當前頁面）                                                                                      |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | 如果提供，則在標籤旁顯示一個圖示。當懸停在此圖示上時，會出現帶有額外資訊的工具提示                                                                                                                                                                                                                                          |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於輔助圖示的位置                                                                                                                                                                                                                                                                                            |
| `choices?`         | `Array<Choice>`                                                                                                                                                                            |      -       | 顯示的單選按鈕列表 <br/> <br/> <b>`Choice = { icon: string; title: string; value: string; }`</b> <br/> <br/> `icon` - 圖示的名稱, <br/> `title` - 顯示的按鈕標題, <br/> `value` - 按鈕的唯一值                                                                                                                              |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | 控件的預設值。 <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - 控件的自訂初始值 <br/>                                                                                                                                                                                                                |
| `style?`           | `function`                                                                                                                                                                                 |      -       | 此函數根據控件的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，該鍵保存控件的當前值。該函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的對象。 <pre>`style: ({value}) => {`<br/> `return {`<br/> ` "{{WRAPPER}} .brz-text": {`<br/> `  display: value.value === "value1" ? "block" : "none"`<br/> ` }`<br/> `}`<br/>`}`</pre> |

### 基本範例

定義控制項正常運作所需的基本鍵值。將顯示在所有裝置上。

```js
{
  id: "iconPicker",
  type: "iconPicker",
  choices: [
    {
      icon: "nc-star",
      title: "標題 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "標題 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "標題 3",
      value: "value3"
    }
  ]
}
```

### 回傳值

回傳一個物件，其中 `value` 表示所選按鈕的 `Choice.value`：

```js
{
  value: string;
}
```

回傳值範例：

```js
{
  value: "value1";
}
```

### 使用範例

#### 標籤範例

在控制項的頂部添加一個標籤。

```js
{
  id: "iconPicker",
  type: "iconPicker",
  label: "圖示選擇器"
  choices: [
    {
      icon: "nc-star",
      title: "標題 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "標題 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "標題 3",
      value: "value3"
    }
  ]
}
```

#### 類名範例

為控制項的 DOM 節點添加一個 CSS 類名。

```js
{
  id: "iconPicker",
  type: "iconPicker"
  className: "myIconPicker",
  choices: [
    {
      icon: "nc-star",
      title: "標題 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "標題 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "標題 3",
      value: "value3"
    }
  ]
}
```

#### 圖示範例

在控制項標籤的左側添加一個「設定」圖示。

```js
{
  id: "iconPicker",
  type: "iconPicker",
  icon: "nc-cog",
  choices: [
    {
      icon: "nc-star",
      title: "標題 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "標題 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "標題 3",
      value: "value3"
    }
  ]
}
```

#### 角色範例

僅顯示給具有管理員和設計師權限的使用者。

```js
{
  id: "iconPicker",
  type: "iconPicker",
  roles: ["admin", "designer"],
  choices: [
    {
      icon: "nc-star",
      title: "標題 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "標題 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "標題 3",
      value: "value3"
    }
  ]
}
```

#### 裝置範例

會在所有裝置上呈現。此值可以省略，因為它預設為 `"all"`。

```js
{
  id: "iconPicker",
  type: "iconPicker",
  devices: "all",
  choices: [
    {
      icon: "nc-star",
      title: "標題 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "標題 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "標題 3",
      value: "value3"
    }
  ]
}
```

只會在 `desktop` 裝置上呈現。

```js
{
  id: "iconPicker",
  type: "iconPicker",
  devices: "desktop",
  choices: [
    {
      icon: "nc-star",
      title: "標題 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "標題 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "標題 3",
      value: "value3"
    }
  ]
}
```

顯示將限制在響應式模式中，特別是 `tablet` 和 `mobile`。

```js
{
  id: "iconPicker",
  type: "iconPicker",
  devices: "responsive",
  choices: [
    {
      icon: "nc-star",
      title: "標題 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "標題 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "標題 3",
      value: "value3"
    }
  ]
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是您的動態條件。

```js
{
  id: "iconPicker",
  type: "iconPicker",
  disabled: true,
  choices: [
    {
      icon: "nc-star",
      title: "標題 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "標題 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "標題 3",
      value: "value3"
    }
  ]
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個允許我們通過 id 獲取控制項值的 getter 函數。
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
      id: "iconPicker",
      type: "iconPicker",
      disabled: videoType === "custom",
      choices: [
        {
          icon: "nc-star",
          title: "標題 1",
          value: "value1",
        },
        {
          icon: "nc-star",
          title: "標題 2",
          value: "value2",
        },
        {
          icon: "nc-star",
          title: "標題 3",
          value: "value3",
        },
      ],
    },
  ];
};
```

#### 狀態範例

允許控制項在正常和懸停狀態下工作。

```js
{
  id: "iconPicker",
  type: "iconPicker",
  states: ["normal", "hover"],
  choices: [
    {
      icon: "nc-star",
      title: "標題 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "標題 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "標題 3",
      value: "value3"
    }
  ]
}
```

允許控制項在正常、懸停和活動狀態下工作。

```js
{
  id: "iconPicker",
  type: "iconPicker",
  states: ["normal", "hover", "active"],
  choices: [
    {
      icon: "nc-star",
      title: "標題 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "標題 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "標題 3",
      value: "value3"
    }
  ]
}
```

#### 輔助範例

`helper` 物件包含一個值為 `"help text"` 的 `content` 屬性，這將作為給使用者的額外指導或信息顯示。

```js
{
  id: "iconPicker",
  type: "iconPicker",
  helper: {
    content: "幫助文本"
  },
  choices: [
    {
      icon: "nc-star",
      title: "標題 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "標題 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "標題 3",
      value: "value3"
    }
  ]
}
```

當 `helper`

物件的 `dynamic` 屬性設置為 `true` 時，文本作為 `helper.content` 被視為 JavaScript 代碼，允許您動態地自定義輔助文本。

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
      id: "iconPicker",
      type: "iconPicker",
      disabled: videoType === "custom",
      choices: [
        {
          icon: "nc-star",
          title: "標題 1",
          value: "value1",
        },
        {
          icon: "nc-star",
          title: "標題 2",
          value: "value2",
        },
        {
          icon: "nc-star",
          title: "標題 3",
          value: "value3",
        },
      ],
      helper: {
        dynamic: true,
        content: videoType === "custom" ? "不可用" : "選擇一個圖示",
      },
    },
  ];
};
```

#### 條件狀態範例

允許控制項在特定條件下工作。

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
      id: "iconPicker",
      type: "iconPicker",
      disabled: videoType === "custom",
      choices: [
        {
          icon: "nc-star",
          title: "標題 1",
          value: "value1",
        },
        {
          icon: "nc-star",
          title: "標題 2",
          value: "value2",
        },
        {
          icon: "nc-star",
          title: "標題 3",
          value: "value3",
        },
      ],
      helper: {
        dynamic: true,
        content: videoType === "custom" ? "不可用" : "選擇一個圖示",
      },
      states: ["normal", "hover", "active"],
    },
  ];
};
```
