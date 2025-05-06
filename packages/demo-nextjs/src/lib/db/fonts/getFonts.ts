import { getOrigin } from "@/utils/origin";
import { GridFSFile } from "mongodb";
import { getFontsBucket } from "./bucket";

export const getFonts = async () => {
  const bucket = await getFontsBucket();
  const files = await bucket.find({}).toArray();

  if (!files.length) {
    return [];
  }

  // group files by metadata.id
  const groupedFiles = files.reduce((acc, file) => {
    const id = file.metadata?.id;
    if (!acc[id]) {
      acc[id] = [];
    }
    acc[id].push(file);
    return acc;
  }, {} as Record<string, GridFSFile[]>);

  const data = [];

  for (const id in groupedFiles) {
    const files = groupedFiles[id];

    const { id: fontId, family } = files[0].metadata ?? {};
    const weights = new Set<string>();

    files.forEach((file) => {
      const { type } = file.metadata ?? {};
      if (type) {
        weights.add(type);
      }
    });

    const font = {
      id: fontId,
      family,
      type: "uploaded",
      weights: Array.from(weights),
    };

    data.push(font);
  }

  return data;
};

export const getFontsFace = async (ids: string) => {
  const bucket = await getFontsBucket();
  const origin = await getOrigin();
  const fontUrl = `${origin}/api/font`;
  const fontRequests = ids.split("|"); // "roboto:400,700|inter:400"

  let responseCSS = "";

  for (const request of fontRequests) {
    const [fontId, weightString] = request.split(":");

    if (!fontId || !weightString) continue; // skip malformed entries

    const requestedWeights = new Set(weightString.split(","));

    const files = await bucket.find({ "metadata.id": fontId }).toArray();

    if (!files.length) {
      console.warn(`Font not found: ${fontId}`);
      continue;
    }

    const matchingFiles = files.filter((file) => requestedWeights.has(file.metadata?.type));

    if (!matchingFiles.length) {
      console.warn(`No matching weights found for: ${fontId}`);
      continue;
    }

    for (const file of matchingFiles) {
      const weight = file.metadata?.type;
      responseCSS += `@font-face {
            font-family: "${fontId}";
            font-style: normal;
            font-weight: ${weight};
            src: local("${fontId}"), url("${fontUrl}/${file._id}") format("woff2");
          }
          `;
    }
  }

  return responseCSS;
};
