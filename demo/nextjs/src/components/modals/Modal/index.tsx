import { FC, ReactElement, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export const Modal: FC<{ children: ReactElement }> = (props) => {
  const elRef = useRef<HTMLDivElement>(document.createElement("div"));

  useEffect(() => {
    const modalRoot = document.body;
    const node = elRef.current;
    modalRoot?.appendChild(node);

    return () => {
      modalRoot?.removeChild(node);
    };
  }, []);

  return ReactDOM.createPortal(props.children, elRef.current ?? document.body);
};
