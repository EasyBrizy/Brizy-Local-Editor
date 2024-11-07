import { BuilderPlaceholder } from "@/placeholders/types/BuilderPlaceholder";
import { NavPlaceholder } from "@/placeholders/types/NavPlaceholder";
import { TranslationPlaceholder } from "@/placeholders/types/Translation";
import { EmptyContext, Registry, Replacer } from "@brizy/content-placeholder";

const PlaceholderInstances = [
  NavPlaceholder,
  TranslationPlaceholder,
  BuilderPlaceholder,
];

export const replacePlaceholders = async ({
  value,
}: {
  value: string;
}): Promise<string> => {
  const registry = new Registry();
  const replacer = new Replacer(registry);
  const context = new EmptyContext();

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
