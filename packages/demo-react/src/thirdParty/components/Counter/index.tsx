import { Brizy } from "@brizy/core";
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((v) => v + 1)}>+</button>
      <button onClick={() => setCount((v) => v - 1)}>-</button>
      {count}
    </div>
  );
};

Brizy.registerComponent(Counter, {
  id: "ThirdParty.Counter",
  title: "My Counter",
});
