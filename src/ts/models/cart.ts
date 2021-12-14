import { Product } from "./products";
import { Item } from "./item";
import { cartList, localStorageKey } from "../functions/localStorage";

export class Cart {
  items: Item[];

  constructor() {
    this.items = JSON.parse(localStorage.getItem("Cartlist")) || [];
  }

  saveInLocalStorage() {
    localStorage.setItem("Cartlist", JSON.stringify(this.items)); //cartList?
  }

  decrementCart(product: Product) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].product.name === product.name) {
        this.items[i].qty--;
      }
    }

    this.updateCartTotal();
    this.saveInLocalStorage();
  }

  incrementCart(product: Product) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].product.name === product.name) {
        this.items[i].qty++;
      }
    }
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

  // quantityChanged() {
  //   let input = qtyInput.target;
  //   if (isNaN(input.value) || input.value <= 0) {
  //     input.value = 1;
  //   }
  //   this.updateCartTotal();
  //   this.saveInLocalStorage();
  // }

  updateCartTotal(): number {
    let total: number = 0;
    for (let i = 0; i < this.items.length; i++) {
      total = total + this.items[i].product.price * this.items[i].qty;
    }
    total = Math.round(total * 100) / 100;
    return total;
    this.saveInLocalStorage(); //return?
  }

  addToCart(productToAdd: Product) {
    let found: boolean = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].product.name === productToAdd.name) {
        this.items[i].qty += 1;
        found = true;
      }
    }
    if (!found) {
      let item: Item = {
        product: productToAdd,
        qty: 1,
      };
      this.items.push(item);
    }
    this.saveInLocalStorage();
  }

  displayCartQty() {
    let cartBtnQty: HTMLSpanElement = document.getElementById(
      "cart-button"
    ) as HTMLSpanElement;
    let totalQty = 0;
    for (let i = 0; i < this.items.length; i++) {
      totalQty = +this.items[i].qty;
    }
    cartBtnQty.innerHTML = totalQty.toString();
  }
}
