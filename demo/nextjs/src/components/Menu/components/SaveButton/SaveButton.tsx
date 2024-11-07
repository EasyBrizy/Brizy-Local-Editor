import { KTIcon } from "@/components/Metronic/helpers";
import clsx from "clsx";
import React, { MouseEventHandler } from "react";

export type Props = {
  type: "primary" | "error" | "success";
  onClick: MouseEventHandler;
  loading?: boolean;
};

export function SaveButton({ type, onClick, loading }: Props) {
  const className = clsx(
    "btn mt-8",
    type === "primary" && "btn-primary",
    type === "success" && "btn-success",
    type === "error" && "btn-danger",
  );

  return (
    <button className={className} onClick={onClick}>
      {type === "primary" && "Save"}
      {type === "error" && "Failed to Save"}
      {type === "success" && (
        <>
          <KTIcon iconName="check" iconType="solid" className="fs-1 p-0" />
          Saved
        </>
      )}
      {loading && <KTIcon iconName="loading" iconType="solid" className="fs-1 p-0 animate-spin" />}
    </button>
  );
}
