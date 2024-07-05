"use client";

import { useServerInsertedHTML } from "next/navigation";
import React, { ReactElement } from "react";

export interface Props {
  styles: Array<string>;
}

export const Styles = (props: Props): ReactElement => {
  useServerInsertedHTML(() => {
    return <style />;
  });

  return <></>;
};
