"use client";

import { Styles as StylesAsset } from "@builder/core/build/es/utils/assetManager/types";
import { useServerInsertedHTML } from "next/navigation";
import React, { ReactElement, useRef } from "react";

export interface Props {
  styles: Array<StylesAsset>;
}

export const Styles = (props: Props): ReactElement => {
  const { styles } = props;
  const isServerInserted = useRef(false);

  useServerInsertedHTML(() => {
    if (!isServerInserted.current) {
      isServerInserted.current = true;

      return (
        <>
          {styles.map((style, i) => {
            const { attr } = style;
            const { class: _class, ..._attr } = attr;
            const className = _class ? `${_class}` : undefined;

            if (style.type === "style") {
              return (
                <style key={i} {..._attr} className={className} dangerouslySetInnerHTML={{ __html: style.html }} />
              );
            }

            return <link key={i} {..._attr} className={className} />;
          })}
        </>
      );
    }
  });

  return <></>;
};
