import React from "react";
import { AlphaConfigProvider } from "@brizy/ui/es/AlphaConfigProvider";
import { AlphaModal } from "@brizy/ui/es/AlphaModal";
import { ModalProps } from "./types";

export function Modal({ isOpen, children, handleClose, rootContainer }: ModalProps) {
  return (
    <AlphaConfigProvider>
      <AlphaModal
        getContainer={rootContainer}
        getStyleContainer={rootContainer.ownerDocument.head}
        className="brz-ed-media-upload-modal"
        open={!!isOpen}
        onClose={() => handleClose?.()}
      >
        {children}
      </AlphaModal>
    </AlphaConfigProvider>
  );
}
