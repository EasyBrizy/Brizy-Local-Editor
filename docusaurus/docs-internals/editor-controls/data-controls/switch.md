---
sidebar_position: 1
---
# Switch

The switcher control in Brizy presents an on/off toggle. It functions as a sophisticated replacement for standard checkboxes.

Example of the switch when it is disabled:

![Switch Off](/img/data-controls/switch-off.png)

Example of the switch when it is enabled:

![Switch On](/img/data-controls/switch-on.png)

### Parameters

|     Name     |     Type      | Default | Description                                                                                                                                                                                                                                                          |
|:------------:|:-------------:|:-------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     `id`     |    string     |    -    | The identifier of the key where the switch will save your data                                                                                                                                                                                                       |
|    `type`    |    string     |    -    | Type should be `"switch"` to use this control                                                                                                                                                                                                                        |
|   `label`    |    string     |    -    | The label displayed on the left side of the control                                                                                                                                                                                                                  |
|  `position`  |    number     |    -    | The position of the control in toolbar                                                                                                                                                                                                                               |
|  `devices`   |    string     | `"all"` | Define the devices where the control will be rendered. Options: `"all"`, `"desktop"`, `"responsive"`. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
|  `disabled`  |    boolean    |  false  | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                              |
| `config.on`  | string/number |   `"on"`   | The return value of the control when it is enabled                                                                                                                                                                                                                   |
| `config.off` | string/number | `"off"` | The return value of the control when it is disabled                                                                                                                                                                                                                  |

### Return value

The return value is determined by the configuration of on/off properties. By default, it is `"on"` when the switch is enabled and `"off"` when the switch is disabled.

### Usage

```js
{
  id: "loop", 
  label: "Loop",
  type: "switch",
  devices: "desktop"
}
```
