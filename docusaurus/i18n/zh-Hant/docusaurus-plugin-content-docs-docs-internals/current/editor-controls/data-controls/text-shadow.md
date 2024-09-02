---
toc_max_heading_level: 4
---

# 文字陰影

`textShadow` 控制項提供了一個介面，用來修改文本元素的 CSS `text-shadow` 屬性。

控制項範例：

![文字陰影](/img/controls/text-shadow.png)

1. 陰影下拉選單 - 該下拉選單允許你選擇是否應用陰影於文字。它有兩個選項：`None` 和 `Shadow`。
2. 顏色選擇區 - 你可以通過點擊顏色漸變中的所需位置來選擇確切顏色。
3. 色調滑塊 - 這個垂直滑塊允許你選擇要使用的色調（基本顏色）。
4. 不透明度滑塊 - 這個滑塊讓你調整所選顏色的不透明度。
5. 顏色預設 - 這些是來自全域樣式的預設顏色選項，你可以快速選擇。
6. 設定圖示 - 打開包含全域樣式的側邊欄。
7. 十六進制顏色輸入 - 該區域顯示所選顏色的十六進制顏色代碼，並允許你輸入特定的十六進制代碼來直接選擇顏色。旁邊的滴管圖示允許你通過點擊頁面上的任意顏色來選擇顏色。
8. 模糊半徑 - 此輸入欄位允許指定陰影的模糊半徑。
9. 垂直偏移 - 此輸入欄位允許指定陰影的垂直偏移。
10. 水平偏移 - 此輸入欄位允許指定陰影的水平偏移。

控制項的 `"hover"` 狀態範例：

![文字陰影懸停](/img/controls/text-shadow-hover.png)

控制項下拉選單打開的範例：

![文字陰影下拉選單](/img/controls/text-shadow-dropdown.png)

### 參數

| 名稱         | 類型                                     |    預設值    | 描述                                                                                                                                                                                                                                                                                                                                                                                             |
| :----------- | :--------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`         | `string`                                 |      -       | 文字陰影儲存數據的鍵標識符                                                                                                                                                                                                                                                                                                                                                                       |
| `type`       | `string`                                 |      -       | 類型應設為 `"textShadow"` 以使用此控制項                                                                                                                                                                                                                                                                                                                                                         |
| `className?` | `string`                                 |      -       | 將應用於控制項的自定義 CSS 類名。可用於修改控制項樣式。                                                                                                                                                                                                                                                                                                                                          |
| `position?`  | `number`                                 |      -       | 控制項在工具列中的位置                                                                                                                                                                                                                                                                                                                                                                           |
| `roles?`     | `Array<Roles>`                           |      -       | 僅當當前用戶的角色與提供的數組中的角色匹配時，渲染控制項。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                            |
| `devices?`   | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | 定義控制項將在哪些設備上渲染。`"all"` 在所有設備上渲染控制項。`"desktop"` 僅在桌面設備上渲染控制項。`"responsive"` 在平板電腦和手機設備上渲染控制項。                                                                                                                                                                                                                                            |
| `disabled?`  | `boolean`                                |   `false`    | 配置控制項禁用或啟用的條件                                                                                                                                                                                                                                                                                                                                                                       |
| `states?`    | `Array<State>`                           | [`"normal"`] | 允許控制項在不同狀態下工作。 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態， <br/> `"hover"` - 當元素被懸停時的狀態， <br/> `"active"` - 當元素處於活動狀態時（例如，分頁中的當前頁）                                                                                                                                                     |
| `default?`   | `Default`                                |      -       | 控制項的預設值。 <br/> <br/> <b>`Default: { palette: string; hex: string; opacity: number; blur: number; horizontal: number; vertical: number; }`</b> <br/> <br/> `blur` - 指定陰影的模糊半徑 <br/> `hex` - 定義陰影的顏色（十六進制格式） <br/> `horizontal` - 陰影的水平偏移 <br/> `opacity` - 指示陰影的不透明度 <br/> `palette` - 全域樣式中的預定義調色板 <br/> `vertical` - 陰影的垂直偏移 |
| `selector?`  | `string`                                 |      -       | CSS 選擇器，將應用樣式                                                                                                                                                                                                                                                                                                                                                                           |
| `style?`     | `function`                               |      -       | 該函數基於控制項的值生成 CSS 輸出。參數是包含 `value` 鍵的物件，該鍵保存控制項的當前值。函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的物件。<pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}}:hover .brz-text": {`<br/> `  "text-shadow": ${value.horizontal}px ${value.vertical}px ${value.blur}px ${value.hex}`<br/> ` }`<br/> `}`<br/>`}`</pre>                                   |

### 基本範例

僅包含必要鍵的標準定義。此控制項將顯示在所有設備上。

```js
{
  id: "textShadow",
  type: "textShadow"
}
```

### 回傳值

回傳一個包含以下值的物件：

```js
{
  blur: number;
  hex: string;
  horizontal: number;
  opacity: number;
  palette: string | undefined;
  vertical: number;
}
```

`blur` - 指定陰影的模糊半徑；<br/>
`hex` - 定義陰影的顏色（十六進制格式）；<br/>
`horizontal` - 陰影的水平偏移；<br/>
`opacity` - 指示陰影的不透明度（從 0 到 1）；<br/>
`palette` - 來自全域樣式的預定義調色板；<br/>
`vertical` - 陰影的垂直偏移；<br/>

範例值：

```js
{
  blur: 4;
  hex: "#dd4949";
  horizontal: 1;
  opacity: 1;
  palette: undefined;
  vertical: 2;
}
```

### 使用方法

#### 類名範例

將 CSS 類名添加到控制項的 DOM 節點上。

```js
{
  id: "textShadow",
  type: "textShadow",
  className: "myTextShadow"
}
```

#### 角色範例

僅顯示給擁有 admin 和 designer 權限的用戶。

```js
{
  id: "textShadow",
  type: "textShadow",
  roles: ["admin", "designer"]
}
```

#### 設備範例

將在所有設備上渲染。此值可以省略，因為預設為 `"all"`。

```js
{
  id: "textShadow",
  type: "textShadow",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "textShadow",
  type: "textShadow",
  devices: "desktop"
}
```

僅在響應式模式下顯示，具體為 `tablet` 和 `mobile`。

```js
{
  id: "textShadow",
  type: "textShadow",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應是你的動態條件。

```js
{
  id: "textShadow",
  type: "textShadow",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個 getter 函數，允許我們通過 id 獲取控制項的值。
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
      id: "textShadow",
      type: "textShadow",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 狀態範例

允許控制項在正常和懸停狀態下工作。

```js
{
  id: "textShadow",
  type: "textShadow",
  states: ["normal", "hover"]
}
```

允許控制項在正常、懸停和活動狀態下工作。

```js
{
  id: "textShadow",
  type: "textShadow",
  states: ["normal", "hover", "active"]
}
```

#### 預設值範例

在 `default` 物件中，你可以設定任何 `textShadow` 屬性的預設值。

```js
{
  id: "textShadow",
  type: "textShadow",
  default: {
    blur: 5,
    hex: "#000000",
    horizontal: 2,
    opacity: 0.5,
    palette: undefined,
    vertical: 1
  }
}
```

#### CSS 範例 (`selector`, `style`)

使用 `style` 函數配置 `.brz-text` 元素的 CSS `text-shadow` 屬性。

```js
{
  id: "textShadow",
  type: "textShadow",
  states: ["normal", "hover"],
  style: ({ value }) => {
    return {
      "{{WRAPPER}}:hover .brz-text": {
        "text-shadow": `${value.horizontal}px ${value.vertical}px ${value.blur}px ${value.hex}`
      }
    }
  }
}
```

使用 `selector` 配置 `.brz-text` 元素的 CSS `text-shadow` 屬性。所有樣式將自動應用。

```js
{
  id: "textShadow",
  type: "textShadow",
  states: ["normal", "hover"],
  selector: "{{WRAPPER}}:hover .brz-text"
}
```

#### HTML 中的使用範例

要獲取 CSS `text-shadow` 屬性的值，使用以下規則從組件的 props 中訪問所需值：將 `textShadow` 控制項的 `id` 與你希望提取的值串聯。以下範例展示了如何從 `textShadow` 控制項中提取所有可能的值，並將其應用於 `p` 元素中的文字陰影。

```tsx
import { Brizy } from "@brizy/core";

interface Props {
  textShadowColorHex: string;
  textShadowBlur: number;
  textShadowHorizontal: number;
  textShadowVertical: number;
  textShadowColorOpacity: number;
  textShadowColorPalette: string;
}

const Component = (props: Props): JSX.Element => {
  const { textShadowColorHex, textShadowBlur, textShadowHorizontal, textShadowVertical } = props;

  return (
    <div className="component">
      <p
        style={{
          textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur}px ${textShadowColorHex}`,
        }}
      >
        text
      </p>
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
            id: "toolbarColor",
            type: "popover",
            config: {
              size: "medium",
              title: "Colors",
              icon: {
                style: {
                  backgroundColor: "#000000",
                },
              },
            },
            devices: "desktop",
            options: [
              {
                id: "tabsColor",
                type: "tabs",
                tabs: [
                  {
                    id: "textShadow",
                    type: "textShadow",
                    states: ["normal", "hover"],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  },
});
```
