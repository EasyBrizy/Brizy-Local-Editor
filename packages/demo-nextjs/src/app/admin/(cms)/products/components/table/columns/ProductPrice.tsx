import { FC } from "react";

interface Props {
  currencyCode: string;
  amount: number;
}

export const ProductPrice: FC<Props> = ({ currencyCode, amount }) => (
  <span>
    {currencyCode} {amount}
  </span>
);
