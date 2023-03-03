import React, { ChangeEvent, MouseEvent, ReactElement, useState } from "react";
import { Modal } from "../Modal";

export interface Props {
  opened: boolean;
  onAdd: (s: string) => void;
  onClose?: VoidFunction;
}

export const DynamicContentModal = (props: Props): ReactElement | null => {
  const { opened, onAdd, onClose } = props;
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | undefined>();

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    if (value.trim().length) {
      onAdd(value);
      setValue("");
      setError(undefined);
    } else {
      setError("Input could not be empty");
    }
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.classList.contains("brz-react-portal")) {
      onClose?.();
    }
  };

  return opened ? (
    <Modal>
      <div
        className="brz-react-portal"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.78)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleClick}
      >
        <div
          style={{
            width: "50%",
            height: "50%",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Name</p>
          <div>
            <span>
              <input value={value} type="text" placeholder="Placeholder label..." onChange={handelChange} />
            </span>
            {error && <span style={{ color: "red" }}>{error}</span>}
            <span style={{ marginLeft: "10px" }}>
              <button onClick={handleAdd}>Add</button>
            </span>
          </div>
        </div>
      </div>
    </Modal>
  ) : null;
};
