import { FC } from "react";
import { LeadField } from "../../../core/types";

interface Props {
  data: LeadField[];
}

export const LeadsDataCell: FC<Props> = ({ data }) =>
  data.map(({ label, value }, index) => (
    <div key={index} className="d-flex align-items-center">
      <div className="d-flex gap-5 align-items-center">
        <span className="text-dark fw-bolder fs-6">{label}:</span>
        <span className="text-muted fw-bold text-muted fs-7">{value}</span>
      </div>
    </div>
  ));
