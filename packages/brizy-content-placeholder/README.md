# Brizy content placeholders sdk

Let's assume we have an email template that must be sent for many users and this template must contain the username and some other dynamic info.

Email template:
```
Hi {{username}}
I wanted to personally welcome you to {{company-name}}
If you have any questions, you can always email us to {{our-email}}

Best Regards.
```

As you can see the template above contains three placeholders *username*, *company-name* and *our-email*.

This can easily achieved by replacing the strings with str_replace but what if you have 100  placeholders and some of them must get info from resources like a DB or an API.


### Architecture

Few words about the classes you will work with

#### Registry Class
A class that manage the palceholders. You can register or obtain placeholders. See the examples blow.

#### Placeholder Interface
All placeholders must implement this interface.

The `getValue` method must return the string that will replace the placeholder. This method receive a context and the content placeholder object (An object that contain all the info  about the placeholder found in the original content)

The `support` method must return true if the class can handle the placeholder.

#### Context Interface
There are cases when the placeholder will need some specific info like the current page or current request, session, etc..  all these objects must be passed in a context object.

#### Replacer Class
The class has only one method: replacePlaceholders. Self explanatory :).

---
### Get Started
First you must create your own design of placeholder. You can extend the `AbstractPlaceholder`

```typescript
import { AbstractPlaceholder } from "@brizy/content-placeholder"
import type { Attr } from "@brizy/content-placeholder"

export class Placeholder extends AbstractPlaceholder {
  protected label: string 
  protected placeholder: string
  protected value: string
  protected attributes: Attr | undefined
  constructor(label: string, placeholder: string, value: string, attrs?: Attr) {
    super()
    this.label = label
    this.placeholder = placeholder
    this.value = value
    if (attrs) {
      this.setAttributes(attrs)
    }
  }

  public setAttributes(attrs: Attr) {
    this.attributes = attrs
  }

  public getAttributes(): Attr | undefined {
    return this.attributes
  }

  public getLabel(): string {
    return this.label
  }

  public setLabel(label: string) {
    this.label = label
  }

  public setPlaceholder(placeholder: string) {
    this.placeholder = placeholder
  }

  public getPlaceholder(): string {
    return this.placeholder
  }

  public support(placeholderName: string): boolean {
    return placeholderName === this.placeholder
  }

  public getValue(): string {
    return this.value
  }

  public getConfigStructure() {
    return {
      id: this.getUid(),
      label: this.getLabel(),
      name: this.getPlaceholder(),
      placeholder: this.buildPlaceholder(),
      attr: this.getAttributes(),
      varyAttr: this.getVaryAttributes(),
    }
  }
}

```

### Register you placeholder

```typescript
import { Registry } from "@brizy/content-placeholder"
// Initialize a register of placeholder
const registry = new Registry();

// Create placeholders:
const titlePlaceholder = new Placeholder("label", "title","HomePage");
//...

// Add created placeholder to the registry
registry.registerPlaceholder(titlePlaceholder);
```

### Replace placeholder with their value

```ts
import { EmptyContext, Replacer } from "@brizy/content-placeholder"

//Initialize replacer with the registry of placeholders
const replacer = new Replacer(registry);

// and then you can use this to replace placeholdes with your values

const htmlWithPlaceholders = `
<div>
    <h1>{{title}}</h1>
    <article>
        //... rest of page
    </article>
</div>
`;

const finalHTML = replacer.replacePlaceholders(htmlWithPlaceholders, new EmptyContext());

// and the final HTML will be
console.log(finalHTML); // return the html with replaced values.
```

And the finalHTML value is :
```html
<div>
    <h1>HomePage</h1>
    <article>
    //... rest of page
    </article>
</div>
```

