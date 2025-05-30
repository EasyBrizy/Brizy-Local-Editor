import { Literal, ProjectCredential } from "@types";
import type {
  Api as MediaLibraryApi,
  Data,
  GetItemsVariables as MediaLibraryGetItemsVariables,
  RemoveApi,
  UpdateApi,
  UpdateItemVariables,
  UploadItemVariables,
} from "@brizy/media-gallery/lib/pages/mediaLibrary/types/Api";
import { API_URL } from "../constants";
import { fromValToMediaGalleryParam, getBase64, getTypeOrDocument, makeUrl } from "../utils";
import { credentialSchema } from "../utils/validation";

class ApiClient {
  private request: Function;

  constructor({ token, projectId }: ProjectCredential) {
    this.request = (parameters: RequestInit, url = "", queryParams = {}): Promise<Response> => {
      const fetchUrl = makeUrl(`${API_URL}/${projectId}/media${url}`, queryParams);

      return fetch(fetchUrl, {
        ...parameters,
        headers: {
          "Content-Type": "application/json",
          "x-auth-user-token": token,
          ...parameters.headers,
        },
      });
    };
  }

  public getItems = async ({
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

    try {
      const response = await this.request(
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

  public removeItems = async (elIds: string[]): Promise<RemoveApi> => {
    try {
      const response = await this.request({
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

  public updateItem = async ({ id, fileNameWithExtension, title }: UpdateItemVariables): Promise<UpdateApi> => {
    const filename = fromValToMediaGalleryParam("filename", fileNameWithExtension);
    const alt_title = fromValToMediaGalleryParam("alt_title", title);

    try {
      const response = await this.request(
        {
          body: JSON.stringify({ ...filename, ...alt_title }),
          method: "PATCH",
        },
        `/${id}`,
      );

      if (response.ok) {
        return await response.json();
      }
      throw new Error(response.statusText);
    } catch (e) {
      throw new Error(`[MediaUpload] Failed to update: ${e}`);
    }
  };

  public uploadItem = async ({ file, altTitle, name }: UploadItemVariables): Promise<Data> => {
    const base64 = await getBase64(file);
    const mime = file.type.split("/")[0];
    const type = getTypeOrDocument(mime);
    const attachment = base64.replace(/data:[a-zA-Z]*\/.+;base64,/, "");
    const rAltTitle = fromValToMediaGalleryParam("alt_title", altTitle);
    const rName = fromValToMediaGalleryParam("name", name);

    try {
      const response = await this.request({
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
  };
}

async function fetchCredentials(url: string, clientId: Literal): Promise<ProjectCredential> {
  const response = await fetch(`${url}?client_id=${clientId}`);
  if (!response.ok) {
    throw new Error("Failed to get credentials...");
  }

  const data = await response.json();

  return credentialSchema.parse(data);
}

export { ApiClient, fetchCredentials };
