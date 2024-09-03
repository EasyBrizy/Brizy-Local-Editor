import clsx from "clsx";
import { FC } from "react";

interface Props {
  quantity: number;
}

export const ProductQuantity: FC<Props> = ({ quantity }) => {
  const isLowQuantity = quantity < 10 && quantity > 0;
  const isSoldOut = quantity === 0;

  const badgeClassName = clsx("badge", {
    "badge-light-warning": isLowQuantity,
    "badge-light-danger": isSoldOut,
  });

  const quantityClassName = clsx("fw-bold ms-3", {
    "text-danger": isSoldOut,
    "text-warning": isLowQuantity,
  });

  return (
    <>
      {isLowQuantity && <span className={badgeClassName}>Low stock</span>}
      {isSoldOut && <span className={badgeClassName}>Sold out</span>}
      <span className={quantityClassName}>{quantity}</span>
    </>
  );
};
