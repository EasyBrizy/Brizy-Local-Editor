import { BrizyProduct } from "@/widgets/Cart/export/types";

declare global {
  interface Window {
    brizyProducts: BrizyProduct;
  }
}
