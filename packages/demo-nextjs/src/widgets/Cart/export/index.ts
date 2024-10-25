import { processAddToCart } from "./addToCart";
import { CART_SIDEBAR_CLASS } from "./constants";
import { closeCart, hideElement, initializeCart, openCart } from "./utils";

document.addEventListener("DOMContentLoaded", () => {
  const cartWrappers = document.querySelectorAll<HTMLElement>(".third-party-cart");

  if (!cartWrappers.length) return;

  processAddToCart();

  const cart = localStorage.getItem("cart");
  const cartId = cart ? JSON.parse(cart).cartId : null;

  if (cartId) {
    initializeCart(cartWrappers, cartId);
  }

  const handleCartButtonClick = (cartWrapper: HTMLElement) => {
    const cart = cartWrapper.querySelector<HTMLElement>(`.${CART_SIDEBAR_CLASS}`);

    // Close other carts
    cartWrappers.forEach((otherCartWrapper) => {
      if (otherCartWrapper !== cartWrapper) {
        const otherCart = otherCartWrapper.querySelector<HTMLElement>(`.${CART_SIDEBAR_CLASS}`);
        if (otherCart) closeCart(otherCart);
      }
    });

    if (cart) {
      openCart(cart);
      const closeBtn = cart.querySelector(`.${CART_SIDEBAR_CLASS}-extra`);

      if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          closeCart(cart);
        });
      }
    }
  };

  cartWrappers.forEach((cartWrapper) => {
    cartWrapper.addEventListener("click", () => handleCartButtonClick(cartWrapper));
    const badge = cartWrapper.querySelector<HTMLElement>(".brz-ui-ed-badge-count");

    if (badge && badge.textContent === "0") {
      hideElement(badge);
    }
  });
});
