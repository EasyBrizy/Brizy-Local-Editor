---
sidebar_position: 2
toc_max_heading_level: 4
---

# Defaults
Defaults are the initial values assigned to a control to ensure it functions as expected.


### Examples
-------------------------
#### Number

```js
{
  id: "rows",
  type: "number",
  default: {
    value: 33
  }
}
```
#### Color Picker

```js
{
  id: "color",
  type: "colorPicker",
  default: {
    hex: "#d02213",
    opacity: 1,
    palette: ""
  }
}
```

#### Background Color

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  default: {
    gradientActivePointer: "start",
    gradientEndPointer: 100,
    gradientColorHex: "#009900",
    gradientColorOpacity: 1,
    gradientColorPalette: "",
    gradientType: "linear",
    bgColorHex: "#c02121",
    gradientLinearDegree: 90,
    bgColorOpacity: 1,
    bgColorPalette: "",
    gradientRadialDegree: 90,
    gradientStartPointer: 0,
    bgColorType: "solid"
  }
}
```

All defaults can be found on the page of each control.
