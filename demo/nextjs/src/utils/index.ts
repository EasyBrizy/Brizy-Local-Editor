import { replacePlaceholders } from "@/placeholders";
import { projectId } from "@/utils/mock";
import { PageJsonCompiledOutput, ProjectJsonCompiledOutput } from "@builder/core/build/es/types/common";
import { Scripts, Styles } from "@builder/core/build/es/utils/assetManager/types";

export async function assemblePages(data: {
  items: Array<PageJsonCompiledOutput>;
  project: ProjectJsonCompiledOutput;
}) {
  const projectStyles = data.project?.styles ?? [];

  const customCssStyles: Styles[] = [];



  let html =  "";
  const styles: Styles[] = [];
  const scripts: Scripts[] = [];

  for (const item of data.items) {
    html += item.html ? await replacePlaceholders({ value: item.html }) : "";

    if (item.styles) {
      styles.push(...item.styles);
    }

    if (item.scripts) {
      scripts.push(...item.scripts);
    }
  }

  return {
    projectStyles,
    html,
    styles: [...styles, ...customCssStyles],
    scripts,
  };
}
