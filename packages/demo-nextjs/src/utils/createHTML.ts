import { PageCompiled, ProjectCompiled } from "@builder/core/build/es/types/common";

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
  page?: PageCompiled;
  project?: ProjectCompiled;
}

export const createHTML = ({ page, project }: Model): string => {
  const { styles, scripts, html } = page ?? {};
  const { styles: projectStyles } = project ?? {};

  if (!html) {
    return createMockHTML({ body: "<h1>Missing page</h1>" });
  }

  const stylesStr = [...(styles ?? []), ...(projectStyles ?? [])].join("");
  const scriptsStr = scripts?.join("") ?? "";

  const body = `
    <!-- HTML -->
    ${html}
    <!-- Styles -->
    ${scriptsStr}
`;

  return createMockHTML({
    head: stylesStr,
    body,
  });
};
