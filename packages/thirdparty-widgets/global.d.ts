import { BrizyProduct } from "./src/Cart/export/types";

declare global {
  interface Window {
    brizyProducts: BrizyProduct;
  }
}
