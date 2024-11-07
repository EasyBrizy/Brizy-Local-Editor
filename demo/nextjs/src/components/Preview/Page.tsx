import React from "react";
import { Scripts } from "./Scripts";
import { Styles } from "./Styles";

interface Props {
  html: any;
  scripts: any;
  styles: any;
}

export function Page({ html, scripts, styles }: Props) {
  return (
    <div>
      <Styles styles={styles} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      {scripts && <Scripts scripts={scripts} />}
    </div>
  );
}
