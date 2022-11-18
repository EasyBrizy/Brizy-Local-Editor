import { Builder } from "./types";

declare global {
  interface Window {
    Builder: Builder;
  }
}
