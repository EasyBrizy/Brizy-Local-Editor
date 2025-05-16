import React, { Fragment, useEffect, useRef } from "react";
import { createRoot, Root as RootType } from "react-dom/client";
import { MEDIA_UPLOAD_ROOT_CLASSNAME } from "../constants";
import { MediaContainerProps, Root, RootHandle } from "./Root";
import { Modal } from "./Modal";
import MediaGallery from "@brizy/media-gallery";

export function MediaUploadContainer({ mediaUploadInstance }: { mediaUploadInstance: MediaGallery }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current && mediaUploadInstance.render(ref.current);
  }, [ref.current, mediaUploadInstance]);

  return <div ref={ref} />;
}

// Defined outside the class since NewMediaUpload runs twice: first with undefined node,
// then with the correct one—creating two root container.
let rootContainer: HTMLElement | undefined;

export class ModalRoot {
  private handleRef = React.createRef<RootHandle>();
  private root?: RootType;
  private readonly node?: HTMLElement;

  constructor(node?: HTMLElement) {
    this.node = node;
    this.makeRoot();
  }

  private makeContainer(): HTMLElement {
    if (this.node) {
      return this.node;
    }

    const container = document.createElement("div");
    container.className = MEDIA_UPLOAD_ROOT_CLASSNAME;

    return window.document.body.appendChild(container);
  }

  private get rootContainer() {
    if (!rootContainer) {
      rootContainer = this.makeContainer();
      return rootContainer;
    }

    return rootContainer;
  }

  private makeRoot(): void {
    this.root = createRoot(this.rootContainer);
    const Wrapper = this.node ? Fragment : Modal;

    this.root.render(<Root MediaUploadContainer={MediaUploadContainer} Wrapper={Wrapper} ref={this.handleRef} />);
  }

  update(props: MediaContainerProps): void {
    this.handleRef.current?.update(props);
  }
}
