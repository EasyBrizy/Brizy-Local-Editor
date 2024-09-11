import { Reference } from "@/components/Editor/contexts/types";
import { BuilderPlaceholder } from "@/placeholders/types/BuilderPlaceholder";
import { CompareAtPricePlaceholder } from "@/placeholders/types/CompareAtPrice";
import { DescriptionPlaceholder } from "@/placeholders/types/Description";
import { FeaturedImagePlaceholder } from "@/placeholders/types/FeaturedImage";
import { NavPlaceholder } from "@/placeholders/types/NavPlaceholder";
import { PricePlaceholder } from "@/placeholders/types/Price";
import { TitlePlaceholder } from "@/placeholders/types/Title";
import { TranslationPlaceholder } from "@/placeholders/types/Translation";
import { VariantOptionTitlePlaceholder } from "@/placeholders/types/VariantOptionTitle";
import { VariantOptionValuePlaceholder } from "@/placeholders/types/VariantOptionValue";
import { VariantOptionValuesPlaceholder } from "@/placeholders/types/VariantOptionValues";
import { VariantOptionsPlaceholder } from "@/placeholders/types/VariantOptions";
import { VariantTitlePlaceholder } from "@/placeholders/types/VariantTitle";
import { CollectionItemPlaceholder } from "@/placeholders/types/Vendor";
import { EmptyContext, Registry, Replacer } from "@brizy/content-placeholder";
import { CollectionContext } from "./context/CollectionContext";

const PlaceholderInstances = [
  NavPlaceholder,
  PricePlaceholder,
  CompareAtPricePlaceholder,
  TitlePlaceholder,
  DescriptionPlaceholder,
  CollectionItemPlaceholder,
  VariantOptionsPlaceholder,
  VariantTitlePlaceholder,
  VariantOptionValuesPlaceholder,
  VariantOptionTitlePlaceholder,
  VariantOptionValuePlaceholder,
  FeaturedImagePlaceholder,
  TranslationPlaceholder,
  BuilderPlaceholder,
];

export const replacePlaceholders = async ({
  value,
  placeholderKey,
  reference,
}: {
  value: string;
  placeholderKey?: string;
  reference?: Reference;
}): Promise<string> => {
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

  // The first replacePlaceholders call is to transform the placeholder
  // `{{ placeholder content='base64encode(placeholderName)' attr1='val1' }}` to `{{ placeholderName attr1='val1'}}`
  const result = await replacer.replacePlaceholders(value, new EmptyContext());

  return replacer.replacePlaceholders(result, context);
};
