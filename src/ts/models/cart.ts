import { Product } from "./products";
import { Item } from "./item";
import { cartList, localStorageKey } from "../functions/localStorage";

export class Cart {
  items: Item[];

  constructor() {
    this.items = cartList || [];
  }

  saveInLocalStorage() {
    localStorage.setItem(localStorageKey, JSON.stringify(Item)); //cartList?
  }

  decrementCart(qtyInput) {
    let valueCount: number = qtyInput.value;

    valueCount--;

    qtyInput.value = valueCount;
    this.updateCartTotal();
    this.saveInLocalStorage();
  }

  incrementCart(qtyInput) {
    let valueCount: number = qtyInput.value;

    valueCount++;

    qtyInput.value = valueCount;
    this.updateCartTotal();
    this.saveInLocalStorage();
  }

  removeItemFromCart(productToRemove: Product) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].product.name === productToRemove.name) {
        this.items.splice(i, 1);
      }
    }
    this.updateCartTotal();
    this.saveInLocalStorage();
  }

  quantityChanged(qtyInput) {
    let input = qtyInput.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    this.updateCartTotal();
    this.saveInLocalStorage();
  }

  updateCartTotal(): number {
    let total: number = 0;
    for (let i = 0; i < this.items.length; i++) {
      total = total + this.items[i].product.price * this.items[i].qty;
    }
    total = Math.round(total * 100) / 100;
    return total;
    this.saveInLocalStorage();
  }
  addToCart(productToAdd: Product) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].product.name === productToAdd.name) {
        this.items[i].qty += 1;
        return;
      }
      let item: Item = {
        product: productToAdd,
        qty: 1,
      };
      this.items.push(item);
    }
    this.saveInLocalStorage();
  }
}
