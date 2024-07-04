---
toc_max_heading_level: 4
---
# AI Text

The `aiText` control in Brizy enables users to generate text based on a given prompt. This feature leverages advanced AI technology to produce contextually relevant and coherent text, enhancing content creation with minimal effort.

Example of `aiText` control:

![AiText](/img/controls/aiText.png)


### Parameters

| Name             | Type                                     |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:-----------------|:-----------------------------------------|:------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`             | `string`                                 |      -       | The identifier of the key where the `aiText` will save your data                                                                                                                                                                                                                                                                                                                                                               |
| `type`           | `string`                                 |      -       | Type should be `"aiText"` to use this control                                                                                                                                                                                                                                                                                                                                                                                  |
| `position?`      | `number`                                 |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                         |
| `devices?`       | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                              |
| `disabled?`      | `boolean`                                |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                        |
| `roles?`         | `Array<Role>`                            |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                  |
| `states?`        | `Array<State>`                           | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                        |
| `selectedValue?` | `string`                                 |      -       | The value that will be used as context for generating new text. You can hardcode a default context that will not be overridden by the input context.                                                                                                                                                                                                                                                                           |
| `default?`       | `Default`                                |      -       | The default control value. <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - the control's custom initial value. <br/> If `selectedValue` is not set, then the default value will be used as context                                                                                                                                                                                                      |
| `style?`         | `function`                               |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-text": {`<br/>   `display: value === "" ? "none" : "block"`<br/>  `}`<br/> `}`<br/>`}`</pre> |

### Basic example

Standard definition with only the required keys. This control will be visible on all devices.

```js
{
  id: "text",
  type: "aiText"
}
```

### Return value

The return value is a `string` representing the value of the generated text.
```js
{
  value: string;
}
```

Example of value:

```js
{
  value: "Brizy is a user-friendly and intuitive website builder that allows you to create beautiful and professional websites without any coding knowledge."
}
```

### Usage

#### Devices examples

It will be rendered on all devices. This value can be omitted since it defaults to `"all"`.

```js
{
  id: "text",
  type: "aiText",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "text",
  type: "aiText",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "text",
  type: "aiText",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "text",
  type: "aiText",
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
      id: "text",
      type: "aiText",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Roles example

Show the control only to users with admin and editor privileges.

```js
{
  id: "text",
  type: "aiText",
  roles: ["admin", "editor"]
}
```

#### States example

Allows the control to work in normal and hover states.

```js
  {
    id: "text",
    type: "aiText",
    states: ["normal", "hover"]
  }
```

Allows the control to work in normal, hover and active states.

```js
  {
    id: "text",
    type: "aiText",
    states: ["normal", "hover", "active"]
  }
```

#### `selectedValue` example

The `selectedValue` key is used to provide context for the AI text generation.

```js
{
  id: "text",
  type: "aiText",
  selectedValue: "The quick brown fox jumps over the lazy dog."
}
```

#### Default value example
In this example, the `aiText` control has the value `"This is a text for AI for testing purposes"` and it will generate a new text based on this value.

```js
{
  id: "text", 
  type: "aiText",
  default: {
    value: "This is a text for AI for testing purposes"
  }
}
```

#### CSS example
Show or hide the `.brz-text` element based on the length of the text.

```js
{
  id: "text",
  type: "aiText",
  style: ({ value }) => ({ 
    "{{WRAPPER}} .brz-text": {
      display: value.value.length > 0 ? "block" : "none"
    }
  })
}
```

#### Usage in HTML example

In the example below, we use the `aiText` output value to render the generated text in UI.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  text: string
}

const GeneratedText = (props: Props): JSX.Element => {
  const { text } = props;
  
  return (
    <div className="brz-ai-text">
      <h3>Your text :</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: text ?? ""
        }}
      />
    </div>
  );
};

Brizy.registerComponent(GeneratedText, {
  id: "ThirdParty.GeneratedText",
  title: "Generated Text",
  options: (props) => {
    return [
      {
        selector: ".brz-ai-text",
        toolbar: [
          {
            id: "aiText",
            type: "popover",
            config: {
              icon: "t2-star-shapes",
              size: "auto",
              title: "AiText"
            },
            roles: ["admin"],
            position: 10,
            options: [
              {
                id: "text",
                type: "aiText"
              }
            ]
          }
        ]
      }
    ];
  }
});
```
