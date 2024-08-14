import type { Builder } from "@builder/core/build/es/types/types";

declare global {
  interface Window {
    Builder?: Builder;
  }
}
