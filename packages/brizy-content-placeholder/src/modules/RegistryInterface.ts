import { PlaceholderInterface } from "./PlaceholderInterface.js"

export interface RegistryInterface {
  // Register a placeholder class
  registerPlaceholder(instance: PlaceholderInterface): void
  // Return all placeholders
  getPlaceholders(): PlaceholderInterface[]
  // It will return first placeholder that supports the $name;
  getPlaceholderSupportingName(name: string): PlaceholderInterface | undefined
}
