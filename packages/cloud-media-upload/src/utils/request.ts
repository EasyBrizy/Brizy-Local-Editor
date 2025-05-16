import type {
  Api as MediaLibraryApi,
  Data,
  GetItemsVariables as MediaLibraryGetItemsVariables,
  RemoveApi,
  UpdateApi,
  UpdateItemVariables,
  UploadItemVariables,
} from "@brizy/media-gallery/lib/pages/mediaLibrary/types/Api";
import { ApiFileTypes } from "@brizy/media-gallery/lib/pages/mediaLibrary/types/types";
import { RequestFn } from "./index";
import { MediaGalleryParam } from "@types";

const fromValToMediaGalleryParam = <T extends string, U>(key: T, value: U): MediaGalleryParam<T, U> =>
  (key && value ? { [key]: value } : {}) as MediaGalleryParam<T, U>;

const getBase64 = async (file: File): Promise<string> => {
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

const getTypeOrDocument = (type: string): string | undefined =>
  ApiFileTypes.VIDEO === type || ApiFileTypes.AUDIO === type || ApiFileTypes.IMAGE === type
    ? type
    : ApiFileTypes.DOCUMENT;

//#region media gallery requests

export const getMediaGalleryItems =
  (request: RequestFn) =>
  async ({ fileName, name, type, page, count, orderBy }: MediaLibraryGetItemsVariables): Promise<MediaLibraryApi> => {
    const rType = fromValToMediaGalleryParam("type", type);
    const rPage = fromValToMediaGalleryParam("page", page.toString());
    const rCount = fromValToMediaGalleryParam("count", count.toString());
    const rFilename = fromValToMediaGalleryParam("filename", fileName);
    const rName = fromValToMediaGalleryParam("name", name);

    const orderByParam = orderBy.split("=");
    const rOrderBy = fromValToMediaGalleryParam(orderByParam[0], orderByParam[1]);

    const queryParams = {
      ...rCount,
      ...rType,
      ...rFilename,
      ...rName,
      ...rPage,
      ...rOrderBy,
    };

    try {
      const response = await request(
        {
          method: "GET",
        },
        "",
        queryParams,
      );

      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      throw new Error(`[MediaUpload] Failed to getItems]: ${e}`);
    }
  };

export const uploadMediaGalleryItem =
  (request: RequestFn) =>
  async ({ file, altTitle, name }: UploadItemVariables): Promise<Data> => {
    return await getBase64(file).then(async (base64) => {
      const mime = file.type.split("/")[0];
      const type = getTypeOrDocument(mime);
      const attachment = base64.replace(/data:[a-zA-Z]*\/.+;base64,/, "");
      const rAltTitle = fromValToMediaGalleryParam("alt_title", altTitle);
      const rName = fromValToMediaGalleryParam("name", name);

      try {
        const response = await request({
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            ...rAltTitle,
            ...rName,
            ...(type ? { type } : {}),
            attachment,
            filename: file.name,
          }),
          method: "POST",
        });

        if (response.ok) {
          return await response.json();
        }
        throw new Error(response.statusText);
      } catch (e) {
        throw new Error(`[MediaUpload] Failed to upload: ${e}`);
      }
    });
  };

export const removeMediaGalleryItems =
  (request: RequestFn) =>
  async (elIds: string[]): Promise<RemoveApi> => {
    try {
      const response = await request({
        body: JSON.stringify({ id_list: elIds.join(",") }),
        method: "DELETE",
      });

      if (response.ok) {
        return elIds;
      }
      throw new Error(response.statusText);
    } catch (e) {
      throw new Error(`[MediaUpload] Failed to remove media Gallery: ${e}`);
    }
  };

export const updateMediaGalleryItem =
  (request: RequestFn) =>
  async ({ id, fileNameWithExtension, title }: UpdateItemVariables): Promise<UpdateApi> => {
    const filename = fromValToMediaGalleryParam("filename", fileNameWithExtension);
    const alt_title = fromValToMediaGalleryParam("alt_title", title);

    try {
      const response = await request(
        {
          body: JSON.stringify({ ...filename, ...alt_title }),
          method: "PATCH",
        },
        `/${id}`,
        // TODO: remove then and do in await style
      );

      if (response.ok) {
        return await response.json();
      }
      throw new Error(response.statusText);
    } catch (e) {
      throw new Error(`[MediaUpload] Failed to update: ${e}`);
    }
  };

//#endregion
