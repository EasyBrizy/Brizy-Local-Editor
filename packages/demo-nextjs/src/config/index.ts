interface Config {
  host: string;
}

const DEFAULT_HOST = "http://127.0.0.1:3000";

export const getConfig = (): Config => {
  return {
    host: process.env["NEXT_PUBLIC_URL"] ?? DEFAULT_HOST,
  };
};
