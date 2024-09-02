---
toc_max_heading_level: 4
---

# 排序

`order` 控制項旨在重新排列容器中的項目，無論是水平還是垂直排列。它由兩個箭頭組成，用戶可以使用這些箭頭來更改項目的位置。

水平箭頭控制項範例：

![Order Horizontal](/img/controls/order-horizontal.png)

垂直箭頭控制項範例：

![Order Vertical](/img/controls/order-vertical.png)

### 參數

| 名稱               | 類型                                        |      預設值       | 描述                                                                                                                                                                                                                          |
| :----------------- | :------------------------------------------ | :---------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                    |         -         | `order` 控制項將保存數據的鍵的標識符                                                                                                                                                                                          |
| `type`             | `string`                                    |         -         | 要使用此控制項，類型應設為 `"order"`                                                                                                                                                                                          |
| `className?`       | `string`                                    |         -         | 將設置在控制項上的自定義 CSS 類名稱。可用於修改控制項樣式                                                                                                                                                                     |
| `position?`        | `number`                                    |         -         | 工具列中控制項的位置                                                                                                                                                                                                          |
| `roles?`           | `Array<Role>`                               |         -         | 僅當當前用戶的角色與提供的陣列中的角色之一匹配時，才會渲染控制項。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                  |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`    |      `"all"`      | 定義渲染控制項的設備。`"all"` 將在所有設備上渲染控制項。`"desktop"` 僅在桌面設備上渲染控制項。`"responsive"` 則在平板和移動設備上渲染控制項。                                                                                 |
| `disabled?`        | `boolean`                                   |      `false`      | 配置控制項在何種情況下會被禁用或啟用                                                                                                                                                                                          |
| `config?.disable`  | `"prev"` \| `"next"` \| `"all"` \| `"none"` |     `"none"`      | 決定哪個箭頭會被禁用                                                                                                                                                                                                          |
| `config?.onChange` | `function`                                  | `() => undefined` | 當某個箭頭被點擊時調用，允許自訂重新排序邏輯<br/> <br/> <b>`Function = (value: "next" \| "prev") => void`</b><br/><br/>`value` - 重新排序操作的方向，可以是 `"prev"`（表示移到前一個位置）或 `"next"`（表示移到下一個位置）。 |
| `config?.align`    | `"horizontal"` \| `"vertical"`              |  `"horizontal"`   | 決定箭頭的對齊方式                                                                                                                                                                                                            |

### 基本範例

標準定義與控制項正常運作所需的關鍵。將在所有設備上顯示。

```js
{
  id: "order",
  type: "order",
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // 重新排序項目的邏輯
          break;
        case "next":
          // 重新排序項目的邏輯
          break;
      }
    }
  }
}
```

### 返回值

不返回任何值

### 用法

#### 類名範例

將 CSS 類添加到控制項的 DOM 節點。

```js
{
  id: "order",
  type: "order",
  className: "myOrder",
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // 重新排序項目的邏輯
          break;
        case "next":
          // 重新排序項目的邏輯
          break;
      }
    }
  }
}
```

#### 角色範例

僅向具有管理員和設計師特權的用戶顯示控制項。

```js
{
  id: "order",
  type: "order",
  roles: ["admin", "designer"],
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // 重新排序項目的邏輯
          break;
        case "next":
          // 重新排序項目的邏輯
          break;
      }
    }
  }
}
```

#### 設備範例

將在所有設備上渲染。這個值可以省略，因為默認設置為 `"all"`。

```js
{
  id: "order",
  type: "order",
  devices: "all",
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // 重新排序項目的邏輯
          break;
        case "next":
          // 重新排序項目的邏輯
          break;
      }
    }
  }
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "order",
  type: "order",
  devices: "desktop",
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // 重新排序項目的邏輯
          break;
        case "next":
          // 重新排序項目的邏輯
          break;
      }
    }
  }
}
```

顯示將限制在響應模式下，特別是 `tablet` 和 `mobile`。

```js
{
  id: "order",
  type: "order",
  devices: "responsive",
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // 重新排序項目的邏輯
          break;
        case "next":
          // 重新排序項目的邏輯
          break;
      }
    }
  }
}
```

#### 禁用範例

控制項將被禁用。通常這裡應該是你的動態條件。

```js
{
  id: "order",
  type: "order",
  disabled: true,
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // 重新排序項目的邏輯
          break;
        case "next":
          // 重新排序項目的邏輯
          break;
      }
    }
  }
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。`getValue` 是一個 getter 函數，允許我們通過 id 檢索控制項的值。`"videoType"` 是下面 `"select"` 控制項的 id。

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
      id: "order",
      type: "order",
      disabled: videoType === "custom",
      config: {
        disable: itemIndex === 0 ? "prev" : itemIndex === items.length - 1 ? "next" : undefined,
        onChange: (v) => {
          switch (v) {
            case "prev":
              // 重新排序項目的邏輯
              break;
            case "next":
              // 重新排序項目的邏輯
              break;
          }
        },
      },
    },
  ];
};
```

#### Config `disable` 範例

決定哪個箭頭會被禁用

。在這種情況下，一個箭頭會動態地被禁用：如果 `itemIndex` 是第一個項目，則禁用 `"prev"` 箭頭；如果 `itemIndex` 是最後一個項目，則禁用 `"next"` 箭頭。

```js
{
  id: "order",
  type: "order",
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // 重新排序項目的邏輯
          break;
        case "next":
          // 重新排序項目的邏輯
          break;
      }
    }
  }
}
```

#### Config `onChange` 範例

當其中一個箭頭被點擊時調用。允許自訂重新排序邏輯。

```js
{
  id: "order",
  type: "order",
  config: {
    onChange: (v) => {
      switch (v) {
        case "prev":
          // 重新排序項目的邏輯
          break;
        case "next":
          // 重新排序項目的邏輯
          break;
      }
    },
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined
  }
}
```

#### Config `align` 範例

決定箭頭的對齊方式。在這種情況下，箭頭將上下排列顯示。

```js
{
  id: "order",
  type: "order",
  config: {
    align: "vertical",
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // 重新排序項目的邏輯
          break;
        case "next":
          // 重新排序項目的邏輯
          break;
      }
    }
  }
}
```
