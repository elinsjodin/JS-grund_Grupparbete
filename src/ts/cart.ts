import { myNavBar } from "./functions/navbar";

import { Product } from "./models/products";

import { Item } from "./models/item";

import { cartList, localStorageKey } from "./functions/localStorage";

window.onload = function () {
  myNavBar();
  renderProductsInCart();
};

function saveInLocalStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify(Item));
}

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
  saveInLocalStorage();
}

function decrementCart(qtyInput) {
  let valueCount: number = qtyInput.value;

  valueCount--;

  qtyInput.value = valueCount;

  saveInLocalStorage();
}

function incrementCart(qtyInput) {
  let valueCount: number = qtyInput.value;

  valueCount++;

  qtyInput.value = valueCount;

  saveInLocalStorage();
}

// Flytta denna kod till details.ts
// function addToCart(productToAdd: Product) {
//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i].product.name === productToAdd.name) {
//       cart[i].qty += 1;
//       return;
//     }
//     let item: Item = {
//       product: productToAdd,
//       qty: 1,
//     };
//     cart.push(item);
//   }
//   saveInLocalStorage();
// }

function removeItemFromCart(productToRemove: Product) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.name === productToRemove.name) {
      cart.splice(i, 1);
    }
  }
  updateCartTotal();
  saveInLocalStorage();
}

// let item: Item = {
//       product: productToRemove,
//       qty: 1,
//     };

function quantityChanged(qtyInput) {
  let input = qtyInput.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal(qtyInput);
  saveInLocalStorage();
}

function updateCartTotal(qtyInput: number) {
  let total: number = 0;
  for (let i = 0; i < cart.length; i++) {
    let priceElement: HTMLSpanElement = document.getElementById(
      "cart-item-price"
    ) as HTMLSpanElement;
    let quantityElement = qtyInput;
    let price = parseFloat(priceElement.innerText.replace("", ":-"));
    let quantity = quantityElement;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  let totalCartPrice: HTMLSpanElement = document.getElementById(
    "total-cart-price"
  ) as HTMLDivElement;
  totalCartPrice.innerText = total + ":-";
  saveInLocalStorage();
}

let checkoutBtn = document.getElementById(
  "checkout-button"
) as HTMLButtonElement;
checkoutBtn.addEventListener("click", checkout);

function checkout() {
  location.href = "checkout.html";
}
