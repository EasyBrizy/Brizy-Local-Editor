---
toc_max_heading_level: 4
---

# 側邊欄標籤 (Sidebar Tabs)

`sidebarTabs` 是一個用於標籤式導航系統的用戶界面元件。它的功能是作為可點擊的標籤，允許用戶在不同的內容區塊之間切換。

`sidebarTabs` 控件範例：

![SidebarTabs](/img/controls/sidebarTabs.png)

### 參數

| 名稱        | 類型                                     | 預設值  | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :---------- | :--------------------------------------- | :-----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`        | `string`                                 |    -    | 用於區分個別 `sidebarTabs` 的唯一識別符                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `type`      | `string`                                 |    -    | 類型應設為 `"sidebarTabs"` 以使用此控件                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `devices?`  | `"all"` \| `"desktop"` \| `"responsive"` | `"all"` | 定義控件將在哪些設備上渲染。`"all"` 在所有設備上渲染控件。`"desktop"` 僅在桌面設備上渲染控件。`"responsive"` 在平板和手機設備上渲染控件                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `disabled?` | `boolean`                                | `false` | 配置控件被禁用或啟用的條件                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `tabs?`     | `Array<TabItems>`                        |  `[ ]`  | 定義側邊欄內標籤的陣列。每個標籤由一個物件表示。<br/><br/> <b> `TabItems: { id: string; title: string; label: string; position: number; options: ControlItems[]; }`</b> <br/><br/> `id` - 每個標籤在 `sidebarTabs` 中的唯一識別符 <br/> `title` - 在標籤上顯示的標題，代表與該標籤相關的內容區塊 <br/> `label` - 標籤的附加標籤或描述，提供有關它代表的內容區塊的更多信息 <br/> `position` - 指定標籤在 `sidebarTabs` 元件中的位置 <br/> `options` - 表示每個標籤所關聯內容的物件陣列 <br/><br/> <b> `ControlItems: { id: string; title: string; label: string; position: number; type: string; }`</b> <br/><br/> `id` - 該屬性唯一標識每個控件項目，並從保存的選項值中派生。它代表與所選特定配置或選項相關聯的識別符 <br/> `title` - 在控件上顯示的標題，代表與該 `TabItems` 相關的內容區塊 <br/> `label` - 控件的附加標籤或描述，提供有關它代表的內容區塊的更多信息 <br/> `position` - 指定控件在 `TabItems` 中的位置 <br/> `type` - 控件的類型 |

### 基本範例

僅包含必需鍵的標準定義。這個控件將顯示在所有設備上。

```js
{
  id: "tabs",
  type: "sidebarTabs"
}
```

### 返回值

`sidebarTabs` 控件不返回任何內容。

### 用法

#### 設備範例

將在所有設備上渲染。這個值可以跳過，因為它默認設置為 `"all"`。

```js
{
  id: "tabs",
  type: "sidebarTabs",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "tabs",
  type: "sidebarTabs",
  devices: "desktop"
}
```

顯示僅限於響應模式，特別是 `tablet` 和 `mobile`。

```js
{
  id: "tabs",
  type: "sidebarTabs",
  devices: "responsive"
}
```

#### 禁用範例

控件將被禁用。通常，這裡應該是你的動態條件。

```js
{
  id: "tabs",
  type: "sidebarTabs",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控件將被禁用。`getValue` 是一個 getter 函數，允許我們通過控件的 id 獲取其值。 `"videoType"` 是下面 `"select"` 控件的 id。

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
      id: "tabs",
      type: "sidebarTabs",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 標籤範例

此配置在側邊欄中設置標籤。<br/> `tabs` 參數包括具有嵌套元素的控件物件，如 `id`、`title`、`label` 和 `options`。

```js
{
  id: "tabs",
  type: "sidebarTabs",
  tabs: [
    {
      id: "moreSettingsAdvanced",
      label: "進階",
      options: [
        {
          id: "customCSS",
          label: "自訂 CSS",
          type: "codeMirror",
          position: 45,
          display: "block",
          placeholder: "此處輸入元素 CSS"
        }
      ]
    },
    {
      id: "settingsStyling",
      label: "基本",
      icon: "nc-styling",
      options: [
        {
          id: "padding",
          type: "padding",
          label: "內距",
          disabled: true
        },
        {
          id: "border",
          type: "corners",
          label: "邊角",
          devices: "desktop",
          position: 65
        }
      ]
    }
  ]
}
```
