import { Reference } from "@/components/Editor/contexts/types";
import { replacePlaceholders } from "@/placeholders";
import { PageJsonCompiledOutput, ProjectJsonCompiledOutput } from "@builder/core/build/es/types/common";
import { Scripts, Styles } from "@builder/core/build/es/utils/assetManager/types";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export async function assemblePages(data: {
  items: Array<PageJsonCompiledOutput>;
  project: ProjectJsonCompiledOutput;
  reference?: Reference;
}) {
  const projectStyles = data.project?.styles ?? [];

  let html = "";
  const styles: Styles[] = [];
  const scripts: Scripts[] = [];

  for (const item of data.items) {
    html += item.html ? await replacePlaceholders({ value: item.html, reference: data.reference }) : "";

    if (item.styles) {
      styles.push(...item.styles);
    }

    if (item.scripts) {
      scripts.push(...item.scripts);
    }
  }

  return { projectStyles, html, styles, scripts };
}

export function getOrigin(headers: ReadonlyHeaders): string {
  const protocol = headers.get("x-forwarded-proto");
  const host = headers.get("x-forwarded-host");
  const url = `${protocol}://${host}`;
  return URL.canParse(url) ? new URL(url).origin : "";
}
