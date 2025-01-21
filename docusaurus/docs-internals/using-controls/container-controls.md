---
sidebar_position: 4
toc_max_heading_level: 4
---

# Container Controls

### Control definition
Container controls are structural elements designed to group and manage multiple regular controls within a Brizy toolbar UI. Unlike regular controls, container controls do not directly gather user input but serve as a parent element, ensuring consistent layout and behavior for their child controls.


### Controls
- [Grid](/docs-internals/editor-controls/containers/grid)
- [Group](/docs-internals/editor-controls/containers/group)
- [Popover](/docs-internals/editor-controls/containers/popover)
- [Sidebar Tabs](/docs-internals/editor-controls/containers/sidebarTabs)
- [Tabs](/docs-internals/editor-controls/containers/tabs)

### Examples
---

#### Group
In this example, we implemented the `group` control with two other options

```js
{
  id: "groupCloseButton",
  type: "group",
  devices: "desktop",
  options: [
    {
      id: "closeButtonState",
      type: "switch",
      label: "Display Close Button"
    },
    {
      id: "delay",
      label: "Delay",
      type: "slider",
      config: {
        min: 0,
        max: 10,
        units: [{ title: "s", value: "s" }]
      }
    }
  ]
}
```

#### Popover
The following example defines a `popover` with its controls

```js
{
  id: "buttonPopover",
  type: "popover",
  config: {
    icon: "nc-button",
    title: "Button"
  },
  options: [
    {
      id: "buttonTabs",
      type: "tabs",
      tabs: [
        {
          id: "buttonTab1",
          label: "Button",
          options: [
            {
              id: "fillType",
              label: "Fill",
              type: "radioGroup",
              choices: [
                { value: "filled", icon: "nc-circle" },
                { value: "outline", icon: "nc-outline" },
                { value: "default", icon: "nc-close" }
              ]
            },
            {
              id: "borderRadiusTypeGroup",
              type: "group",
              options: [
                {
                  id: "borderRadiusType",
                  label: "Corner",
                  type: "radioGroup",
                  choices: [
                    { value: "square", icon: "nc-corners-square" },
                    { value: "rounded", icon: "nc-corners-round" },
                    { value: "custom", icon: "nc-more" }
                  ]
                },
                {
                  id: "borderRadius",
                  type: "slider",
                  config: {
                    min: 0,
                    max: 100,
                    units: [{ title: "px", value: "px" }]
                  }
                }
              ]
            }
          ]
        }
        {
          id: "buttonTab2",
          label: "Icon",
          options: []
        }
      ]
    }
  ];
}
```

#### Tabs
The following example demonstrates a tabs control with two tabs: "Options" and "Settings". The "Options" tab contains three additional controls: three switches (Muted, Autoplay, Lazy Load). Similarly, the "Settings" tab includes two sliders (Width, Height).

```js
{
  id: "tabsAudioControls",
  type: "tabs",
  tabs: [
    {
      id: "tabOptions",
      label: "Options",
      options: [
        {
          id: "mute",
          type: "switch",
          label: "Muted"
        },
        {
          id: "autoplay",
          type: "switch",
          label: "Autoplay",
        },
        {
          id: "lazyLoad",
          type: "switch",
          label: "Lazy load"
        }
      ]
    },
    {
      id: "tabSettings",
      label: "Settings",
      options: [
        {
          id: "width",
          type: "slider",
          label: "Width",
          config: {
            units: [
              { title: "px", value: "px" },
              { title: "%", value: "%" }
            ]
          }
        },
        {
          id: "height",
          type: "slider",
          label: "Height",
          config: {
            units: [
              { title: "px", value: "px" },
              { title: "%", value: "%" }
            ]
          }
        }
      ]
    }
  ]
}
```
