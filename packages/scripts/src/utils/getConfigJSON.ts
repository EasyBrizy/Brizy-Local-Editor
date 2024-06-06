const scriptFields = ["viewScripts", "editorScripts"];

export function getConfigJsonScriptFields(blockJson: Record<string, unknown>) {
  let result: Record<string, string | Array<string>> | undefined = undefined;

  for (const field of scriptFields) {
    const fieldValue = blockJson[field];

    if (fieldValue) {
      if (!result) {
        result = {};
      }

      if (Array.isArray(fieldValue)) {
        result[field] = fieldValue;
      }

      if (typeof fieldValue === "string") {
        result[field] = fieldValue;
      }
    }
  }

  return result;
}
