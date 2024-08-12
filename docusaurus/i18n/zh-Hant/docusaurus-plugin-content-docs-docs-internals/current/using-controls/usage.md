---
sidebar_position: 1
---

# 使用方式

控制項是幫助我們構建工具列的 UI 元件。

這些控制項讓最終用戶可以輸入數據，這些數據隨後會被存儲。存儲的數據可用於生成 CSS 或在基於用戶選擇的元件中進一步使用。

### 添加控制項

要添加 Brizy 控制項，定義控制項並將其添加到返回工具列項目的函數中。以下是示例：<br/>

```js
const getToolbarItems = () => {
  return [
    {
      id: "settings",
      type: "popover",
      config: { icon: "nc-cog", title: "設置" },
      options: [
        {
          id: "width",
          label: "寬度",
          type: "slider",
          config: {
            min: 0,
            max: 100,
            units: [{ value: "px", title: "px" }],
          },
        },
      ],
    },
  ];
};
```

我們之前添加了 `popover` 和 `slider` 控制項，以允許用戶設置組件的寬度。<br/>
您可以在 [這裡](./regular-control) 了解更多信息。

### 數據儲存

控制項的值將儲存在以 `id` 屬性值命名的鍵中。然而，對於平板電腦和手機設備，這個鍵會添加前綴。以下是示例：

```js
{
  id: "loop",
  type: "switch"
}
```

當用戶更改開關狀態時：

<ul>
 <li>桌面值將儲存在 `"loop"` 鍵中</li>
 <li>平板電腦值將儲存在 `"tabletLoop"` 鍵中</li>
 <li>手機值將儲存在 `"mobileLoop"` 鍵中</li>
</ul>

在代碼中如何顯示：<br/>

桌面：

```js
{
  loop: "on";
}
```

平板電腦：

```js
{
  tabletLoop: "on";
}
```

手機：

```js
{
  mobileLoop: "off";
}
```

---

控制項的返回值的鍵也會以控制項的 `id` 作為前綴。<br/>
例如，我們有以下控制項：

```js
{
  id: "margin",
  type: "margin"
}
```

它的默認返回值是：

```js
{
  type: "grouped" | "ungrouped",
  value: number,
  suffix: "px" | "%",
  top: number,
  topSuffix: "px" | "%",
  right: number,
  rightSuffix: "px" | "%",
  bottom: number,
  bottomSuffix: "px" | "%",
  left: number,
  leftSuffix: "px" | "%"
}
```

在我們的示例中，由於 `id: "margin"`，鍵將以 `"margin"` 作為前綴。<br/>
只有 `value` 鍵將被替換為控制項的 `id`，在我們的例子中是 `"margin"`。

```js
{
  marginType: "grouped",
  margin: 0,
  marginSuffix: "px",
  marginTop: 0,
  marginTopSuffix: "px",
  marginRight: 0,
  marginRightSuffix: "px",
  marginBottom: 0,
  marginBottomSuffix: "px",
  marginLeft: 0,
  marginLeftSuffix: "px"
}
```
