---
toc_max_heading_level: 4
---

# Editable Select

The `editableSelect` control with extra options allows users to choose from a list of pre-defined choices, similar to a standard select component. However, it also provides additional functionalities such as removing, duplicating, or editing the selected item.

Example of `editableSelect` control when it is closed:

![Editable Select](/img/data-controls/editableSelect.png)

Example of `editableSelect` control when it is open:

![Editable Select Opened](/img/data-controls/editableSelectOpened.png)

Example of options `editableSelect` control:

![Editable Select Options](/img/data-controls/editableSelectOptions.png)

### Parameters

| Name               | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the `editableSelect` will save your data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `type`             | `string`                                                                                                                                                                                   |      -       | Type should be `"editableSelect"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `placeholder?`     | `string`                                                                                                                                                                                   |      -       | The placeholder text displayed in the input field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `label?`           | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `position?`        | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `choices`          | `Array<Choice>`                                                                                                                                                                            |      -       | `Choice` is an object that is passed directly to the component.<br/><br/>**`Choice: { title: string; value: string; allowRemove?: boolean; allowEdit?: boolean; allowDuplicate?: boolean; }`**<br/><br/> Each `Choice` object defines the following properties:<br/>`title` - A string representing the display title of the choice.<br/>`value` - A string value representing the choice. This value is returned when the choice is selected.<br/>`allowRemove?` - Allows to remove the `Choice`.<br/>`allowDuplicate?` - Allows to duplicate the `Choice`.<br/>`allowEdit?` - Allows to edit `title` of the `Choice`.                                                                                                                                                                                                                                                                                                             |
| `onChange`         | `function`                                                                                                                                                                                 |      -       | Changes the value of the choices array, depends on action. <br/><br/> **`type Function = (action: OnChangeAction) => void`** <br/><br/> Receives the `OnChangeAction` which is <br/><br/> **`type OnChangeAction = { type: "change" \| "edit" \| "duplicate" \| "reset" \| "remove"; payload?: string }`** <br/><br/> When you select a new item from the list, the following action is called:<br/> **`{type: "change", payload: string}`**<br/> When you click on the `Duplicate` button, the following type of action is invoked: <br/>**`{type: "duplicate"}`** <br/>When you click on the `Edit Name` button, the following type of action is invoked: <br/>**`{type: "edit"; payload: string}`**<br/>When you click on the `Reset` button, the following type of action is invoked: <br/>**`{type:"reset"}`**<br/>When you click on the `Remove` button, the following type of action is invoked: <br/>**`{type: "remove"}`** |

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ],
  onChange: () => {}
}
```

#### Placeholder example

Adding the placeholder text for the control.

```js
{
  id: "line",
  type: "editableSelect",
  placeholder: "Choose one",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ],
  onChange: () => {}
}
```

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "line",
  type: "editableSelect",
  label: "Line",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ],
  onChange: () => {}
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "line",
  type: "editableSelect",
  devices: "all",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ],
  onChange: () => {}
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "line",
  type: "editableSelect",
  devices: "desktop",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ],
  onChange: () => {}
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "line",
  type: "editableSelect",
  devices: "responsive",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ],
  onChange: () => {}
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "line",
  type: "editableSelect",
  disabled: true,
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ],
  onChange: () => {}
}
```

Control will be disabled when `videoType` variable will be `"custom"`.
`getValue` is a getter function that allows us to retrieve the value of controls by their id.
`"videoType"` is the id of the first `"select"` control below.

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
      id: "line",
      type: "editableSelect",
      disabled: videoType === "custom",
      choices: [
        {
          value: "none",
          title: "None"
        },
        {
          value: "thin",
          title: "Thin"
        },
        {
          value: "heavy",
          title: "Heavy"
        },
      ],
      onChange: () => {}
    },
  ];
};
```

#### Helper examples

The helper object contains a content property with the value `"Helper"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    {
      value: "small",
      title: "Small"
    },
    {
      value: "medium",
      title: "Medium"
    },
    {
      value: "large",
      title: "Large"
    }
  ],
  helper: {
    content: "Helper"
  },
  onChange: () => {}
}
```

When the helper object contains a position property with the value `"top-start"`, indicating that the helper text will be displayed at the top start of icon.

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    {
      value: "small",
      title: "Small"
    },
    {
      value: "medium",
      title: "Medium"
    },
    {
      value: "large",
      title: "Large"
    }
  ],
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```

#### Choice with `allowRemove` example

You can remove these options from the list

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "solid", title: "solid", allowRemove: true },
    { value: "dashed", title: "dashed", allowRemove: true },
    { value: "dotted", title: "dotted", allowRemove: true }
  ]
}
```

#### Choice with `allowEdit` example

You can edit the titles of these options

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "solid", title: "solid", allowEdit: true },
    { value: "dashed", title: "dashed", allowEdit: true },
    { value: "dotted", title: "dotted", allowEdit: true }
  ]
}
```

#### Choice with `allowDuplicate` example

You can duplicate these options

```js
{
  id: "line",
  type: "editableSelect",
  choices: [
    { value: "solid", title: "solid", allowDuplicate: true },
    { value: "dashed", title: "dashed", allowDuplicate: true },
    { value: "dotted", title: "dotted", allowDuplicate: true }
  ]
}
```

#### OnChange example

```tsx
const getToolbarContols = () => {
  const originalChoices = [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    },
  ];

  const [choice, setChoices] = React.useState(originalChoices);
  const [value, setState] = React.useState<string | undefined>("Thin");

  const onValueChange = (a: { type: OnChangeCases; payload: string }) => {
    switch (a.type) {
      case OnChangeCases.Delete: {
        const newChoices = choice.filter((item) => item.title !== value);
        setChoices(newChoices);
        break;
      }
      case OnChangeCases.Duplicate: {
        const dupItem = choice.find((it) => it.title === value);
        const newTitle = dupItem?.title + "-copy-" + choice.length;
        const newChoices = [
          ...choice,
          {
            title: newTitle,
            value: newTitle,
          },
        ];
        setChoices(newChoices);
        break;
      }
      case OnChangeCases.Edit: {
        const selectedItem = choice.find((item) => item.title === value);
        const newChoices = choice.map((item) => ({
          ...item,
          title: item.value === selectedItem?.value ? a.payload : item.title,
        }));
        setChoices(newChoices);
        setState(a.payload);
        break;
      }
      case OnChangeCases.Symbol: {
        setState(a.payload);
        break;
      }
    }
  };

  return [
    {
      id: "line",
      type: "editableSelect",
      choices: choice,
      onChange: onValueChange,
      value: { value: state },
    },
  ];
};
``` 

### Return value

The return value is a `string` representing the text field value.

```js
{
  value: string;
}
```

Example of value:

```js
{
  value: "large"
}
```
