import { AddImageData, Item, MediaGalleryParam, OnInsertFiles } from "@types";
import { ApiFileTypes } from "@brizy/media-gallery/lib/pages/mediaLibrary/types/types";
import mimes from "./mimes.json";

//#region exact like in builder
enum TypesOfExtensions {
  Image = "image",
  Video = "video",
  Audio = "audio",
}

const isTypeOfExtension = (type: string): type is TypesOfExtensions =>
  Object.values(TypesOfExtensions).includes(type as TypesOfExtensions);

const getAllMimesOfType = (type: TypesOfExtensions): string[] =>
  Object.values(mimes).reduce<string[]>((acc, value) => {
    const result = value.filter((i) => i.includes(type));
    return result.length ? [...acc, ...result] : acc;
  }, []);
const getAllMimes = (): string[] => Object.values(mimes).flat();

function isT(v: unknown): v is unknown {
  return typeof v !== "undefined" && v !== null;
}

const fromExtensionsToMimeTypes = (extensions: string[]): string[] =>
  extensions.length
    ? extensions
        .reduce<string[]>((acc, i) => {
          if (i.includes("*")) {
            const type = i.split("/")[0];
            return isTypeOfExtension(type) ? [...acc, ...getAllMimesOfType(type)] : acc;
          } else {
            const key = i.replace(/\./g, "") as keyof typeof mimes;
            return [...acc, ...mimes[key]];
          }
        }, [])
        .filter(isT)
    : getAllMimes();
//#endregion

export const getAcceptableTypes = (acceptedExtensions: string[]): string[] =>
  fromExtensionsToMimeTypes(acceptedExtensions).filter(isT);

export const fromItemToImage = ({ name, fileName, extension, altTitle }: Item): AddImageData => ({
  uid: name,
  fileName: `${fileName}.${extension}`,
  altTitle,
});

export const onInsertFiles: OnInsertFiles = (res, rej, handleClose) => (payload) => {
  if (Array.isArray(payload)) {
    rej("Failed to upload file. Please upload a valid file.");
  } else {
    res(fromItemToImage(payload));
    handleClose();
  }
};

export const fromValToMediaGalleryParam = <T extends string, U>(key: T, value: U): MediaGalleryParam<T, U> =>
  (key && value ? { [key]: value } : {}) as MediaGalleryParam<T, U>;

export const getBase64 = async (file: File): Promise<string> => {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      typeof e.target?.result === "string" ? resolve(e.target?.result) : reject("Error read file.");
    };

    reader.onerror = () => {
      reject("Error read file.");
    };

    reader.onabort = () => {
      reject("Abort read file.");
    };

    reader.readAsDataURL(file);
  });
};

export const getTypeOrDocument = (type: string): string | undefined =>
  ApiFileTypes.VIDEO === type || ApiFileTypes.AUDIO === type || ApiFileTypes.IMAGE === type
    ? type
    : ApiFileTypes.DOCUMENT;

export const makeUrl = (baseUrl: string, params: Record<string, string> = {}): string => {
  const url = new URL(baseUrl);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  return url.toString();
};
