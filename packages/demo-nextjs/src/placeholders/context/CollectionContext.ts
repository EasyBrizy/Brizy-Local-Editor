import { ContentPlaceholder, ContextInterface, PlaceholderInterface, Replacer } from "@brizy/content-placeholder";

interface ContextArgs {
  entityType: string;
  entityId: string;
  attributes: Record<string, unknown>;
  replacer: Replacer;
}

export class CollectionContext implements ContextInterface {
  private entityType: string;
  private entityId: string;
  private attributes: Record<string, unknown> = {};

  constructor(data?: Partial<ContextArgs>) {
    const { entityType, entityId, attributes } = data ?? {};

    this.entityType = entityType ?? "";
    this.entityId = entityId ?? "";

    if (attributes) {
      this.attributes = attributes;
    }
  }

  setEntityId(entityId: string): void {
    this.entityId = entityId;
  }

  setEntityType(entityType: string): void {
    this.entityType = entityType;
  }

  setAttributes(attributes: Record<string, unknown>): void {
    this.attributes = {
      ...this.attributes,
      ...attributes,
    };
  }

  getEntityType(): string {
    return this.entityType;
  }

  getEntityId(): string {
    return this.entityId;
  }

  getAttributes(): Record<string, unknown> {
    return this.attributes;
  }

  afterExtract(
    contentPlaceholders: ContentPlaceholder[],
    instancePlaceholders: PlaceholderInterface[],
    contentAfterExtractor: string,
  ): any {}
}
