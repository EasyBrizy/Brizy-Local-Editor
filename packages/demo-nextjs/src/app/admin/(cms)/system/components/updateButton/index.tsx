import React, { FC } from "react";
import { Props } from "./types";

const SavingIndicator = () => (
  <>
    Saving...
    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
  </>
);

export const UpdateButton: FC<Props> = ({ isFetching, disabled, onClick }) => {
  return (
    <button className="btn btn-primary w-fit" onClick={onClick} disabled={disabled}>
      {isFetching ? <SavingIndicator /> : "Save Changes"}
    </button>
  );
};
