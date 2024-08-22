import { FC } from "react";

type Props = {
  isSelected: boolean;
  onSelect: VoidFunction;
};

const SelectionCell: FC<Props> = ({ isSelected, onSelect }) => (
  <div className="form-check form-check-custom form-check-solid">
    <input
      className="form-check-input"
      type="checkbox"
      data-kt-check={isSelected}
      data-kt-check-target="#kt_table_users .form-check-input"
      checked={isSelected}
      onChange={onSelect}
    />
  </div>
);

export { SelectionCell };
