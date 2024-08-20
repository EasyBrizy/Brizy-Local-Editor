export interface Product {
  id: string;
  priceRange: {
    minVariantPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  description: string;
  title: string;
  totalInventory: number;
  featuredImage?: {
    url: string;
  };
  availableForSale: boolean;
  createdAt: string;
  vendor: string;
  url: string;
  [key: string]: unknown;
}
