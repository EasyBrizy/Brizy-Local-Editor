import { NavPlaceholder } from "@/utils/placeholder";
import { EmptyContext, Registry, Replacer } from "@brizy/content-placeholder";
import { PageJsonCompiledOutput, ProjectJsonCompiledOutput } from "@builder/core/build/es/types/common";

export function assemblePages(data: { items: Array<PageJsonCompiledOutput>; project: ProjectJsonCompiledOutput }) {
  const projectStyles = data.project?.styles ?? [];

  const page = data.items.reduce(
    ({ html, scripts, styles }, item) => {
      return {
        html: item.html ? html + _replacePlaceholders(item.html) : html,
        styles: item.styles ? [...styles, ...item.styles] : styles,
        scripts: item.scripts ? [...scripts, ...item.scripts] : scripts,
      };
    },
    { html: "", styles: [], scripts: [] },
  );
  return { projectStyles, ...page };
}

function _replacePlaceholders(html: string): string {
  const registry = new Registry();

  registry.registerPlaceholder(new NavPlaceholder("Navigation Placeholder", "placeholder"));
  const replacer = new Replacer(registry);
  return replacer.replacePlaceholders(html, new EmptyContext());
}
