import { FC } from "react";

interface Props {
  count: number;
  isLoading: boolean;
  onDelete: VoidFunction;
}

export const ListGrouping: FC<Props> = ({ count, isLoading, onDelete }) => {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <div className="fw-bolder me-5">
        <span className="me-2">{count}</span> Selected
      </div>

      <button type="button" className="btn btn-danger" data-kt-indicator={isLoading ? "on" : "off"} onClick={onDelete}>
        <span className="indicator-label">Delete Selected</span>
        <span className="indicator-progress">
          Please wait...
          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
        </span>
      </button>
    </div>
  );
};
