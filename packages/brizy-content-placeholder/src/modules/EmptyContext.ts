import { ContextInterface } from "./ContextInterface.js"

export class EmptyContext implements ContextInterface {
  afterExtract(): void {
    // The method is intentionally left empty.
  }
}
