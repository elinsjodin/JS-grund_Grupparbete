import { myNavBar } from "./functions/navbar"

import { Product } from "./models/products";

import { cartList, localStorageKey } from "./functions/localStorage";
import { perfumeimage } from "../components/perfumebottle.jpg";

window.onload = function () {
  loadCart();
  myNavBar();
};

let addBtn: HTMLButtonElement = document.createElement("button");
addBtn.id = "addBtn";
addBtn.addEventListener("click", () => {
  incrementCart(cartList[i].name);
});

let subBtn: HTMLButtonElement = document.createElement("button");
subBtn.id = "removeBtn";
subBtn.addEventListener("click", decrementCart);

let cart = [];

function incrementCart(img: string, name: string, price: string) {
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].name === name) {
      cartList[i].qty += 1;
      return;
    }
  }
  let item = { img, name, price, qty: 1 };
  cartList.push(item);
}

function decrementCart() {}

function loadCart() {
  let btnDiv: HTMLDivElement = document.createElement("div");

  let addToCartBtn: HTMLButtonElement = document.createElement("button");
  addToCartBtn.addEventListener("click", () => {
    addToCart;
  });

  btnDiv.appendChild(addToCartBtn);
}

function addToCart(event, p: Product) {
  event.preventDefault();

  cart.push(newProduct);

  saveProducts();
}