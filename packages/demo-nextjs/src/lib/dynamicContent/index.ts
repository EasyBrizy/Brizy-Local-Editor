import { placeholderObjFromStr } from "./placeholder";
import { Reference } from "./types";
import { getPlaceholderValue } from "./utils";

export const resolvePlaceholders = async (placeholders: Record<string, string[]>, reference?: Reference) => {
  const resolvedPlaceholders = await Promise.all(
    Object.entries(placeholders).map(async ([placeholderKey, placeholderValues]) => {
      const values = await Promise.all(
        placeholderValues.map(async (value) => {
          const placeholder = placeholderObjFromStr(value);

          if (!placeholder) {
            return value;
          }

          return getPlaceholderValue(placeholder, placeholderKey, reference);
        }),
      );
      return { [placeholderKey]: values };
    }),
  );

  return Object.assign({}, ...resolvedPlaceholders);
};
