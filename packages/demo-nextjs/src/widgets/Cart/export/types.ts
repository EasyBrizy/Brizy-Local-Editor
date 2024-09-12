import { CartItem } from "@/lib/db/shopify/cart/types";

export interface Amount {
  amount: string;
  currencyCode: string;
}

export interface InitialiseCartData {
  items: CartItem[];
  totalQuantity: number;
  estimatedCost: {
    totalAmount: Amount;
    totalTaxAmount: Amount | null;
  };
}

export interface ProductVariant {
  id: string;
  options: {
    name: string;
    values: string[];
  }[];
  variants: {
    id: string;
    title: string;
    available: boolean;
    options: string[];
  }[];
}

export type BrizyProduct = {
  [key: string]: ProductVariant;
} & {
  moneyFormat: string;
};
