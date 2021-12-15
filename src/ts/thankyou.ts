import { Cart } from "./models/cart";
import { myNavBar } from "./functions/navbar";

window.onload = function () {
  myNavBar();

  let cart = new Cart();

  let orderSum: HTMLDivElement = document.getElementById(
    "order-summary"
  ) as HTMLDivElement;

  let orderQty: HTMLParagraphElement = document.createElement("p");
  orderQty.id = "cart-count";
  orderQty.innerHTML = cart.displayCartQty() + " items";

  let orderTotal: HTMLParagraphElement = document.createElement("p");
  orderTotal.id = "order-total";
  orderTotal.innerHTML = "Total: " + cart.updateCartTotal() + ":-";

  orderSum.appendChild(orderQty);
  orderSum.appendChild(orderTotal);
  cart.displayCartQty();
};
