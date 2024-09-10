export interface CartItem {
  id: string;
  quantity: number;
  merchandise: MerchandiseItem;
}

interface MerchandiseItem {
  id: string;
  title: string;
  image?: {
    url: string;
  };
  price: {
    amount: number;
    currencyCode: string;
  };
  compareAtPrice?: {
    amount: number;
  };
  selectedOptions: {
    name: string;
    value: string;
  }[];
  product: {
    title: string;
  };
  quantity: number;
}
