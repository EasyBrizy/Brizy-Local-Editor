---
toc_max_heading_level: 4
---
# Tabs

The `tabs` control in Brizy is a user interface element that allows multiple content sections to be contained within a single window, enabling easy switching between them.

Example of the `tabs` with position `top`:

![Tabs](/img/group-controls/tabs_position_top.png)

Example of the `tabs` with position `left`:

![Tabs](/img/group-controls/tabs_position_left.png)

### Parameters

| Name                 | Type        |    Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:---------------------|:------------|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                 | `string`    |       -       | The identifier of the key where the `tabs` will save your data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `type`               | `string`    |       -       | Type should be `"tabs"` to use this control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `tabs`               | `Array<TabItems>` | `[ ]` | An array defining the tabs next to the content. Each tab is represented by an object. <br/><br/> <b> `TabItems: { id: string; className?: string; title?: string; label?: string; position?: number; options?: ControlItems[]; }`</b> <br/><br/> `id` - the unique identifier for each individual tab. <br/> `className` - allows you to customize the appearance of the tab item by applying custom styles. <br/>  `title` - the title displayed on the tab, representing the content section associated with that tab. <br/> `label` - an additional label or description for the tab, providing further context or information about the content section it represents. <br/> `position` - specifies the position of the tab . <br/> `options` - an array of controls objects representing the content associated with each tab. <br/><br/> <b> `ControlItems: { id: string; type: string; className?: string; title?: string; label?: string; position?: number; }`</b> <br/><br/> `id` - this property uniquely identifies each control item and is derived from a saved option value. It represents an identifier associated with a specific configuration or option selected. <br/> `className` - CSS class name that allows customization of the control's appearance via custom styles. <br/> `title` - the title displayed on the control, representing the content section associated with that TabItems. <br/> `label` - an additional label or description for the control, providing further context or information about the content section it represents. <br/> `position` - specifies the position of the control within the TabItems. <br/> `type` - type of control.          |
| `position?`          | `number`    |       -       | The position of the control in toolbar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `devices?`           | `"all"` \| `"desktop"` \| `"responsive"`  | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `disabled?`          | `boolean`   |    `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `config?.showSingle` | `boolean`   |    `false`    | Show the label if you have just one tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `config?.saveTab`    | `boolean`   |    `false`    | Save the currently active tab upon closing the toolbar, ensuring that it remains the same when the toolbar is reopened.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `config?.position`   | `"top"` \|   `"left"`    | `"top"`   | The spatial location or placement of an element relative to container.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `config?.align`      | `"start"` \| `"center"` \| `"end"`   | `"center"` | Specifies the position of label inside tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Usage


#### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "actionTabs",
  type: "tabs",
  tabs: [
    {
      id: "upload",
      label: "File",
      options: [
        {
          id: "linkUpload",
          label: "File",
          type: "fileUpload"
        }
      ]
    },
    {
      id: "action",
      label: "Action",
      options: [
        {
          id: "actionClosePopup",
          label: "Close Popup",
          type: "switch"
        }
      ]
    }
  ]
}

```


#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "actionTabs", 
  type: "tabs",
  devices: "all",
  tabs: [
    {
      id: "upload",
      label: "File",
      options: [
        {
          id: "linkUpload",
          label: "File",
          type: "fileUpload"
        }
      ]
    },
    {
      id: "action",
      label: "Action",
      options: [
        {
          id: "actionClosePopup",
          label: "Close Popup",
          type: "switch"
        }
      ]
    }
  ]
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "actionTabs", 
  type: "tabs",
  devices: "desktop",
  tabs: [
    {
      id: "upload",
      label: "File",
      options: [
        {
          id: "linkUpload",
          label: "File",
          type: "fileUpload"
        }
      ]
    },
    {
      id: "action",
      label: "Action",
      options: [
        {
          id: "actionClosePopup",
          label: "Close Popup",
          type: "switch"
        }
      ]
    }
  ]
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "actionTabs", 
  type: "tabs",
  devices: "responsive",
  tabs: [
    {
      id: "upload",
      label: "File",
      options: [
        {
          id: "linkUpload",
          label: "File",
          type: "fileUpload"
        }
      ]
    },
    {
      id: "action",
      label: "Action",
      options: [
        {
          id: "actionClosePopup",
          label: "Close Popup",
          type: "switch"
        }
      ]
    }
  ]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "actionTabs", 
  type: "tabs", 
  disabled: true,
  tabs: [
    {
      id: "upload",
      label: "File",
      options: [
        {
          id: "linkUpload",
          label: "File",
          type: "fileUpload"
        }
      ]
    },
    {
      id: "action",
      label: "Action",
      options: [
        {
          id: "actionClosePopup",
          label: "Close Popup",
          type: "switch"
        }
      ]
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
        { title: "Custom", value: "custom" }
      ]
    },
    {
      id: "actionTabs",
      type: "tabs",
      disabled: videoType === "custom",
      tabs: [
        {
          id: "upload",
          label: "File",
          options: [
            {
              id: "linkUpload",
              label: "File",
              type: "fileUpload"
            }
          ]
        },
        {
          id: "action",
          label: "Action",
          options: [
            {
              id: "actionClosePopup",
              label: "Close Popup",
              type: "switch"
            }
          ]
        }
      ]
    }
  ]
}
```

#### Config `showSingle` example

If you have just one `tab` but you want to see the label `Link` you should set the `showSingle` to `true`.

```js
{
  id: "actionTabs", 
  type: "tabs", 
  config: {
    showSingle: true
  },
  tabs: [
    {
      id: "upload",
      label: "File",
      options: [
        {
          id: "linkUpload",
          label: "File",
          type: "fileUpload"
        }
      ]
    },
    {
      id: "action",
      label: "Action",
      options: [
        {
          id: "actionClosePopup",
          label: "Close Popup",
          type: "switch"
        }
      ]
    }
  ]
}
```

#### Config `saveTab` example

To ensure that `tab` remains the same when the toolbar is reopened, set `saveTab` to `true`.

```js
{
  id: "actionTabs", 
  type: "tabs", 
  config: {
    saveTab: true
  },
  tabs: [
    {
      id: "upload",
      label: "File",
      options: [
        {
          id: "linkUpload",
          label: "File",
          type: "fileUpload"
        }
      ]
    },
    {
      id: "action",
      label: "Action",
      options: [
        {
          id: "actionClosePopup",
          label: "Close Popup",
          type: "switch"
        }
      ]
    }
  ]
}
```

#### Config `position` example

If you would like to place the `tabs` on the side of the container, set their `position` to `"left"`.

```js
{
  id: "actionTabs", 
  type: "tabs", 
  config: {
    position: "left"
  },
  tabs: [
    {
      id: "upload",
      label: "File",
      options: [
        {
          id: "linkUpload",
          label: "File",
          type: "fileUpload"
        }
      ]
    },
    {
      id: "action",
      label: "Action",
      options: [
        {
          id: "actionClosePopup",
          label: "Close Popup",
          type: "switch"
        }
      ]
    }
  ]
}
```

#### Config `align` example

If you would like to `align` the label inside the `tabs` on the x-axis, you could choose one of the positions: `"start"`, `"center"`, or `"end"`.

```js
{
  id: "actionTabs", 
  type: "tabs", 
  config: {
    align: "end"
  },
  tabs: [
    {
      id: "upload",
      label: "File",
      options: [
        {
          id: "linkUpload",
          label: "File",
          type: "fileUpload"
        }
      ]
    },
    {
      id: "action",
      label: "Action",
      options: [
        {
          id: "actionClosePopup",
          label: "Close Popup",
          type: "switch"
        }
      ]
    }
  ]
}
```

### Return value

A `string` representing the selected `tab` is returned only when `config.saveTab` is set to `true`.
```js
{
  value: string;
}
```

Example of value:
```js
{
  value: "action"
}
```
