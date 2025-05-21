import MediaGallery from "@brizy/media-gallery";

export interface MediaContainerProps {
  isOpen: boolean;
  mediaUploadInstance?: MediaGallery;
}

export type ContainerHandle = {
  update: (newProps: MediaContainerProps) => void;
};
