import { ReactElement } from "react";
import { Items } from "../controls/Items";
import { Won } from "../controls/Won";
import { Wrapper } from "../controls/Wrapper";
import { Props } from "../types";
import { getItems } from "../utils/getItems";

export const View = (props: Props): ReactElement => {
  const items = getItems(props);

  return (
    <Wrapper>
      <h2 className="spin-wheel-title">Spin The Wheel</h2>
      <p className="spin-wheel-subtitle">Exciting Prizes Await You!</p>
      <Items items={items} />
      <Won />
    </Wrapper>
  );
};
