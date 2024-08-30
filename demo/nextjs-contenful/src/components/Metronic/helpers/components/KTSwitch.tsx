import clsx from "clsx";
import { FC } from "react";

interface Props {
  label?: string;
  value?: boolean;
  onChange?: VoidFunction;
  disabled?: boolean;
  className?: string;
}

export const KTSwitch: FC<Props> = ({ label, value, onChange, disabled, className }) => {
  const classNames = clsx("form-check form-switch form-check-solid", className);

  return (
    <div className={classNames}>
      <input
        className="form-check-input"
        type="checkbox"
        disabled={disabled}
        id="switcher"
        onChange={onChange}
        checked={value}
      />
      {label && (
        <label className="form-check-label" htmlFor="switcher">
          {label}
        </label>
      )}
    </div>
  );
};
