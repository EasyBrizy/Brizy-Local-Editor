import { PageJsonCompiledOutput, ProjectJsonCompiledOutput } from "@builder/core/build/es/types/common";

interface Data {
  head?: string;
  body: string;
}

const createMockHTML = ({ head = "", body }: Data): string => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Preview Page: Brizy Page Builder</title>
        ${head}
    </head>
    <body class="brz">
        ${body}
    </body>
</html>
`;

interface Model {
  page?: PageJsonCompiledOutput;
  project?: ProjectJsonCompiledOutput;
}

const recordToAttributes = (attributes: Record<string, string | boolean>): string => {
  return Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
};

export const createHTML = ({ page, project }: Model): string => {
  const { styles, scripts, html } = page ?? {};
  const { styles: projectStyles } = project ?? {};

  if (!html) {
    return createMockHTML({ body: "<h1>Missing page</h1>" });
  }

  const stylesStr = [...(styles ?? []), ...(projectStyles ?? [])]
    .map((style) => {
      const attrStr = recordToAttributes(style.attr ?? {});

      if (style.type === "style") {
        return `<style ${attrStr}>${style.html}</style>`;
      }

      if (style.type === "link") {
        return `<link ${attrStr}/>`;
      }
    })
    .join("");

  const scriptsStr =
    scripts
      ?.map((script) => {
        if ("html" in script) {
          const { html, attr = {} } = script;
          const attrStr = recordToAttributes(attr);
          return `<script ${attrStr}>${html}</script>`;
        }

        const attrStr = recordToAttributes(script.attr ?? {});
        return `<script ${attrStr}></script>`;
      })
      .join("") ?? "";

  const body = `
    <!-- HTML -->
    ${html}
    <!-- Styles -->
    ${scriptsStr}
`;

  return createMockHTML({ head: stylesStr, body });
};
