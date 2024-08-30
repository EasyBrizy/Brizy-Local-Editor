interface Config {
  editorUrl: string;
  editorToken: string;
  contentfulSpace: string;
  contentfulToken: string;
}

export const getConfig = (): Config => {
  return {
    contentfulSpace: process.env["CONTENTFUL_SPACE"] ?? "",
    contentfulToken: process.env["CONTENTFUL_TOKEN"] ?? "",
    editorUrl: process.env["NEXT_PUBLIC_EDITOR_URL"] ?? "http://localhost:8001/index.js",
    editorToken: process.env["NEXT_PUBLIC_EDITOR_TOKEN"] ?? "demo",
  };
};
