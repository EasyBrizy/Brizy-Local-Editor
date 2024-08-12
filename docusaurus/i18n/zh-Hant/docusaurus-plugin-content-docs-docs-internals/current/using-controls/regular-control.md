---
sidebar_position: 2
toc_max_heading_level: 4
---

# 常規控制項

常規控制項是用於構建工具列 UI 和收集用戶資料的基本且常用的控制項。<br/>  
默認情況下，所有 Brizy 控制項都適用於所有設備（桌面、平板電腦和手機）。要將控制項限制為特定設備，請使用 `"devices"` 屬性。

### 控制項定義

所有控制項都定義為具有兩個必需鍵的 JavaScript 物件：

<ul>
  <li>**`id`** - 控制項將保存數據的鍵的識別符</li>
  <li>**`type`** - 我們應該使用的控制項名稱</li>
</ul>

實現以下代碼片段來創建一個控制項：

```js
{
  id: "link",
  type: "inputText"
}
```

在上述示例中，我們將使用 `inputText` 控制項。輸入在 `inputText` 控制項中的值將被保存為 `"link"` 鍵下的數據。

### 範例

---

#### 輸入文本

在以下示例中，我們將添加一個帶有標籤和佔位符的輸入字段，允許用戶設置連結到任何頁面。

```js
{
  id: "link",
  type: "inputText",
  label: "連結",
  placeholder: "輸入連結..."
}
```

#### 選擇

使用 `select` 控制項來選擇預定義的 HTML 標籤名稱的示例。

```js
{
  id: "tagName",
  label: "HTML 標籤",
  type: "select",
  choices: [
    { title: "Span", value: "span" },
    { title: "Div", value: "div" },
    { title: "P", value: "p" }
  ]
}
```

#### 滑塊

使用可拖動的範圍滑塊，最小值為 `0`，最大值為 `100`，單位為 `"px"`，設置元素的寬度。

```js
{
  id: "width",
  label: "寬度",
  type: "slider",
  config: {
    min: 0,
    max: 100,
    units: [{ value: "px", title: "px" }]
  }
}
```
