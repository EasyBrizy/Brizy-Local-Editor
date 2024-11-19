import { Brizy as BrizyCore } from "@brizy/core";
import { AddToCartEditor } from "./components/Editor";
import { AddToCartView } from "./components/View";
import "./index.scss";
import { getToolbar } from "./toolbar";

BrizyCore.registerComponent({
  id: "Brizy.ThirdParty.AddToCart",
  component: {
    editor: AddToCartEditor,
    view: AddToCartView,
  },
  title: "Add to cart",
  icon: "nc-woo-add-to-cart",
  tab: {
    id: "shopify",
    icon: "nc-shopify-logo",
    title: "Add Shopify Elements",
  },
  category: "products",
  options: getToolbar,
});
