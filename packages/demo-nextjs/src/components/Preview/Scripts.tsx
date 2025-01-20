import React, { Fragment, ReactElement } from "react";

export interface Props {
  scripts: Array<ReactElement>;
}

export const Scripts = ({ scripts }: Props): ReactElement => (
  <>
    {scripts.map((script, i) => (
      <Fragment key={i}>{script}</Fragment>
    ))}
  </>
);
