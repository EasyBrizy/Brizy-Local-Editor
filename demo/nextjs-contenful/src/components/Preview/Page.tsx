import React, { ReactElement } from "react";
import { Scripts } from "./Scripts";
import { Styles } from "./Styles";

interface Props {
  html: any;
  scripts: ReactElement[];
  styles: ReactElement[];
}

export function Page({ html, scripts, styles }: Props) {
  return (
    <>
      <Styles styles={styles} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      {scripts && <Scripts scripts={scripts} />}
    </>
  );
}
