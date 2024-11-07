import { ReactElement } from "react";
import { Props } from "../types";
import { AlphaMapPreview as Map } from "@brizy/builder-ui/lib/components/AlphaMap/index.preview";

export const View = (props: Props): ReactElement => {
  const { address, zoom = 13 } = props;

  return <Map zoom={zoom} address={address} />;
};
