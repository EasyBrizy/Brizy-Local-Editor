import MediaGallery from "@brizy/media-gallery";
import { GET_USER_CONFIG_ENDPOINT_URL } from "../constants";
import { getMediaUploadConfig } from "./utils";

import { HandlerArgs, Literal, ProjectCredential, Response } from "@types";
import { Config } from "@brizy/media-gallery/lib/app";
import { AddMediaData, AddMediaExtra } from "@builder/core/build/es/types/media";

import "@brizy/media-gallery/dist/index.css";
import React from "react";
import { createRoot, Root } from "react-dom/client";
import { Container, ContainerHandle, MediaContainerProps } from "./Container";

export class MediaUpload {
  private readonly clientId: Literal;
  private readonly isDev: boolean;
  private readonly node: HTMLElement;

  private handleRef = React.createRef<ContainerHandle>();
  private credentials?: ProjectCredential;
  private readonly root: Root;

  constructor(node: HTMLElement, clientId: Literal, isDev?: boolean) {
    this.clientId = clientId;
    this.node = node;
    this.isDev = isDev ?? false;

    this.root = createRoot(this.node);
    this.root.render(<Container ref={this.handleRef} />);
  }

  private log(msg: string): void {
    if (this.isDev) {
      console.log("[MediaUpload]: ", msg);
    }
  }

  private async getCredentials() {
    if (this.credentials) {
      return this.credentials;
    }

    try {
      const response = await fetch(`${GET_USER_CONFIG_ENDPOINT_URL}?client_id=${this.clientId}`);

      if (!response.ok) {
        this.log("Failed to get credentials...");
        return;
      }

      const data = await response.json();

      if (!data?.projectId || !data?.token) {
        this.log("Missing projectId or token...");
        return;
      }

      this.credentials = data;

      return this.credentials;
    } catch (error) {
      this.log(`${error}`);
    }
  }

  private async getConfig(addMediaHandlerArgs: HandlerArgs): Promise<Config | undefined> {
    const credentials = await this.getCredentials();

    if (!credentials) {
      this.log("Failed to get credentials...");
      return;
    }

    return getMediaUploadConfig({
      credentials,
      handlerArgs: addMediaHandlerArgs,
      handleClose: this.handleClose,
      isDev: this.isDev,
    });
  }

  private handleOpen(config: Config) {
    this.updateComponentProps({
      isOpen: true,
      mediaUploadInstance: new MediaGallery(config),
    });
  }

  private handleClose = () => {
    this.updateComponentProps({ isOpen: false });
  };

  private updateComponentProps({ isOpen, mediaUploadInstance }: MediaContainerProps) {
    this.handleRef.current?.update({ isOpen, mediaUploadInstance });
  }

  private get addMediaHandler() {
    return async (res: Response<AddMediaData>, rej: Response<string>, extra: AddMediaExtra) => {
      const config = await this.getConfig({ res, rej, extra });

      if (!config) {
        rej("[MediaUpload]: config error");
        return;
      }

      this.handleOpen(config);
    };
  }

  get resizeUrl() {
    return "https://cloud-1de12d.b-cdn.net/media";
  }

  get resizePatterns() {
    return {
      full: "{{ [baseUrl] }}/{{ iW=[iW] }}&{{ iH=[iH] }}&{{ oX=[oX] }}&{{ oY=[oY] }}&{{ cW=[cW] }}&{{ cH=[cH] }}/{{ [uid] }}/{{ [fileName] }}",
      original: "{{ [baseUrl] }}/{{ [sizeType] }}/{{ [uid] }}/{{ [fileName] }}",
      split: "{{ [baseUrl] }}/{{ iW=[iW] }}&{{ iH=[iH] }}/{{ [uid] }}/{{ [fileName] }}",
    };
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
