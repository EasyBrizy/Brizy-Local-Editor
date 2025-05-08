import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import MediaGallery from "@brizy/media-gallery";

export interface MediaContainerProps {
  isOpen: boolean,
  mediaUploadInstance?: MediaGallery
}

export type ContainerHandle = {
  update: (newProps: MediaContainerProps) => void;
};

export const Container = forwardRef<ContainerHandle>((_, ref) => {
  const [{ isOpen, mediaUploadInstance }, setState] = useState<MediaContainerProps>({ isOpen: false });

  useImperativeHandle(ref, () => ({
    update: (newProps) => setState(newProps),
  }));

  return <>
    {mediaUploadInstance && <Modal isOpen={isOpen}>
      <MediaUpload mediaUploadInstance={mediaUploadInstance}></MediaUpload>
    </Modal>}
  </>;
});

function Modal({ isOpen, children }:{isOpen:boolean, children?:ReactNode}) {
  //TODO: Modal styling
  return (
    <>{isOpen && children}</>
  );
}

function MediaUpload({ mediaUploadInstance }: { mediaUploadInstance: MediaGallery }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current && mediaUploadInstance.render(ref.current);

  }, [ref.current, mediaUploadInstance]);

  return <div ref={ref} />;
}
