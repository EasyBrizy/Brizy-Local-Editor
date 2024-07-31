import clsx from "clsx";
import { FC } from "react";
import { Collection } from "../../core/_models";

type Props = {
  collection: Collection;
};

const UserInfoCell: FC<Props> = ({ collection }) => (
  <div className="d-flex align-items-center">
    {/* begin:: Avatar */}
    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
      <a href="#">
        <div className={clsx("symbol-label fs-3")}>{collection.slug.collection}</div>
      </a>
    </div>
    <div className="d-flex flex-column">
      <a href="#" className="text-gray-800 text-hover-primary mb-1">
        {collection.slug.item}
      </a>
    </div>
  </div>
);

export { UserInfoCell };
