---
toc_max_heading_level: 4
---

# 網格

Brizy 中的 `grid` 控制項讓使用者可以將其他選項排列在結構化的網格格式中，提供乾淨且有組織的佈局。使用者可以自定義列數、調整間距，並確保所有設備上的響應式設計。這非常適合創建平衡且視覺上吸引人的設計。

以下是使用 `grid` 控制項將其他兩個控制項排列在網格格式中的範例：

帶有分隔線：

![Grid](/img/controls/grid-with-separator.png)

不帶分隔線：

![Grid](/img/controls/grid-without-separator.png)

### 參數

| 名稱                | 類型                                     | 預設值  | 說明編程                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |             |
| :------------------ | :--------------------------------------- | :-----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `id`                | `string`                                 |    -    | 用於區分 `grid` 控制項的唯一識別碼程                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `type`              | `string`                                 |    -    | 使用此控制項的類型應為 `"grid"`。編程編程編程編程編程編程編程                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `position?`         | `number`                                 |    -    | 控制項在工具列中的位置。編程編程編程編程編程編程編程                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `className?`        | `string`                                 |    -    | 將自定義 CSS 類名設置在控制項上。它可以用來修改控制項的樣式。編程編程編程編程編程編程編程                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `roles?`            | `Array<Role>`                            |    -    | 僅當目前使用者的角色符合提供的角色陣列之一時才顯示該控制項。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**編程編程編程編程編程編程                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | string`\*\* |
| `devices?`          | `"all"` \| `"desktop"` \| `"responsive"` | `"all"` | 定義在哪些設備上顯示該控制項。`"all"` 在所有設備上顯示控制項。`"desktop"` 僅在桌面設備上顯示控制項。`"responsive"` 在平板電腦和移動設備上顯示控制項。編程編程編程編程編程編程                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `disabled?`         | `boolean`                                | `false` | 配置控制項何時禁用或啟用。編程編程編程編程編程編程編程                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `columns`           | `Array<ColumnItem>`                      |    -    | 定義網格佈局中的列數和配置。每列由一個對象表示。 <br/><br/> <b> `ColumnItem : { id: string, size?: 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| "auto", align?: "start" \| "end" \| "center", options: ControlItem[], className?: string }`</b> <br/><br/> `id` - 每個單獨列的唯一識別碼 <br/> `size` - 定義網格佈局中列的大小。 <br/> `align` - 指定列項目在其網格單元格內的對齊方式。 <br/> `className` - 定義要應用於該列的 CSS 類或類別 <br/> `options` - 一個對象陣列，表示與每列相關聯的內容 <br/><br/> <b> `ControlItem: { id: string; type: string; title?: string; label?: string; position?: number; }`</b> <br/><br/> `id` - 此屬性唯一標識每個控制項並來自已保存的選項值。它表示與選定的特定配置或選項相關聯的識別碼 <br/> `title` - 控制項上顯示的標題，代表與該列項目相關的內容部分 <br/> `label` - 控制項的額外標籤或描述，提供關於它所代表的內容部分的更多上下文或信息 <br/> `position` - 指定控制項在列項目中的位置 <br/> `type` - 控制項的類型 |
| `config?.separator` | `boolean`                                | `false` | 如果值為 `true`，則會在列之間應用分隔線。編程編程編程編程編程編程編程                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### 基本範例

在此範例中，我們實現了一個 `grid` 控制項，每列都渲染一個不同的控制項。

```js
const getToolbarItems = () => {
  return [
    {
      id: "grid-control",
      type: "grid",
      columns: [
        {
          id: "grid-settings",
          size: 1,
          options: [
            {
              id: "styles",
              type: "sidebarTabsButton",
            },
          ],
        },
        {
          id: "grid-effects",
          size: 1,
          options: [
            {
              id: "effects",
              type: "sidebarTabsButton",
            },
          ],
        },
      ],
    },
  ];
};
```

### 回傳值

此控制項不返回任何值。

### 使用範例

#### 類名範例

將 CSS 類添加到控制項的 DOM 節點。

```js
{
  id: "gridControl",
  type: "grid"
  className: "grid-control"
}
```

#### 角色範例

僅向具有管理員和設計師權限的使用者顯示控制項。

```js
{
  id: "gridControl",
  type: "grid",
  roles: ["admin", "designer"]
}
```

#### 設備範例

在所有設備上顯示。此值可以省略，因為預設設置為 `"all"`。

```js
{
  id: "gridControl",
  type: "grid",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "gridControl",
  type: "grid",
  devices: "desktop"
}
```

僅限於響應模式下顯示，特別是在 `tablet` 和 `mobile` 設備上。

```js
{
  id: "gridControl",
  type: "grid",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常在這裡應該是你的動態條件。

```js
{
  id: "gridControl",
  type: "grid",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。 `getValue` 是一個 getter 函數，允許我們通過其 id 獲取控制項的值。 `"videoType"` 是下方 `"select"` 控制項的 id。

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
      id: "gridControl",
      type: "grid",
      disabled: videoType === "custom",
      columns: [
        {
          id: "grid-settings",
          size: 1,
          options: [
            {
              id: "styles",
              type: "sidebarTabsButton",
            },
          ],
        },
        {
          id: "grid-effects",
          size: 1,
          options: [
            {
              id: "effects",
              type: "sidebarTabsButton",
            },
          ],
        },
      ],
    },
  ];
};
```

#### 配置 `separator` 範例

在此範例中，我們實現了一個 `grid` 控制項，每列之間有一個分隔線。

```js
{
  id: "grid-group",
  type: "grid",
  config: {
    separator: true
  },
  columns: [
    {
      id: "grid-settings",
      size: 1,
      options: [
        {
          id: "styles",
          type: "sidebarTabsButton"
        }
      ]
    },
    {
      id: "grid-effects",
      size: 1,
      options: [
        {
          id: "effects",
          type: "sidebarTabsButton"
        }
      ]
    }
  ]
};
```
