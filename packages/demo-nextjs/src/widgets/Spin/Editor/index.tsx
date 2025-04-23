import { ReactElement, useMemo, useState } from "react";
import { Items } from "../controls/Items";
import { Won } from "../controls/Won";
import { Wrapper } from "../controls/Wrapper";
import { Props } from "../types";
import { getItems } from "../utils/getItems";

export const Editor = (props: Props): ReactElement => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const items = getItems(props);

  const spinWheel = () => {
    setSpinning(true);
    const randomIndex = Math.floor(Math.random() * items.length);
    const extraSpins = 5 * 360; // Ensure at least 5 full rotations
    const finalAngle = (360 / items.length) * randomIndex;
    const newRotation = rotation + extraSpins + finalAngle;

    setRotation(newRotation);
    setTimeout(() => {
      setSpinning(false);
      setSelectedIndex(randomIndex);
    }, 3000);
  };
  const style = useMemo(
    () => ({
      transform: `rotate(${rotation}deg)`,
      transition: spinning ? "transform 3s ease-out" : "none",
    }),
    [rotation, spinning],
  );

  return (
    <Wrapper>
      <h2 className="spin-wheel-title">Spin The Wheel</h2>
      <p className="spin-wheel-subtitle">Exciting Prizes Await You!</p>

      <Items items={items} spinning={spinning} style={style} onSpinStart={spinWheel} />

      {selectedIndex !== undefined && !spinning && <Won data={items[selectedIndex ?? 0]} />}
    </Wrapper>
  );
};
