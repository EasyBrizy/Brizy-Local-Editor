export function attributesToRecord(element: HTMLElement): Record<string, string> {
  const attributesRecord: Record<string, string> = {};

  for (let i = 0; i < element.attributes.length; i++) {
    const attr = element.attributes[i];
    attributesRecord[attr.name] = attr.value;
  }

  return attributesRecord;
}
