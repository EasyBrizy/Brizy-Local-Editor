---
toc_max_heading_level: 4
---

# Sidebar Tabs Button

The SidebarTabsButton is a user interface component used in tabbed navigation systems. It functions as a clickable button within a tabbed interface, allowing users to switch between different content sections.

Example of sidebarTabsButton control:

![SidebarTabsButton](/img/multivalue-controls/sidebarTabsButton.png)

### Parameters

| Name            | Type                                     |  Default   | Description                                                                                                                                                                                                                       |
| :-------------- | :--------------------------------------- | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`            | `string`                                 |     -      | The identifier of the key where the sidebarTabsButton will save your data                                                                                                                                                         |
| `type`          | `string`                                 |     -      | Type should be `"sidebarTabsButton"` to use this control                                                                                                                                                                          |
| `devices?`      | `"all"` \| `"desktop"` \| `"responsive"` |  `"all"`   | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`     | `boolean`                                |  `false`   | Configure the condition under which the control is disabled or enabled                                                                                                                                                            |
| `config?.tabId` | `string`                                 |     -      | The identifier of the tab where the control will be placed                                                                                                                                                                        |
| `config?.icon`  | `string`                                 |     -      | The icon to be displayed with the control                                                                                                                                                                                         |
| `config?.align` | `"left"` \| `"center"` \| `"right"`      | `"center"` | The alignment of the control                                                                                                                                                                                                      |
| `config?.text`  | `string`                                 |     -      | The text to be displayed with the control                                                                                                                                                                                         |

### Return value

The `buttoSidebarTabsButtonn`component returns an object that represents a styled button with optional icon , text and align content.

```js
{
  title: string;
  icon: string;
  align: "left" | "center" | "right";
}
```

`title` - Sets the title attribute to the title prop if provided; <br/>
`icon` - Sets the title attribute to the title prop if provided; <br/>
`align` - Specifies the alignment of the button's content. The value can be `"left"`, `"center"`, or `"right"`, determining whether the content is aligned to the left, centered, or aligned to the right within the button.

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "effects",
  type: "sidebarTabsButton",
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "effects",
  type: "sidebarTabsButton",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "effects",
  type: "sidebarTabsButton",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "effects",
  type: "sidebarTabsButton",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "effects",
  type: "sidebarTabsButton",
  disabled: true
}
```

Control will be disabled when `videoType` variable will be `"custom"`.
`getValue` is a getter function that allows us to retrieve the value of controls by their id.
`"videoType"` is the id of the `"select"` control below.

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
      id: "effects",
      type: "sidebarTabsButton",
      disabled: videoType === "custom",
    },
  ];
};
```

#### Config value for `tabId` example

Sets the tab identifier where the control will be placed.

```js
{
  id: "rows",
  type: "number",
  config: {
    tabId: "rows"
  }
}
```

#### Config value for `icon` example

Specifies the icon to be displayed with the control.

```js
{
  id: "rows",
  type: "number",
  config: {
    icon: "nc-flash"
  }
}
```

#### Config value for `align` example

Sets the alignment of the control.

```js
{
  id: "rows",
  type: "number",
  config: {
    align: "left"
  }
}
```

#### Config value for `text` example

Defines the text to be displayed with the control.

```js
{
  id: "rows",
  type: "number",
  config: {
    text: "Effects"
  }
}
```
