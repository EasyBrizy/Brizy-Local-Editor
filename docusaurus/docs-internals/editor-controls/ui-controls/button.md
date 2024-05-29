---
sidebar_position: 1
toc_max_heading_level: 4
---

# Button

Brizy's control button features a panel button that can trigger a click event based on user interaction.

Example of the button:

![Button](/img/ui-controls/button.png)

### Parameters

| Name                   | Type                                     | Default | Description                                                                                                                                                                                                                       |
| :--------------------- | :--------------------------------------- | :-----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                   | `string`                                 |    -    | The identifier of the key where the button will save your data.                                                                                                                                                                   |
| `type`                 | `string`                                 |    -    | Type should be `"button"` to use this control.                                                                                                                                                                                    |
| `position?`            | `number`                                 |    -    | The position of the control in toolbar.                                                                                                                                                                                           |
| `devices?`             | `"all"` \| `"desktop"` \| `"responsive"` | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`            | `boolean`                                | `false` | Configure the condition under which the control is disabled or enabled.                                                                                                                                                           |
| `onClick`              | `function`                               |    -    | Function to be called when the button is clicked.                                                                                                                                                                                 |
| `config.icon`          | `string`                                 |    -    | The icon name of the button.                                                                                                                                                                                                      |
| `config?.text`         | `string`                                 |    -    | The text displayed on the button.                                                                                                                                                                                                 |
| `config?.reverse`      | `boolean`                                | `false` | Determines whether the button layout is reversed.                                                                                                                                                                                 |
| `config?.reverseTheme` | `boolean`                                | `false` | Configures whether the theme is reversed for the button.                                                                                                                                                                          |
| `config?.title`        | `string`                                 |    -    | The tooltip title of the button.                                                                                                                                                                                                  |

### Return value

The button control in Brizy serves as an interactive element that triggers an action when clicked and does not return a value.

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "duplicate",
  type: "button"
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "duplicate",
  type: "button",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "duplicate",
  type: "button",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "duplicate",
  type: "button",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "duplicate",
  type: "button",
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
      id: "duplicate",
      type: "button",
      disabled: videoType === "custom",
    },
  ];
};
```

#### OnClick example

The `onClick` function is triggered when the button is clicked.

```js
{
  id: "duplicate",
  type: "button",
  onClick: ()=> {}
}
```

#### Config icon example

The `icon` property specifies the icon to be used for the button.<br/> Here, `"nc-add"` is the name of the icon.

```js
{
  id: "duplicate",
  type: "button",
  config: {
    icon: "nc-add"
  }
}
```

#### Config text example

The `text` property specifies the text displayed on the button.

```js
{
  id: "duplicate",
  type: "button",
  config: {
    text: "example"
  }
}
```

#### Config value for reverse `true` | `false` example

When set to `true`, the layout is reversed.<br/>
When set to `false`, the layout is not reversed.

```js
{
  id: "duplicate",
  type: "button",
  config: {
    reverse: true
  }
}
```

#### Config value for reverseTheme `true` | `false` example

When set to `true`, the theme is reversed.<br/>
When set to `false`, the theme is not reversed.

```js
{
  id: "duplicate",
  type: "button",
  config: {
    reverseTheme: true
  }
}
```

#### Config title example

The `title` property specifies the tooltip text for the button.

```js
{
  id: "duplicate",
  type: "button",
  config: {
    title: "example"
  }
}
```
