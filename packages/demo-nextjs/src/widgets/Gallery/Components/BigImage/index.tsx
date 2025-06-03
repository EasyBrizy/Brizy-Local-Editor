import { Image } from "../../types";

export function BigImage({ image }: { image: Partial<Image> }) {
  return (
    <a className="gallery__big-image" href={image.src} target={"_blank"}>
      <img src={image.src} alt={image.title} />
    </a>
  );
}
