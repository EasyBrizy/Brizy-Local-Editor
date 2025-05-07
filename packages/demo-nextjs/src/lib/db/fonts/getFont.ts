import { ObjectId } from "mongodb";
import { getFontsBucket } from "./bucket";

export const getFont = async (id: string) => {
  const bucket = await getFontsBucket();

  const file = await bucket.find({ _id: new ObjectId(id) }).next();

  if (!file) {
    return new Response("Font not found", { status: 404 });
  }

  const downloadStream = bucket.openDownloadStream(file._id);

  const readableStream = new ReadableStream({
    start(controller) {
      downloadStream.on("data", (chunk) => controller.enqueue(chunk));
      downloadStream.on("end", () => controller.close());
      downloadStream.on("error", (err) => controller.error(err));
    },
  });

  return new Response(readableStream, {
    status: 200,
    headers: {
      "Content-Type": file.metadata?.contentType || "font/woff2",
      "Content-Disposition": `inline; filename="${file.filename}"`,
    },
  });
};
