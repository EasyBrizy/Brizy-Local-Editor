import clsx from "clsx";
import { CSSProperties, forwardRef } from "react";
import styles from "./Action.module.scss";

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  active?: {
    fill: string;
    background: string;
  };
  cursor?: CSSProperties["cursor"];
}

export const Action = forwardRef<HTMLButtonElement, Props>(function Action(
  { active, className, cursor, style, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      {...props}
      className={clsx(styles.Action, className)}
      tabIndex={0}
      style={
        {
          ...style,
          cursor,
          "--fill": active?.fill,
          "--background": active?.background,
        } as CSSProperties
      }
    />
  );
});
