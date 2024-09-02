---
sidebar_position: 2
toc_max_heading_level: 4
---

# Paypal

Brizy 中的 `paypal` 控制項允許用戶輕鬆通過 PayPal 進行支付。要連接 PayPal，用戶需要插入 API 密鑰，該密鑰可以從他們的 PayPal 帳戶設置中獲取。這確保了直接從 Brizy 界面進行安全且順暢的交易。

`paypal` 整合按鈕範例：

![Paypal](/img/controls/paypal-integration-button.png)

`paypal` 連接彈出窗口範例：

![Paypal](/img/controls/paypal.png)

### 參數

| 名稱               | 類型                                                                                                                                                                                       |   預設值   | 說明                                                                                                                                                                                                                                                                                                                                                |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |     -      | 控制項保存數據的鍵的標識符                                                                                                                                                                                                                                                                                                                          |
| `type`             | `string`                                                                                                                                                                                   |     -      | 類型應設為 `"paypal"` 以使用此控制項                                                                                                                                                                                                                                                                                                                |
| `label?`           | `string`                                                                                                                                                                                   |     -      | 顯示在控制項左側的標籤                                                                                                                                                                                                                                                                                                                              |
| `icon?`            | `string`                                                                                                                                                                                   |     -      | 將渲染在控制項標籤左側的圖示名稱。查看所有 [圖示](/docs-internals/icons/)。                                                                                                                                                                                                                                                                         |
| `position?`        | `number`                                                                                                                                                                                   |     -      | 控制項在工具列中的位置                                                                                                                                                                                                                                                                                                                              |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |     -      | 僅在當前用戶的角色匹配提供的數組中的角色之一時渲染控制項。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |  `"all"`   | 定義控制項將在哪些設備上渲染。`"all"` 在所有設備上渲染控制項。`"desktop"` 僅在桌面設備上渲染控制項。`"responsive"` 在平板和手機設備上渲染控制項。                                                                                                                                                                                                   |
| `disabled?`        | `boolean`                                                                                                                                                                                  |  `false`   | 配置控制項禁用或啟用的條件。                                                                                                                                                                                                                                                                                                                        |
| `display?`         | `"inline" \| "block"`                                                                                                                                                                      | `"inline"` | 配置控制項及其標籤的排列方式。如果 `display` 為 `"inline"`，則標籤和控制項將在同一行。如果 `display` 為 `"block"`，則標籤將在一行，控制項將在下一行顯示。                                                                                                                                                                                           |
| `helper?.content`  | `string`                                                                                                                                                                                   |     -      | 如果提供，將顯示一個圖示在標籤旁邊。當懸停在此圖示上時，會顯示帶有額外信息的工具提示。                                                                                                                                                                                                                                                              |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |  `"top"`   | 指定工具提示相對於幫助圖示的位置。                                                                                                                                                                                                                                                                                                                  |
| `default?`         | `Default`                                                                                                                                                                                  |     -      | 控制項的預設值。<br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - 控制項的自定義初始值 <br/>                                                                                                                                                                                                                                   |
| `style?`           | `function`                                                                                                                                                                                 |     -      | 此函數根據控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的對象，該鍵持有控制項的當前值。函數返回一個具有 CSS 選擇器鍵和 CSS 屬性值的對象。 <pre>`style: ({value}) => {`<br/> `return {`<br/> &nbsp;`"{{WRAPPER}} .brz-text": {`<br/> &nbsp; &nbsp; `color: value.lenght ? "green" : "red"`<br/> &nbsp; &nbsp; `}`<br/> &nbsp; `}`<br/>`}`</pre> |

### 基本範例

標準定義僅包含必要的鍵。此控制項將在所有設備上顯示。

```js
{
  id: "account",
  type: "paypal"
}
```

### 返回值

返回值是 `string` 類型，表示文本欄位的值，用於存儲 API 密鑰。

```js
{
  value: string;
}
```

值的範例：

```js
{
  value: "my-api-key";
}
```

### 用法

#### 標籤範例

在控制項左側添加標籤。

```js
{
  id: "account",
  type: "paypal",
  label: "Paypal"
}
```

#### 圖示範例

在控制項的標籤左側添加 "paypal" 圖示。

```js
{
  id: "account",
  type: "paypal",
  icon: "nc-paypal"
}
```

#### 角色範例

僅對擁有管理員和設計師權限的用戶顯示控制項。

```js
{
  id: "account",
  type: "paypal",
  roles: ["admin", "designer"]
}
```

#### 設備範例

將在所有設備上渲染。此值可以省略，因為默認為 `"all"`。

```js
{
  id: "account",
  type: "paypal",
  devices: "all"
}
```

僅在 `desktop` 上渲染。

```js
{
  id: "account",
  type: "paypal",
  devices: "desktop"
}
```

顯示僅限於響應式模式，即 `tablet` 和 `mobile`。

```js
{
  id: "account",
  type: "paypal",
  devices: "responsive"
}
```

#### 禁用範例

控制項將被禁用。通常，這裡應該是你的動態條件。

```js
{
  id: "account",
  type: "paypal",
  disabled: true
}
```

當 `videoType` 變量為 `"custom"` 時，控制項將被禁用。
`getValue` 是一個 getter 函數，允許我們通過 id 獲取控制項的值。
`"videoType"` 是下方 `"select"` 控制項的 id。

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
      id: "account",
      type: "paypal",
      disabled: videoType === "custom",
    },
  ];
};
```

#### 顯示範例

在此範例中，使用 `display: "block"`，標籤將顯示在第一行，控制項顯示在第二行。

```js
{
  id: "account",
  type: "paypal",
  display: "block"
}
```

#### 助手範例

助手對象包含一個 `content` 屬性，值為 `"help text"`，這將顯示為用戶的附加指導或信息。

```js
{
  id: "account",
  type: "paypal",
  helper: {
    content: "help text"
  }
}
```

當助手對象包含一個 `position` 屬性，值為 `"top-start"`，表示助手文本將顯示在圖示的左上角。

```js
{
  id: "account",
  type: "paypal",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### 預設值範例

在此範例中，paypal 控制項的預設值為 `"my-custom-api-key"`。

```js
{
  id: "account",
  type: "paypal",
  default: {
    value: "my-custom-api-key"
  }
}
```

#### CSS 範例

使用 `paypal` 控制項的值來更改 `.brz-text` 元素的顏色。

```js
{
  id: "account",
  type: "paypal",
  style: ({ value }) => {
    if (value.value && value.value.length) {
      return {
        "{{WRAPPER}} .brz-text": {
          color: "green"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-text": {
        color: "red"
      }
    }
  }
}
```

#### HTML 中的用法範例

在下面的範例中，我們使用 paypal 輸出值來確定文本元素中的內容。

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  account: string;
}

const Text = (props: Props): JSX.Element => {
  const { account } = props;

  return (
    <div className="brz-text">
      <span>你的 PayPal 帳戶已 {account.length ? "連接" : "未連接"}</span>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Text",
  component: { editor: Text, view: Text },
  title: "我的文本",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-text",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-text",
              title: "文本",
            },
            devices: "desktop",
            options: [
              {
                id: "account",
                type: "paypal",
                devices: "desktop",
              },
            ],
          },
        ],
      },
    ];
  },
});
```
