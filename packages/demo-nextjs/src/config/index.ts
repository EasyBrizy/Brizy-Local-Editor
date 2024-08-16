interface Config {
  host: string;
  dbUrl: string;
  dbName: string;
  editorUrl: string;
  editorToken: string;
}

const DEFAULT_HOST = "http://127.0.0.1:3000";

export const getConfig = (): Config => {
  return {
    host: process.env["NEXT_PUBLIC_URL"] ?? DEFAULT_HOST,
    dbUrl: process.env["MONGODB_URI"] ?? "",
    dbName: process.env["MONGODB_DATABASE_NAME"] ?? "",
    editorUrl: process.env["NEXT_PUBLIC_EDITOR_URL"] ?? "http://localhost:8001/index.js",
    editorToken: process.env["NEXT_PUBLIC_EDITOR_TOKEN"] ?? "demo",
  };
};
