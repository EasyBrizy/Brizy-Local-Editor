import { Builder } from "./types";

declare global {
  interface Window {
    Builder: Builder;
  }
  interface ImportMeta {
    env: {
      NODE_ENV: "development" | "production";

      // See in .env.sample
      PUBLIC_HOST: string;
    };
  }
}
