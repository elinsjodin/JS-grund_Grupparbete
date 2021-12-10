import { myNavBar } from "./functions/navbar";

import { Product } from "./models/products";

import { Item } from "./models/item";

import { cartList, localStorageKey } from "./functions/localStorage";

import { Cart } from "./models/cart";

window.onload = function () {
  myNavBar();
  renderProductsInCart();
};

let cart = cartList;

let cartRows: HTMLDivElement = document.getElementById(
  "cart-rows"
) as HTMLDivElement;

function renderProductsInCart() {
  for (let i = 0; i < cart.length; i++) {
    let itemImg: HTMLImageElement = document.createElement("img");
    itemImg.src = cart[i].product.img;
    cartRows.appendChild(itemImg);

    let itemName: HTMLSpanElement = document.createElement("span");
    itemName.innerText = cart[i].product.name;
    cartRows.appendChild(itemName);

    let itemPrice: HTMLSpanElement = document.createElement("span");
    itemPrice.id = "cart-item-price";
    itemPrice.innerText = cart[i].product.price + ":-";
    cartRows.appendChild(itemPrice);

    let subBtn: HTMLButtonElement = document.createElement("button");
    subBtn.id = "subBtn";
    subBtn.innerHTML = "<i class='bi bi-dash'></i>";
    subBtn.addEventListener("click", () => {
      decrementCart(subBtn);
    });
    cartRows.appendChild(subBtn);

    let qtyInput: HTMLInputElement = document.createElement("input");
    qtyInput.id = "qtyInput";
    // let qtyTotal: number = parseInt(qtyInput.value);
    qtyInput.addEventListener("change", quantityChanged);
    cartRows.appendChild(qtyInput);

    let addBtn: HTMLButtonElement = document.createElement("button");
    addBtn.id = "addBtn";
    addBtn.innerHTML = "<i class='bi bi-plus'></i>";
    addBtn.addEventListener("click", () => {
      incrementCart(addBtn);
    });
    cartRows.appendChild(addBtn);

    let deleteBtn: HTMLButtonElement = document.createElement("button");
    deleteBtn.id = "deleteBtn";
    deleteBtn.innerHTML = "<i class='bi bi-x'></i>";
    deleteBtn.addEventListener("click", () =>
      removeItemFromCart(cart[i].product)
    );
    cartRows.appendChild(deleteBtn);
  }
}

let checkoutBtn = document.getElementById(
  "checkout-button"
) as HTMLButtonElement;
checkoutBtn.addEventListener("click", checkout);

function checkout() {
  location.href = "checkout.html";
}

// Flytta denna kod till details.ts?
// export function
