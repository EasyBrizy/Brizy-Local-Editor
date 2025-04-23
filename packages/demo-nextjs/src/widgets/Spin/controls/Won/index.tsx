import { ReactElement } from "react";
import { Props } from "./types";

export const Won = (props: Props): ReactElement => {
  const { data } = props;

  if (!data) {
    return <div className="result" />;
  }

  const { score, title } = data;

  return <div className="result">{`You won: ${score}${title}!`}</div>;
};
