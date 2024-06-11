import packageConfig from "../config.json";
import bulbImg from "./img/bulb.jpg";
import "./index.scss";
import { Brizy } from "@brizy/core";
import { useState } from "react";

const metadata = Brizy.getMetaData(packageConfig);

export const Counter = () => {
  console.log("Metadata:", metadata);
  const [count, setCount] = useState(0);

  return (
    <div className="custom-counter">
      <img src={`${metadata.pluginHost}/${bulbImg}`} />
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
