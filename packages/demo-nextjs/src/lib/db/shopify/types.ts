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

export interface ProductVariant {
  name: string;
  values: string[];
}

export interface Variant {
  name: string;
  value: string;
}

export interface VariantQueryResponse {
  edges: {
    node: {
      id: string;
      title: string;
      selectedOptions: {
        name: string;
        value: string;
      }[];
      availableForSale: boolean;
      price: {
        amount: number;
        currencyCode: string;
      };
    };
  }[];
}
