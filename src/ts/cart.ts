import { myNavBar } from "./functions/navbar"

import { Product } from "./models/products";

import { cartList, localStorageKey } from "./functions/localStorage";

window.onload = function () {
  loadCart();
  myNavBar();
};

function loadCart() {
  let btnDiv: HTMLDivElement = document.createElement("div");

  let addToCartBtn: HTMLButtonElement = document.createElement("button");
  addToCartBtn.addEventListener("click", () => {
    addToCart;
  });

  btnDiv.appendChild(addToCartBtn);
}

function saveProducts() {
  localStorage.setItem(localStorageKey, JSON.stringify(cartList));
}

function addToCart(event, p: Product) {
  event.preventDefault();

  cart.push(newProduct);

  saveProducts();
}