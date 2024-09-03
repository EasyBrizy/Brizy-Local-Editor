import { CollectionsTable } from "@/components/Metronic/modules/apps/collections/table/CollectionsTable";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import { getLastItemsCreated } from "./_requests";

type Props = {
  className: string;
};

const LIMIT = 5;
const tableConfig = {
  disablePagination: true,
};

const LatestCreatedItems: FC<Props> = ({ className }) => {
  const [items, setItems] = useState([]);

  const { isLoading } = useQuery("lastItems", () => getLastItemsCreated(LIMIT), {
    onSuccess: ({ data }) => {
      setItems(data);
    },
  });

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Latest</span>
          <span className="text-muted mt-1 fw-semibold fs-7">Recently published</span>
        </h3>
      </div>
      {/* end::Header */}
      <CollectionsTable collections={items} isLoading={isLoading} config={tableConfig} />
    </div>
  );
};

export { LatestCreatedItems };
