import { myNavBar } from "./navbar";

import { Product } from "./models/products";

import { perfumeimage } from "../components/perfumebottle.jpg";

window.onload = function () {
  loadCart();
  myNavBar();
};

let LOCAL_STORAGE_CART_KEY = "product.items";
let products = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY));

let addBtn: HTMLButtonElement = document.createElement("button");
addBtn.id = "addBtn";
addBtn.addEventListener("change", () => {
  incrementCart();
});

let removeBtn: HTMLButtonElement = document.createElement("button");
removeBtn.id = "removeBtn";
removeBtn.addEventListener("change", decrementCart);

let cart = [];

function incrementCart(img: string, name: string, price: string) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].qty += 1;
      return;
    }
  }
  let item = { img, name, price, qty: 1 };
  cart.push(item);
}

function decrementCart() {}

function loadCart() {
  let btnDiv: HTMLDivElement = document.createElement("div");

  let addToCartBtn: HTMLButtonElement = document.createElement("button");
  addToCartBtn.addEventListener("click", addToCart);

  btnDiv.appendChild(addToCartBtn);
}

function saveProducts() {
  localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(products));
}

function addToCart(event, p: Product) {
  event.preventDefault();

  cart.push(newProduct);

  saveProducts();
}
