---
toc_max_heading_level: 4
---

# 群組

Brizy 的 `group` 控制項透過移除控制項之間的分隔線，簡化了介面，使佈局更為簡潔和連貫。

包裹在 `group` 控制項中的控制項範例：

![Group](/img/controls/grouped-controls.png)

未使用 `group` 控制項的相同控制項範例：

![NoGroup](/img/controls/no-grouped-controls.png)

### 參數

| 名稱         | 類型                                     |    預設值    | 說明                                                                                                                                                                                                                                                       |
| :----------- | :--------------------------------------- | :----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`         | `string`                                 |      -       | 用於儲存資料的切換開關鍵的識別碼                                                                                                                                                                                                                           |
| `type`       | `string`                                 |      -       | 要使用此控制項，類型應為 `"group"`                                                                                                                                                                                                                         |
| `position?`  | `number`                                 |      -       | 控制項在工具列中的位置                                                                                                                                                                                                                                     |
| `className?` | `string`                                 |      -       | 將設定在控制項上的自訂 CSS 類名。可以用來修改控制項的樣式。                                                                                                                                                                                                |
| `roles?`     | `Array<Role>`                            |      -       | 僅當當前使用者的角色符合提供的陣列中的角色之一時，才渲染控制項。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                 |
| `devices?`   | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | 定義控制項將在哪些裝置上渲染。`"all"` 將在所有裝置上渲染控制項。`"desktop"` 僅在桌面裝置上渲染控制項。`"responsive"` 將在平板和手機裝置上渲染控制項。                                                                                                      |
| `states?`    | `Array<State>`                           | [`"normal"`] | 允許根據元素的狀態應用不同樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態, <br/> `"hover"` - 當滑鼠懸停於元素之上時的狀態, <br/> `"active"` - 元素處於活動狀態時的狀態（例如，分頁中的當前頁面） |
| `disabled?`  | `boolean`                                |   `false`    | 設定控制項啟用或停用的條件。                                                                                                                                                                                                                               |
| `options`    | `Array<ControlItem>`                     |      -       | 將要一起群組的控制項的陣列。<br/><br/> **`` ControlItem : {id: number; type: string; disabled: boolean; position: number; devices: "all"` \| `"desktop"` \| `"responsive"} ``**                                                                            |

### 基本範例

在這個範例中，我們實現了一個包含兩個選項的群組控制項。

```js
const getToolbarItems = ({ getValue }) => {
  const closeButtonState = getValue("closeButtonState");

  return [
    {
      id: "groupCloseButton",
      type: "group",
      devices: "desktop",
      options: [
        {
          id: "closeButtonState",
          type: "switch",
          label: "顯示關閉按鈕",
        },
        {
          id: "delay",
          label: "延遲",
          type: "slider",
          disabled: closeButtonState === "off",
          config: {
            min: 0,
            max: 10,
            units: [{ title: "秒", value: "秒" }],
          },
        },
      ],
    },
  ];
};
```

### 返回值

此控制項不返回任何值。

### 使用範例

#### 類名範例

為控制項的 DOM 節點添加一個 CSS 類名。

```js
{
  id: "borderRadiusTypeGroup",
  type: "group",
  className: "brz-radius-group",
  options: [
    {
      id: "borderRadiusType",
      label: "角落",
      type: "radioGroup",
      choices: [
          { value: "square", icon: "nc-corners-square" },
          { value: "rounded", icon: "nc-corners-round" },
          { value: "custom", icon: "nc-more" }
      ]
    },
    {
      id: "borderRadius",
      type: "slider"
    }
  ]
}
```

#### 角色範例

僅向具有管理員和設計師權限的使用者顯示控制項。

```js
{
  id: "groupControl",
  type: "group",
  roles: ["admin", "designer"]
}
```

#### 裝置範例

將在所有裝置上渲染。由於此值預設為 `"all"`，因此可以省略此值。

```js
{
  id: "groupControl",
  type: "group",
  devices: "all"
}
```

僅在 `桌面` 裝置上渲染。

```js
{
  id: "groupControl",
  type: "group",
  devices: "desktop"
}
```

顯示僅限於響應模式，特別是 `平板` 和 `手機`。

```js
{
  id: "groupControl",
  type: "group",
  devices: "responsive"
}
```

#### 狀態範例

允許控制項在普通和懸停狀態下工作。

```js
{
  id: "groupControl",
  type: "group",
  states: ["normal", "hover"]
}
```

允許控制項在普通、懸停和活動狀態下工作。

```js
{
  id: "groupControl",
  type: "group",
  states: ["normal", "hover", "active"]
}
```

#### 停用範例

控制項將被禁用。通常，這裡應該是動態條件。

```js
{
  id: "groupControl",
  type: "group",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。 `getValue` 是一個允許我們根據控制項的 ID 獲取值的 getter 函數。 `"videoType"` 是下面 `"select"` 控制項的 ID。

```js
const getToolbarContols = ({ getValue }) => {
  const videoType = getValue("videoType");

  return [
    {
      id: "videoType",
      type: "select",
      choices: [
        { title: "Youtube", value: "youtube" },
        { title: "自訂", value: "custom" },
      ],
    },
    {
      id: "groupCloseButton",
      type: "group",
      devices: "desktop",
      disabled: videoType === "custom",
      options: [
        {
          id: "closeButtonState",
          type: "switch",
          label: "顯示關閉按鈕",
        },
        {
          id: "delay",
          label: "延遲",
          type: "slider",
          disabled: closeButtonState === "off",
          config: {
            min: 0,
            max: 10,
            units: [{ title: "秒", value: "秒" }],
          },
        },
      ],
    },
  ];
};
```
