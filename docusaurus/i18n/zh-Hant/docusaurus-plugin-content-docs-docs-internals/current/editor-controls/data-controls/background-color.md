---
toc_max_heading_level: 4
---

# 背景顏色

`backgroundColor` 控制項提供了一個選擇和自訂背景顏色的介面，包括純色和漸變色。此組件包含各種選項，用於微調顏色選擇，包括不透明度、漸變類型以及輸入具體顏色值的功能。

控制項示例：

![背景顏色](/img/controls/background-color.png)

1. 背景類型下拉選單 - 該下拉選單允許您選擇應用於背景的類型。它有 3 個選項：`None`（無）、`Solid`（純色）和 `Gradient`（漸變色）。
2. 顏色選擇區域 - 您可以通過單擊顏色漸變中的所需點來選擇精確的顏色。
3. 色調滑桿 - 該垂直滑桿允許您選擇要使用的色調（基本顏色）。
4. 不透明度滑桿 - 該滑桿允許您調整選擇顏色的不透明度。
5. 顏色預設 - 這些是來自全域樣式的預設顏色選項，您可以快速選擇。
6. 設定圖示 - 開啟包含全域樣式的側邊欄。
7. 十六進制顏色輸入 - 該區域顯示所選顏色的十六進制顏色代碼，並允許您輸入具體的十六進制代碼以直接選擇顏色。旁邊的吸管圖示允許您通過單擊選擇頁面上任何地方的顏色。

漸變色類型控制項示例：

![背景顏色漸變類型](/img/controls/background-color-gradient.png)

1. 漸變顏色滑桿 - 該水平滑桿顯示漸變中使用的當前顏色。
2. 漸變開始手柄 - 該手柄允許您在漸變顏色滑桿上選擇漸變的起始顏色。當前選中，手柄內部的圓圈指示。
3. 漸變結束手柄 - 該手柄允許您在漸變顏色滑桿上選擇漸變的結束顏色。當前未選中。
4. 漸變類型下拉選單 - 該下拉選單允許您選擇漸變類型。它有 2 個選項：`Linear`（線性）和 `Radial`（放射狀）。
5. 漸變角度 - 該輸入欄位允許您指定漸變的角度。

控制項的下拉選單打開示例：

![背景顏色類型下拉選單](/img/controls/background-color-type-dropdown.png)

狀態為 `"hover"` 的控制項示例：

![背景顏色](/img/controls/background-color-hover.png)

### 參數

| 名稱               | 類型                                     |    預設值    | 描述                                                                                                                                                                                                                                                                                                             |
| :----------------- | :--------------------------------------- | :----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                 |      -       | `backgroundColor` 將儲存您數據的鍵的識別符                                                                                                                                                                                                                                                                       |
| `type`             | `string`                                 |      -       | 類型應設為 `"backgroundColor"` 以使用此控制項                                                                                                                                                                                                                                                                    |
| `position?`        | `number`                                 |      -       | 工具列中控制項的位置                                                                                                                                                                                                                                                                                             |
| `roles?`           | `Array<Role>`                            |      -       | 僅在當前用戶的角色與提供的數組中的角色之一匹配時，才渲染控制項。 <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                      |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | 定義控制項將在哪些設備上呈現。 `"all"` 會在所有設備上渲染控制項。 `"desktop"` 僅在桌面設備上渲染控制項。 `"responsive"` 會在平板電腦和手機設備上渲染控制項                                                                                                                                                       |
| `disabled?`        | `boolean`                                |   `false`    | 配置控制項在何種條件下被禁用或啟用                                                                                                                                                                                                                                                                               |
| `states?`          | `Array<State>`                           | [`"normal"`] | 允許控制項在不同狀態下工作。 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態， <br/> `"hover"` - 當元素被懸停時的狀態， <br/> `"active"` - 當元素處於活動狀態時的狀態（例如，分頁中的當前頁）                                                               |
| `config?.opacity`  | `boolean`                                |    `true`    | 控制背景顏色的不透明度是否可以更改。如果設置為 `false`，則不會渲染不透明度滑桿。                                                                                                                                                                                                                                 |
| `config?.withNone` | `boolean`                                |    `true`    | 確定是否在背景類型的下拉選單中包含 `None` 選項                                                                                                                                                                                                                                                                   |
| `default?`         | `Default`                                |      -       | 默認控制項值。接受所有與 [示例](#default-value-example) 相同的字段                                                                                                                                                                                                                                               |
| `selector?`        | `string`                                 |      -       | 樣式將應用到的 CSS 選擇器                                                                                                                                                                                                                                                                                        |
| `style?`           | `function`                               |      -       | 此函數基於控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，其中包含控制項的當前值。該函數返回一個具有 CSS 選擇器鍵和 CSS 屬性值的對象。 <pre>`style: ({value}) => {`<br/> `return {`<br/> ` "{{WRAPPER}} .brz-ui-ed-iframe": {`<br/> `  "background-color": value.hex`<br/> ` }`<br/> `}`<br/>`}`</pre> |

### 基本示例

僅定義必要的鍵。此控制項將在所有設備上顯示。

```js
{
  id: "backgroundColor",
  type: "backgroundColor"
}
```

### 返回值

返回一個包含以下值的對象：

```js
{
  active: "start" | "end";
  end: number;
  gradientHex: string;
  gradientOpacity: number;
  gradientPalette: string;
  gradientType: "linear" | "radial";
  hex: string;
  linearDegree: number;
  opacity: number;
  palette: string;
  radialDegree: number;
  start: number;
  type: "solid" | "gradient";
}
```

`active` - 一個字串，指示在更改漸變的起始或結束顏色時當前選中的手柄。可以是 `"start"` 或 `"end"`； <br/>
`end` - 一個數字，指示漸變顏色滑桿上結束顏色手柄的位置，其中 `100` 代表滑桿的末端，`0` 代表起始位置； <br/>
`gradientHex` - 一個字串，表示漸變結束手柄所選顏色的十六進制代碼； <br/>
`gradientOpacity` - 結束手柄顏色的不透明度級別，範圍從 `0`（完全透明）到 `1`（完全不透明）； <br/>
`gradientPalette` - 漸變結束手柄的全域樣式預定義調色板； <br/>
`gradientType` - 一個字串，指定漸變類型。可以是 `"linear"`（線性）或 `"radial"`（放射狀）； <br/>
`hex` - 一個字串，表示所選顏色的十六進制代碼； <br/>
`linearDegree` - 一個數字，表示線性漸變的角度（以度為單位）； <br/>
`opacity` - 一個數字，表示所選顏色的不透明度級別，範圍從 `0`（完全透明）到 `1`（完全不透明

）； <br/>
`palette` - 全域樣式中的預定義調色板； <br/>
`radialDegree` - 一個數字，表示放射狀漸變的角度（以度為單位）； <br/>
`start` - 一個數字，指示漸變顏色滑桿上起始顏色手柄的位置，其中 `100` 代表滑桿的末端，`0` 代表起始位置； <br/>
`type` - 一個字串，指定背景顏色的類型。可以是 `"solid"`（純色）或 `"gradient"`（漸變色）；

值的示例：

```js
{
  active: "start",
  end: 100,
  gradientHex: "#009900",
  gradientOpacity: 1,
  gradientPalette: "",
  gradientType: "linear",
  hex: "#c02121",
  linearDegree: 90,
  opacity: 1,
  palette: "",
  radialDegree: 90,
  start: 0,
  type: "solid"
}
```

### 用法

#### 角色示例

僅向具有管理員和設計師權限的用戶顯示控制項。

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  roles: ["admin", "designer"]
}
```

#### 設備示例

此控制項將在所有設備上渲染。由於預設值為 `"all"`，因此可以省略此值。

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  devices: "desktop"
}
```

僅在響應模式下顯示，特定為 `tablet` 和 `mobile`。

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  devices: "responsive"
}
```

#### 禁用示例

控制項將被禁用。通常，這裡應該是您的動態條件。

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  disabled: true
}
```

當 `videoType` 變量為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個 getter 函數，允許我們通過其 id 獲取控制項的值。
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
      id: "backgroundColor",
      type: "backgroundColor",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 狀態示例

允許控制項在正常和懸停狀態下工作。

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  states: ["normal", "hover"]
}
```

允許控制項在正常、懸停和活動狀態下工作。

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  states: ["normal", "hover", "active"]
}
```

#### 配置 `opacity` 示例

控制背景顏色的不透明度是否可以更改。如果設置為 `false`，則不會渲染不透明度滑桿。

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  config: {
    opacity: false
  }
}
```

#### 配置 `withNone` 示例

確定是否在背景類型的下拉選單中包含 `None` 選項。

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  config: {
    withNone: false
  }
}
```

#### 默認值示例

在 `default` 對象中，您可以設置任何 `backgroundColor` 屬性的默認值。

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  default: {
    gradientActivePointer: "start",
    gradientEndPointer: 100,
    gradientColorHex: "#009900",
    gradientColorOpacity: 1,
    gradientColorPalette: "",
    gradientType: "linear",
    bgColorHex: "#c02121",
    gradientLinearDegree: 90,
    bgColorOpacity: 1,
    bgColorPalette: "",
    gradientRadialDegree: 90,
    gradientStartPointer: 0,
    bgColorType: "solid"
  }
}
```

#### CSS 示例 (`selector`, `style`)

使用 `selector`，所有樣式將自動應用到匹配選擇器的元素。

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  selector: "{{WRAPPER}}:hover .brz-ui-ed-iframe"
}
```

使用 `style`，您可以手動將特定樣式應用到所需元素。

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  style: ({ value }) => {
    return {
      "{{WRAPPER}}:hover .brz-ui-ed-iframe": {
        "background-color": value.hex
      }
    }
  }
}
```

#### HTML 示例

要檢索控制項的返回值，請使用以下規則從組件的 props 訪問所需的值：
將 `backgroundColor` 控制項的 `id` 與您希望提取的值串接。以下示例演示了如何提取十六進制顏色值並使用它來更改容器的背景顏色。

```tsx
import { Brizy } from "@brizy/core";

interface Props {
  backgroundGradientActivePointer: "start" | "end";
  backgroundGradientEndPointer: number;
  backgroundGradientColorHex: string;
  backgroundGradientColorOpacity: number;
  backgroundGradientColorPalette: string;
  backgroundGradientType: "linear" | "radial";
  backgroundBgColorHex: string;
  backgroundGradientLinearDegree: number;
  backgroundBgColorOpacity: number;
  backgroundBgColorPalette: string;
  backgroundGradientRadialDegree: number;
  backgroundGradientStartPointer: number;
  backgroundBgColorType: "solid" | "gradient";
}

const Component = (props: Props) => {
  const { backgroundBgColorHex } = props;

  return (
    <div className="component" style={{ backgroundColor: backgroundBgColorHex }}>
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
            id: "toolbarColor",
            type: "popover",
            config: {
              size: "medium",
              title: "Colors",
              icon: {
                style: {
                  backgroundColor: "#000",
                },
              },
            },
            options: [
              {
                id: "tabBackground",
                label: "Background",
                options: [
                  {
                    id: "background",
                    type: "backgroundColor",
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
