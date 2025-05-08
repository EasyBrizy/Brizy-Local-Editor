import { Config } from "@brizy/media-gallery/lib/app";
import { AddImageData, HandlerArgs, Item, OnInsertFiles, ProjectCredential, Response as GenericResponse } from "@types";
import { API_URL } from "../constants";
import {
  getMediaGalleryItems,
  removeMediaGalleryItems,
  updateMediaGalleryItem,
  uploadMediaGalleryItem,
} from "./request";
import { getAcceptableTypes } from "./acceptedExtension";

export const fromItemToImage = ({ name, fileName, extension, altTitle }: Item): AddImageData => ({
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

export type RequestFn = (
  parameters: RequestInit,
  url?: string,
  queryParams?: Record<string, string>,
) => Promise<Response>;

const makeUrl = (baseUrl: string, params: Record<string, string> = {}): string => {
  const url = new URL(baseUrl);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  return url.toString();
};

export const getRequestFn =
  ({ projectId, token }: ProjectCredential): RequestFn =>
  (parameters: RequestInit, url = "", queryParams = {}): Promise<Response> => {
    const fetchUrl = makeUrl(`${API_URL}/${projectId}/media${url}`, queryParams);

    return fetch(fetchUrl, {
      ...parameters,
      headers: {
        "Content-Type": "application/json",
        ...parameters.headers,
        ...(token ? { "x-auth-user-token": token } : {}),
      },
    });
  };

export function getMediaUploadConfig({
  credentials,
  handleClose,
  isDev,
  handlerArgs,
}: {
  credentials: ProjectCredential;
  handleClose: (res?: GenericResponse<string>) => void;
  isDev: boolean;
  handlerArgs: HandlerArgs;
}): Config {
  const request = getRequestFn(credentials);

  const { res, rej, extra } = handlerArgs;

  return {
    development: isDev,
    origin: "*",
    insertFilesType: "single",
    acceptableTypes: getAcceptableTypes(extra.acceptedExtensions),
    mediaLibrary: {
      getItems: getMediaGalleryItems(request),
      removeItems: removeMediaGalleryItems(request),
      updateItem: updateMediaGalleryItem(request),
      uploadItem: uploadMediaGalleryItem(request),
    },

    //#region TODO: Remove when https://github.com/bagrinsergiu/blox-editor/issues/28977 will be done

    stockPhotos: {
      getItems: () => Promise.resolve(undefined),
      downloadItem: () => Promise.resolve({ url: "test" }),
    },
    //#endregion

    onClose: () => {
      rej("File upload was cancelled");
      handleClose();
    },
    onInsertFiles: onInsertFiles(res, rej, handleClose),
  };
}
