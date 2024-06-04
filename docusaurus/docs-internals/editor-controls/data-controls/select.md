---
toc_max_heading_level: 4
---
# Select

The select control serves as an advanced replacement for a traditional select box, delivering a more sophisticated and intuitive selection interface.

Example of the select when it is closed:

![Select Closed](/img/data-controls/select-closed.png)

Example of the select when it is opened:

![Select Opened](/img/data-controls/select-opened.png)

Example of the select with helper:

![Select Helper](/img/data-controls/select-helper.png)


### Parameters

| Name               | Type                                                                                                                                                                          | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                                                                                                                                                      |    -    | The identifier of the key where the switch will save your data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `type`             | `string`                                                                                                                                                                      |    -    | Type should be `"select"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `label?`           | `string`                                                                                                                                                                      |    -    | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `position?`        | `number`                                                                                                                                                                      |    -    | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                      |  `"all"`  | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `disabled?`        | `boolean`                                                                                                                                                                     | `false` | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `helper?.content`  | `string`                                                                                                                                                                      |    -    | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `helper?.position` | `"top-start" \| "top" \| "top-end" \| "right-start" \| "right" \| "right-end" \| "bottom-end" \| "bottom" \| "bottom-start" \| "left-end" \| "left" \| "left-start" \| "top"` |  `"top"`  | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `choices`          | `ChoicesSync \| ChoicesAsync`                                                                                                                                                 |    -    | The `choices` property can be configured to either synchronously or asynchronously provide a list of selectable options for a given component. This property can take two forms: `ChoicesSync` or `ChoicesAsync`.<br/><br/>**ChoicesSync**<br/><br/>`ChoicesSync` is an array of `Choice` objects that are directly provided to the component.<br/><br/>**`Choice: { icon?: { name?: string; className?: string; }; title: string; value: string; }`**<br/><br/> Each `Choice` object defines the following properties:<br/>`icon?.name` - The name of the icon.<br/>`icon?.className` - The CSS class name for styling the icon.<br/>`title` - A string representing the display title of the choice.<br/>`value` - A string value representing the choice. This value is returned when the choice is selected.<br/><br/>**ChoicesAsync**<br/><br/>`ChoicesAsync` is used to load the choices dynamically via an asynchronous function. It is an object that defines the following properties:<br/><br/>**`ChoiceAsync: { load: (abortSignal?: AbortSignal) => Promise<Choice[]>; emptyLoad?: { title?: string; }; }`**<br/><br/>`load` - A function that returns a `Promise` resolving to an array of `Choice` objects. This function can optionally take an `AbortSignal` to handle aborting the loading process.<br/>`emptyLoad?.title` - A string representing the text to display when the choices list is empty. |
| `onLoad?`          | `function`                                                                                                                                                                    |    -    | A void function that will be executed once the async choices have been successfully loaded.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |


### Return value

Returns the selected option value.
```js
{
  value: string;
}
```

### Usage


#### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "navIcon",
  type: "select",
  choices: [
    {
      value: "none",
      title: "None",
    },
    {
      value: "thin",
      title: "Thin",
    },
    {
      value: "heavy",
      title: "Heavy",
    }
  ]
}
```

#### Label example
Adding a label on the left side of the control.


```js
{
  id: "navIcon",
  type: "select",
  label: "Icon",
  choices: [
    {
      value: "none",
      title: "None",
    },
    {
      value: "thin",
      title: "Thin",
    },
    {
      value: "heavy",
      title: "Heavy",
    }
  ]
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "navIcon",
  type: "select",
  devices: "all",
  choices: [
    {
      value: "none",
      title: "None",
    },
    {
      value: "thin",
      title: "Thin",
    },
    {
      value: "heavy",
      title: "Heavy",
    }
  ]
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "navIcon",
  type: "select",
  devices: "desktop",
  choices: [
    {
      value: "none",
      title: "None",
    },
    {
      value: "thin",
      title: "Thin",
    },
    {
      value: "heavy",
      title: "Heavy",
    }
  ]
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "navIcon",
  type: "select",
  devices: "responsive",
  choices: [
    {
      value: "none",
      title: "None",
    },
    {
      value: "thin",
      title: "Thin",
    },
    {
      value: "heavy",
      title: "Heavy",
    }
  ]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "navIcon",
  type: "select",
  disabled: true,
  choices: [
    {
      value: "none",
      title: "None",
    },
    {
      value: "thin",
      title: "Thin",
    },
    {
      value: "heavy",
      title: "Heavy",
    }
  ]
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
      id: "navIcon",
      type: "select",
      disabled: videoType === "custom",
      choices: [
        {
          value: "none",
          title: "None",
        },
        {
          value: "thin",
          title: "Thin",
        },
        {
          value: "heavy",
          title: "Heavy",
        }
      ]
    }
  ]
}
```

#### Helper examples

The helper object contains a content property with the value `"Helper"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    {
      value: "small",
      title: "Small",
    },
    {
      value: "medium",
      title: "Medium",
    },
    {
      value: "large",
      title: "Large",
    }
  ],
  helper: {
    content: "Helper"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, indicating that the helper text will be displayed at the top start of icon.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    {
      value: "small",
      title: "Small",
    },
    {
      value: "medium",
      title: "Medium",
    },
    {
      value: "large",
      title: "Large",
    }
  ],
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```

#### Async choices example

`getChoices`: This function is an asynchronous function designed to fetch a list of choices from a given URL. The function takes an AbortSignal as an argument, which allows the fetch operation to be aborted if necessary.

```js
const getChoices = async (abortSignal: AbortSignal): Promise<Choice[]> => {
  const response = await fetch(URL, { signal: abortSignal });

  return response.json();
};

{
  id: "navIcon",
  type: "select",
  choices: {
    load: getChoices,
    emptyLoad: {
      title: "There are no choices"
    }
  }
}
```

#### Choice with icon example

```js
{
  id: "border",
  type: "select",
  choices: [
    { value: "solid", icon: { name: "nc-solid" }, title: "solid" },
    { value: "dashed", icon: { name: "nc-dashed" }, title: "dashed" },
    { value: "dotted", icon: { name: "nc-dotted" }, title: "dotted" }
  ]
}
```

#### `onLoad` example

```js
{
  id: "navIcon",
  type: "select",
  choices: {
    load: getChoices,
    emptyLoad: {
      title: "There are no choices"
    }
  },
  onLoad: () => { console.log("Choices Loaded") }
}
```
