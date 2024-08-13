import { FC } from "react";
import { Collection } from "../../core/_models";

type Props = {
  collection: Collection;
};

const CollectionInfoCell: FC<Props> = ({ collection }) => {
  const link = `/${collection.slug.collection}/${collection.slug.item}`;

  return (
    <div className="d-flex align-items-center">
      <div className="d-flex flex-column">
        <a href={link} className="text-gray-800 text-hover-primary mb-1 text-capitalize">
          {collection.slug.item}
        </a>
      </div>
    </div>
  );
};

export { CollectionInfoCell };
