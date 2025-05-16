import React, { PropsWithChildren } from "react";
import { AlphaModal } from "@brizy/ui";

export function Modal({
  isOpen,
  children,
  handleClose,
}: PropsWithChildren & {
  isOpen?: boolean;
  handleClose?: VoidFunction;
}) {
  return (
    <AlphaModal
      // getContainer={getContainer}
      // getStyleContainer={window.parent.document.head}
      className="brz-ed-media-upload-modal"
      open={!!isOpen}
      onClose={() => handleClose?.()}
    >
      {children}
    </AlphaModal>
  );
}
