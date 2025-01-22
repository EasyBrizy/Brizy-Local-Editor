import { SearchParams } from "@/app/types";
import { Reference } from "@/components/Editor/contexts/types";
import { Registry, Replacer } from "@brizy/content-placeholder";
import { CollectionContext } from "./context/CollectionContext";
import { PlaceholderInstances } from "./types";

interface ReplacePlaceholderArgs {
  value: string;
  placeholderKey?: string;
  reference?: Reference;
  searchParams?: SearchParams;
}

export const replacePlaceholders = async ({
  value,
  placeholderKey,
  reference,
  searchParams,
}: ReplacePlaceholderArgs): Promise<string> => {
  const context = new CollectionContext();

  const registry = new Registry();
  const replacer = new Replacer(registry);

  PlaceholderInstances.forEach((Instance) => {
    const newPlaceholder = new Instance();
    newPlaceholder.setReplacer(replacer);
    registry.registerPlaceholder(newPlaceholder);
  });

  if (reference) {
    context.setEntityId(reference.collectionId);
    context.setEntityType(reference.collectionType);
  }

  if (placeholderKey) {
    context.setAttributes({ placeholderKey });
  }

  if (searchParams) {
    context.setAttributes({ searchParams });
  }

  // The first replacePlaceholders call is to transform the placeholder
  // `{{ placeholder content='base64encode(placeholderName)' attr1='val1' }}` to `{{ placeholderName attr1='val1'}}`
  const result = await replacer.replacePlaceholders(value, context);

  return replacer.replacePlaceholders(result, context);
};
