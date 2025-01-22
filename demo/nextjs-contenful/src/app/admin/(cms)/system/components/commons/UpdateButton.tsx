import React, { FC } from "react";

interface Props {
  isFetching: boolean;
  disabled: boolean;
  onClick: VoidFunction;
}

const SavingIndicator = () => (
  <>
    Saving...
    <span className="spinner-border spinner-border-sm align-middle ms-2" />
  </>
);

export const UpdateButton: FC<Props> = ({ isFetching, disabled, onClick }) => {
  return (
    <button className="btn btn-primary w-fit" onClick={onClick} disabled={disabled}>
      {isFetching ? <SavingIndicator /> : "Save Changes"}
    </button>
  );
};
