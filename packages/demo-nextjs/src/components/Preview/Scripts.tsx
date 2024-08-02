import { Scripts as ScriptsAsset } from "@builder/core/build/es/utils/assetManager/types";
import React, { ReactElement } from "react";

export interface Props {
  scripts: Array<ScriptsAsset>;
}

export const Scripts = (props: Props): Array<ReactElement> => {
  const { scripts } = props;
  return scripts.map((script) => {
    const { attr = {} } = script;
    const { class: _class, ..._attr } = attr;
    const className = _class ? `${_class}` : undefined;

    if (script.html) {
      return <script {..._attr} className={className} dangerouslySetInnerHTML={{ __html: script.html }} />;
    }

    return <script {..._attr} className={className} />;
  });
};
