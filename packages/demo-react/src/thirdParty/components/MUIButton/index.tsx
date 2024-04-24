import { Brizy } from "@brizy/core";
import Button from "@mui/material/Button";
import * as React from "react";

export function ButtonUsage() {
  return <Button variant="contained">Hello world( ESBuild MUI)</Button>;
}

Brizy.registerComponent(ButtonUsage, {
  id: "MUIButton",
  title: "MUIButton",
});
