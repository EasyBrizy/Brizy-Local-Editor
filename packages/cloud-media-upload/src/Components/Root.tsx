import React, { useState, useImperativeHandle, forwardRef, Fragment, useCallback } from "react";
import MediaGallery from "@brizy/media-gallery";
import { Modal } from "./Modal";
import { MediaUploadContainer } from "./index";

export interface MediaContainerProps {
  isOpen: boolean;
  mediaUploadInstance?: MediaGallery;
}

export type RootHandle = {
  update: (newProps: MediaContainerProps) => void;
};

export interface ContainerProps {
  MediaUploadContainer: typeof MediaUploadContainer;
  Wrapper: typeof Fragment | typeof Modal;
}

export const Root = forwardRef<RootHandle, ContainerProps>(({ MediaUploadContainer, Wrapper }, ref) => {
  const [{ isOpen, mediaUploadInstance }, setState] = useState<MediaContainerProps>({ isOpen: false });

  useImperativeHandle(ref, () => ({
    update: (newProps) => setState(newProps),
  }));

  const canRender = typeof mediaUploadInstance !== "undefined" && isOpen;

  const _handleClose = useCallback(() => {
    mediaUploadInstance?.config.onClose();
  }, [mediaUploadInstance]);

  return (
    canRender && (
      <Wrapper isOpen={isOpen} handleClose={_handleClose}>
        <MediaUploadContainer mediaUploadInstance={mediaUploadInstance} />
      </Wrapper>
    )
  );
});
