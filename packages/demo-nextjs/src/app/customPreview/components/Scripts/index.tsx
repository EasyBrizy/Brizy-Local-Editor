import React, { ReactElement } from "react";

export interface Props {
  scripts: Array<string>;
}

export const Scripts = (props: Props): ReactElement => {
  const scriptsStr = props.scripts.join("");
  return <div dangerouslySetInnerHTML={{ __html: scriptsStr }} />;
};
