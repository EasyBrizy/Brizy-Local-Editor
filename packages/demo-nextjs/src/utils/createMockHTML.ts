interface Data {
  head?: string;
  body: string;
}

export const createMockHTML = ({ head = "", body }: Data): string => `
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
