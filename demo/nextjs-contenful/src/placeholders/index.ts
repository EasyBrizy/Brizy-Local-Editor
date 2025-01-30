import { Registry, Replacer } from "@brizy/content-placeholder";
import { CollectionContext } from "./context/CollectionContext";
import { PlaceholderInstances } from "./types";

export const replacePlaceholders = async (value: string): Promise<string> => {
  const context = new CollectionContext();

  const registry = new Registry();
  const replacer = new Replacer(registry);

  PlaceholderInstances.forEach((Instance) => {
    const newPlaceholder = new Instance();
    newPlaceholder.setReplacer(replacer);
    registry.registerPlaceholder(newPlaceholder);
  });

  // The first replacePlaceholders call is to transform the placeholder
  // `{{ placeholder content='base64encode(placeholderName)' attr1='val1' }}` to `{{ placeholderName attr1='val1'}}`
  const result = await replacer.replacePlaceholders(value, context);

  return replacer.replacePlaceholders(result, context);
};
