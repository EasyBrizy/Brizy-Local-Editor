---
sidebar_position: 1
---
# Switch

The switcher control in Brizy presents an `on`/`off` toggle. It functions as a sophisticated replacement for standard checkboxes.

Example of the switch when it is disabled:

![Switch Off](/img/data-controls/switch-off.png)

Example of the switch when it is enabled:

![Switch On](/img/data-controls/switch-on.png)

### Parameters

| Name         | Type                                | Default | Description                                                                                                                                                                                                                                                          |
|:-------------|:------------------------------------|:-------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`         | `string`                            |    -    | The identifier of the key where the switch will save your data                                                                                                                                                                                                       |
| `type`       | `string`                            |    -    | Type should be `"switch"` to use this control                                                                                                                                                                                                                        |
| `label`      | `string`                            |    -    | The label displayed on the left side of the control                                                                                                                                                                                                                  |
| `position`   | `number`                            |    -    | The position of the control in toolbar                                                                                                                                                                                                                               |
| `devices`    | `"all"`/`"desktop"`/`"responsive"`  | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled`   | `boolean`                           |  `false`  | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                              |
| `config.on`  | `string`                            |   `"on"`   | The return value of the control when it is enabled                                                                                                                                                                                                                   |
| `config.off` | `string`                   | `"off"` | The return value of the control when it is disabled                                                                                                                                                                                                                  |

### Return value

The return value is determined by the configuration of on/off properties. By default, it is `"on"` when the switch is enabled and `"off"` when the switch is disabled.

### Usage


### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "loop", 
  type: "switch"
}
```

### Label example
Adding a label on the left side of the control.

```js
{
  id: "loop", 
  label: "Loop",
  type: "switch"
}
```

### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "loop", 
  type: "switch",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "loop", 
  type: "switch",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "loop", 
  type: "switch",
  devices: "responsive"
}
```

### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "loop", 
  type: "switch", 
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
        { title: "Custom", value: "custom" }
      ]
    },
    {
      id: "loop",
      type: "switch",
      disabled: videoType === "custom"
    }
  ]
}
```

### Config value for `on`/`off` examples
When the `switch` is enabled, it will return `"true"`.
When the `switch` is disabled, it will return `"false"`.

```js
{
  id: "loop", 
  type: "switch",
  config: {
    on: "true",
    off: "false"
  }
}
```

When the `switch` is enabled, it will return `"1"`.
When the `switch` is disabled, it will return `"0"`.

```js
{
  id: "loop", 
  type: "switch",
  config: {
    on: "1",
    off: "0"
  }
}
```

When the `switch` is enabled, it will return `"round"`.
When the `switch` is disabled, it will return `"square"`.

```js
{
  id: "loop", 
  type: "switch",
  config: {
    on: "round",
    off: "square"
  }
}
```

[//]: # (### CSS examples)

[//]: # ()
[//]: # (Show or hide the `.brz-text` element with CSS using a switch control value.)

[//]: # (If `config.on` and `config.off` are not provided, then the default values for the switch are `"on"` or `"off"`.)

[//]: # ()
[//]: # (```js)

[//]: # ({)

[//]: # (  id: "loop", )

[//]: # (  type: "switch",)

[//]: # (  style: &#40;{ value }&#41;=> {)

[//]: # (    if&#40;value.value === "on"&#41;{)

[//]: # (      return {)

[//]: # (        "{{WRAPPER}} .brz-text": {)

[//]: # (            display: "block")

[//]: # (        })

[//]: # (      })

[//]: # (    })

[//]: # (    )
[//]: # (    return {)

[//]: # (      "{{WRAPPER}} .brz-text": {)

[//]: # (        display: "none")

[//]: # (      })

[//]: # (    })

[//]: # (  })

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (Change the opacity of the `.brz-text` element with CSS using custom values from a `switch` control.)

[//]: # (The values for the switch were provided in the `config`, and now the values are `"1"` or `"0"`.)

[//]: # ()
[//]: # (```js)

[//]: # ({)

[//]: # (  id: "loop", )

[//]: # (  type: "switch",)

[//]: # (  config: {)

[//]: # (    on: "1",)

[//]: # (    off: "0")

[//]: # (  },)

[//]: # (  style: &#40;{ value }&#41;=> {)

[//]: # (    return {)

[//]: # (      "{{WRAPPER}} .brz-text": {)

[//]: # (        opacity: value.value)

[//]: # (      })

[//]: # (    })

[//]: # (  })

[//]: # (})

[//]: # (```)
