import type { Builder } from "@builder/core/public/es/types/types";

declare global {
  interface Window {
    Builder: Builder;
  }

  interface ImportMeta {
    env: {
      NODE_ENV: "development" | "production";
      CORE_HOST: string;
    };
  }
}
