import React from "react";
import { Root as RootType, createRoot } from "react-dom/client";
import { ModalContainer } from "../ModalContainer";
import { ContainerHandle, MediaContainerProps } from "../ModalContainer/types";
import { MEDIA_UPLOAD_ROOT_CLASSNAME } from "../constants";

// Defined outside the class since NewMediaUpload runs twice: first with undefined node,
// then with the correct one—creating two root container.
const rootContainer = new Map<HTMLElement | undefined, HTMLElement>();

export class ModalController {
  private handleRef = React.createRef<ContainerHandle>();
  private root?: RootType;
  private readonly node?: HTMLElement;

  constructor(node?: HTMLElement) {
    this.node = node;
    this.makeRoot();
  }

  private makeContainer(): HTMLElement {
    if (this.node) {
      rootContainer.set(this.node, this.node);
      return this.node;
    }

    const container = document.createElement("div");
    container.className = MEDIA_UPLOAD_ROOT_CLASSNAME;
    const _node = window.document.body.appendChild(container);
    rootContainer.set(this.node, _node);

    return _node;
  }

  private get rootContainer() {
    return rootContainer.get(this.node) ?? this.makeContainer();
  }

  private makeRoot(): void {
    if (typeof document === "undefined") {
      return;
    }

    this.root = createRoot(this.rootContainer);
    this.root.render(<ModalContainer ref={this.handleRef} rootContainer={this.rootContainer} />);
  }

  update(props: MediaContainerProps): void {
    this.handleRef.current?.update(props);
  }
}
