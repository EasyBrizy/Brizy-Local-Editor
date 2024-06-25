---
toc_max_heading_level: 4
---
# Multi Select

The `multiSelect` control allows users to select multiple options from a list, displaying the number of selected items and the individual selections. It offers both synchronous and asynchronous loading of choices, enhancing flexibility and user experience.

Example of the `multiSelect` without selection:

![Multiselect Deselected](/img/controls/multiselect-deselected.png)

Example of the `multiSelect` with single selection:

![Multiselect Selected1](/img/controls/multiselect-selected1.png)

Example of the `multiSelect` with multiple selections:

![Multiselect Selected2](/img/controls/multiselect-selected2.png)

### Parameters

| Name                 | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                 | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the control will save your data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `type`               | `string`                                                                                                                                                                                   |      -       | Type should be `"multiSelect"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `label?`             | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `icon?`              | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `placeholder?`       | `string`                                                                                                                                                                                   |      -       | The placeholder text displayed in the multiselect field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `position?`          | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `roles?`             | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | string`**                                                                                                                                                                                                                                                                                                  |
| `devices?`           | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `disabled?`          | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `display?`           | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `helper?.content`    | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `helper?.position`   | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `states?`            | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `choices`            | `ChoicesSync \| ChoicesAsync`                                                                                                                                                              |      -       | The `choices` property can be configured to either synchronously or asynchronously provide a list of selectable options for a given component. This property can take two forms: `ChoicesSync` or `ChoicesAsync`.<br/><br/>**ChoicesSync**<br/><br/> `ChoicesSync` is an array of `Choice` objects that are directly provided to the component.<br/><br/>**`Choice: { title: string; value: string }`**<br/><br/> Each `Choice` object defines the following properties:<br/>`title` - A string representing the display title of the choice.<br/>`value` - A value representing the choice. This value is returned when the choice is selected.<br/><br/>**ChoicesAsync**<br/><br/>`ChoicesAsync` is used to load the choices dynamically via asynchronous functions. It is an object that defines the following properties:<br/><br/>**`ChoicesAsync: { load: (value: Array<string>, abortSignal?: AbortSignal) => Promise<Choice[]>; search: (search: string, abortSignal?: AbortSignal) => Promise<Choice[]>; }`**<br/><br/>`load` - A function that takes a `value` and optionally an `AbortSignal`, and returns a Promise resolving to an array of `Choice` objects. This function is used to load the select choices.<br/>`search` - A function that takes a `search` string from the search input and optionally an `AbortSignal`, and returns a Promise resolving to an array of `Choice` objects based on the search criteria. This function is used to dynamically search and load choices based on user input.<br/> |                                                                                                                                                                                                                         |
| `config?.search`     | `boolean`                                                                                                                                                                                  |     -        | If provided and set to `true`, an input field is displayed at the top to search items within the control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `config?.showArrow`  | `boolean`                                                                                                                                                                                  |      -       | If provided and set to `true` an arrow is displayed to the right.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `default?`           | `Default`                                                                                                                                                                                  |      -       | The default control value. <br/> <br/> <b>`Default: { value: Array<string> }`</b> <br/> <br/> `value` - the control's custom initial value <br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `style?`             | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-text": {`<br/>   `color: value.includes("events") ? "green" : "black"`<br/>  `}`<br/> `}`<br/>`}`</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

### Return value

The return value of the `multiSelect` control is a stringified array of selected `Choices` titles.

```js
{
  value: string;
}

```
Example of value:
```js
{
  value: "['events', 'timeline']"
}
```

### Usage

#### Label example
Adding a label on the left side of the control.

```js
{
  id: "type",
  label: "Layout",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### Icon example

Adding a "star" icon to the left of the control's label.

```js
{
  id: "type",
  type: "multiSelect",
  icon: "nc-star",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "type",
  type: "multiSelect",
  roles: ["admin", "designer"],
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### Placeholder example

The placeholder text displayed in the multiselect field.

```js
{
  id: "type",
  type: "multiSelect",
  placeholder: "Select choices",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "type",
  type: "multiSelect",
  devices: "all",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "type",
  type: "multiSelect",
  devices: "desktop",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "type",
  type: "multiSelect",
  devices: "responsive",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "type",
  type: "multiSelect",
  disabled: true,
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
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
      id: "type",
      type: "multiSelect",
      disabled: videoType === "custom",
      choices: [
        { title: "Timeline", value: "timeline" },
        { title: "Events", value: "events" }
      ]
    }
  ]
}
```
#### Display examples
In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "type",
  type: "multiSelect"
  display: "block",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### Helper examples

The helper object contains a content property with the value `"Helper"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ],
  helper: {
    content: "Helper"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ],
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```
#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "type",
  type: "multiSelect", 
  states: ["normal", "hover"],
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "type",
  type: "multiSelect", 
  states: ["normal", "hover", "active"],
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ]
}
```

#### Async choices example

`loadChoices`: This asynchronous function fetches a list of `Choice` objects from a URL based. 
It returns an array of `Choice` objects. The value `parameter` represents the currently selected `Choice` within the control. This `value` can be used for various purposes, such as filtering results, populating other parts of the form, or programmatically interacting with the selected choice.
The function additionally accepts an `AbortSignal` parameter, allowing the fetch operation to be cancelled if needed.

`searchChoices`: Similar to `loadChoices`, this function returns an array of `Choice` objects based on the search term entered in the control's input field.

```js
const loadChoices = async (value: Value, abortSignal: AbortSignal): Promise<Choice[]> => {
  const response = await fetch(URL, { signal: abortSignal });

  return response.json();
};

const searchChoices = async (search: string, abortSignal: AbortSignal): Promise<Choice[]> => {
  const body = JSON.stringify({ searchCriteria: search });

  const response = await fetch(URL, { signal: abortSignal, body });

  return response.json();
};

{
  id: "type",
  type: "multiSelect",
  choices: {
    load: loadChoices,
    search: searchChoices
  }
}
```

#### Config `search` example

For the example below, an input field appears above the dropdown. This allows users to easily find a choice by its title.

```js
{
  id: "type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ],
  config: {
    search: true
  }
}
```

#### Config `showArrow` example

An arrow icon appears to the right of the `multiSelect`.

```js
{
  id: "type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ],
  config: {
    showArrow: true
  }
}
```

#### Default value examples

In this example, the `multiSelect` control that has the value `"['events']"` by default.

```js
{
  id: "type", 
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ],
  default: {
    value: "['events']"
  }
}
```

#### CSS examples

Change the `.brz-text` element color with CSS using a `multiSelect` control value.

```js
{
  id: "type",
  type: "multiSelect",
  choices: [
    { title: "Timeline", value: "timeline" },
    { title: "Events", value: "events" }
  ],
  style: ({ value }) => {
    if (value.value.includes("events")) {
      return {
        "{{WRAPPER}} .brz-text": {
          "color": "orange"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-text": {
        "color": "black"
      }
    }
  }
}
```

#### Usage in HTML example

In the example below, we use the `multiSelect` output value to determine when to render the label in the button element.
When the `multiSelect` includes `"evenets"`, we will render the label.
We also use the same `multiSelect` value to add the `"data-disabled"` HTML attribute to the `.brz-button`.

```tsx
import { Brizy } from "@brizy/core";
import { Icon } from "./Icon";
import React, { JSX } from "react";

interface Props {
  type: string;
}

const Button = (props: Props): JSX.Element => {
  const { type } = props;

  const parsed = JSON.parse(type);
  
  const attributes = {
    "data-disabled": parsed.includes("events")
  }
  
  return (
    <div className="brz-button" {...attributes}>
      {parsed.includes("events") && <span>Show Events</span>}
      <Icon name="calendar"/>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Button",
  component: { editor: Button, view: Button },
  title: "My Button",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-button",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-button",
              title: "Button"
            },
            devices: "desktop",
            options: [
              {
                id: "type",
                type: "multiSelect",
                choices: [
                  { title: "Timeline", value: "timeline" },
                  { title: "Events", value: "events" }
                ],
                devices: "desktop"
              }
            ]
          }
        ]
      }
    ];
  }
});
```
