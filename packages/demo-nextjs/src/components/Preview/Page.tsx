import React from "react";
import { Scripts } from "./Scripts";
import { Styles } from "./Styles";

export function Page({ html, scripts, styles }: { html: any; scripts: any; styles: any }) {
  return (
    <div>
      <Styles styles={styles} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      {scripts && <Scripts scripts={scripts} />}
    </div>
  );
}
