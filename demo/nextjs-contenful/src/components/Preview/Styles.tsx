"use client";

import { useServerInsertedHTML } from "next/navigation";
import React, { Fragment, ReactElement, useRef } from "react";

export interface Props {
  styles: Array<ReactElement>;
}

export const Styles = ({ styles }: Props): ReactElement => {
  const isServerInserted = useRef(false);

  useServerInsertedHTML(() => {
    if (!isServerInserted.current) {
      isServerInserted.current = true;

      return styles.map((style, i) => <Fragment key={i}>{style}</Fragment>);
    }
  });

  return <></>;
};
