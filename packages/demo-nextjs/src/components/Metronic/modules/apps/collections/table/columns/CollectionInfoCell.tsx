import { FC } from "react";
import { Collection } from "../../core/_models";

type Props = {
  collection: Collection;
};

const CollectionInfoCell: FC<Props> = ({ collection }) => (
  <div className="d-flex align-items-center">
    <div className="d-flex flex-column">
      <a href="#" className="text-gray-800 text-hover-primary mb-1 text-capitalize" target="_blank">
        {collection.slug.item}
      </a>
    </div>
  </div>
);

export { CollectionInfoCell };
