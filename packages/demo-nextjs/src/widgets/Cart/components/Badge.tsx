import { AlphaBadge } from "@brizy/builder-ui/lib/components/AlphaBadge";
import { AlphaButton } from "@brizy/builder-ui/lib/components/AlphaButton";
import { FC, ReactElement } from "react";

interface Props {
  count: number;
  icon: ReactElement;
}

export const Badge: FC<Props> = ({ count, icon }) => (
  <AlphaBadge count={count} showZero>
    <AlphaButton icon={icon} className="cart-btn" />
  </AlphaBadge>
);
