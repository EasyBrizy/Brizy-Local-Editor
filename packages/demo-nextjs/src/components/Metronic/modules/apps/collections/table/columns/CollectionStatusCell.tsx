import { FC } from "react";

type Props = {
  status?: string;
};

const CollectionStatusCell: FC<Props> = ({ status }) => (
  <div className="badge badge-light-success fw-bolder">{status}</div>
);

export { CollectionStatusCell };
