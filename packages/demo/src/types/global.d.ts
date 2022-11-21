import type { Builder } from "@builder/core/es/types/types";

declare global {
  interface Window {
    Builder: Builder;
  }
}
