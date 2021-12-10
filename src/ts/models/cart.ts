import { Product } from "./products";
import { Item } from "./item";
import { cartList, localStorageKey } from "../functions/localStorage";

export class Cart {

  constructor(){
    let cart = cartList || [];
 
    function saveInLocalStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(Item));
    }
    
    function decrementCart(qtyInput) {
      let valueCount: number = qtyInput.value;
    
      valueCount--;
    
      qtyInput.value = valueCount;
    }

    function incrementCart(qtyInput) {
      let valueCount: number = qtyInput.value;
    
      valueCount++;
    
      qtyInput.value = valueCount;
    }

    function removeItemFromCart(productToRemove: Product) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.name === productToRemove.name) {
          cart.splice(i, 1);
        }
      }
    }

    function quantityChanged(qtyInput) {
      let input = qtyInput.target;
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
    }
    
    function updateCartTotal() {
      let total: number = 0;
      for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].product.price * cart[i].qty;
      }
      total = Math.round(total * 100) / 100;
      let totalCartPrice: HTMLSpanElement = document.getElementById(
        "total-cart-price"
      ) as HTMLDivElement;
      totalCartPrice.innerText = total + ":-";
    }
    };

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






