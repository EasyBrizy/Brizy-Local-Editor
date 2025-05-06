import { getFontsBucket } from "./bucket";

export const deleteFont = async (id: string) => {
  const bucket = await getFontsBucket();

  const files = await bucket.find({ "metadata.id": id }).toArray();

  if (!files.length) {
    return new Response("Font not found", { status: 404 });
  }

  for (const file of files) {
    await bucket.delete(file._id);
  }
};
