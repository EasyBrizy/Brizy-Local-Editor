---
sidebar_position: 4
---
# Theming

The theming options for the page editor builder provide a seamless way to create a visually consistent and unique website design. The editor allows you to craft a custom color palette, enabling precise adjustments to backgrounds, text, buttons, and other design elements. <br/>

Our available color palette includes the following variables:
- Primary Dark
- Secondary Dark
- Tertiary Dark
- Primary White
- Secondary White
- Tertiary White
- Primary Gray
- Secondary Gray
- Tertiary Gray
- Light Gray
- Active Color

<br/>
To set these variables, you need to specify them in the Brizy config under `config.ui.theme.colors` key.

## Example

```ts
const config = {
  // ...other keys
  ui: {
    theme: {
      colors: {
        "--primary-dark": "#cc336f",
        "--secondary-dark": "#732bc9",
        "--tertiary-dark": "#1b2f6b",
        "--primary-white": "#659d82",
        "--secondary-white": "#96bfc8",
        "--tertiary-white": "#1cb3c5",
        "--primary-gray": "#db16e7",
        "--secondary-gray": "#e1258b",
        "--tertiary-gray": "#f8ff89",
        "--light-gray": "#160ea9",
        "--active-color": "#de2fb8"
      }
    }
  }
};
```
