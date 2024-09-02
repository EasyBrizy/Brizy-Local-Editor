---
sidebar_position: 1
---

# CSS

Brizy 的 `CSS` 機制讓使用者能夠在不需要編程專業知識的情況下動態自定義網站上元素的外觀。透過此功能，使用者可以輕鬆調整各種 CSS 屬性，例如顏色、字體、邊距等，以達到他們期望的視覺風格。

它支持兩種方法：使用 `selector` 來為預定義的 CSS 屬性與其他控制項結合，或使用 `style` 來生成自定義 CSS。

### 狀態

在 Brizy 控制項中有 3 種狀態可以用來生成 CSS：

<ul>
  <li>`normal` - 預設狀態，返回簡單的 CSS </li>
  <li>`hover` - 滑鼠懸停時的 CSS</li>
  <li>`active` - 用於樣式化處於活動/選定狀態的項目（通常在列表中）</li>
</ul>

#### 使用方法

要指定我們希望在控制項中使用哪些狀態，只需將它們傳遞給控制定義中的 `states` 參數。

```ts
type States = "normal" | "hover" | "active";
```

僅包含 normal 狀態的範例（當我們未指定狀態時，控制項以 `normal` 狀態運行）。

```js
{
  id: "color",
  type: "colorPicker"
}
```

包含 normal 和 hover 狀態的範例：

```js
{
  id: "color",
  type: "colorPicker",
  states: ["normal", "hover"]
}
```

包含 normal、hover 和 active 狀態的範例：

```js
{
  id: "color",
  type: "colorPicker",
  states: ["normal", "hover", "active"]
}
```

### WRAPPER 占位符

WRAPPER 占位符：`{{WRAPPER}}`。<br/>
此占位符指定了動態生成的 CSS 類名將被插入選擇器中的位置。它用於避免頁面上其他元素之間的 CSS 樣式衝突。<br/><br/>

範例：

```js
{
  id: "color",
  type: "colorPicker",
  selector: "{{WRAPPER}} .brz-component"
}
```

在 CSS 輸出中，我們將得到：

```css
.brz-css-gpVzg .brz-component {
}
```

在這裡，類名 `.brz-css-gpVzg` 替換了初始的 `{{WRAPPER}}` 占位符。

### 選擇器 (Selector)

`selector` 參數與其他控制項結合使用，將預定義的 CSS 屬性應用於選定的元素。Brizy 的控制項支持此功能的有：

- `backgroundColor`
- `border`
- `boxShadow`
- `colorPicker`
- `corners`
- `filters`
- `margin`
- `padding`
- `textShadow`
- `typography`

#### 使用方法

```js
 {
  id: "backgroundCSS",
  type: "backgroundColor",
  states: ["normal", "hover"],
  selector: "{{WRAPPER}}:hover .brz-video-content"
 }
```

這段代碼將背景色應用於當使用者與控制項交互時選定的元素，帶有選擇器 `.brz-video-content`。它將生成類似以下的 CSS 輸出：

```css
.brz-css-gpWLU .brz-video-content {
  background-color: #000000;
}

.brz-css-gpWLU:hover .brz-video-content {
  background-color: #ffffff;
}
```

如果 `states` 陣列包含 `ACTIVE` 或 `HOVER`，但在選擇器中未指定，則控制項會在選擇器末尾自動添加偽類 `:hover`（對於 `HOVER`）和類 `".active"`（對於 `ACTIVE`）。

```js
 {
  id: "backgroundCSS",
  type: "backgroundColor",
  states: ["normal", "active", "hover"],
  selector: "{{WRAPPER}} .brz-video-content"
 }
```

CSS 輸出將類似如下：

```css
.brz-css-gpWLU .brz-video-content {
  background-color: #000000;
}

.brz-css-gpWLU .brz-video-content.active {
  background-color: #ffffff;
}

.brz-css-gpWLU .brz-video-content:hover {
  background-color: #ff0e0e;
}
```

#### 手動指定 `:hover` 和 `.active`

```js
{
  id: "colorCSS",
  type: "colorPicker",
  states: ["normal", "hover", "active"]
  selector: "{{WRAPPER}} .brz-list:hover .brz-list-item.active"
}
```

這段代碼將顏色應用於選定的元素，帶有選擇器 `.brz-list:hover .brz-list-item.active`。CSS 輸出將類似如下：

```css
.brz-css-dfEb .brz-list:hover .brz-list-item.active {
  color: #000000;
}
```

#### 多個選擇器

多個選擇器以同一字串中傳遞，並以逗號分隔。

```js
{
  id: "colorCSS",
  type: "colorPicker",
  selector: ".brz-text, .brz-title, .brz-accordion"
}
```

`CSS` 機制還允許您將相同的 CSS 屬性應用於多個元素。在此情況下，CSS 輸出將類似如下：

```css
.brz-text,
.brz-title,
.brz-accordion {
  color: #000000;
}
```

#### 手動指定 `:hover` 和 `.active` 的多個選擇器

```js
{
  id: "colorCSS",
  type: "colorPicker",
  states: ["normal", "hover", "active"],
  selector: "{{WRAPPER}}:hover .brz-text, {{WRAPPER}} .brz-title:hover.active, {{WRAPPER}} .brz-accordion.active"
}
```

`CSS` 輸出：

```css
.brz-css-qfEb .brz-text {
  color: red;
}

.brz-css-qfEb:hover .brz-text {
  color: blue;
}

.brz-css-qfEb .brz-title {
  color: black;
}

.brz-css-qfEb .brz-title:hover {
  color: gray;
}

.brz-css-qfEb .brz-title.active {
  color: yellow;
}
```

### Style

`style` 屬性允許您創建自定義 CSS。當您需要：

<ul>
  <li>應用自定義樣式時</li>
  <li>根據某些條件返回樣式時</li>
  <li>在某些邏輯處理後返回樣式時</li>
</ul>

#### 使用方法

```js
{
  id: "size",
  label: "Width",
  type: "slider",
  style: ({ value }) => {
    return {
      "{{WRAPPER}}.brz-map": {
        width: `${value.value}${value.unit}`
      }
    };
  }
}
```

這段代碼將根據控制項的值將寬度應用於選定的元素，帶有選擇器 `.brz-map`。例如，如果值等於 `{value: 75, unit: "%"}`，則 CSS 輸出將如下所示：

```css
.brz-css-rfeU.brz-map {
  width: 75%;
}
```

#### 多個選擇器

```js
{
  id: "size",
  label: "Width",
  type: "slider",
  style: ({ value }) => {
    return {
      "{{WRAPPER}}:after, {{WRAPPER}}:before, {{WRAPPER}}.content": {
        width: `${value.value}${value.unit}`
      }
    };
  }
}
```

CSS 輸出將如下所示：

```css
.brz-css-sduE:after,
.brz-css-sduE:before,
.brz-css-sduE.content {
  width: 20%;
}
```

#### 帶有邏輯判斷

```js
{
  id: "height",
  label: "Height",
  type: "slider",
  config: {
    min: 5,
    max: 100,
    units: [
      { value: "px", title: "px" },
      { value: "%", title: "%" }
    ]
  },
  style: ({ value }) => {
    const height = `${value.value}${value.unit}`;

    const percentOutput = {
      "{{WRAPPER}}:after": {
        content: "",
        display: "block",
        width: 0,
        "padding-top": height
      },

      "{{

WRAPPER}} > .brz-ui-ed-map-content": {
        height
      }
    };

    if (value.unit === "%") {
      return percentOutput;
    }

    return {
      "{{WRAPPER}}.brz-map": {
        height
      }
    };
  }
}
```

### 注意

`style` 和 `selector` 參數不能在同一控制項中一起使用。如果兩者都使用，則 `selector` 參數將被忽略。
