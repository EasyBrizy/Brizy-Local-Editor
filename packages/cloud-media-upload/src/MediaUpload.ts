import MediaGallery from "@brizy/media-gallery";
import "@brizy/media-gallery/dist/index.css";
import { Config } from "@brizy/media-gallery/lib/app";
import type { AddMediaData, AddMediaExtra } from "@builder/core";
import { HandlerArgs, Literal, Response } from "@types";
import { ModalController } from "./ModalController";
import { ApiClient, fetchCredentials } from "./api-client";
import {
  DEV_GET_USER_CONFIG_ENDPOINT_URL,
  DEV_RESIZE_PATTERNS,
  DEV_RESIZE_URL,
  GET_USER_CONFIG_ENDPOINT_URL,
  RESIZE_PATTERNS,
  RESIZE_URL,
} from "./constants";
import { getAcceptableTypes, onInsertFiles } from "./utils";

export class MediaUpload {
  private readonly clientId: Literal;
  private readonly isDev: boolean;
  private modalController: ModalController;

  constructor({ node, clientId, isDev }: { clientId: Literal; node?: HTMLElement; isDev?: boolean }) {
    this.clientId = clientId;
    this.isDev = isDev ?? false;
    this.modalController = new ModalController(node);
  }

  private async getConfig(addMediaHandlerArgs: HandlerArgs): Promise<Config> {
    const { res, rej, extra } = addMediaHandlerArgs;

    const credentials = await fetchCredentials(this.credentialEndpoint, this.clientId);
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
        rej(new Error("File upload was cancelled"));
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

  private addMediaHandler = async (res: Response<AddMediaData>, rej: Response<Error>, extra: AddMediaExtra) => {
    try {
      const config = await this.getConfig({ res, rej, extra });
      this.handleOpen(config);
    } catch (err) {
      this.log(err);
      const error = err instanceof Error ? err : new Error(`${err}`);
      rej(error);
    }
  };

  private log(msg: unknown): void {
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
