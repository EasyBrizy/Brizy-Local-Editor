import { addItemToCart, getProductsWithVariants } from "./requests";
import { ProductVariant } from "./types";
import { getAddToCartData, reinitializeCarts, showUserErrors } from "./utils";

const handleAddToCart = async (productId: string) => {
  try {
    const cart = localStorage.getItem("cart");
    const cartId = cart ? JSON.parse(cart).cartId : null;

    const { quantity = 1, selectedVariants } = getAddToCartData(productId) ?? {};

    const response = await addItemToCart({
      quantity: +quantity,
      variants: selectedVariants,
      cartId,
      productId,
    });

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
    console.error("Failed to add item to cart:", error);
  }
};

const setupAddToCartButtons = () => {
  const addToCarts = document.querySelectorAll<HTMLButtonElement>(".brz-shopify-add-to-cart");

  addToCarts.forEach((item) => {
    const productId = item.getAttribute("data-brz-product-handle");
    if (productId) {
      item.addEventListener("click", () => handleAddToCart(productId));
    }
  });
};

const loadProductData = async () => {
  const productIds = Array.from(
    new Set(
      Array.from(document.querySelectorAll<HTMLButtonElement>(".brz-shopify-add-to-cart"))
        .map((item) => item.getAttribute("data-brz-product-handle"))
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

export const processAddToCart = async () => {
  setupAddToCartButtons();
  await loadProductData();
};
