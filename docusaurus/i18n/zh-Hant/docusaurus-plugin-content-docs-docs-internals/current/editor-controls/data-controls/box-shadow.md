---
toc_max_heading_level: 4
---

# 盒子陰影

`boxshadow` 控制項提供了一個介面來修改元素的 CSS `box-shadow` 屬性。

控制項範例：

![Text Shadow Info](/img/controls/boxShadowInfo.png)

1. 陰影下拉選單 - 這個下拉選單允許你選擇是否將陰影應用於元素。它有三個選項：`none`、`inset` 和 `outset`。
2. 顏色選擇區域 - 在這裡你可以透過點擊顏色漸變中的期望點來選擇準確的顏色。
3. 色調滑桿 - 這個垂直滑桿允許你選擇要使用的色調（基本顏色）。
4. 不透明度滑桿 - 這個滑桿允許你調整所選顏色的不透明度。
5. 預設顏色 - 這些是來自全域樣式的預設顏色選項，讓你可以快速選擇。
6. 設定圖示 - 開啟側邊欄以使用全域樣式。
7. 十六進位顏色輸入框 - 這個區域顯示所選顏色的十六進位顏色代碼，並允許你輸入特定的十六進位代碼來直接選擇顏色。旁邊的滴管圖示讓你可以透過點擊頁面上的任意位置來選擇顏色。
8. 模糊半徑 - 此輸入框允許你指定陰影的模糊半徑。
9. 垂直偏移 - 此輸入框允許你指定陰影的垂直偏移。
10. 水平偏移 - 此輸入框允許你指定陰影的水平偏移。
11. 不透明度偏移 - 此輸入框允許你指定陰影的不透明度偏移。

控制項的 `"normal"` 狀態範例：

![Box Shadow Normal](/img/controls/boxShadow.png)

控制項的 `"hover"` 狀態範例：

![Element Shadow Hover](/img/controls/boxShadowHover.png)

開啟下拉選單的控制項範例：

![Element Shadow](/img/controls/boxShadowDropdown.png)

### 參數

| 名稱   | 類型     |    預設值    | 描述    |
| :------- | :--- | :-: | :----- |
| `id`   | `string`    |      -       | 保存盒子陰影資料的鍵的識別符    |
| `type`            | `string`   |      -       | 使用此控制項的類型應為 `"boxShadow"`   |
| `className?`      | `string`                                 |      -       | 將設置在控制項上的自定義 CSS 類名。它可以用於修改控制項樣式                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `string`    | -   | 將設置在控制項上的自定義 CSS 類名。它可以用於修改控制項樣式。 |
| `position?`       | `number`                                 |      -       | 控制項在工具欄中的位置                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `roles?`          | `Array<Role>`                            |      -       | 僅在當前使用者的角色符合提供的角色陣列之一時呈現控制項。<br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | string`\*\* |
| `devices?`        | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | 定義將在其上呈現控制項的設備。 `"all"` 在所有設備上呈現控制項。 `"desktop"` 僅在桌面設備上呈現控制項。 `"responsive"` 在平板電腦和移動設備上呈現控制項                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `disabled?`       | `boolean`                                |   `false`    | 配置在何種情況下禁用或啟用控制項                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `states?`         | `Array<State>`                           | [`"normal"`] | 允許根據元素的狀態設置不同的樣式 <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - 元素的正常狀態, <br/> `"hover"` - 當滑鼠懸停在元素上時的狀態, <br/> `"active"` - 當元素處於活動狀態時（例如分頁中的當前頁面）                                                                                                                                                                                                                                                                                                                                                                                                     |
| `config?.type`    | `"none"` \| `"inset"` \| `"outset"`      |   `"none"`   | 指定盒子陰影的類型。它決定了陰影在元素周圍的顯示方式。類型如下： <br/> <br/> `"none"` - 無陰影。 <br/> `"inset"` - 陰影在元素內部。 <br/> `"outset"` - 陰影在元素外部。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `config?.opacity` | `boolean`                                |    `true`    | 指示是否為盒子陰影啟用了不透明度設置。它決定了是否可以調整盒子陰影的不透明度。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `default?`        | `Default`                                |      -       | 控制項的預設值。 <br/> <br/> <b>`Default: { value: {blur: number; value: string; spread: number; hex: string; horizontal: string; opacity: string; palette: string; vertical: string; }; }`</b> <br/> <br/> `blur` - 指定陰影的模糊半徑； <br/> `value` - 指示當前的盒子陰影類型。它可以取以下值之一： `"none"`、 `"inset"` 和 `"outset"`；<br/> `spread` - 定義陰影的擴展半徑。正值將使陰影擴展並變大，而負值將使其縮小；<br/> `hex` - 定義陰影的十六進位顏色格式； <br/> `horizontal` - 陰影的水平偏移； <br/> `opacity` - 指示元素本身的不透明度，而不是陰影； <br/> `palette` - 全域樣式中的預定義調色板； <br/> `vertical` - 陰影的垂直偏移； <br/> |
| `selector?`       | `string`                                 |      -       | 將應用樣式的 CSS 選擇器                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `style?`          | `function`                               |      -       | 此函數根據控制項的值生成 CSS 輸出。參數是一個包含 `value` 鍵的物件，該鍵包含控制項的當前值。該函數返回一個包含 CSS 選擇器鍵和 CSS 屬性值的物件。 <pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-container": {`<br/> `"box-shadow": value.value === "inset" ? ` <br/> `  "rgba(" + hexToRgba(value.hex, value.opacity) + ") 10px"  : "none"`<br/> `}`<br/> `}`<br/>`}`</pre>                                                                                                                                                                                                                                                        |
