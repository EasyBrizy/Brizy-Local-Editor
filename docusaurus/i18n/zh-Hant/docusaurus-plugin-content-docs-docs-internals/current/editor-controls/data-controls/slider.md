---
toc_max_heading_level: 4
---

# 滑桿

滑桿控制項允許用戶通過拖動滑桿把手來選擇數值。開發者可以設置最小值和最大值、步進間隔以及測量單位。此外，該組件支持即時更新和去抖動更新，以優化性能和用戶體驗。

`slider` 的範例：

![Slider](/img/controls/slider.png)

提供多個單位的 `slider` 範例：

![Slider Pixels](/img/controls/slider-px.png) ![Slider Pixels Dropdown](/img/controls/slider-px-dropdown.png)

### 參數

| 名稱                     | 類型                                                                                                                                                                                       |    預設值    | 描述                                                                                                                                                                                                                                                                                                                           |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                     | `string`                                                                                                                                                                                   |      -       | 滑桿將儲存數據的鍵的識別碼                                                                                                                                                                                                                                                                                                     |
| `type`                   | `string`                                                                                                                                                                                   |      -       | 類型應設為 `"slider"` 以使用此控制項                                                                                                                                                                                                                                                                                           |
| `label?`                 | `string`                                                                                                                                                                                   |      -       | 顯示在控制項左側的標籤                                                                                                                                                                                                                                                                                                         |
| `className?`             | `string`                                                                                                                                                                                   |      -       | 控制項的自定義 CSS 類名。可用於修改控制項的樣式                                                                                                                                                                                                                                                                                |
| `icon?`                  | `string`                                                                                                                                                                                   |      -       | 顯示在控制項標籤左側的圖示名稱。查看所有 [圖示](/docs-internals/icons/)                                                                                                                                                                                                                                                        |
| `position?`              | `number`                                                                                                                                                                                   |      -       | 控制項在工具欄中的位置                                                                                                                                                                                                                                                                                                         |
| `roles?`                 | `Array<Role>`                                                                                                                                                                              |      -       | 僅在當前用戶角色匹配提供的角色數組中的一個角色時渲染控制項。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                         |
| `devices?`               | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | 定義控制項將在哪些設備上渲染。`"all"` 會在所有設備上渲染控制項。`"desktop"` 僅在桌面設備上渲染控制項。`"responsive"` 會在平板和手機設備上渲染控制項                                                                                                                                                                            |
| `disabled?`              | `boolean`                                                                                                                                                                                  |   `false`    | 配置控制項被禁用或啟用的條件                                                                                                                                                                                                                                                                                                   |
| `display?`               | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | 配置控制項及其標籤的排列方式。如果 `display` 設為 `"inline"`，則標籤和控制項會在同一行，如果 `display` 設為 `"block"`，則標籤會在一行，控制項會在下一行                                                                                                                                                                        |
| `helper?.content`        | `string`                                                                                                                                                                                   |      -       | 如果提供，顯示在標籤旁邊的圖示。當懸停在該圖示上時，會顯示帶有附加信息的工具提示                                                                                                                                                                                                                                               |
| `helper?.position`       | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | 指定工具提示相對於輔助圖示的位置                                                                                                                                                                                                                                                                                               |
| `states?`                | `Array<State>`                                                                                                                                                                             | [`"normal"`] | 根據元素狀態允許不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態， <br/> `"hover"` - 當元素被懸停時的狀態， <br/> `"active"` - 當元素處於活動狀態時的狀態（例如，分頁中的當前頁面）                                                                             |
| `config?.min`            | `number`                                                                                                                                                                                   |     `0`      | 拖動滑桿把手時可以獲得的最小值                                                                                                                                                                                                                                                                                                 |
| `config?.max`            | `number`                                                                                                                                                                                   |    `100`     | 拖動滑桿把手時可以獲得的最大值                                                                                                                                                                                                                                                                                                 |
| `config?.inputMin`       | `number`                                                                                                                                                                                   |      -       | 可以直接輸入到輸入框中的最小值。如果用戶輸入的值低於此值，它會自動更正為此最小值                                                                                                                                                                                                                                               |
| `config?.inputMax`       | `number`                                                                                                                                                                                   |      -       | 可以直接輸入到輸入框中的最大值。如果用戶輸入的值高於此值，它會自動更正為此最大值                                                                                                                                                                                                                                               |
| `config?.step`           | `number`                                                                                                                                                                                   |     `1`      | 更改滑桿值的步進間隔                                                                                                                                                                                                                                                                                                           |
| `config?.units`          | `Array<Unit>`                                                                                                                                                                              |    `[ ]`     | 顯示在滑桿值旁邊的測量單位。接受所有可能的 CSS 單位（`"px"`、`"%"`、`"em"` 等）和自定義值 <br/> <br/> <b>`Unit: { value: string; title: string; }`</b> <br/> <br/> `value` - 一個有效的 CSS 單位或自定義值 <br/> `title` - 該值的文本表示                                                                                      |
| `config?.size`           | `"short"` \| `"medium"` \| `"large"` \| `"auto"`                                                                                                                                           |   `"auto"`   | 滑桿組件的大小                                                                                                                                                                                                                                                                                                                 |
| `config?.debounceUpdate` | `boolean`                                                                                                                                                                                  |   `false`    | 確定 UI 是否使用去抖動而非節流進行更新                                                                                                                                                                                                                                                                                         |
| `config?.updateRate`     | `number`                                                                                                                                                                                   |     `50`     | UI 響應數值變化的延遲時間（以毫秒為單位）                                                                                                                                                                                                                                                                                      |
| `default?`               | `Default`                                                                                                                                                                                  |      -       | 控制項的預設值。<br/> <br/> <b>`Default: { value: number; suffix: string; }`</b> <br/> <br/> `value` - 控制項的預設數值 <br/> `suffix` - 自定義或 CSS 單位（`"px"`、`"%"`、`"em"` 等），如果有多個單位可用，將在下拉選單中啟用                                                                                                 |
| `style?`                 | `function`                                                                                                                                                                                 |      -       | 該函數根據控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，其中包含控制項的當前值。該函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的對象。 <pre>`style: ({value}) => {`<br/> `return {`<br/> ` "{{WRAPPER}} .brz-map": {`<br/> `   width: value.value.toString() + (value.unit ?? "%")`<br/> ` }`<br/> `}`<br/>`}`</pre> |

### 基本範例

標準定義，僅包含必要的鍵。此控制項將顯示在所有設備上。

```js
{
  id: "width",
  type: "slider"
}
```

### 返回值

控制項返回一個物件，其中 `value` 是當前的 `slider` 值，`unit` 是 `config.units` 中提供的單位，或者是下拉選單中選擇的單位（如果有多個單位可用）。

```js
{
  value: number;
  unit: string;
}
```

範例值：

```js
{
  value: 50,
  unit: "px"
}
```

### 使用範例

#### 標籤範例

在控制項左側添加標籤。

```js
{
  id: "width",
  label: "Width",
  type: "slider"
}
```

#### 類名範例

為控制項的 DOM 節點添加 CSS 類名。

```js
{
  id: "width",
  type: "slider",
  className: "mySlider"
}
```

#### 圖示範例

在控制項標籤的左側添加圖示。

```js
{
  id: "width",
  type: "slider",
  icon: "nc-cog"
}
```

#### 角色範例

僅顯示給擁有管理員和設計師權限的用戶。

```js
{
  id: "width",
  type: "slider",
  roles: ["admin", "designer"]
}
```

#### 設備範例

將在所有設備上渲染。此值可以省略，因為預設為 `"all"`。

```js
{
  id: "width",
  type: "slider",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "width",
  type: "slider",
  devices: "desktop"
}
```

僅在響應模式下渲染，特別是 `tablet` 和 `mobile`。

```js
{
  id: "width",
  type: "slider",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常，此處應該是你的動態條件。

```js
{
  id: "width",
  type: "slider",
  disabled: true
}
```

當 `videoType` 變數為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個 getter 函數，可以根據 id 獲取控制項的值。
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
      id: "width",
      type: "slider",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 顯示範例

在此範例中，使用 `display: "block"`，標籤將顯示在第一行，控制項顯示在第二行。

```js
{
  id: "width",
  type: "slider",
  display: "block"
}
```

#### 助手範例

助手物件包含一個內容屬性，值為 `"help text"`，將顯示為附加指導或信息。

```js
{
  id: "width",
  type: "slider",
  helper: {
    content: "help text"
  }
}
```

當助手物件包含位置屬性，值為 `"top-start"`，則表示助手文本將顯示在圖示的左上角。

```js
{
  id: "width",
  type: "slider",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### 狀態範例

允許控制項在正常和懸停狀態下工作。

```js
{
  id: "width",
  type: "slider",
  states: ["normal", "hover"]
}
```

允許控制項在正常、懸停和活動狀態下工作。

```js
{
  id: "width",
  type: "slider",
  states: ["normal", "hover", "active"]
}
```

#### 配置 `min` 範例

可以通過拖動滑塊手柄獲得的最小值。

```js
{
  id: "width",
  type: "slider",
  config: {
    min: 0
  }
}
```

#### 配置 `max` 範例

可以通過拖動滑塊手柄獲得的最大值。

```js
{
  id: "width",
  type: "slider",
  config: {
    max: 100
  }
}
```

#### 配置 `inputMin` 範例

指定可以在輸入欄位中輸入的最小數字。如果用戶輸入的值低於此值，將自動更正為此最小值。

```js
{
  id: "width",
  type: "slider",
  config: {
    inputMin: 0
  }
}
```

#### 配置 `inputMax` 範例

指定可以在輸入欄位中輸入的最大數字。如果用戶輸入的值高於此值，將自動更正為此最大值。

```js
{
  id: "width",
  type: "slider",
  config: {
    inputMax: 100
  }
}
```

#### 配置 `step` 範例

通過拖動滑塊手柄改變滑塊值的步進間隔。

```js
{
  id: "width",
  type: "slider",
  config: {
    step: 2
  }
}
```

#### 配置 `units` 範例

顯示在滑塊值旁邊的測量單位。接受 CSS 單位，如 `"px"`, `"em"`, `"%"`, `"vh"`, `"vw"` 等。

```js
{
  id: "width",
  type: "slider",
  config: {
    units: [
      { value: "px", title: "px" },
      { value: "%", title: "%" }
    ]
  }
}
```

#### 配置 `size` 範例

滑塊組件的大小，可以是 `"small"`、`"medium"` 或 `"large"`。

```js
{
  id: "width",
  type: "slider",
  config: {
    size: "medium"
  }
}
```

#### 配置 `debounceUpdate` 和 `updateRate` 範例

決定滑塊值是否使用防抖動而不是節流來更新。當設置為 `true` 時，滑塊值僅在一段時間不活動後更新，此時間由 `updateRate` 定義。

```js
{
  id: "width",
  type: "slider",
  config: {
    debounceUpdate: true,
    updateRate: 500
  }
}
```

#### 預設值範例

在這種情況下，滑塊的值將為 `50`，並且活動單位為 `"px"`。

```js
{
  id: "width",
  type: "slider",
  config: {
    units: [
      { title: "px", value: "px" },
      { title: "%", value: "%" }
    ]
  },
  default: {
    value: 50,
    suffix: "px"
  }
}
```

#### CSS 範例

使用滑塊控制項的值來調整元素的寬度，使用 CSS。

```js
{
  id: "width",
  type: "slider",
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-map": {
        width: value.value.toString() + (value.unit ?? "%")
      }
    };
  }
}
```

#### HTML 使用範例

要檢索控制項的返回值，通過組件的 props 獲取滑塊的當前值及其後綴。
具體來說，使用 `slider` 的 `id` 來獲取值，並使用 `id` 拼接 "Suffix" 來獲取後綴。
然後可以根據需要使用這些值，無論是傳遞給其他組件還是當前層級使用。

```tsx
import { Brizy } from "@brizy/core";

interface Props {
  width: number;
  widthSuffix: string;
}

const Component = (props: Props): JSX.Element => {
  const { width, widthSuffix } = props;

  return (
    <div className="component" style={{ width: `${width}${widthSuffix}` }}>
      ...
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
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-cog",
              title: "Settings",
            },
            devices: "desktop",
            options: [
              {
                id: "width",
                type: "slider",
                devices: "desktop",
                default: {
                  value: 50,
                  suffix: "px",
                },
                config: {
                  units: [
                    { value: "px", unit: "px" },
                    { value: "%", unit: "%" },
                  ],
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
