import { ReactElement } from "react";
import { Props } from "../types";
import { AlphaMapEditor as Map } from "@brizy/builder-ui/lib/components/AlphaMap/index.editor";

export const Editor = (props: Props): ReactElement => {
  const { address, zoom = 13 } = props;

  return <Map address={address} zoom={zoom} />;
};
