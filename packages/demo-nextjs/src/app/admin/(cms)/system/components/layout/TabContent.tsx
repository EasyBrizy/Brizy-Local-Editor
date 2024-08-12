import { Loading } from "@/components/Metronic/helpers/components/Loading";
import clsx from "clsx";
import { FC } from "react";
import { ComponentTab } from "./types";

interface Props {
  isFetching: boolean;
  data: any;
  componentsTabs: ComponentTab[];
}

export const TabContent: FC<Props> = ({ isFetching, data, componentsTabs }) => (
  <div className="tab-content position-relative">
    {isFetching && !data ? (
      <Loading />
    ) : (
      componentsTabs.map(({ id, Component }, index) => (
        <div
          key={id}
          id={id}
          className={clsx("tab-pane", {
            active: index === 0,
          })}
        >
          <Component />
        </div>
      ))
    )}
  </div>
);
