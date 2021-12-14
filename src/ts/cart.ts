import { myNavBar } from "./functions/navbar";

import { Product } from "./models/products";

import { Item } from "./models/item";

import { cartList, localStorageKey } from "./functions/localStorage";

import { Cart } from "./models/cart";

import perfumeimage from "../../components/perfumebottle.jpg";

let cart = new Cart();

window.onload = function () {
  myNavBar();
  ProductsInCart();
};

let cartRows: HTMLDivElement = document.getElementById(
  "cart-rows"
) as HTMLDivElement;

function ProductsInCart() {
  for (let i = 0; i < cart.items.length; i++) {
    let itemImg: HTMLImageElement = document.createElement("img");
    itemImg.className = "productImg";
    itemImg.alt = "Perfumebottle";
    itemImg.src = cart.items[i].product.img;

    let itemName: HTMLSpanElement = document.createElement("span");
    itemName.innerText = cart.items[i].product.name;

    let itemPrice: HTMLSpanElement = document.createElement("span");
    itemPrice.id = "cart-item-price";
    itemPrice.innerText = cart.items[i].product.price + ":-";

    let subBtn: HTMLButtonElement = document.createElement("button");
    subBtn.id = "subBtn";
    subBtn.innerHTML = "<i class='bi bi-dash'></i>";
    subBtn.addEventListener("click", () => {
      //decrementCart(subBtn);
      cart.decrementCart(cart.items[i].product);
    });

    let qtyInput: HTMLInputElement = document.createElement("input");
    qtyInput.id = "qtyInput";
    qtyInput.value = cart.items[i].qty.toString();
    // let qtyTotal: number = parseInt(qtyInput.value);
    // qtyInput.addEventListener("change", quantityChanged);

    let addBtn: HTMLButtonElement = document.createElement("button");
    addBtn.id = "addBtn";
    addBtn.innerHTML = "<i class='bi bi-plus'></i>";
    addBtn.addEventListener("click", () => {
      cart.incrementCart(cart.items[i].product);
    });

    let deleteBtn: HTMLButtonElement = document.createElement("button");
    deleteBtn.id = "deleteBtn";
    deleteBtn.innerHTML = "<i class='bi bi-x'></i>";
    deleteBtn.addEventListener("click", () =>
      cart.removeItemFromCart(cart.items[i].product)
    );
    cartRows.appendChild(itemImg);
    cartRows.appendChild(itemName);
    cartRows.appendChild(itemPrice);
    cartRows.appendChild(subBtn);
    cartRows.appendChild(qtyInput);
    cartRows.appendChild(addBtn);
    cartRows.appendChild(deleteBtn);
  }
  this.displayCartQty();
}

console.log(cart.items);

let checkoutBtn = document.getElementById(
  "checkout-button"
) as HTMLButtonElement;
checkoutBtn.addEventListener("click", checkout);

function checkout() {
  location.href = "checkout.html";
}
// let totalCartPrice: HTMLSpanElement = document.getElementById(
//   "total-cart-price"
// ) as HTMLDivElement;
// totalCartPrice.innerText = total + ":-";
