import { makeUrl } from "./makeUrl";
import { API_URL } from "../../constants";
import { ProjectCredential } from "@types";

export type RequestFn = (parameters: RequestInit, url?: string, queryParams?: Record<string, string>) => Promise<Response>

export const getRequestFn = ({ projectId, token }: ProjectCredential): RequestFn =>
  (parameters: RequestInit, url = "", queryParams = {}): Promise<Response> => {
    const fetchUrl = makeUrl(`${API_URL}/${projectId}/media${url}`, queryParams);

    return fetch(fetchUrl, {
      ...parameters,
      headers: {
        ...parameters.headers,
        ...(token ? { "x-auth-user-token": token } : {}),
        // "x-editor-version": editorVersion,
      },
    });
  };


