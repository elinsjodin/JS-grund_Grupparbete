import { myNavBar } from "./navbar";

import { Product } from "./models/products";

import { handleLocalStorage } from "./localStorage";

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
  handleLocalStorage();
  localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(products));
}

function addToCart(event, p: Product) {
  event.preventDefault();

  cart.push(newProduct);

  saveProducts();
}
