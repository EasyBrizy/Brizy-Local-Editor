When using the builder, certain strings in the HTML output may appear in the following format:
`{{ placeholder content='Base64(SOME EXTERNAL PLACEHOLDER)' }}`

This structure occurs because the builder wraps all external placeholders within its own placeholder syntax.
These placeholders are encoded in Base64 for processing and are designed to represent dynamic content.


## Replacing Placeholders
To replace the content of builder placeholders with their actual values, you can use the [Brizy-Content-Placeholder](https://www.npmjs.com/package/@brizy/content-placeholder) library.
This library is specifically designed to decode and replace such placeholders dynamically, ensuring that the final rendered HTML displays the intended content seamlessly.

Example usage:

```ts
import {
  ContentPlaceholder,
  ContextInterface,
  Extractor,
  Registry,
  Replacer,
  EmptyContext
} from "@brizy/content-placeholder";

export class BuilderPlaceholder extends ContentPlaceholder {
  constructor() {
    super("Builder Placeholder", "placeholder");
  }

  support(placeholderName: string): boolean {
    return placeholderName === this.placeholder;
  }

  async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { content, ...attrs } = placeholder.getAttributes() ?? {
      content: "",
    };

    if (!content)
    {
      return "";
    }

    const decodedContent = atob(content);
    const extractor = new Extractor();

    const [contentPlaceholders] = extractor.extractIgnoringRegistry(decodedContent);

    if (contentPlaceholders.length === 0) {
      return "";
    }

    const contentPlaceholder = contentPlaceholders[0];
    const placeholderAttrs = contentPlaceholder.getAttributes();

    contentPlaceholder.setAttributes({
      ...placeholderAttrs,
      ...attrs,
    });

    return contentPlaceholder.buildPlaceholder();
  }

  getConfigStructure(): any {
    return {
      id: this.getUid(),
      label: this.getLabel(),
      name: this.getPlaceholder(),
      placeholder: this.buildPlaceholder(),
      attr: this.getAttributes(),
      varyAttr: this.getVaryAttributes(),
    };
  }

  getFallbackValue(context: ContextInterface, placeholder: ContentPlaceholder): string {
    return "";
  }

  getLabel(): string {
    return "";
  }

  getVaryAttributes(): string {
    return "";
  }

  setLabel(label: string): void {}

  shouldFallbackValue(value: string, context: ContextInterface, placeholder: ContentPlaceholder): boolean {
    return false;
  }
}

export const replacePlaceholders =  async (html:string): Promise<string> => {
  const context = new EmptyContext();

  const registry = new Registry();
  const builderInstance = new BuilderPlaceholder();
  registry.registerPlaceholder(builderInstance);

  const replacer = new Replacer(registry);

  return await replacer.replacePlaceholders(html, context);
};
```

This code snippet demonstrates how to use the `Brizy-Content-Placeholder` library to replace builder placeholders in HTML content.
The `replacePlaceholders` function decodes and replaces the placeholders dynamically, ensuring that the final HTML output displays the intended content.

For example, given the following HTML content with builder placeholders:
```html
<div>
  <p>Hi {{placeholder content='e3t1c2VybmFtZX19'}}</p>
  <p>I wanted to personally welcome you to {{placeholder content="e3tjb21wYW55LW5hbWV9fQ=="}}</p>
  <p>If you have any questions, you can always email us to {{placeholder content="e3tvdXItZW1haWx9fQ=="}}</p>
  <span>Best Regards.</span>
</div>
```
The `replacePlaceholders` function will replace the placeholders with their actual values, resulting in the following output:
```html
<div>
  <p>Hi {{username}}</p>
  <p>I wanted to personally welcome you to {{company-name}}</p>
  <p>If you have any questions, you can always email us to {{our-email}}</p>
  <span>Best Regards.</span>
</div>
```


## Usage
### Menu Placeholders
The HTML output(after extracting the original placeholders from builder placeholder) containing a menu will typically have the following structure:

```html
<div class="brz-menu__container brz-css-u3hlv brz-css-s84yA"
     data-mmenu-id="#tczwcqemluqcvcmoetccxkqggtvunlepzbmg_edd84ee2-e62e-460e-8975-55b20e61f8e3"
     data-mmenu-position="position-left" data-mmenu-title="Main Menu" data-mmenu-stickytitle="on"
     data-mmenu-closingicon="%7B%22desktop%22%3A%22off%22%2C%22tablet%22%3A%22off%22%2C%22mobile%22%3A%22off%22%7D"
     data-brz-custom-id="tczwcqemluqcvcmoetccxkqggtvunlepzbmg">{{group}}
  <nav
    data-mods="%7B%22desktop%22%3A%22horizontal%22%2C%22tablet%22%3A%22horizontal%22%2C%22mobile%22%3A%22horizontal%22%7D"
    class="brz-menu brz-menu__preview brz-css-p0BBO brz-css-fUTFM">{{menu_item_icon_value
    itemId="30385160-5ec3-44fd-85dc-251ccad495fb"}}
    <svg class="brz-icon-svg align-[initial]">
      <use href="/api/icons/fa/js-square.svg#fa_icon"></use>
    </svg>
    {{end_menu_item_icon_value}}{{mega_menu_value itemId="30385160-5ec3-44fd-85dc-251ccad495fb"}}
    <div class="brz brz-mega-menu__portal brz-css-gVQUy"
      <div id="dbEHiVkLEsaR" class="brz-mega-menu brz-css-jjT22 brz-css-xuxve" data-uid="dbEHiVkLEsaR"
           data-brz-custom-id="dbEHiVkLEsaR">
        <div class="brz-bg">
          <div class="brz-bg-color"></div>
        </div>
        <div class="brz-container brz-css-eCTFz">
          <div id="" class="brz-css-ovyIa brz-wrapper">
            <div class="brz-rich-text brz-rich-text__custom brz-css-sAXgx" data-brz-custom-id="ui92ZMsjw4kT">
              <div data-brz-translate-text="1"><p class="brz-tp-lg-paragraph brz-css-c4H8t" data-uniq-id="wLz_q" data-generated-css="brz-css-lcImH">
                <span>The point of using dummy text for your paragraph is that it has a more-or-less normal distribution of letters. making it look like readable English.</span>
              </p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {{end_mega_menu_value}}
    <ul class="brz-menu__ul">{{menu_loop menuId="myMenuId"}}
      <li data-menu-item-id="{{menu_item_uid}}" class="brz-menu__item {{menu_item_classname}} brz-menu__item-dropdown">
        <a class="brz-a" target="{{menu_item_target}}" href="{{menu_item_href}}" title="{{menu_item_attr_title}}">{{menu_item_icon}}<span
          class="brz-span">{{menu_item_title}}</span></a>{{mega_menu}}{{menu_loop_submenu}}
        <ul class="brz-menu__sub-menu"
            style="--offset: 5px; position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 68px);"
            data-popper-placement="bottom-start">{{menu_loop recursive="1"}}{{end_menu_loop}}
        </ul>
        {{end_menu_loop_submenu}}
      </li>
      {{end_menu_loop}}
    </ul>
  </nav>
  {{end_group}}
</div>
```

Below is a detailed explanation of each placeholder used in the menu HTML structure:

**Group Placeholders**

- **`{{group}}`**
  - Indicates the start of a menu group.
  - A menu group contains a collection of menu items that are related or grouped together for a specific purpose.

- **`{{end_group}}`**
  - Marks the end of the current menu group.
  - Everything between `{{group}}` and `{{end_group}}` is considered part of the group.

---

**Menu Loop Placeholders**

- **`{{menu_loop menuId="myMenuId"}}`**
  - Starts iterating over the menu items for the menu identified by `menuId`.
  - Example: If `menuId="mainMenu"`, this loop processes all items in the "mainMenu."
  - The optional attribute `recursive="1"` can be included to iterate through submenus.

- **`{{end_menu_loop}}`**
  - Marks the end of the iteration through the menu items.

- **`{{menu_loop_submenu}}`**
  - Starts iterating over the submenu items of the current menu item.
  - Submenus are nested menus under a primary menu item.

- **`{{end_menu_loop_submenu}}`**
  - Marks the end of the submenu iteration.

---

**Menu Item-Specific Placeholders**

- **`{{menu_item_classname}}`**
  - Contains the class name of the current menu item.
  - Used to style or customize the menu item's appearance.

- **`{{menu_item_uid}}`**
  - A unique identifier (UID) for the current menu item.
  - Example: `menu_item_uid="30385160-5ec3-44fd-85dc-251ccad495fb"`.
  - Useful for uniquely identifying and referencing each item.

- **`{{menu_item_href}}`**
  - The hyperlink (URL) for the current menu item.
  - Example: `<a href="{{menu_item_href}}">` generates `<a href="https://example.com">`.

- **`{{menu_item_target}}`**
  - The target attribute of the menu item's link.
  - Controls how the link opens. Common values:
    - `_self` (default): Opens in the same tab.
    - `_blank`: Opens in a new tab.

- **`{{menu_item_title}}`**
  - The title or text label of the menu item.
  - Example: `{{menu_item_title}}` renders the name displayed on the menu.

- **`{{menu_item_icon}}`**
  - Specifies the icon for the current menu item.
  - Example: `<span>{{menu_item_icon}}</span>` could render an icon like a folder or a home symbol.

---

**Mega Menu Placeholders**

- **`{{mega_menu}}`**
  - Contains the content for the mega menu.
  - A mega menu is a larger dropdown-style menu that displays additional information or links.

- **`{{mega_menu_value itemId="someItemId"}}`**
  - Starts defining the content for a specific mega menu item, identified by its `itemId`.
  - Example: `itemId="30385160-5ec3-44fd-85dc-251ccad495fb"` is used to specify the item content.

- **`{{end_mega_menu_value}}`**
  - Marks the end of the content for the specified mega menu.

---

**Menu Item Icon Placeholders**

- **`{{menu_item_icon_value itemId="someItemId"}}`**
  - Defines the icon for a specific menu item, identified by its `itemId`.
  - Example: If `itemId="12345"`, the icon displayed is linked to this ID.

- **`{{end_menu_item_icon_value}}`**
  - Marks the end of the definition for the specified menu item icon.


For replacing the placeholders in the menu HTML structure, you can follow these examples :
https://github.com/EasyBrizy/builder/tree/main/packages/brizy-content-placeholder/src/examples/menu 
https://github.com/EasyBrizy/builder/blob/main/packages/brizy-content-placeholder/src/tests/replacer.test.ts#L110
