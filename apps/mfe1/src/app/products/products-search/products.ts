import { Product } from "@demo/services";

let productId = 1;
export const PRODUCTS: Product[] = [
  {
    id: productId++,
    name: 'iPhone 15'
  },
  {
    id: productId++,
    name: 'iPhone 15 Pro'
  },
  {
    id: productId++,
    name: 'iPhone 15 Pro Max'
  },
  {
    id: productId++,
    name: 'iPhone 16'
  },
  {
    id: productId++,
    name: 'iPhone 16 Pro'
  },
  {
    id: productId++,
    name: 'iPhone 16 Pro Max'
  }
];
