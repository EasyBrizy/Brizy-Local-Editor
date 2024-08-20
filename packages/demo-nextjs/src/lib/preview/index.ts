import DBConnect from "@/lib/db/connect";
import Models, { CollectionTypes, CompiledData, ParsedItem, Slug } from "@/lib/db/models";

const getProjectCompiled = (model: Record<string, string>) => {
  const projectDataParsed = JSON.parse(model.data);
  return projectDataParsed.compiled;
};

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
  const response = await Models.Items.find({ "slug.collection": CollectionTypes.popup });
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
