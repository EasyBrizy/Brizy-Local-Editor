import { AssetContent, AssetType } from "@brizy/merge-page-assets";
import { DomUtils, parseDocument } from "htmlparser2";

export const makeStyle = (data: AssetContent) => {
  const { type } = data;
  switch (type) {
    case AssetType.Inline: {
      const { content, attr } = data;
      const { class: _class, ..._attr } = attr ?? {};
      const className = _class ? `${_class}` : undefined;

      return <style {..._attr} className={className} dangerouslySetInnerHTML={{ __html: content }} />;
    }
    case AssetType.File: {
      const { url, attr } = data;
      const { class: _class, ..._attr } = attr ?? {};
      const className = _class ? `${_class}` : undefined;

      return <link {..._attr} href={url} className={className} />;
    }
    case AssetType.Code: {
      const { content } = data;
      const doc = parseDocument(content);

      const styleElements = DomUtils.findAll((elem) => elem.name === "style", doc.children);
      const linkElements = DomUtils.findAll((elem) => elem.name === "link", doc.children);

      const styleComponents = styleElements.map((styleElem, index) => {
        const { attribs } = styleElem;
        const { class: _class, ..._attr } = attribs;
        const className = _class ? `${_class}` : undefined;

        return (
          <style key={`style-${index}`} {..._attr} className={className}>
            {DomUtils.textContent(styleElem)}
          </style>
        );
      });

      const linkComponents = linkElements.map((linkElem, index) => {
        const { attribs } = linkElem;
        const { class: _class, ..._attr } = attribs;
        const className = _class ? `${_class}` : undefined;

        return <link key={`link-${index}`} {..._attr} className={className} />;
      });

      return (
        <>
          {styleComponents}
          {linkComponents}
        </>
      );
    }
  }
};

export const makeScript = (data: AssetContent) => {
  const { type } = data;
  switch (type) {
    case AssetType.Inline: {
      const { content, attr } = data;
      const { class: _class, ..._attr } = attr ?? {};
      const className = _class ? `${_class}` : undefined;

      return <script {..._attr} className={className} dangerouslySetInnerHTML={{ __html: content }} />;
    }
    case AssetType.File: {
      const { url, attr } = data;
      const { class: _class, ..._attr } = attr ?? {};
      const className = _class ? `${_class}` : undefined;

      // eslint-disable-next-line @next/next/no-sync-scripts
      return <script {..._attr} src={url} className={className} />;
    }
    case AssetType.Code: {
      const { content } = data;

      const doc = parseDocument(content);

      const scriptElements = DomUtils.findAll((elem) => elem.name === "script", doc.children);

      const scriptComponents = scriptElements.map((scriptElem, index) => {
        const { attribs } = scriptElem;
        const innerHTML = DomUtils.textContent(scriptElem);

        if ("src" in attribs) {
          return <script key={`script-${index}`} {...attribs} />;
        }

        return (
          <script key={`script-${index}`} {...attribs}>
            {innerHTML}
          </script>
        );
      });

      return <>{scriptComponents}</>;
    }
  }
};
