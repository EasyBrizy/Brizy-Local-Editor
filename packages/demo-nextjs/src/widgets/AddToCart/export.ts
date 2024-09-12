import { handleAddToCart, loadProductData, onChangeVariant } from "./utils";

document.addEventListener("DOMContentLoaded", () => {
  const addToCarts = document.querySelectorAll<HTMLElement>(".add-to-cart-third-party-wrapper");
  const variants = document.querySelectorAll<HTMLElement>(".brz-shopify-variant-container");

  addToCarts.forEach((item) => {
    const { productId } = item.dataset;
    const button = item.querySelector<HTMLButtonElement>(".add-to-cart-third-party");

    if (productId && button) {
      button.addEventListener("click", () => {
        handleAddToCart(button, productId);
      });
    }
  });

  variants.forEach((variant) => {
    variant
      .querySelectorAll(".brz-shopify-variant-radio-block, .brz-shopify-variant-items li")
      .forEach((item) => item.addEventListener("click", () => onChangeVariant(variant)));
  });

  loadProductData();
});
