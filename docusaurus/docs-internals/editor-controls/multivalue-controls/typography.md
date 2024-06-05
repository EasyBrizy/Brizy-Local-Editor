---
toc_max_heading_level: 4
---
# Typography

The `typography` control provides a comprehensive set of features for manipulating text on a web page. It supports loading fonts from Google Fonts or custom sources, altering CSS properties related to text appearance (such as strikethrough, bold, italic, underline, uppercase, and lowercase), and selecting or adding fonts from global styles. Additionally, it allows for adjusting text size, weight, line height, and letter spacing.

Example of the control:

![Typography](/img/multivalue-controls/typography.png)

### Parameters

| Name                    | Type                                     |         Default          | Description                                                                                                                                                                                                                                                                         |
|:------------------------|:-----------------------------------------|:------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                    | `string`                                 |            -             | The identifier of the key where the typography will save your data                                                                                                                                                                                                                  |
| `type`                  | `string`                                 |            -             | Type should be `"typography"` to use this control                                                                                                                                                                                                                                   |
| `position?`             | `number`                                 |            -             | The position of the control in toolbar                                                                                                                                                                                                                                              |
| `devices?`              | `"all"` \| `"desktop"` \| `"responsive"` |         `"all"`          | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                    |
| `disabled?`             | `boolean`                                |         `false`          | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                              |
| `config?.fontFamily`    | `boolean`                                |          `true`          | Determines whether the font family can be selected                                                                                                                                                                                                                                  |
| `config?.fontSize`      | `Boundaries`                             |    `min: 0 max: 300`     | Sets the minimum and maximum boundaries for font size <br/><br/> <b>`Boundaries: { min: number; max: number }`</b>                                                                                                                                                                  |
| `config?.lineHeight`    | `Boundaries`                             |     `min: 1 max: 20`     | Sets the minimum and maximum boundaries for line height <br/><br/> <b>`Boundaries: { min: number; max: number }`</b>                                                                                                                                                                |
| `config?.letterSpacing` | `Boundaries`                             |    `min: -20 max: 20`    | Sets the minimum and maximum boundaries for letter spacing <br/><br/> <b>`Boundaries: { min: number; max: number }`</b>                                                                                                                                                             |
| `config?.scriptChoices` | `TextScripts[]`                          |            -             | Determines whether the text can be formatted as subscript or superscript <br/><br/> <b>`TextScripts = "sub" \| "super"`</b>                                                                                                                                                         |

### Return value

Return an object with the following values:

```js
{
  bold: boolean;
  fontFamily: string;
  fontFamilyType: "google" | "upload" | "system";
  fontSize: number;
  fontSizeSuffix: "px" | "em" | "rem" | "vw";
  fontSoftness: number;
  fontStyle: string;
  fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  fontWidth: number;
  italic: boolean;
  letterSpacing: number;
  lineHeight: number;
  lowercase: boolean;
  script: undefined | "super" | "sub";
  strike: false;
  underline: false;
  uppercase: false;
  variableFontWeight: number;
}
```

`bold` - indicates whether the text is bold; <br/>
`fontFamily` - the selected font family; <br/>
`fontFamilyType` - the type of font family used (Google Fonts, uploaded custom font, or system font); <br/>
`fontSize` - the size of the font; <br/>
`fontSizeSuffix` - the unit suffix for the font size; <br/>
`fontSoftness` - represents the softness of the font, typically affecting the visual smoothness; <br/>
`fontStyle` - indicates which global typography style is used; <br/>
`fontWeight` - the weight of the font, ranging from thin (100) to extra bold (900); <br/>
`fontWidth` - the width of the font; <br/>
`italic` - indicates whether the text is italic; <br/>
`letterSpacing` - the spacing between letters; <br/>
`lineHeight` - the height of the line; <br/>
`lowercase` - indicates whether the text is lowercase; <br/>
`script` - indicates whether the text is in superscript or subscript format; <br/>
`strike` - indicates whether the text has a strikethrough; <br/>
`underline` - indicates whether the text is underlined; <br/>
`uppercase` - indicates whether the text is uppercase; <br/>
`variableFontWeight` - the weight of the variable font, allowing for more precise adjustments; <br/>

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "typography", 
  type: "typography"
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "typography", 
  type: "typography",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "typography", 
  type: "typography",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "typography", 
  type: "typography",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "typography", 
  type: "typography", 
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
      id: "typography",
      type: "typography",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Config `fontFamily` example

Determines whether the font family can be selected.

```js
{
  id: "typography", 
  type: "typography",
  config: {
    fontFamily: false
  }
}
```

#### Config `fontSize` examples

Rewrite the default minimum boundary for font size.  If the user inputs a value lower than this, it will be automatically corrected to this minimum value.

```js
{
  id: "typography", 
  type: "typography",
  config: {
    fontSize: {
      min: 8
    }
  }
}
```

Rewrite the default maximum boundary for font size.  If the user inputs a value higher than this, it will be automatically corrected to this maximum value.

```js
{
  id: "typography", 
  type: "typography",
  config: {
    fontSize: {
      max: 100
    }
  }
}
```

Rewrite both the default minimum and maximum boundaries for font size.

```js
{
  id: "typography", 
  type: "typography",
  config: {
    fontSize: {
      min: 8,
      max: 100
    }
  }
}
```

#### Config `lineHeight` examples

Rewrite the default minimum boundary for line height. If the user inputs a value lower than this, it will be automatically corrected to this minimum value.

```js
{
  id: "typography", 
  type: "typography",
  config: {
    lineHeight: {
      min: 0
    }
  }
}
```

Rewrite the default maximum boundary for line height. If the user inputs a value higher than this, it will be automatically corrected to this maximum value.

```js
{
  id: "typography", 
  type: "typography",
  config: {
    lineHeight: {
      max: 10
    }
  }
}
```

Rewrite both the default minimum and maximum boundaries for line height.

```js
{
  id: "typography", 
  type: "typography",
  config: {
    lineHeight: {
      min: 0,
      max: 10
    }
  }
}
```

#### Config `letterSpacing` examples

Rewrite the default minimum boundary for letter spacing. If the user inputs a value lower than this, it will be automatically corrected to this minimum value.

```js
{
  id: "typography", 
  type: "typography",
  config: {
    letterSpacing: {
      min: 0
    }
  }
}
```

Rewrite the default maximum boundary for letter spacing. If the user inputs a value higher than this, it will be automatically corrected to this maximum value.

```js
{
  id: "typography", 
  type: "typography",
  config: {
    letterSpacing: {
      max: 10
    }
  }
}
```

Rewrite both the default minimum and maximum boundaries for line height.

```js
{
  id: "typography", 
  type: "typography",
  config: {
    letterSpacing: {
      min: 0,
      max: 10
    }
  }
}
```

#### Config `scriptChoices` examples

Determines whether the text can be formatted as subscript.

```js
{
  id: "typography", 
  type: "typography",
  config: {
    scriptChoices: ["sub"]
  }
}
```

Determines whether the text can be formatted as subscript or superscript.

```js
{
  id: "typography", 
  type: "typography",
  config: {
    scriptChoices: ["sub", "super"]
  }
}
```
