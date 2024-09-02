---
sidebar_position: 4
toc_max_heading_level: 4
---

# 控制組

控制組是一種用來將兩個或更多其他控制元件分組的控制元件。<br/> 它修改使用者介面，使其對最終使用者更直觀和清晰。<br/> 該控制元件本身不會返回任何值。其主要功能是省略分隔控制元件的分隔線，視覺上表示這些控制元件是相關的。<br/>
對於控制組，`id` 屬性沒有任何效果，只用於通過名稱分隔組。 [了解更多](../editor-controls/containers/group)

例如，我們有一些警報元件提供兩個選項：

<ul>
  <li>顯示關閉按鈕（開關控制元件）</li>
  <li>延遲（滑桿控制元件）</li>
</ul>

這些選項是相關的。如果啟用了 `顯示關閉按鈕` 選項，那麼我們應該指定 `延遲` 之後關閉按鈕將被渲染。

### UI 示例

---

**這些通常看起來怎麼樣：** <br/>

<img  class="brz-img--border" src="/img/controls/alert-options-no-group.png" /> <br/><br/>

**使用 `group` 控制元件後的樣子：** <br/>

<img  class="brz-img--border" src="/img/controls/alert-options-group.png" /> <br/><br/>

**區別是什麼：** <br/>
第一個示例和第二個示例的區別在於分隔線的存在。在第一個示例中，選項之間有分隔線。在第二個示例（使用 `group` 控制元件）中，分隔線被省略。 <br/><br/>

### 代碼示例

---

在此示例中，我們實現了包含兩個其他選項的控制組，這些選項如[上面](#ui-examples)所述。

```js
const getToolbarItems = ({ getValue }) => {
  const closeButtonState = getValue("closeButtonState");

  return [
    {
      id: "toolbarShowHideButton",
      type: "popover",
      config: {
        icon: "nc-alert",
        title: "Alert",
      },
      position: 60,
      options: [
        {
          id: "groupCloseButton",
          type: "group",
          devices: "desktop",
          options: [
            {
              id: "closeButtonState",
              type: "switch",
              label: "顯示關閉按鈕",
            },
            {
              id: "delay",
              label: "延遲",
              type: "slider",
              disabled: closeButtonState === "off",
              config: {
                min: 0,
                max: 10,
                units: [{ title: "秒", value: "s" }],
              },
            },
          ],
        },
      ],
    },
  ];
};
```
