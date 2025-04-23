import { ReactElement } from "react";
import { Button } from "../Button";
import { Item } from "../Item";
import { Props } from "./types";

export const Items = (props: Props): ReactElement => {
  const { items, style, spinning, onSpinStart } = props;

  // Display an error message when no spin wheel options are configured
  // The user needs to navigate to the toolbar and set up the number of spin wheels
  if (items.length === 0) {
    return (
      <div>No spin wheel options configured. Please go to the toolbar and set the number of spin wheels you need.</div>
    );
  }

  return (
    <div className="spin-wheel">
      <div className="wheel" style={style}>
        <ul className="wheel-items">
          {items.map((item, index) => (
            <Item
              // @ts-expect-error: Custom attribute for scoring
              attributes={{ "data-score": item.score }}
              key={index}
              style={{
                transform: `rotate(${(360 / items.length) * index}deg)`,
                backgroundColor: index % 2 === 0 ? "#FCD34D" : "#93C5FD",
              }}
            >
              <span>{`${item.score}${item.title}`}</span>
            </Item>
          ))}
        </ul>
      </div>

      <div className="pointer" />
      <Button onClick={onSpinStart} disabled={spinning}>
        {spinning ? "Spinning..." : "SPIN"}
      </Button>
    </div>
  );
};
