import { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  rootContainer: HTMLElement;
  isOpen?: boolean;
  handleClose?: VoidFunction;
}
