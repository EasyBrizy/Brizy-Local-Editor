import { AddableItems, Image } from "@/widgets/Gallery/types";
import { ImageUtility } from "@brizy/core";
import { useMemo, useRef, useState } from "react";
import { BigImage } from "./Components/BigImage";
import { Empty } from "./Components/Empty";
import { Items } from "./Components/Items";
import { Capitalize } from "./utils";

interface GalleryProps {
  galleryItems: AddableItems;

  [key: string]: unknown;
}

export default function Gallery(props: GalleryProps) {
  const { galleryItems } = props;
  const imgUtils = useRef<ImageUtility>(new ImageUtility());

  const images = useMemo(
    (): Array<Partial<Image>> =>
      galleryItems.map(({ id }) => {
        const imageKey = `galleryItems${Capitalize(id)}Img`;
        const imageData = imgUtils.current.getImageData({ id: imageKey, v: props });
        const imageTitleKey = `galleryItems${Capitalize(id)}Title`;

        return { src: imageData.src, title: props[imageTitleKey] as string };
      }),

    [galleryItems, imgUtils, props],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = images.length > 0;

  return (
    <div className="gallery">
      {hasImages ? (
        <>
          <BigImage image={images[activeIndex]} />
          <Items images={images} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
}
