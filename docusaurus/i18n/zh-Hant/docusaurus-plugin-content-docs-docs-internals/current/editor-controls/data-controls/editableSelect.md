---
toc_max_heading_level: 4
---

# 可編輯選擇控制元件

`editableSelect` 控制元件與標準選擇元件相似，允許使用者從預定義的選項中進行選擇。然而，它還提供了額外的功能，如刪除、複製或編輯選定的項目。

`editableSelect` 控制元件在未展開時的範例：

![Editable Select](/img/controls/editableSelect.png)

`editableSelect` 控制元件在展開時的範例：

![Editable Select Opened](/img/controls/editableSelectOpened.png)

`editableSelect` 控制元件選項的範例：

![Editable Select Options](/img/controls/editableSelectOptions.png)

### 參數

| 名稱               | 類型                                                                                                                                                                                       |    預設值    | 說明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |      -       | `editableSelect` 將保存您資料的鍵的識別符                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `type`             | `string`                                                                                                                                                                                   |      -       | 要使用此控制元件，類型應設置為 `"editableSelect"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `placeholder?`     | `string`                                                                                                                                                                                   |      -       | 顯示在輸入框中的佔位符文字                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `label?`           | `string`                                                                                                                                                                                   |      -       | 顯示在控制元件左側的標籤                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | 顯示在控制元件標籤左側的圖標名稱。查看所有[圖標](/docs-internals/icons/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `position?`        | `number`                                                                                                                                                                                   |      -       | 控制元件在工具列中的位置                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | 只有當目前使用者的角色與提供的角色陣列中的某一個角色相匹配時，才會渲染此控制元件。<br /><br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義在哪些設備上渲染此控制元件。`"all"` 在所有設備上渲染控制元件。`"desktop"` 僅在桌面設備上渲染控制元件。`"responsive"` 在平板和移動設備上渲染控制元件。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | 配置控制元件在何種條件下禁用或啟用                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `display?`         | `"inline"` \| `"block"`                                                                                                                                                                    |  `"inline"`  | 配置控制元件和標籤的排列方式。如果 `display` 為 `"inline"`，則標籤和控制元件將在一行中排列；如果 `display` 為 `"block"`，則標籤將在一行中，下一行將是控制元件。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | 如果提供，則會在標籤旁邊顯示一個圖標。將滑鼠懸停在此圖標上時，會出現一個包含附加資訊的工具提示                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於輔助圖標的位置                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 根據元素的狀態允許不同的樣式<br/><br/><b>`State = "normal" \| "hover" \| "active"`</b><br/><br/> `"normal"` - 元素的正常狀態<br/> `"hover"` - 元素懸停時的狀態<br/> `"active"` - 元素為激活狀態時（例如在分頁中當前頁面）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `choices`          | `Array<Choice>`                                                                                                                                                                            |      -       | `Choice` 是一個直接傳遞給組件的物件。<br/><br/>**`Choice: { title: string; value: string; allowRemove?: boolean; allowEdit?: boolean; allowDuplicate?: boolean; }`**<br/><br/> 每個 `Choice` 物件定義以下屬性：<br/>`title` - 代表選擇顯示標題的字串。<br/>`value` - 代表選擇的字串值。選擇時返回此值。<br/>`allowRemove?` - 允許刪除 `Choice`。<br/>`allowDuplicate?` - 允許複製 `Choice`。<br/>`allowEdit?` - 允許編輯 `Choice` 的 `title`。                                                                                                                                                                                                                                                               |
| `onChange`         | `function`                                                                                                                                                                                 |      -       | 根據操作變更選項陣列的值。<br/><br/> **`type Function = (action: OnChangeAction) => void`**<br/><br/> 接收 `OnChangeAction`，其為<br/><br/> **`type OnChangeAction = { type: "change" \| "edit" \| "duplicate" \| "reset" \| "remove"; payload?: string }`** <br/><br/> 當您從列表中選擇新項目時，將調用以下操作：<br/> **`{type: "change", payload: string}`**<br/>當您按下 `Duplicate` 按鈕時，將調用以下操作類型：<br/>**`{type: "duplicate"}`**<br/>當您按下 `Edit Name` 按鈕時，將調用以下操作類型：<br/>**`{type: "edit"; payload: string}`**<br/>當您按下 `Reset` 按鈕時，將調用以下操作類型：<br/>**`{type:"reset"}`**<br/>當您按下 `Remove` 按鈕時，將調用以下操作類型：<br/>**`{type: "remove"}`** |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | 控制元件的預設值。<br/><br/><b>`Default: { value: string; }`</b><br/><br/> `value` - 控制元件的自訂初始值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `style?`           | `function`                                                                                                                                                                                 |      -       | 此功能根據控制元件的值生成 CSS 輸出。參數是一個包含 `value` 鍵的物件，該鍵包含控制元件的當前值。該功能返回一個包含 CSS 選擇器鍵和 CSS 屬性值的物件。<pre>`style: ({value}) => {`<br/> `return {`<br/> &nbsp;`"{{WRAPPER}} .brz-text": {`<br/> &nbsp;&nbsp;`display: value === "none" ? "none" : "block"`<br/> &nbsp;&nbsp;`}`<br/> &nbsp;`}`<br/>`}`</pre>                                                                                                                                                                                                                                                                                                                                                   |

### 基本範例

只有必填的鍵值定義的標準範例。這個控制項將會顯示在所有裝置上。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  onChange: () => {}
}
```

### 回傳值

回傳值是一個代表文字欄位值的 `string`。

```js
{
  value: string;
}
```

範例值:

```js
{
  value: "large";
}
```

### 使用方式

#### 佔位符範例

為控制項添加佔位符文字。

```js
{
  id: "line",
  type: "editableSelect",
  placeholder: "Choose one",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  onChange: () => {}
}
```

#### 標籤範例

在控制項的左側添加標籤。

```js
{
  id: "line",
  type: "editableSelect",
  label: "Line",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  onChange: () => {}
}
```

#### 圖標範例

在控制項標籤的左側添加 "line" 圖標。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  onChange: () => {},
  icon: "nc-line"
}
```

#### 角色範例

僅顯示給具有管理員和設計師權限的用戶。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  onChange: () => {},
  roles: ["admin", "designer"]
}
```

#### 裝置範例

它將會在所有裝置上渲染。此值可略過，因為默認設為 `"all"`。

```js
{
  id: "line",
  type: "editableSelect",
  devices: "all",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  onChange: () => {}
}
```

只會在 `desktop` 上渲染。

```js
{
  id: "line",
  type: "editableSelect",
  devices: "desktop",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  onChange: () => {}
}
```

顯示僅限於響應模式，具體是 `tablet` 和 `mobile`。

```js
{
  id: "line",
  type: "editableSelect",
  devices: "responsive",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  onChange: () => {}
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是您的動態條件。

```js
{
  id: "line",
  type: "editableSelect",
  disabled: true,
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  onChange: () => {}
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。`getValue` 是一個 getter 函數，可讓我們通過 ID 檢索控制項的值。`"videoType"` 是下面第一個 `"select"` 控制項的 ID。

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
      id: "line",
      type: "editableSelect",
      disabled: videoType === "custom",
      choices: [
        { value: "none", title: "None" },
        { value: "thin", title: "Thin" },
        { value: "heavy", title: "Heavy" },
      ],
      onChange: () => {},
    },
  ];
};
```

#### 顯示範例

在這個範例中，使用 `display: "block"`，標籤將會在第一行渲染，控制項在第二行渲染。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  display: "block",
  onChange: () => {}
}
```

#### 輔助範例

輔助物件包含一個 `content` 屬性，值為 `"Helper"`，將顯示為額外的用戶指導或訊息。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  helper: {
    content: "Helper"
  },
  onChange: () => {}
}
```

當輔助物件包含 `position` 屬性，值為 `"top-start"`，表示輔助文字將顯示在圖標的上方起始位置。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  helper: {
    content: "Helper",
    position: "top-start"
  },
  onChange: () => {}
}
```

#### 狀態範例

允許控制項在正常和懸停狀態下運作。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  states: ["normal", "hover"],
  onChange: () => {}
}
```

允許控制項在正常、懸停和活動狀態下運作。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "none", title: "None" },
    { value: "thin", title: "Thin" },
    { value: "heavy", title: "Heavy" }
  ],
  states: ["normal", "hover", "active"],
  onChange: () => {}
}
```

#### `allowRemove` 選項範例

您可以從列表中移除這些選項。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "solid", title: "solid", allowRemove: true },
    { value: "dashed", title: "dashed", allowRemove: true },
    { value: "dotted", title: "dotted", allowRemove: true }
  ],
  onChange: () => {}
}
```

#### `allowEdit` 選項範例

您可以編輯這些選項的標題。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "solid", title: "solid", allowEdit: true },
    { value: "dashed", title: "dashed", allowEdit: true },
    { value: "dotted", title: "dotted", allowEdit: true }
  ],
  onChange: () => {}
}
```

#### `allowDuplicate` 選項範例

您可以重複這些選項。

```

js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "solid", title: "solid", allowDuplicate: true },
    { value: "dashed", title: "dashed", allowDuplicate: true },
    { value: "dotted", title: "dotted", allowDuplicate: true }
  ],
  onChange: () => {}
}
```

#### `allowCustom` 選項範例

允許自定義選項（值和標題必須以空格分隔）。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "solid", title: "solid" },
    { value: "dashed", title: "dashed" },
    { value: "dotted", title: "dotted" }
  ],
  allowCustom: true,
  onChange: () => {}
}
```

#### `allowMultiple` 選項範例

允許多重選擇選項。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "solid", title: "solid" },
    { value: "dashed", title: "dashed" },
    { value: "dotted", title: "dotted" }
  ],
  allowMultiple: true,
  onChange: () => {}
}
```

#### `allowEmpty` 選項範例

允許空值選項。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "solid", title: "solid" },
    { value: "dashed", title: "dashed" },
    { value: "dotted", title: "dotted" }
  ],
  allowEmpty: true,
  onChange: () => {}
}
```

#### `removeConfirm` 選項範例

在刪除選項前需要確認。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "solid", title: "solid", removeConfirm: true },
    { value: "dashed", title: "dashed", removeConfirm: true },
    { value: "dotted", title: "dotted", removeConfirm: true }
  ],
  onChange: () => {}
}
```

#### `defaultChoice` 選項範例

指定控制項的預設選擇。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "solid", title: "solid" },
    { value: "dashed", title: "dashed" },
    { value: "dotted", title: "dotted" }
  ],
  defaultChoice: "dotted",
  onChange: () => {}
}
```

#### `inputType` 選項範例

指定選項的輸入類型。

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "solid", title: "solid", inputType: "text" },
    { value: "dashed", title: "dashed", inputType: "text" },
    { value: "dotted", title: "dotted", inputType: "text" }
  ],
  onChange: () => {}
}
```
