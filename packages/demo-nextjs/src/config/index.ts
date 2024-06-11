interface Config {
  host: string;
  dbUrl: string;
  editorUrl: string;
  editorToken: string;
}

const DEFAULT_HOST = "http://127.0.0.1:3000";

export const getConfig = (): Config => {
  console.log("EDITOR TOKEN TEST: ", process.env["NEXT_PUBLIC_EDITOR_TOKEN"]);
  return {
    host: process.env["NEXT_PUBLIC_URL"] ?? DEFAULT_HOST,
    dbUrl: process.env["MONGODB_URI"] ?? "",
    editorUrl: process.env["NEXT_PUBLIC_EDITOR_URL"] ?? "http://localhost:8001/index.js",
    editorToken: process.env["NEXT_PUBLIC_EDITOR_TOKEN"] ?? "demo",
  };
};
