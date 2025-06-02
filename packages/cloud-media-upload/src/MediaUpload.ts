import MediaGallery from "@brizy/media-gallery";
import {
  DEV_GET_USER_CONFIG_ENDPOINT_URL,
  DEV_RESIZE_PATTERNS,
  DEV_RESIZE_URL,
  GET_USER_CONFIG_ENDPOINT_URL,
  RESIZE_PATTERNS,
  RESIZE_URL,
} from "./constants";
import { getAcceptableTypes, onInsertFiles } from "./utils";
import { HandlerArgs, Literal, ProjectCredential, Response } from "@types";
import { Config } from "@brizy/media-gallery/lib/app";
import type { AddMediaData, AddMediaExtra } from "@builder/core";
import "@brizy/media-gallery/dist/index.css";
import { ModalController } from "./ModalController";
import { ApiClient, fetchCredentials } from "./api-client";

export class MediaUpload {
  private readonly clientId: Literal;
  private readonly isDev: boolean;
  private modalController: ModalController;
  private credentials?: ProjectCredential;

  constructor({ node, clientId, isDev }: { clientId: Literal; node?: HTMLElement; isDev?: boolean }) {
    this.clientId = clientId;
    this.isDev = isDev ?? false;
    this.modalController = new ModalController(node);
  }

  private async getCredentials() {
    if (this.credentials) {
      return this.credentials;
    }

    try {
      this.credentials = await fetchCredentials(this.credentialEndpoint, this.clientId);

      return this.credentials;
    } catch (error) {
      this.log(`${error}`);
    }
  }

  private async getConfig(addMediaHandlerArgs: HandlerArgs): Promise<Config | undefined> {
    const { res, rej, extra } = addMediaHandlerArgs;
    const credentials = await this.getCredentials();

    if (!credentials) {
      this.log("Failed to get credentials...");
      rej("Failed to get credentials...");
      return;
    }

    const api = new ApiClient(credentials);

    return {
      development: this.isDev,
      origin: "*",
      insertFilesType: "single",
      acceptableTypes: getAcceptableTypes(extra.acceptedExtensions),
      mediaLibrary: {
        getItems: api.getItems,
        removeItems: api.removeItems,
        updateItem: api.updateItem,
        uploadItem: api.uploadItem,
      },

      //#region TODO: Remove when https://github.com/bagrinsergiu/blox-editor/issues/28977 will be done
      stockPhotos: {
        getItems: () => Promise.resolve(undefined),
        downloadItem: () => Promise.resolve({ url: "test" }),
      },
      //#endregion

      onClose: () => {
        rej("File upload was cancelled");
        this.handleClose();
      },
      onInsertFiles: onInsertFiles(res, rej, this.handleClose),
    };
  }

  private handleOpen(config: Config) {
    this.modalController.update({
      isOpen: true,
      mediaUploadInstance: new MediaGallery(config),
    });
  }

  private handleClose = () => {
    this.modalController.update({ isOpen: false });
  };

  private addMediaHandler = async (res: Response<AddMediaData>, rej: Response<string>, extra: AddMediaExtra) => {
    const config = await this.getConfig({ res, rej, extra });

    if (!config) {
      rej("[MediaUpload]: config error");
      return;
    }

    this.handleOpen(config);
  };

  private log(msg: string): void {
    if (this.isDev) {
      console.log("[MediaUpload]: ", msg);
    }
  }

  private get credentialEndpoint(): string {
    return this.isDev ? DEV_GET_USER_CONFIG_ENDPOINT_URL : GET_USER_CONFIG_ENDPOINT_URL;
  }

  get resizeUrl(): string {
    return this.isDev ? DEV_RESIZE_URL : RESIZE_URL;
  }

  get resizePatterns() {
    return this.isDev ? DEV_RESIZE_PATTERNS : RESIZE_PATTERNS;
  }

  get addMedia() {
    return { handler: this.addMediaHandler };
  }

  get mediaConfig() {
    return {
      addMedia: this.addMedia,
      mediaResizeUrl: this.resizeUrl,
      imagePatterns: this.resizePatterns,
    };
  }
}
