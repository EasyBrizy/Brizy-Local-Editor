import DBConnect from "@/lib/db/connect";
import Models, { CompiledData, ParsedItem, ParsedItemData, Slug } from "@/lib/db/models";

const getProjectCompiled = (model: Record<string, string>) => {
  const projectDataParsed = JSON.parse(model.data);
  return projectDataParsed.compiled;
};

export enum CollectionTypes {
  System = "system",
  Page = "page",
  Popup = "popup",
  Story = "story",
}
export type CollectionTypeValue = (typeof CollectionTypes)[keyof typeof CollectionTypes];

function isCollectionType(value: unknown): value is CollectionTypes {
  return Object.values(CollectionTypes).includes(value as CollectionTypes);
}

// get data from Item based on slug from mongodb
export async function getItem(slug: Slug): Promise<ParsedItem> {
  await DBConnect();
  const { collection, item } = slug;

  const response = await Models.Items.findOne({ "slug.collection": collection, "slug.item": item });
  if (!response) {
    throw new Error("Failed to get item");
  }

  const document = response.toObject();
  return {
    ...document,
    ...(document.data ? { data: JSON.parse(document.data) } : {}),
  };
}

export async function getAllPopups(): Promise<ParsedItem[]> {
  await DBConnect();
  const response = await Models.Items.find({ "slug.collection": CollectionTypes.Popup });
  if (!response) {
    throw new Error("Failed to get popups");
  }

  return response.map((_popup) => {
    const popup = _popup.toObject();
    return {
      ...popup,
      ...(popup.data ? { data: JSON.parse(popup.data) } : {}),
    };
  });
}

export function getCompiledData(documents: ParsedItem[]) {
  return documents
    .map((item) => {
      return item?.data?.compiled;
    })
    .filter((item) => item !== undefined);
}

export async function getProject(id: string | number): Promise<CompiledData> {
  await DBConnect();
  const projectData = await Models.Project.findOne({ id: id });
  return getProjectCompiled(projectData);
}
