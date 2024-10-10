import { Item } from "@brizy/builder-ui/lib/elements/AlphaCart/components/Item";

export const cartItems: Item[] = [
  {
    id: "1",
    title: "Product 1",
    price: "$10",
    quantity: 1,
    variants: [{ Color: "Black" }],
    image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-cap-black.png",
    oldPrice: "$15",
  },
  {
    id: "2",
    title: "Product 2",
    price: "$15",
    quantity: 2,
    variants: [{ Size: "S" }, { Color: "Beige" }],
    image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-beige-1.png",
    oldPrice: "$20",
  },
  {
    id: "3",
    title: "Product 3",
    price: "$20",
    quantity: 1,
    image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hat-1.png",
    variants: [{ Material: "Cotton" }],
    oldPrice: "$25",
  },
];
