---
toc_max_heading_level: 4
---

# 排版

`typography` 控制項提供了一組全面的功能，用於操作網頁上的文字。它支持從 Google Fonts 或自定義來源加載字型，修改與文字外觀相關的 CSS 屬性（如刪除線、粗體、斜體、下劃線、大寫和小寫），以及從全局樣式中選擇或添加字型。此外，它還允許調整文字大小、字重、行高和字母間距。

控制項範例：

![Typography](/img/controls/typography.png)

### 參數

| 名稱                    | 類型                                     |       預設值       | 描述                                                                                                                                                                                                                                                                                                                              |
| :---------------------- | :--------------------------------------- | :----------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                 |         -          | `typography` 將保存數據的鍵的標識符                                                                                                                                                                                                                                                                                               |
| `type`                  | `string`                                 |         -          | 類型應為 `"typography"` 以使用此控制項                                                                                                                                                                                                                                                                                            |
| `className?`            | `string`                                 |         -          | 自定義的 CSS 類名，將設置在控制項上。可以用來修改控制項的樣式                                                                                                                                                                                                                                                                     |
| `position?`             | `number`                                 |         -          | 控制項在工具欄中的位置                                                                                                                                                                                                                                                                                                            |
| `roles?`                | `Array<Role>`                            |         -          | 僅在當前用戶的角色與提供的角色數組中的一個匹配時渲染控制項。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                           |
| `devices?`              | `"all"` \| `"desktop"` \| `"responsive"` |      `"all"`       | 定義控制項將在哪些設備上渲染。 `"all"` 在所有設備上渲染控制項。 `"desktop"` 僅在桌面設備上渲染控制項。 `"responsive"` 在平板電腦和移動設備上渲染控制項                                                                                                                                                                            |
| `disabled?`             | `boolean`                                |      `false`       | 配置控制項被禁用或啟用的條件                                                                                                                                                                                                                                                                                                      |
| `config?.fontFamily`    | `boolean`                                |       `true`       | 決定是否可以選擇字型家族                                                                                                                                                                                                                                                                                                          |
| `config?.fontSize`      | `Boundaries`                             | `min: 0 max: 300`  | 設置字型大小的最小和最大範圍 <br/><br/> <b>`Boundaries: { min: number; max: number }`</b>                                                                                                                                                                                                                                         |
| `config?.lineHeight`    | `Boundaries`                             |  `min: 1 max: 20`  | 設置行高的最小和最大範圍 <br/><br/> <b>`Boundaries: { min: number; max: number }`</b>                                                                                                                                                                                                                                             |
| `config?.letterSpacing` | `Boundaries`                             | `min: -20 max: 20` | 設置字母間距的最小和最大範圍 <br/><br/> <b>`Boundaries: { min: number; max: number }`</b>                                                                                                                                                                                                                                         |
| `config?.scriptChoices` | `TextScripts[]`                          |         -          | 決定文本是否可以格式化為下標或上標 <br/><br/> <b>`TextScripts = "sub" \| "super"`</b>                                                                                                                                                                                                                                             |
| `default?`              | `Default`                                |         -          | 控制項的預設值。接受所有字段，如 [返回值](#return-value) 所示                                                                                                                                                                                                                                                                     |
| `selector?`             | `string`                                 |         -          | 將應用樣式的 CSS 選擇器                                                                                                                                                                                                                                                                                                           |
| `style?`                | `function`                               |         -          | 該函數根據控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的物件，該鍵持有控制項的當前值。該函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的物件。 <pre>`style: ({value}) => {`<br/> `return {`<br/> ` "{{WRAPPER}} .brz-text": {`<br/> `   "font-size": ${value.fontSize}${value.fontSizeSuffix}`<br/> ` }`<br/> `}`<br/>`}`</pre> |

### 基本範例

標準定義僅包含所需的鍵。這個控制項將在所有設備上顯示。

```js
{
  id: "typography",
  type: "typography"
}
```

### 返回值

返回一個包含以下值的物件：

```js
{
  bold: boolean;
  fontFamily: string;
  fontFamilyType: "google" | "upload" | "system";
  fontSize: number;
  fontSizeSuffix: "px" | "em" | "rem" | "vw";
  fontSoftness: number;
  fontStyle: string;
  fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  fontWidth: number;
  italic: boolean;
  letterSpacing: number;
  lineHeight: number;
  lowercase: boolean;
  script: undefined | "super" | "sub";
  strike: boolean;
  underline: boolean;
  uppercase: boolean;
  variableFontWeight: number;
}
```

`bold` - 表示文字是否為粗體； <br/>
`fontFamily` - 選擇的字型家族； <br/>
`fontFamilyType` - 使用的字型家族類型（Google Fonts、上傳的自定義字型或系統字型）； <br/>
`fontSize` - 字型大小； <br/>
`fontSizeSuffix` - 字型大小的單位後綴； <br/>
`fontSoftness` - 代表字型的柔軟度，通常影響視覺平滑度； <br/>
`fontStyle` - 表示使用了哪種全局排版樣式； <br/>
`fontWeight` - 字型的粗細程度，範圍從細體（100）到特粗體（900）； <br/>
`fontWidth` - 字型的寬度； <br/>
`italic` - 表示文字是否為斜體； <br/>
`letterSpacing` - 字母之間的間距； <br/>
`lineHeight` - 行高； <br/>
`lowercase` - 表示文字是否為小寫； <br/>
`script` - 表示文字是否為上標或下標格式； <br/>
`strike` - 表示文字是否有刪除線； <br/>
`underline` - 表示文字是否有下劃線； <br/>
`uppercase` - 表示文字是否為大寫； <br/>
`variableFontWeight` - 可變字型的粗細程度，允許更精確的調整； <br/>

返回值範例：

```js
{
  bold: false,
  fontFamily: "overpass",
  fontFamilyType: "google",
  fontSize: 36,
  fontSizeSuffix: "px",
  fontSoftness: 0,
  fontStyle: "heading2",
  fontWeight: 700,
  fontWidth: 100,
  italic: false,
  letterSpacing: -1.5,
  lineHeight: 1.3,
  lowercase: false,
  script: undefined,
  strike: false,
  underline: false,
  uppercase: false,
  variableFontWeight: 400
}
```

### 使用方法

#### 類名範例

將 CSS 類添加到控制項的 DOM 節點。

```js
{
  id: "typography",
  type: "typography",
  className: "myTypography"
}
```

#### 角色範例

僅對具有管理員和設計師權限的用戶顯示控制項。

```js
{
  id: "typography",
  type: "typography",
  roles: ["admin", "designer"]
}
```

#### 設備範例

它將在所有設備上渲染。此值可以跳過，因為默認設置為 `"all"`。

```js
{
  id: "typography",
  type: "typography",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "typography",
  type: "typography",
  devices: "desktop"
}
```

顯示限制為響應模式，特別是 `tablet` 和 `mobile`。

```js
{
  id: "typography",
  type: "typography",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是你的動態條件。

```js
{
  id: "typography",
  type: "typography",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個獲取函數，允許我們通過其 id 獲取控制項的值。
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
      id: "typography",
      type: "typography",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 配置 `fontFamily` 範例

決定是否可以選擇字型家族。

```js
{
  id: "typography",
  type: "typography",
  config: {
    fontFamily: false
  }
}
```

#### 配置 `fontSize` 範例

重寫字型大小的默認最小邊界。如果用戶輸入的值低於此值，它將自動更正為此最小值。

```js
{
  id: "typography",
  type: "typography",
  config: {
    fontSize: {
      min: 8
    }
  }
}
```

重寫字型大小的默認最大邊界。如果用戶輸入的值高於此值，它將自動更正為此最大值。

```js
{
  id: "typography",
  type: "typography",
  config: {
    fontSize: {
      max: 100
    }
  }
}
```

重寫字型大小的默認最小和最大邊界。

```js
{
  id: "typography",
  type: "typography",
  config: {
    fontSize: {
      min: 8,
      max: 100
    }
  }
}
```

#### 配置 `lineHeight` 範例

重寫行高的默認最小邊界。如果用戶輸入的值低於此值，它將自動更正為此最小值。

```js
{
  id: "typography",
  type: "typography",
  config: {
    lineHeight: {
      min: 0
    }
  }
}
```

重寫行高的默認最大邊界。如果用戶輸入的值高於此值，它將自動更正為此最大值。

```js
{
  id: "typography",
  type: "typography",
  config: {
    lineHeight: {
      max: 10
    }
  }
}
```

重寫行高的默認最小和最大邊界。

```js
{
  id: "typography",
  type: "typography",
  config: {
    lineHeight: {
      min: 0,
      max: 10
    }
  }
}
```

#### 配置 `letterSpacing` 範例

重寫字母間距的默認最小邊界。如果用戶輸入的值低於此值，它將自動更正為此最小值。

```js
{
  id: "typography",
  type: "typography",
  config: {
    letterSpacing: {
      min: 0
    }
  }
}
```

重寫字母間距的默認最大邊界。如果用戶輸入的值高於此值，它將自動更正為此最大值。

```js
{
  id: "typography",
  type: "typography",
  config: {
    letterSpacing: {
      max: 10
    }
  }
}
```

重寫字母間距的默認最小和最大邊界。

```js
{
  id: "typography",
  type: "typography",
  config: {
    letterSpacing: {
      min: 0,
      max: 10
    }
  }
}
```

#### 配置 `scriptChoices` 範例

決定文本是否可以格式化為下標。

```js
{
  id: "typography",
  type: "typography",
  config: {
    scriptChoices: ["sub"]
  }
}
```

決定文本是否可以格式化為下標或上標。

```js
{
  id: "typography",
  type: "typography",
  config: {
    scriptChoices

: ["sub", "super"]
  }
}
```

#### 默認值範例

在 `default` 物件中，你可以為任何 `typography` 屬性設置默認值。

```js
{
  id: "typography",
  type: "typography",
  default: {
    fontFamilyType: "google",
    fontSize: 12,
    fontSizeSuffix: "px",
    fontWeight: 700,
    lineHeight: 1.8,
    letterSpacing: 3,
    variableFontWeight: 700,
    fontWidth: 100,
    fontSoftness: 0,
    bold: false,
    italic: false,
    underline: false,
    strike: false,
    uppercase: false,
    lowercase: false,
  }
}
```

#### CSS 範例 (`selector`, `style`)

使用 `selector`，所有樣式將自動應用到匹配選擇器的元素上。

```js
{
  id: "typography",
  type: "typography",
  selector: "{{WRAPPER}} .brz-text"
}
```

使用 `typography` 控制項的值更改文本元素的字型粗細和字母間距。

```js
{
  id: "typography",
  type: "typography",
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text": {
        "font-weight": value.fontWeight,
        "letter-spacing": value.letterSpacing
      }
    }
  }
}
```

#### HTML 使用範例

要檢索控制項的返回值，使用以下規則從組件的 props 中訪問所需的值：將 `typography` 控制項的 `id` 與要提取的值連接。下面的範例演示了如何從 `typography` 控制項中提取 5 個值，並使用這些值來更改 `h1` 元素的一些樣式。

```tsx
import { Brizy } from "@brizy/core";

interface Props {
  titleBold: boolean;
  titleFontFamily: string;
  titleFontFamilyType: "google" | "upload" | "system";
  titleFontSize: number;
  titleFontSizeSuffix: "px" | "em" | "rem" | "vw";
  titleFontSoftness: number;
  titleFontStyle: string;
  titleFontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  titleFontWidth: number;
  titleItalic: boolean;
  titleLetterSpacing: number;
  titleLineHeight: number;
  titleLowercase: boolean;
  titleScript: undefined | "super" | "sub";
  titleStrike: boolean;
  titleUnderline: boolean;
  titleUppercase: boolean;
  titleVariableFontWeight: number;
}

const Component = (props: Props): JSX.Element => {
  const { titleFontSize, titleFontSizeSuffix, titleFontWeight, titleLineHeight, titleFontFamily } = props;

  return (
    <div className="component">
      <h1
        style={{
          fontSize: `${titleFontSize}${titleFontSizeSuffix}`,
          fontWeight: titleFontWeight,
          lineHeight: titleLineHeight,
          fontFamily: titleFontFamily,
        }}
      >
        Title
      </h1>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Component",
  component: { editor: Component, view: Component },
  title: "Component",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".component",
        toolbar: [
          {
            id: "toolbarTypography",
            type: "popover",
            config: {
              icon: "nc-font",
              title: "Typography",
            },
            options: [
              {
                id: "title",
                type: "typography",
                default: {
                  fontFamilyType: "google",
                  fontSize: 12,
                  fontSizeSuffix: "px",
                  fontWeight: 700,
                  lineHeight: 1.8,
                  letterSpacing: 3,
                  variableFontWeight: 700,
                  fontWidth: 100,
                  fontSoftness: 0,
                  bold: false,
                  italic: false,
                  underline: false,
                  strike: false,
                  uppercase: false,
                  lowercase: false,
                },
              },
            ],
          },
        ],
      },
    ];
  },
});
```
