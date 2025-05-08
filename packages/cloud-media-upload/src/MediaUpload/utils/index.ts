import { Config } from "@brizy/media-gallery/lib/app";
import type {
  Api as MediaLibraryApi,
  Data,
  GetItemsVariables as MediaLibraryGetItemsVariables,
  RemoveApi,
  UpdateApi,
  UpdateItemVariables,
  UploadItemVariables,
} from "@brizy/media-gallery/lib/pages/mediaLibrary/types/Api";
import { AddImageData, HandlerArgs, Item, MediaGalleryParam, OnInsertFiles, ProjectCredential, Response } from "@types";

import { ApiFileTypes } from "@brizy/media-gallery/lib/pages/mediaLibrary/types/types";
import { getRequestFn, RequestFn } from "./request";
import { Locale } from "@brizy/media-gallery/lib/types/Locale";

export const fromValToMediaGalleryParam = <T extends string, U>(key: T, value: U): MediaGalleryParam<T, U> =>
  (key && value ? { [key]: value } : {}) as MediaGalleryParam<T, U>;

export const getBase64 = async (file: File): Promise<string> => {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      typeof e.target?.result === "string"
        ? resolve(e.target?.result)
        : reject("Error read file.");
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

//#region media gallery

export const getMediaGalleryItems = (request: RequestFn) => async ({
                                                                     fileName,
                                                                     name,
                                                                     type,
                                                                     page,
                                                                     count,
                                                                     orderBy,
                                                                   }: MediaLibraryGetItemsVariables): Promise<MediaLibraryApi> => {
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

  return await request(
    {
      method: "GET",
    },
    "",
    queryParams,
  ).then<MediaLibraryApi>((v) => v.json());
};

const getTypeOrDocument = (type: string): string | undefined =>
  ApiFileTypes.VIDEO === type || ApiFileTypes.AUDIO === type || ApiFileTypes.IMAGE === type
    ? type
    : ApiFileTypes.DOCUMENT;

export const uploadMediaGalleryItem = (request: RequestFn) => async ({
                                                                       file,
                                                                       altTitle,
                                                                       name,
                                                                     }: UploadItemVariables): Promise<Data> => {
  return await getBase64(file).then(async (base64) => {
    const mime = file.type.split("/")[0];
    const type = getTypeOrDocument(mime);
    const attachment = base64.replace(/data:[a-zA-Z]*\/.+;base64,/, "");
    const rAltTitle = fromValToMediaGalleryParam("alt_title", altTitle);
    const rName = fromValToMediaGalleryParam("name", name);
    return await request({
      body: JSON.stringify({
        ...rAltTitle,
        ...rName,
        type,
        attachment,
        filename: file.name,
      }),
      method: "POST",
    }).then<Data>((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    });
  });
};

export const removeMediaGalleryItems = (request: RequestFn) => async (elIds: string[]): Promise<RemoveApi> => {
  return await request({
    body: JSON.stringify({ id_list: elIds.join(",") }),
    method: "DELETE",
  }).then((res) => (res.ok ? elIds : undefined));
};

export const updateMediaGalleryItem = (request: RequestFn) => async ({
                                                                       id,
                                                                       fileNameWithExtension,
                                                                       title,
                                                                     }: UpdateItemVariables): Promise<UpdateApi> => {
  const filename = fromValToMediaGalleryParam("filename", fileNameWithExtension);
  const alt_title = fromValToMediaGalleryParam("alt_title", title);
  return await request(
    {
      body: JSON.stringify({ ...filename, ...alt_title }),
      method: "PATCH",
    },
    `/${id}`,
  ).then<UpdateApi>((v) => v.json());
};

//#endregion


export const fromItemToImage = ({
                                  name,
                                  fileName,
                                  extension,
                                  altTitle,
                                }: Item): AddImageData => ({
  uid: name,
  fileName: `${fileName}.${extension}`,
  altTitle,
});


const onInsertFiles: OnInsertFiles = (res, rej, handleClose) => (payload) => {
  if (Array.isArray(payload)) {
    rej("Failed to upload file. Please upload a valid file.");
  } else {
    res(fromItemToImage(payload));
    handleClose();
  }
};

export function getMediaUploadConfig({ credentials, handleClose, isDev, handlerArgs }: {
  credentials: ProjectCredential;
  handleClose: VoidFunction;
  isDev: boolean,
  handlerArgs: HandlerArgs
}): Config {
  const request = getRequestFn(credentials);

  const { res, rej, extra } = handlerArgs;

  return {
    development: isDev,
    origin: "*",
    acceptableTypes: ["application/json", "image/jpeg", "image/jpg", "image/png", "image/gif", "image/svg+xml"],
    mediaLibrary: {
      getItems: getMediaGalleryItems(request),
      removeItems: removeMediaGalleryItems(request),
      updateItem: updateMediaGalleryItem(request),
      uploadItem: uploadMediaGalleryItem(request),
    },

    //TODO: need to make `stockPhotos` optional for mediaGallery
    stockPhotos: {
      getItems: () => Promise.resolve(undefined),
      downloadItem: () => Promise.resolve({ url: "test" }),
    },
    onClose: () => {
      rej("File upload was cancelled");
      handleClose();
    },
    onInsertFiles: onInsertFiles(res, rej, handleClose),

  };
}


