import { Product } from "./products";

export class Item {
  product: Product;
  qty: number;

  constructor(product: Product, qty: number) {
    this.product = product;
    this.qty = qty;
  }
}
