import { Item } from "../Item";
import { ItemsProps } from "./types";

export function Items(props: ItemsProps) {
  const { images, activeIndex, setActiveIndex } = props;
  return (
    <div className="gallery__all-images">
      {images.map((image, index) => (
        <Item
          key={index}
          image={image}
          className={activeIndex === index ? "active" : ""}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}
