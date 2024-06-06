import { useState } from "react";
import { Brizy } from "@brizy/core";
import "./index.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="custom-counter">
      <button
        className="custom-counter__increment"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <div className="custom-counter__count">{count}</div>
      <button
        className="custom-counter__decrement"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  );
};

Brizy.registerComponent({
  id: "Brizy.ThirdParty.Counter",
  component: {
    editor: Counter,
    view: Counter
  },
  title: "Counter",
  category: "custom"
});
