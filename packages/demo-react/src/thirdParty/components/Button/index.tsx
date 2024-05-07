import { Brizy } from "@brizy/core";
import React from "react";

interface Props {}

export function Button(props: Props): JSX.Element {
  return <div className="componentToolbar">hello</div>;
}

Brizy.registerComponent(Button, {
  id: "ThirdParty.Button",
  title: "My Button",
});
