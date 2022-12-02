## Usage

Find out how to initialise the Editor from Brizy's CDN infrastructure from the video below:  

[![](https://i.imgur.com/wrO4h6S.png)](https://youtu.be/K632pHZ66RM)
 
```shell
# Builder Container
<div id="editor" style="height: 85vh; width: 100vw"></div>

# Update button
<button id="update">Update</button>

# Story CDN version: <script src="https://cdn.brizylocal.com/story/2.0.0/index.js"></script>
# Popup CDN version: <script src="https://cdn.brizylocal.com/popup/2.0.0/index.js"></script>
# Pages CDN version: <script src="https://cdn.brizylocal.com/pages/2.0.0/index.js"></script>
<script src="https://cdn.brizylocal.com/pages/2.0.0/index.js"></script>

<script>
  # Story Config Example: https://github.com/EasyBrizy/Brizy-Local/blob/story/packages/demo/public/index.html
  # Popup Config Example: https://github.com/EasyBrizy/Brizy-Local/blob/popup/packages/demo/public/index.html
  # Pages Config Example: https://github.com/EasyBrizy/Brizy-Local/blob/pages/packages/demo/public/index.html
  const config = {...};
  const editor = document.querySelector("#editor");
  const update = document.querySelector("#update");

  const Builder = window.Builder;
  let builderAPI;

  Builder.init(editor, config, (api) => {
    builderAPI = api;
  });

  update.addEventListener("click", () => {
    builderAPI.save();
  });
</script>

```

## Config

Config can be passed object when you initialize builder from script.

| Name        | Description                                   |         |
|:------------|:----------------------------------------------|---------|
| pageData    | (object) page JSON data structure of elements |         |
| projectData | (object) project JSON data Global Styles, Global Fonts |   |
| getMedia    | (string) where to GET image by UID           |          |
| setMedia    | (string) where to POST image               |            |
| setLeads    | (string) where to send forms leads         |            |

### Config Events

Config can be passed object when you initialize builder from script.

| Name          | Description                                | Returned values          |
|:--------------|:-------------------------------------------|:------------|
| onSave        | Fired when the Save button is clicked  |   JSON and HTML documents          |

See more details in TS [see below](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/core/src/types/types.ts)
