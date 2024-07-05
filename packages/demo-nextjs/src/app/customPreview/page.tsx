import { getPreview } from "@/lib/preview";
import { pageId, projectId } from "@/utils/mock";
import React, { ReactElement } from "react";
import { Scripts } from "./components/Scripts";
import { Styles } from "./components/Styles";

// Example of a page where Header and Footer are custom components,
// and the body is created with the Brizy page builder
// Header and Footer are declared inside Layout.tsx

const CustomPreview = async (): Promise<ReactElement> => {
  const { page, project } = await getPreview({ pageId, projectId });
  const { styles, scripts, html } = page ?? {};
  const { styles: projectStyles } = project ?? {};

  if (!html) {
    return <h1>Missing page</h1>;
  }

  const _styles = [...(styles ?? []), ...(projectStyles ?? [])];

  return (
    <div>
      <Styles styles={_styles} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <Scripts scripts={scripts} />
    </div>
  );
};

export default CustomPreview;
