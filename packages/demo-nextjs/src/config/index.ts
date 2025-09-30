interface Config {
  dbUrl: string;
  dbName: string;
  editorUrl: string;
  editorToken: string;
  apiAiUrl: string;
}

export const getConfig = (): Config => {
  return {
    dbUrl: process.env["MONGODB_URI"] ?? "",
    dbName: process.env["MONGODB_DATABASE_NAME"] ?? "",
    editorUrl: process.env["NEXT_PUBLIC_EDITOR_URL"] ?? "http://localhost:8001/index.js",
    editorToken: process.env["NEXT_PUBLIC_EDITOR_TOKEN"] ?? "demo",
    apiAiUrl: process.env["API_AI_URL"] ?? "http://localhost/api",
  };
};
