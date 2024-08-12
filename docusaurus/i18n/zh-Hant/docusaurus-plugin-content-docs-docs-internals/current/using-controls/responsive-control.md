---
sidebar_position: 3
---

# 響應式控制

響應式控制與普通控制元件的主要區別在於，它們允許使用者定義針對特定設備（基於螢幕尺寸）的值。要將控制元件限制為僅響應式佈局，請使用 `"devices"` 屬性。

例如，如果我們希望對所有設備類型使用 `number` 控制元件，我們將定義：

```js
{
  id: "rows",
  type: "number"
}
```

要將數字控制元件限制為僅響應式佈局（平板電腦和手機），請使用 `"devices"` 屬性，並將值設為 `"responsive"`：

```js
{
  id: "rows",
  type: "number",
  devices: "responsive"
}
```
