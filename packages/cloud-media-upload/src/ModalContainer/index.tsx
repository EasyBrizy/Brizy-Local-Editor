import React, { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { MediaUploadContainer } from "../MediaUploadContainer";
import { Modal } from "../Modal";
import { ContainerHandle, MediaContainerProps } from "./types";

export const ModalContainer = forwardRef<ContainerHandle, { rootContainer: HTMLElement }>(({ rootContainer }, ref) => {
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
      <Modal isOpen={isOpen} handleClose={_handleClose} rootContainer={rootContainer}>
        <MediaUploadContainer mediaUploadInstance={mediaUploadInstance} />
      </Modal>
    )
  );
});
