import { Brizy } from "@brizy/core";
import { CartEditor } from "./index.editor";
import "./index.scss";
import { CartView } from "./index.view";
import { getToolbarOptions } from "./toolbars";

const Cart = {
  Editor: CartEditor,
  View: CartView,
};

export default Cart;

Brizy.registerComponent({
  id: "Brizy.ThirdParty.Cart",
  component: {
    editor: CartEditor,
    view: CartView,
  },
  title: "Cart",
  category: "ecommerce",
  options: getToolbarOptions,
});
