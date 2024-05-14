import { Brizy } from "@brizy/core";
import Button from "@mui/material/Button";

export const ButtonUsage = () => {
  return <Button variant="contained">Hello world</Button>;
};

Brizy.registerComponent(ButtonUsage, {
  id: "materialComponent",
  title: "test material",
  category: "custom",
});
