import { Product } from "./models/products";

window.onload = function () {
  loadCart();
};

let LOCAL_STORAGE_CART_KEY = "product.items";
let products = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY));

function loadCart() {
  let btnDiv: HTMLDivElement = document.createElement("div");

  let addToCartBtn: HTMLButtonElement = document.createElement("button");
  addToCartBtn.addEventListener("click", addToCart);

  btnDiv.appendChild(addToCartBtn);
}

function saveProducts() {
  localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(products));
}

function addToCart(p: Product) {
  event.preventDefault();

  cart.push(newProduct);

  saveProducts();
}
