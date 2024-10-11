import { __VISUAL_CONFIG__ } from "../../../global";
import { EntityType } from "../../constants/EntityType";
import { ProductVariant } from "../Cart/export/types";
import { reinitializeCarts, showUserErrors } from "../Cart/export/utils";
import { addItemToCart, getProductsWithVariants } from "./requests";

export const getProductsChoices = async () => {
  const { handler } = Brizy?.config?.getAll().api?.collectionItems?.getCollectionItems ?? {};

  return new Promise((resolve, reject) => {
    if (typeof handler === "function") {
      handler(resolve, reject, { id: EntityType.PRODUCT });
    } else {
      reject("Handler is not a function");
    }
  });
};

export const getProductId = (config: __VISUAL_CONFIG__, itemId?: string) =>
  !itemId || itemId === "auto" ? config.pageData?.reference?.collectionId ?? "" : itemId;

//#region Export functions
const getAddToCartData = (productId: string) => {
  const productIdAttr = `[data-brz-product-handle="${productId}"]`;

  const quantity =
    document.querySelector<HTMLInputElement>(`.brz-shopify-quantity-container ${productIdAttr}`)?.value || "1";

  const variantContainer = document.querySelector<HTMLElement>(
    `.brz-shopify-variant-container[data-product-handle="${productId}"]`,
  );

  const selectedVariants = variantContainer
    ? Array.from(variantContainer.querySelectorAll<HTMLElement>("[data-brz-variant-title]")).map((node) => ({
        name: node.dataset.brzVariantTitle ?? "",
        value: node.dataset.brzWrapperValue ?? "",
      }))
    : [];

  return { quantity, selectedVariants };
};

export const handleAddToCart = async (item: HTMLButtonElement, productId: string) => {
  try {
    const cart = localStorage.getItem("cart");
    const cartId = cart ? JSON.parse(cart).cartId : null;

    const { quantity = 1, selectedVariants } = getAddToCartData(productId) ?? {};

    attachSpinner({ cartNode: item, loading: true });

    const response = await addItemToCart({
      quantity: +quantity,
      variants: selectedVariants,
      cartId,
      productId,
    });

    attachSpinner({ cartNode: item, loading: false });

    const { cartData, userErrors } = response.data?.data ?? {};

    if (userErrors?.length) {
      return showUserErrors(userErrors);
    }

    if (cartData) {
      const { id, checkoutUrl, items, totalQuantity, estimatedCost } = cartData;

      if (id !== cartId) {
        localStorage.setItem("cart", JSON.stringify({ cartId: id, checkoutUrl }));
      }

      if (items.length) {
        reinitializeCarts({ items, totalQuantity, estimatedCost });
      }
    }
  } catch (error) {
    attachSpinner({ cartNode: item, loading: false });
    console.error("Failed to add item to cart:", error);
  }
};

export const attachSpinner = ({ cartNode, loading }: { cartNode: HTMLButtonElement; loading: boolean }): void => {
  if (!cartNode.children.length) return;

  const _children = Array.from(cartNode.children);

  const spinner = _children.find((node) => node.classList.contains("brz-icon-spinner"));

  if (loading) {
    cartNode.classList.add("brz-blocked");

    _children.forEach((node) => {
      node.classList.add("brz-invisible");
    });

    if (spinner) {
      spinner.classList.remove("brz-invisible", "brz-hidden");
    }
  } else {
    cartNode.classList.remove("brz-blocked");

    _children.forEach((node) => {
      node.classList.remove("brz-invisible");
    });

    if (spinner) {
      spinner.classList.add("brz-hidden");
    }
  }
};

export const loadProductData = async () => {
  const productIds = Array.from(
    new Set(
      Array.from(document.querySelectorAll<HTMLButtonElement>(".add-to-cart-third-party-wrapper"))
        .map((item) => item.getAttribute("data-product-id"))
        .filter((id): id is string => !!id),
    ),
  ).join(",");

  if (!productIds) return;

  try {
    const response = await getProductsWithVariants(productIds);
    const { products, moneyFormat } = response.data;

    window.brizyProducts = {
      ...Object.fromEntries(products.map((product: ProductVariant) => [product.id, product])),
      moneyFormat,
    };
  } catch (error) {
    console.error("Failed to load product data:", error);
  }
};

export const checkAvailable = (
  variantOptions: string[],
  productID: string,
): {
  isAvailable: boolean;
  variantID?: string;
} => {
  const currentVariant = window?.brizyProducts?.[productID];

  if (!currentVariant) {
    return {
      isAvailable: false,
      variantID: undefined,
    };
  }

  const item = currentVariant.variants?.find(({ options }: { options: string[] }) => {
    return options.every((option) => variantOptions.includes(option));
  });

  const isAvailable = !!item && item.available;
  const variantID = item?.id;

  return { isAvailable, variantID };
};

export const getActualVariantValue = (variantItems: NodeListOf<Element>): Array<string> => {
  const variantOptions: Array<string> = [];
  variantItems.forEach((item) => {
    variantOptions.push(item.getAttribute("data-brz-wrapper-value") ?? "");
  });
  return variantOptions.filter(Boolean);
};

export const syncAddToCarts = (isAvailable: boolean, productID: string): void => {
  const selector = `.add-to-cart-third-party-wrapper[data-product-id="${productID}"]`;

  const addToCarts = document.querySelectorAll<HTMLElement>(selector);

  addToCarts.forEach((addToCart) => {
    let soldedOutCandidate = null;

    if (!isAvailable) {
      addToCart.style.pointerEvents = "none";
      const addToCartChildren = addToCart.childNodes;
      addToCartChildren.forEach((child) => {
        const element = child as HTMLElement;
        if (element.innerText === "Sold Out!") {
          soldedOutCandidate = element;
        } else {
          element.style.display = "none";
        }
      });

      if (!soldedOutCandidate) {
        const soldOutElement = document.createElement("div");
        const content = document.createTextNode("Sold Out!");
        soldOutElement.append(content);
        addToCart.append(soldOutElement);
      }
    } else {
      addToCart.style.pointerEvents = "auto";
      addToCart.childNodes.forEach((child) => {
        const element = child as HTMLElement;
        element.style.removeProperty("display");

        if (element.innerText === "Sold Out!") {
          addToCart.removeChild(child);
        }
      });
    }
  });
};

export const onChangeVariant = (variant: HTMLElement) => {
  const productID = variant.getAttribute("data-product-handle");

  console.log("Product ID", productID);
  if (!productID) return;

  const variantItems = variant.querySelectorAll("[data-brz-wrapper-value]");

  const variantOptions = getActualVariantValue(variantItems);

  const { isAvailable, variantID } = checkAvailable(variantOptions, productID);

  if (!variantID) return;

  syncAddToCarts(isAvailable, productID);
};

//#endregion
