import { getProjectSettings } from "@/app/admin/(cms)/system/core/requests";
import { SearchParams } from "@/app/types";
import { Reference } from "@/components/Editor/contexts/types";
import { replacePlaceholders } from "@/placeholders";
import { projectId } from "@/utils/mock";
import { PageJsonCompiledOutput, ProjectJsonCompiledOutput } from "@builder/core/build/es/types/common";
import { Scripts, Styles } from "@builder/core/build/es/utils/assetManager/types";

export async function assemblePages(data: {
  items: Array<PageJsonCompiledOutput>;
  project: ProjectJsonCompiledOutput;
  reference?: Reference;
  searchParams?: SearchParams;
}) {
  const projectStyles = data.project?.styles ?? [];
  const { code } = (await getProjectSettings(projectId)) || {};
  const { customCss, codeInjectionHeader, codeInjectionFooter } = code || {};

  const customCssStyles: Styles[] = [];

  if (customCss) {
    customCssStyles.push({
      type: "style",
      attr: {
        class: "custom-css",
      },
      html: customCss,
    });
  }

  let html = codeInjectionHeader ?? "";
  const styles: Styles[] = [];
  const scripts: Scripts[] = [];

  const { reference, searchParams } = data;

  for (const item of data.items) {
    html += item.html ? await replacePlaceholders({ value: item.html, reference, searchParams }) : "";

    if (item.styles) {
      styles.push(...item.styles);
    }

    if (item.scripts) {
      scripts.push(...item.scripts);
    }
  }

  if (codeInjectionFooter) {
    html += codeInjectionFooter;
  }

  return {
    projectStyles,
    html,
    styles: [...styles, ...customCssStyles],
    scripts,
  };
}
