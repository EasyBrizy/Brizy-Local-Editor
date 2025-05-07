import { Readable } from "stream";
import { getFontsBucket } from "./bucket";

export const uploadFonts = async ({
  id,
  files,
  name,
}: {
  id: string;
  files: Record<string, Record<string, File>>;
  name: string;
}) => {
  const bucket = await getFontsBucket();
  const weights = new Set<string>();

  for (const [type, fileTypes] of Object.entries(files)) {
    weights.add(type);

    for (const [fileType, file] of Object.entries(fileTypes)) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const stream = Readable.from(buffer);

      const uploadStream = bucket.openUploadStream(file.name, {
        metadata: {
          id,
          name,
          type,
          fileType,
          originalName: file.name,
          contentType: file.type,
        },
      });

      stream.pipe(uploadStream);

      await new Promise((resolve, reject) => {
        uploadStream.on("finish", () => resolve(uploadStream.id));
        uploadStream.on("error", reject);
      });
    }
  }

  return {
    id,
    family: name,
    weights: Array.from(weights),
    type: "uploaded",
  };
};
