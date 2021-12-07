import { myNavBar } from "./functions/navbar";

import { Product } from "./models/products";

import { Item } from "./models/item";

import { cartList, localStorageKey } from "./functions/localStorage";

import { perfumeimage } from "../components/perfumebottle.jpg";

window.onload = function () {
  myNavBar();
  renderProductsInCart();
};

let cart = cartList;

function renderProductsInCart() {
  let mainCartDiv: HTMLDivElement = document.createElement("div");
  mainCartDiv.id = "mainCartDiv";
  document.body.appendChild(mainCartDiv);

  if (cart.length <= 0) {
    for (let i = 0; i < cart.length; i++) {
      let addBtn: HTMLButtonElement = document.createElement("button");
      addBtn.id = "addBtn";
      addBtn.innerText = "+";
      addBtn.addEventListener("click", () => {
        incrementCart(cart[i]);
      });
      mainCartDiv.appendChild(addBtn);

      let qtyInput: HTMLInputElement = document.createElement("input");
      qtyInput.id = "qtyInput";
      let qtyTotal: number = parseInt(qtyInput.value);
      // qtyResult.innerText = qtyTotal.toString();
      mainCartDiv.appendChild(qtyInput);

      let subBtn: HTMLButtonElement = document.createElement("button");
      subBtn.id = "subBtn";
      subBtn.innerText = "-";
      subBtn.addEventListener("click", () => {
        decrementCart(cart[i]);
      });
      mainCartDiv.appendChild(subBtn);

      let deleteBtn: HTMLButtonElement = document.createElement("button");
      deleteBtn.id = "deleteBtn";
      deleteBtn.innerHTML = "<i class='bi bi-x'></i>";
      deleteBtn.addEventListener("click", () => removeItemFromCart(i));
      mainCartDiv.appendChild(deleteBtn);
    }
  }

  let cartTitle: HTMLParagraphElement = document.createElement("p");
  cartTitle.id = "cartTitle";
  cartTitle.innerText = "CART";
  mainCartDiv.appendChild(cartTitle);

  let total: HTMLSpanElement = document.createElement("span");
  total.id = "total";
  total.innerText = "Total:" + "";
  mainCartDiv.appendChild(total);

  let checkoutBtn = document.createElement("button");
  checkoutBtn.id = "checkoutBtn";
  checkoutBtn.innerText = "Checkout";
  checkoutBtn.addEventListener("click", checkout);
  mainCartDiv.appendChild(checkoutBtn);
}

function incrementCart(productToAdd: Product) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === productToAdd.name) {
      cart[i].qty += 1;
      return;
    }
  }
  let item: Item = {
    img: perfumeimage,
    name: "Vanilla",
    price: 1050 + ":-",
    qty: 1,
  };
  cart.push(item);
}

function decrementCart(productToRemove: Product) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === productToRemove.name) {
      cart.splice(i, 1);
    }
  }
}
function checkout() {
  location.href = "checkout.ts";
}
function removeItemFromCart(i) {
  cart.splice(i, 1);
}
