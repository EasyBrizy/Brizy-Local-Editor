import packageConfig from "../config.json";
import minusImg from "./img/minus.png";
import plusImg from "./img/plus.png";
import "./index.scss";
import { Brizy } from "@brizy/core";
import { useState } from "react";

const metadata = Brizy.getMetaData(packageConfig);

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="custom-counter">
      <button
        className="custom-counter__decrement"
        onClick={() => setCount(count - 1)}
      >
        <img
          height="20px"
          src={`${metadata.pluginHost}/${minusImg}`}
          alt="decrement"
        />
      </button>
      <div className="custom-counter__count">{count}</div>
      <button
        className="custom-counter__increment"
        onClick={() => setCount(count + 1)}
      >
        <img
          height="20px"
          src={`${metadata.pluginHost}/${plusImg}`}
          alt="increment"
        />
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
