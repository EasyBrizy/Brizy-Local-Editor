import classNames from "classnames";
import { ItemProps } from "./types";

export function Item(props: ItemProps) {
  const { image, onClick, className } = props;

  const _className = classNames("item", className);
  return (
    <figure onClick={onClick} className={_className}>
      <div className="image-wrapper">
        <img src={image.src} alt={image.title} />
      </div>
      <figcaption>{image.title}</figcaption>
    </figure>
  );
}
