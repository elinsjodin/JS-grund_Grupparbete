import { Product } from "./products";
import { Item } from "./item";
import { cartList, localStorageKey } from "../functions/localStorage";

export class Cart {
  items: Item[];

  constructor() {
    this.items = cartList || [];
  }

  saveInLocalStorage() {
    localStorage.setItem(localStorageKey, JSON.stringify(Item));
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
    // let totalCartPrice: HTMLSpanElement = document.getElementById(
    //   "total-cart-price"
    // ) as HTMLDivElement;
    // totalCartPrice.innerText = total + ":-";
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

  //export class Cart{
  //     localStorage: Function;
  //     decrementCart: Function;
  //     incrementCart: Function;
  //     removeItem: Function;
  //     quantity: Function;
  //     updateCart: Function;

  //     constructor(localStorage, decrementCart, incrementCart, removeItemFromCart, quantityChanged, updateCartTotal){
  //     this.localStorage = localStorage;
  //     this.decrementCart = decrementCart;
  //     this.incrementCart = incrementCart;
  //     this.removeItem = removeItemFromCart;
  //     this.quantity = quantityChanged;
  //     this.updateCart = updateCartTotal;
  //     }
  //     function decrementCart(qtyInput) {
  //   let valueCount: number = qtyInput.value;

  //   valueCount--;

  //   qtyInput.value = valueCount;

  //   saveInLocalStorage();
  // }

  // function incrementCart(qtyInput) {
  //   let valueCount: number = qtyInput.value;

  //   valueCount++;

  //   qtyInput.value = valueCount;

  //   saveInLocalStorage();
  // }

  // function removeItemFromCart(productToRemove: Product) {
  //   for (let i = 0; i < cart.length; i++) {
  //     if (cart[i].product.name === productToRemove.name) {
  //       cart.splice(i, 1);
  //     }
  //   }
  //   updateCartTotal();
  //   saveInLocalStorage();
  // }

  // function quantityChanged(qtyInput) {
  //   let input = qtyInput.target;
  //   if (isNaN(input.value) || input.value <= 0) {
  //     input.value = 1;
  //   }
  // }

  // function updateCartTotal() {
  //   let total: number = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     total = total + cart[i].product.price * cart[i].qty;
  //   }

  //   total = Math.round(total * 100) / 100;
  //   let totalCartPrice: HTMLSpanElement = document.getElementById(
  //     "total-cart-price"
  //   ) as HTMLDivElement;
  //   totalCartPrice.innerText = total + ":-";
  // }
  //   }
  //}
}
