import { Builder } from "./types";

declare global {
  const PUBLIC_HOST: string;

  interface Window {
    Builder: Builder;
  }
}
