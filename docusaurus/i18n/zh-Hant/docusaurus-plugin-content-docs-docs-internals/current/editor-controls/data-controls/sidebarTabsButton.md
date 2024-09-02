---
toc_max_heading_level: 4
---

# 側邊欄選項卡按鈕

`sidebarTabsButton` 是一個用戶界面組件。它作為一個可點擊的按鈕，允許用戶在側邊欄中打開特定的選項卡。

`sidebarTabsButton` 控制項的範例：

![SidebarTabsButton](/img/controls/sidebarTabsButton.png)

### 參數

| 名稱            | 類型                                     | 預設值     | 描述                                                                                                                                                |
| :-------------- | :--------------------------------------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`            | `string`                                 | -          | `sidebarTabsButton` 將儲存數據的鍵的識別碼                                                                                                          |
| `type`          | `string`                                 | -          | 類型應設為 `"sidebarTabsButton"` 以使用此控制項                                                                                                     |
| `devices?`      | `"all"` \| `"desktop"` \| `"responsive"` | `"all"`    | 定義控制項將在哪些設備上渲染。`"all"` 會在所有設備上渲染控制項。`"desktop"` 僅在桌面設備上渲染控制項。`"responsive"` 會在平板和手機設備上渲染控制項 |
| `disabled?`     | `boolean`                                | `false`    | 配置控制項被禁用或啟用的條件                                                                                                                        |
| `config?.tabId` | `string`                                 | -          | 指定當點擊 `sidebarTabsButton` 時，側邊欄中將打開的選項卡的 id                                                                                      |
| `config?.icon`  | `string`                                 | -          | 按鈕的圖示名稱                                                                                                                                      |
| `config?.align` | `"left"` \| `"center"` \| `"right"`      | `"center"` | 按鈕的對齊方式                                                                                                                                      |
| `config?.text`  | `string`                                 | -          | 顯示在按鈕上的文本                                                                                                                                  |

### 基本範例

僅包含必要鍵值的標準定義。此控制項將在所有設備上顯示。

```js
{
  id: "button",
  type: "sidebarTabsButton"
}
```

### 返回值

`sidebarTabsButton` 控制項不會返回任何值。

### 用法

#### 設備範例

它將在所有設備上渲染。這個值可以省略，因為預設為 `"all"`。

```js
{
  id: "button",
  type: "sidebarTabsButton",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "button",
  type: "sidebarTabsButton",
  devices: "desktop"
}
```

顯示僅限於響應式模式，特別是 `tablet` 和 `mobile`。

```js
{
  id: "button",
  type: "sidebarTabsButton",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是您的動態條件。

```js
{
  id: "button",
  type: "sidebarTabsButton",
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
      id: "button",
      type: "sidebarTabsButton",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 配置 `tabId` 範例

指定側邊欄中將打開的選項卡的 id。

```js
{
  id: "button",
  type: "sidebarTabsButton",
  config: {
    tabId: "style"
  }
}
```

#### 配置 `icon` 範例

指定要顯示的圖示。

```js
{
  id: "button",
  type: "sidebarTabsButton",
  config: {
    icon: "nc-flash"
  }
}
```

#### 配置 `align` 範例

設置控制項的對齊方式。

```js
{
  id: "button",
  type: "sidebarTabsButton",
  config: {
    align: "left"
  }
}
```

#### 配置 `text` 範例

定義顯示在控制項上的文本。

```js
{
  id: "button",
  type: "sidebarTabsButton",
  config: {
    text: "效果"
  }
}
```
