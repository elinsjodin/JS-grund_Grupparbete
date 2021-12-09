import { cartList, localStorageKey } from "./functions/localStorage";

import { myNavBar } from "./functions/navbar";

import { Detail } from "./models/details";

import { footer } from "./functions/footer";

window.onload = function () {
  myNavBar();
  footer();
  handleAddToCart();
};

function handleAddToCart() {
  let addToCartBtn: HTMLButtonElement = document.createElement("button");
  addToCartBtn.setAttribute("type", "button");
  addToCartBtn.id = "add-to-cart-btn";
  addToCartBtn.innerText = "Add to Cart";
  addToCartBtn.addEventListener("click", pushToCart);
  document.body.appendChild(addToCartBtn);
}

function pushToCart(e) {
  e.preventDefault();
  cartList.push();
}
