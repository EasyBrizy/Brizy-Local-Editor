### This script works only with partial popup

```html
<script>
  const popupId = 1; // id from DB

  (function (window, doc) {
    const popupUrl = `${apiURL}/${popupId}`; // API url to get popup data;

    function _appendScript({ doc, node, onLoad, pnError }) {
      const script = doc.createElement("script");

      for (let i = 0; i < node.attributes.length; i++) {
        const { name, value } = node.attributes[i];
        script[name] = value;
      }

      // if the script don't have a src, it means it's inline script
      if (!script.src) {
        script.innerHTML = node.innerHTML;

        // the inline script is already loaded
        onLoad();
      } else {
        // attach the onload and onerror event to the script
        script.onload = onLoad;
        script.onerror = onError;
      }

      doc.body.appendChild(script);
    }

    function _appendStyle({ doc, node, onLoad, onError }) {
      // if the node is a meta tag or a dns-prefetch tag, resolve the promise
      if (node instanceof HTMLMetaElement || node.rel === "dns-prefetch") {
        onLoad();
      } else {
        // attach the onload and onerror event to the node
        node.onload = () => onLoad();
        node.onerror = () => onError();
      }
      doc.head.appendChild(node);
    }

    function _overrideScripts({ doc, node }) {
      const docScript = document.createElement("script");
      docScript.innerHTML = node.innerHTML;

      for (let i = 0; i < node.attributes.length; i++) {
        const { name, value } = node.attributes[i];
        script[name] = value;
      }

      node.replaceWith(docScript);
    }

    (async () => {
      try {
        // API request returns object with html, styles and scripts
        const { html: _html, styles: _styles, scripts: _scripts } = await fetch(popupUrl, { method: "GET" }).json();

        const body = doc.querySelector("body");

        const parser = new DOMParser();
        const styles = JSON.parse(_styles);
        const scripts = JSON.parse(_scripts);

        // convert the html, styles & scripts string to a DOM node
        const popupDoc = parser.parseFromString(_html, "text/html");
        const stylesNodes = styles.map((style) => {
          const styleNode = parser.parseFromString(style, "text/html");
          return styleNode.head.childNodes[0];
        });
        const scriptsNodes = scripts.map((script) => {
          const scriptNode = parser.parseFromString(script, "text/html");
          return scriptNode.head.childNodes[0];
        });

        // append all styles to the head and resolve a promise when all styles are loaded
        const stylesPromises = stylesNodes.map((node) => {
          return new Promise((res, rej) => {
            _appendStyle({ node, doc: doc, onLoad: res, onError: rej });
          });
        });

        // wait for all styles to be loaded
        await Promise.all(stylesPromises);

        // append the popup to the body
        const popupHTML = popupDoc.body.childNodes[0];
        body.appendChild(popupHTML);

        // append embed scripts
        const embeds = popupHTML.querySelectorAll(".brz-embed-code script");
        [...embeds].map((node) => {
          _overrideScripts({ node, doc });
        });

        // append all scripts to the body and resolve a promise when all scripts are loaded
        const scriptsPromises = scriptsNodes.map((node) => {
          return new Promise((res, rej) => {
            _appendScript({
              node,
              doc: doc,
              onLoad: res,
              onError: rej,
            });
          });
        });

        // wait for all scripts to be loaded
        await Promise.all(scriptsPromises);

        // init the popup
        window.Brz.emit("init.dom", window.jQuery(popupHTML));
      } catch (e) {
        console.error("Error loading popup", e);
      }
    })();
  })(window, document);
</script>
```
