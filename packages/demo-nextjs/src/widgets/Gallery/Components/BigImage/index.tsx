import { Image } from "../../types";

export function BigImage({ image }: { image: Partial<Image> }) {
  return (
    <div className="gallery__big-image">
      <a href={image.src} target={"_blank"}>
        <img src={image.src} alt={image.title} />
      </a>
    </div>
  );
}
