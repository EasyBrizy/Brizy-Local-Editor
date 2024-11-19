import { Brizy } from "@brizy/core";
import { CartEditor } from "./components/Editor";
import { CartView } from "./components/View";
import "./index.scss";
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
  tab: {
    id: "shopify",
    icon: "nc-shopify-logo",
    title: "Add Shopify Elements",
  },
});
