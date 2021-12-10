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
    itemPrice.innerText = cart[i].product.price + ":-";
    cartRows.appendChild(itemPrice);

    let addBtn: HTMLButtonElement = document.createElement("button");
    addBtn.id = "addBtn";
    addBtn.innerHTML = "<i class='bi bi-plus'></i>";
    addBtn.addEventListener("click", () => {
      incrementCart(cart[i].product);
    });
    cartRows.appendChild(addBtn);

    let qtyInput: HTMLInputElement = document.createElement("input");
    qtyInput.id = "qtyInput";
    let qtyTotal: number = parseInt(qtyInput.value);
    qtyInput.addEventListener("change", quantityChanged);
    cartRows.appendChild(qtyInput);

    let subBtn: HTMLButtonElement = document.createElement("button");
    subBtn.id = "subBtn";
    subBtn.innerHTML = "<i class='bi bi-dash'></i>";
    subBtn.addEventListener("click", () => {
      decrementCart(cart[i].product);
    });
    cartRows.appendChild(subBtn);

    let deleteBtn: HTMLButtonElement = document.createElement("button");
    deleteBtn.id = "deleteBtn";
    deleteBtn.innerHTML = "<i class='bi bi-x'></i>";
    deleteBtn.addEventListener("click", () => removeItemFromCart(i));
    cartRows.appendChild(deleteBtn);
  }
  saveInLocalStorage();
}

let checkoutBtn: HTMLButtonElement = document.getElementById(
  "checkout-button"
) as HTMLButtonElement;
checkoutBtn.addEventListener("click", checkout);

function incrementCart(productToAdd: Product) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.name === productToAdd.name) {
      cart[i].qty += 1;
      return;
    }
    saveInLocalStorage();
  }

  let item: Item = {
    product: productToAdd,
    qty: 1,
  };
  cart.push(item);
}

function decrementCart(productToRemove: Product) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.name === productToRemove.name) {
      cart.splice(i, 1);
    }
  }
  saveInLocalStorage();
}

function checkout() {
  location.href = "checkout.html";
}

function removeItemFromCart(i) {
  cart.splice(i, 1);
  updateCartTotal();
  saveInLocalStorage();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function updateCartTotal(qtyTotal: number) {
  let total: number = 0;
  for (let i = 0; i < cart.length; i++) {
    // let cartRow = cart[i];
    let priceElement: HTMLSpanElement = document.getElementById(
      "cart-item-price"
    ) as HTMLSpanElement;
    let quantityElement = qtyTotal;
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
