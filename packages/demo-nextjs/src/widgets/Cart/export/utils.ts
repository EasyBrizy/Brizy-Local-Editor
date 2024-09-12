import { CartItem } from "@/lib/db/shopify/cart/types";
import { CART_SIDEBAR_CLASS } from "./constants";
import { deleteCartItem, getCart, updateCartItem } from "./requests";
import { Amount, InitialiseCartData } from "./types";

//#region Utility functions
export const closeCart = (sidebar: HTMLElement) => sidebar.classList.remove(`${CART_SIDEBAR_CLASS}-open`);
export const openCart = (sidebar: HTMLElement) => sidebar.classList.add(`${CART_SIDEBAR_CLASS}-open`);
export const hideElement = (element: HTMLElement) => element.classList.add("brz-hidden");
export const showElement = (element: HTMLElement) => element.classList.remove("brz-hidden");

export const showUserErrors = (userErrors: { message: string }[]) => {
  const errors = userErrors.map((error) => error.message).join("\n");
  alert(errors);
};

export const getPrice = (price: Amount) => `${price.currencyCode} ${price.amount}`;

export const reinitializeCarts = (cartData: InitialiseCartData) => {
  document.querySelectorAll<HTMLElement>(".third-party-cart").forEach((cartWrapper) => {
    const { items, totalQuantity, estimatedCost } = cartData;
    reinitializeCart({ items, totalQuantity, estimatedCost, cartWrapper });
  });
};

//#endregion

//#region Cart Item HTML Template
export const getCartItemHtml = ({ merchandise, quantity, id }: CartItem) => {
  const { image, product, price, compareAtPrice, selectedOptions } = merchandise;

  const productTitle = product.title;

  const priceValue = getPrice({
    currencyCode: price.currencyCode,
    amount: (price.amount * quantity).toFixed(2),
  });

  const compareAtPriceValue = compareAtPrice
    ? getPrice({ currencyCode: price.currencyCode, amount: (compareAtPrice.amount * quantity).toFixed(2) })
    : "";

  let selectedOptionsHtml = "";

  if (selectedOptions) {
    selectedOptionsHtml = selectedOptions
      .map(
        ({ name, value }) => `
        <div class="brz-ui-ed-row">
          <span class="brz-ui-ed-typography brz-ui-ed-cart-item-wrapper-details-variants-title">${name}:</span>
          <span class="brz-ui-ed-typography brz-ui-ed-cart-item-wrapper-details-variants-value">${value}</span>
        </div>
      `,
      )
      .join("");
  }

  return `
<div class="brz-ui-ed-row brz-ui-ed-cart-item" data-item="${id}">
  <div class="brz-ui-ed-image">
    <img alt="${productTitle}" class="brz-ui-ed-image-img brz-ui-ed-cart-item-image" src="${image?.url}">
  </div>
  <div class="brz-ui-ed-row brz-ui-ed-cart-item-wrapper">
    <div class="brz-ui-ed-row brz-ui-ed-cart-item-wrapper-details">
      <div class="brz-ui-ed-col brz-ui-ed-cart-item-wrapper-details-variants">
        <span class="brz-ui-ed-typography brz-ui-ed-cart-item-wrapper-details-item-title">${productTitle}</span>
        ${selectedOptionsHtml}
      </div>
      <div class="brz-ui-ed-col brz-ui-ed-cart-item-wrapper-details-price">
        <span class="brz-ui-ed-typography brz-ui-ed-price">${priceValue}</span> ${
    compareAtPriceValue
      ? ` <span class="brz-ui-ed-typography brz-ui-ed-price-compare-at">${compareAtPriceValue}</span>`
      : ""
  }
      </div>
    </div>
    <div class="brz-ui-ed-row brz-ui-ed-row-middle brz-ui-ed-cart-item-wrapper-quantity">
      <div class="brz-ui-ed-input-number brz-ui-ed-input-number-outlined brz-ui-ed-cart-item-wrapper-quantity-input-number">
        <div class="brz-ui-ed-input-number-handler-wrap">
          <span role="button" aria-label="Increase Value" aria-disabled="false" class="brz-ui-ed-input-number-handler brz-ui-ed-input-number-handler-up">
            <span role="img" aria-label="up" class="anticon anticon-up brz-ui-ed-input-number-handler-up-inner">
              <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M890.5 755.3 537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7" />
              </svg>
            </span>
          </span>
          <span role="button" aria-label="Decrease Value" aria-disabled="true" class="brz-ui-ed-input-number-handler brz-ui-ed-input-number-handler-down brz-ui-ed-input-number-handler-down-disabled">
            <span role="img" aria-label="down" class="anticon anticon-down brz-ui-ed-input-number-handler-down-inner">
              <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7" />
              </svg>
            </span>
          </span>
        </div>
        <div class="brz-ui-ed-input-number-input-wrap">
          <input autocomplete="off" role="spinbutton" aria-valuemin="1" aria-valuenow="${quantity}" step="1" class="brz-ui-ed-input-number-input" value="${quantity}">
        </div>
      </div>
      <svg class="brz-ui-ed-cart-item-wrapper-remove-button" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M14 6v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6zm-3-6c.6 0 1 .4 1 1v2h4v2H0V3h4V1c0-.6.4-1 1-1Zm-1 2H6v1h4z" />
      </svg>
    </div>
  </div>
</div>
 `;
};
//#endregion

//#region Cart Functions
const setCartItems = (items: CartItem[], cartWrapper: HTMLElement, totalQuantity: number, cartSidebar: HTMLElement) => {
  const cartCounter = cartWrapper.querySelector(".brz-ui-ed-badge-count");
  const cartItemsNode = cartSidebar.querySelector(".brz-ui-ed-cart-items");

  if (cartCounter) {
    const cartQuantity = String(totalQuantity);
    cartCounter.textContent = cartQuantity;
    cartCounter.setAttribute("title", cartQuantity);
  }

  if (cartItemsNode) {
    cartItemsNode.innerHTML = items.map(getCartItemHtml).join("");
  }
};

const setCartFooter = (footer: HTMLElement, totalAmount: Amount) => {
  showElement(footer);
  footer.querySelector(".brz-ui-ed-cart-footer-total-value")!.textContent = getPrice(totalAmount);

  footer.querySelector(".brz-ui-ed-cart-footer-checkout")?.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (cart.checkoutUrl) {
      window.open(cart.checkoutUrl, "_blank");
    }
  });
};
//#endregion

//#region Event Handlers
const attachRemoveItemEvent = (btn: HTMLElement) => {
  btn.addEventListener("click", async () => {
    const item = btn.closest<HTMLElement>(".brz-ui-ed-cart-item");
    const itemId = item?.dataset.item || "";
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");

    if (!itemId || !cart.cartId) return;

    try {
      btn.style.pointerEvents = "none";
      const { data } = await deleteCartItem({ cartId: cart.cartId, itemId });
      const { cartData, userErrors } = data.data;

      if (userErrors.length) {
        return showUserErrors(userErrors);
      }

      item?.remove();
      reinitializeCarts(cartData);
    } finally {
      btn.style.pointerEvents = "auto";
    }
  });
};

const updateQuantity = async (quantity: number, itemId: string) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "{}");

  if (!cart.cartId) throw new Error("Cart ID not found");

  const { data } = await updateCartItem({
    cartId: cart.cartId,
    itemId,
    quantity,
  });
  const { cartData, userErrors } = data.data;

  if (userErrors.length) {
    showUserErrors(userErrors);

    return {
      errors: userErrors,
    };
  }

  reinitializeCarts(cartData);
};

const handleQuantityChange = async (
  button: HTMLElement,
  newQuantity: number,
  quantityNode: HTMLInputElement,
  itemNode: HTMLElement,
  itemId: string,
) => {
  try {
    button.style.pointerEvents = "none";
    if (newQuantity > 0) {
      const { errors } = (await updateQuantity(newQuantity, itemId)) || {};

      if (errors) return;
      quantityNode.value = newQuantity.toString();
      quantityNode.setAttribute("value", newQuantity.toString());
    } else {
      await handleItemRemoval(itemId, itemNode);
    }
  } finally {
    button.style.pointerEvents = "auto";
  }
};

const attachQuantityEvents = (quantityWrapper: HTMLElement) => {
  const incrementBtn = quantityWrapper.querySelector<HTMLElement>(".brz-ui-ed-input-number-handler-up");
  const decrementBtn = quantityWrapper.querySelector<HTMLElement>(".brz-ui-ed-input-number-handler-down");

  const quantityNode = quantityWrapper
    .closest(".brz-ui-ed-cart-item-wrapper-quantity-input-number")
    ?.querySelector<HTMLInputElement>(".brz-ui-ed-input-number-input");

  const itemNode = quantityWrapper.closest<HTMLElement>(".brz-ui-ed-cart-item");
  const itemId = itemNode?.dataset.item || "";

  if (!quantityNode || !quantityNode.value || !itemNode) return;

  incrementBtn?.addEventListener("click", () => {
    const quantity = Number(quantityNode.value) + 1;
    handleQuantityChange(incrementBtn, quantity, quantityNode, itemNode, itemId);
  });

  decrementBtn?.addEventListener("click", () => {
    const quantity = Number(quantityNode.value) - 1;
    handleQuantityChange(decrementBtn, quantity, quantityNode, itemNode, itemId);
  });
};

const handleItemRemoval = async (itemId: string, itemNode: HTMLElement | null) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "{}");

  if (!cart.cartId) return;

  const { data } = await deleteCartItem({ cartId: cart.cartId, itemId });
  const { cartData, userErrors } = data.data;

  if (userErrors.length) {
    return showUserErrors(userErrors);
  }

  itemNode?.remove();

  reinitializeCarts(cartData);
};
//#endregion

//#region Cart Initialization
export const initializeCart = async (cartWrappers: NodeListOf<HTMLElement>, cartId: string) => {
  try {
    const { data } = await getCart(cartId);
    const { items, totalQuantity, estimatedCost } = data.data;

    if (totalQuantity > 0) {
      cartWrappers.forEach((cartWrapper) =>
        reinitializeCart({
          cartWrapper,
          items,
          totalQuantity,
          estimatedCost,
        }),
      );
    }
  } catch (error) {
    console.error("Failed to initialize cart:", error);
  }
};

const reinitializeCart = ({
  items,
  totalQuantity,
  estimatedCost,
  cartWrapper,
}: InitialiseCartData & {
  cartWrapper: HTMLElement;
}) => {
  const cartSidebar = cartWrapper.querySelector<HTMLElement>(".brz-ui-ed-cart");
  if (!cartSidebar) return;

  const footer = cartSidebar.querySelector<HTMLElement>(".brz-ui-ed-cart-footer");
  const emptyCart = cartSidebar.querySelector<HTMLElement>(".brz-ui-ed-cart-empty");
  const badge = cartWrapper.querySelector<HTMLElement>(".brz-ui-ed-badge-count");

  if (items.length === 0) {
    handleEmptyCart(cartSidebar, emptyCart, badge);
  } else {
    handleNonEmptyCart(cartSidebar, emptyCart, badge, items, totalQuantity, cartWrapper, footer, estimatedCost);
  }
};

const handleEmptyCart = (cartSidebar: HTMLElement, emptyCart: HTMLElement | null, badge: HTMLElement | null) => {
  emptyCart && showElement(emptyCart);
  cartSidebar.classList.add("brz-ui-ed-cart-empty");
  badge && hideElement(badge);
};

const handleNonEmptyCart = (
  cartSidebar: HTMLElement,
  emptyCart: HTMLElement | null,
  badge: HTMLElement | null,
  items: CartItem[],
  totalQuantity: number,
  cartWrapper: HTMLElement,
  footer: HTMLElement | null,
  estimatedCost: InitialiseCartData["estimatedCost"],
) => {
  emptyCart && hideElement(emptyCart);
  cartSidebar.classList.remove("brz-ui-ed-cart-empty");

  setCartItems(items, cartWrapper, totalQuantity, cartSidebar);
  footer && setCartFooter(footer, estimatedCost.totalAmount);
  badge && showElement(badge);

  addEventListeners(cartSidebar);
};

const addEventListeners = (cartSidebar: HTMLElement) => {
  cartSidebar
    .querySelectorAll<HTMLElement>(".brz-ui-ed-cart-item-wrapper-remove-button")
    .forEach(attachRemoveItemEvent);

  cartSidebar.querySelectorAll<HTMLElement>(".brz-ui-ed-input-number-handler-wrap").forEach(attachQuantityEvents);

  cartSidebar
    .querySelectorAll<HTMLElement>(".brz-ui-ed-input-number-input")
    .forEach((input) => input.addEventListener("change", handleInputChange));
};

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = parseInt(target.value);

  if (isNaN(value)) {
    target.value = "1";
  }

  const itemNode = target.closest<HTMLElement>(".brz-ui-ed-cart-item");
  const itemId = itemNode?.dataset.item;

  if (!itemNode || !itemId) return;

  handleQuantityChange(target, value, target, itemNode, itemId);
};

//#endregion
