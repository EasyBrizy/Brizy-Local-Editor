import { AlphaCart } from "@brizy/builder-ui";
import "@brizy/builder-ui/lib/elements/AlphaCart/style/index.css";
import { Brizy } from "@brizy/core";
import { products } from "./products";
import { toolbarAlert } from "./toolbars/alert/alert";
import { alertClose } from "./toolbars/alert/alertClose";
import { toolbarAlertIcon } from "./toolbars/alert/alertIcon";
import { alertText } from "./toolbars/alert/alertText";
import { toolbarCart } from "./toolbars/cart";
import { footerCheckoutButton } from "./toolbars/footer/footerCheckoutButton";
import { footerText } from "./toolbars/footer/footerText";
import { footerTotalTitle } from "./toolbars/footer/footerTotalTitle";
import { footerTotalValue } from "./toolbars/footer/footerTotalValue";
import { toolbarHeaderClose } from "./toolbars/header/headerClose";
import { toolbarHeaderTitle } from "./toolbars/header/headerTitle";
import { productDetailsTitle } from "./toolbars/products/productDetailTitle";
import { productDetailsValue } from "./toolbars/products/productDetailValue";
import { productImage } from "./toolbars/products/productImage";
import { productPreviousPrice } from "./toolbars/products/productPreviousPrice";
import { productPrice } from "./toolbars/products/productPrice";
import { productRemoveButton } from "./toolbars/products/productRemoveButton";
import { productTitle } from "./toolbars/products/productTitle";

export const Cart = () => {
  return (
    <AlphaCart
      items={products}
      alertMessage="You are eligible for free shipping!"
      onClose={() => {}}
      onCheckout={() => {}}
    />
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Cart",
  component: { editor: Cart, view: Cart },
  title: "Cart",
  category: "custom",
  // @ts-ignore
  options: ({ getValue }) => {
    return [
      toolbarCart,
      toolbarHeaderTitle,
      toolbarHeaderClose({ getValue }),
      toolbarAlert,
      toolbarAlertIcon,
      alertText,
      alertClose({ getValue }),
      productTitle,
      productDetailsTitle,
      productDetailsValue,
      productPrice,
      productPreviousPrice,
      productRemoveButton({ getValue }),
      productImage,
      footerTotalTitle,
      footerTotalValue,
      footerCheckoutButton({ getValue }),
      footerText,
    ];
  },
});
