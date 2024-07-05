---
sidebar_position: 6
toc_max_heading_level: 4
---

# Examples

Brizy's control values can be used to render content in the HTML. These values enable you to dynamically display text, images, and other elements within your web pages

### InputText

Using the value entered in the `inputText` control, we can redirect the user based on the typed input.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  link: string;
}

export const Link = (props: Props): JSX.Element => {
  const { link } = props;

  return (
    <a className="brz-link" href={link}>
      Go to : {link}
    </a>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Link",
  component: { editor: Link, view: Link },
  title: "My Link",
  options: (props) => {
    return [
      {
        selector: ".brz-link",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-input",
              title: "Link",
            },
            devices: "desktop",
            options: [
              {
                id: "link",
                type: "inputText",
              },
            ],
          },
        ],
      },
    ];
  },
});
```

### Select

The `select` control value will be used to display a hello message in different languages based on the selected value.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  language: string;
}

const Translation = (props: Props): JSX.Element => {
  const { language } = props;

  let hello = "";

  switch (language) {
    case "en":
      hello = "Hello";
      break;
    case "de":
      hello = "Hallo";
      break;
    case "fr":
      hello = "Bonjour";
      break;
    case "es":
      hello = "Hola";
      break;
  }

  return (
    <div className="brz-translate">
      <h3>{hello}</h3>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Translation",
  component: { editor: Translation, view: Translation },
  title: "Translation",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-translate",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            options: [
              {
                id: "language",
                type: "select",
                choices: [
                  {
                    title: "English",
                    value: "en",
                  },
                  {
                    title: "German",
                    value: "de",
                  },
                  {
                    title: "French",
                    value: "fr",
                  },
                  {
                    title: "Spanish",
                    value: "es",
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  },
});
```

### RadioGroup

In the example below, we use the `radioGroup` output value to change the size of the button element.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  size: number;
}

const Button = (props: Props): JSX.Element => {
  const { size } = props;

  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <button style={style} className="brz-button">
      Click me
    </button>
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
              title: "Button",
            },
            options: [
              {
                id: "size",
                type: "radioGroup",
                choices: [
                  { value: 32, icon: "nc-32" },
                  { value: 48, icon: "nc-48" },
                  { value: 64, icon: "nc-64" },
                ],
              },
            ],
          },
        ],
      },
    ];
  },
});
```

### TextShadow

The following example demonstrates how to extract all possible values from the `textShadow` control and apply them to the text within a `p` element, thereby adding the shadow effect to the text.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  textShadowColorHex: string;
  textShadowBlur: number;
  textShadowHorizontal: number;
  textShadowVertical: number;
}

const Paragraph = (props: Props): JSX.Element => {
  const { textShadowColorHex, textShadowBlur, textShadowHorizontal, textShadowVertical } = props;
  const style = {
    textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur}px ${textShadowColorHex}`,
  };

  return (
    <p className="brz-paragraph" style={style}>
      text
    </p>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Paragraph",
  component: { editor: Paragraph, view: Paragraph },
  title: "Paragraph",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-paragraph",
        toolbar: [
          {
            id: "toolbarColor",
            type: "popover",
            config: {
              size: "medium",
              title: "Colors",
              icon: {
                style: {
                  backgroundColor: "#000000",
                },
              },
            },
            options: [
              {
                id: "tabsColor",
                type: "tabs",
                tabs: [
                  {
                    id: "textShadow",
                    type: "textShadow",
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  },
});
```

### Margin

In the example provided, the `margin` control values are used to dynamically apply inline styles to the `span` element within a wrapper with classname `"brz-button"`. These margin values can be specified in pixels (`"px"`) or percentages (`"%"`). The button component takes props for various margin types, including a grouped margin and individual margins for each side, allowing control over the spacing around the button's label.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

type Unit = "px" | "%";

interface Props {
  marginType: "grouped" | "ungrouped";
  margin: number;
  marginSuffix: Unit;
  marginTop: number;
  marginTopSuffix: Unit;
  marginRight: number;
  marginRightSuffix: Unit;
  marginBottom: number;
  marginBottomSuffix: Unit;
  marginLeft: number;
  marginLeftSuffix: Unit;
}

const Button = (props: Props): JSX.Element => {
  const {
    marginType,
    margin,
    marginSuffix,
    marginTop,
    marginTopSuffix,
    marginRight,
    marginRightSuffix,
    marginBottom,
    marginBottomSuffix,
    marginLeft,
    marginLeftSuffix,
  } = props;

  const groupedMargin = `${margin}${marginSuffix}`;
  const ungroupedMargin = `${marginTop}${marginTopSuffix} ${marginRight}${marginRightSuffix} ${marginBottom}${marginBottomSuffix} ${marginLeft}${marginLeftSuffix}`;

  return (
    <div className="brz-button">
      <span style={{ margin: marginType === "grouped" ? groupedMargin : ungroupedMargin }}>Click me</span>
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
            id: "toolbarSettings",
            type: "popover",
            config: {
              size: "medium",
              title: "Settings",
            },
            options: [
              {
                id: "margin",
                label: "Margin",
                type: "margin",
              },
            ],
          },
        ],
      },
    ];
  },
});
```

### Transform

In the example below, we use the `transform` output value for adding some effects like rotate and offset to add transform style in html element .

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  effectRotateRotate: number;
  effectOffsetOffsetX: number;
  effectOffsetOffsetY: number;
}

const Transform = (props: Props): JSX.Element => {
  const { effectRotateRotate, effectOffsetOffsetX, effectOffsetOffsetY } = props;

  const style = {
    width: "250px",
    height: "250px",
    transform: `rotate(${effectRotateRotate}deg) translate(${effectOffsetOffsetX}px, ${effectOffsetOffsetY}px)`,
  };

  return (
    <div className="brz-wrapper-transform">
      <div style={style}>Content</div>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Transform",
  component: { editor: Transform, view: Transform },
  title: "Transform",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-wrapper-transform",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            options: [
              {
                id: "effect",
                type: "transform",
              },
            ],
          },
        ],
      },
    ];
  },
});
```

### Border

In the example below, we use the `border` output values to add border style to html element.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX, ReactNode } from "react";

type WidthType = "grouped" | "ungrouped";

interface Props {
  borderColorHex: string;
  borderWidth: number;
  borderBottomWidth: number;
  borderLeftWidth: number;
  borderRightWidth: number;
  borderTopWidth: number;
  borderStyle: string;
  borderWidthType: WidthType;
  children: ReactNode;
}

const Wrapper = (props: Props): JSX.Element => {
  const {
    borderColorHex,
    borderWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderTopWidth,
    borderStyle,
    borderWidthType,
    children,
  } = props;

  const style = {
    border:
      borderWidthType === "grouped"
        ? `${borderWidth}px ${borderStyle} ${borderColorHex};`
        : `${borderTopWidth}px ${borderRightWidth}px ${borderBottomWidth}px ${borderLeftWidth}px ${borderStyle} ${borderColorHex}`,
  };

  return (
    <div style={style} className="brz-wrapper">
      {children}
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Wrapper",
  component: { editor: Wrapper, view: Wrapper },
  title: "My Wrapper",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-wrapper",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            options: [
              {
                id: "border",
                type: "border",
              },
            ],
          },
        ],
      },
    ];
  },
});
```

### Slider

In the example below, the`slider`control value is used to set the sizes of the component.The user can adjust the width
and height using a slider control, which allows them to specify the sizes in pixels or as a percentage

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  width: number;
  widthSuffix: string;
  height: number;
  heightSuffix: string;
}

const Component = (props: Props): JSX.Element => {
  const { width, widthSuffix, height, heightSuffix } = props;

  const style = {
    width: `${width}${widthSuffix}`,
    height: `${height}${heightSuffix}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  };

  return (
    <div className="brz-component" style={style}>
      <span>Component</span>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Component",
  component: { editor: Component, view: Component },
  title: "Component",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-component",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-cog",
              title: "Settings",
            },
            options: [
              {
                id: "width",
                type: "slider",
                config: {
                  units: [
                    { value: "px", unit: "px" },
                    { value: "%", unit: "%" },
                  ],
                },
              },
              {
                id: "height",
                type: "slider",
                config: {
                  units: [
                    { value: "px", unit: "px" },
                    { value: "%", unit: "%" },
                  ],
                },
              },
            ],
          },
        ],
      },
    ];
  },
});
```

### Range

In the example below, we use the Range output values ( `priceFrom` and `priceTo` ). The Range component will render a `range` input control with a minimum value of `priceFrom` and a maximum value of `priceTo`.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  priceFrom: number;
  priceTo: number;
}

const Price = (props: Props): JSX.Element => {
  const { priceFrom, priceTo } = props;

  return (
    <div>
      <h3>Filtering price range</h3>
      <span>From: {priceFrom}</span>
      <span>To: {priceTo}</span>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Price",
  component: { editor: Price, view: Price },
  title: "My Price",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-range",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-price",
              title: "Range",
            },
            devices: "desktop",
            options: [
              {
                id: "price",
                type: "range",
                devices: "desktop",
              },
            ],
          },
        ],
      },
    ];
  },
});
```

### AiText

In the example below, the value of the `aiText` control allows us to render the generated text in the HTML.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  text: string;
}

const GeneratedText = (props: Props): JSX.Element => {
  const { text } = props;

  return (
    <div className="brz-ai-text">
      <h3>Your generated text by AI :</h3>
      <span>{text}</span>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.GeneratedText",
  component: { editor: GeneratedText, view: GeneratedText },
  title: "Ai Text",
  category: "custom",
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
              title: "Ai Text",
            },
            options: [
              {
                id: "text",
                type: "aiText",
              },
            ],
          },
        ],
      },
    ];
  },
});
```
