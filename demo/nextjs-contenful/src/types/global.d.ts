import type { Builder } from "@builder/core/build/es/types/types";

declare global {
  interface Window {
    Builder?: Builder;
  }

  var mongoose: any; // This must be a `var` and not a `let / const`
}
