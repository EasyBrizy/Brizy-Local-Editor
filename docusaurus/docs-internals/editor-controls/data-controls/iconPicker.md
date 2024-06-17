---
toc_max_heading_level: 4
---
# Icon Picker

The `iconPicker` control represents a list of radio buttons that can include an icon and a title for greater informativeness.

Example of the control:

![Icon Picker](/img/data-controls/iconPicker.png)

### Parameters

| Name               | Type                                                                                                                                                                                       | Default | Description                                                                                                                                                                                                                                                     |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                                                                                                                                                                   |    -    | The identifier of the key where the `"iconPicker"` will save your data                                                                                                                                                                                          |
| `type`             | `string`                                                                                                                                                                                   |    -    | Type should be `"iconPicker"` to use this control                                                                                                                                                                                                               |
| `label?`           | `string`                                                                                                                                                                                   |    -    | The label displayed on the top side of the control                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                      
| `position?`        | `number`                                                                                                                                                                                   |    -    | The position of the control in toolbar                                                                                                                                                                                                                          |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                |
| `disabled?`        | `boolean`                                                                                                                                                                                  | `false` | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                          |
| `helper?.content`  | `string`                                                                                                                                                                                   |    -    | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                                                |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                               |
| `choices?`         | `Array<Choice>`                                                                                                                                                                            |    -    | A list of radio buttons to display <br/> <br/> <b>`Choice = { icon: string; title: string; value: string; }`</b> <br/> <br/> `icon` - the name of the icon, <br/> `title` - the title of the button to display, <br/> `value` - the unique value for the button |

### Usage

#### Basic example

Standard definition with the keys necessary for the normal operation of the control. Will be displayed on all devices.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

#### Label example

Adding a label to the top side of the control.

```js
{
  id: "iconPicker",
  type: "iconPicker", 
  label: "Icon Picker"
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

#### Devices examples

It will be rendered on all devices. This value can be omitted since it defaults to `"all"`.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  devices: "all",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  devices: "desktop",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  devices: "responsive",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  disabled: true,
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
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
      id: "iconPicker",
      type: "iconPicker",
      disabled: videoType === "custom",
      choices: [
        {
          icon: "nc-star",
          title: "Title 1",
          value: "value1"
        },
        {
          icon: "nc-star",
          title: "Title 2",
          value: "value2"
        },
        {
          icon: "nc-star",
          title: "Title 3",
          value: "value3"
        }
      ]
    },
  ];
};
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  helper: {
    content: "help text"
  },
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed in the top left corner of the icon.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  helper: {
    content: "help text",
    position: "top-start"
  },
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

#### Choices example 

A list of radio buttons to display. Renders 3 radio buttons with provided `icon` and `title`. Upon selection, returns the provided `value`.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

### Return value

Returns the object where `value` represents the `Choice.value` of the selected button:

```js
{
  value: string;
}
```
