export interface Product {
  title: string;
  id: string;
  priceRange: {
    minVariantPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  availableForSale: boolean;
  vendor: string;
  createdAt: string;
  totalInventory: number;
  featuredImage: {
    url: string;
  };
}

export interface QueryResponse {
  products: {
    edges: {
      node: Product;
      cursor: string;
    }[];
    pageInfo: {
      hasNextPage: boolean;
    };
  };
}
