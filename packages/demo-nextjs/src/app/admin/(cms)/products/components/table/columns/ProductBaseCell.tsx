import { FC } from "react";

type Props = {
  content?: string;
};

const ProductBaseCell: FC<Props> = ({ content }) => <div>{content}</div>;

export { ProductBaseCell };
