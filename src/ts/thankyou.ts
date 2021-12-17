import { Cart } from "./models/cart";
import { myNavBar } from "./functions/navbar";

window.onload = function () {
  myNavBar();

  let cart = new Cart();

  let orderSum: HTMLDivElement = document.getElementById(
    "order-summary"
  ) as HTMLDivElement;

  let hr1: HTMLHRElement = document.createElement("hr");
  hr1.className = "solid";
  hr1.id = "hr-1";

  let orderQty: HTMLParagraphElement = document.createElement("p");
  orderQty.id = "cart-count";
  orderQty.innerHTML = cart.displayCartQty() + " items";

  let orderTotal: HTMLParagraphElement = document.createElement("p");
  orderTotal.id = "order-total";
  orderTotal.innerHTML = "Total: " + cart.updateCartTotal() + " kr";

  let hr2: HTMLHRElement = document.createElement("hr");
  hr2.className = "solid";
  hr2.id = "hr-2";

  orderSum.appendChild(hr1);
  orderSum.appendChild(orderQty);
  orderSum.appendChild(orderTotal);
  orderSum.appendChild(hr2);
  cart.displayCartQty();
};
