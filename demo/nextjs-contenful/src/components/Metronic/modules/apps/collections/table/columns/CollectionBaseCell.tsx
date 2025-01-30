import { FC } from "react";

type Props = {
  content?: string;
};

const CollectionBaseCell: FC<Props> = ({ content }) => <div>{content}</div>;

export { CollectionBaseCell };
