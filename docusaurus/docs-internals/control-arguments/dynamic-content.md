---
sidebar_position: 2
---
# Dynamic Content
Brizy's controls can dynamically receive data from various sources using content tags. This dynamic content helps us customize the control's output.
In Brizy Cloud and Brizy WordPress, dynamic content options cannot be directly customized. They will default to pre-defined options. However, in Brizy Local, you can configure these options using config.<br/>
Read more about [dynamic content???????](css.md)

<img  class="brz-img--border" src="/img/controls/controls-arguments-dc.png" /> <br/><br/>

## Population parameter and `getDCOption` getter
To specify that a control will be using dynamic content, you need to pass the `population` parameter with its value retrieved from `getDCOption`.

## Essential information for using dynamic content
The `population` parameter signifies that a control will utilize dynamic content. The available options for this content are retrieved by calling the `getDCOption` getter, specifying the desired group name.
<ul>
  <li>`population` - this parameter indicates that the control will use dynamic content.</li>

[//]: # (  TODO: fix the link)
  <li>Dynamic content groups <ul><li>`richText` - group using for texts</li><li>`link` - group using for URL's</li><li>`image` - group using for image URL's</li></ul>Read more about it [here???????](css.md) </li>
  <li>`getDCOption` - is a getter function that retrieves dynamic content options by group name (as described above)</li>
</ul>

[//]: # (## Types)

[//]: # (```ts)

[//]: # (type Groups = "richText" | "link" | "image";)

[//]: # ()
[//]: # (export interface Choice {)

[//]: # (  title: string;)

[//]: # (  value: string;)

[//]: # (  alias?: string;)

[//]: # (  attr: Record<string, string>;)

[//]: # (  icon?: string;)

[//]: # (  display?: "block" | "inline";)

[//]: # (})

[//]: # ()
[//]: # (export interface OptGroup {)

[//]: # (  title: string;)

[//]: # (  optgroup: &#40;Choice | OptGroup&#41;[];)

[//]: # (  icon?: string;)

[//]: # (})

[//]: # ()
[//]: # (export interface Choices {)

[//]: # (  show?: boolean;)

[//]: # (  iconOnly?: boolean;)

[//]: # (  choices: Array<Choice | OptGroup>;)

[//]: # (})

[//]: # ()
[//]: # (interface Handler {)

[//]: # (  show?: boolean;)

[//]: # (  iconOnly?: boolean;)

[//]: # (  handlerChoices: &#40;)

[//]: # (    resolve: &#40;r: string&#41; => void,)

[//]: # (    reject: &#40;r: string&#41; => void)

[//]: # (  &#41; => void;)

[//]: # (})

[//]: # ()
[//]: # (type DCOptionGetter = &#40;type: Groups&#41; => Handler | Choices | undefined;)

[//]: # (```)


## Examples
```js
{
  id: "title",
  type: "inputText",
  population: getDCOption("richText")
}
```
```js
{
  id: "link",
  type: "inputText",
  population: getDCOption("link")
}
```
```js
{
  id: "imageSrc",
  type: "imageUpload",
  population: getDCOption("image")
}
```
