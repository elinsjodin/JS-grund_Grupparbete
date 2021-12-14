import { Cart } from "./models/cart";
import { myNavBar } from "./functions/navbar";

window.onload = function () {
  myNavBar();

  let cart = new Cart();

  let orderSum: HTMLDivElement = document.getElementById(
    "order-summary"
  ) as HTMLDivElement;

  let orderQty: HTMLParagraphElement = document.createElement("p");
  orderQty.id = "order-quantity";
  orderQty.innerHTML = cart.displayTotalThankyou() + " items";

  let orderTotal: HTMLParagraphElement = document.createElement("p");
  orderTotal.id = "order-total";
  orderTotal.innerHTML = "Total: " + cart.updateCartTotal() + ":-";

  orderSum.appendChild(orderQty);
  orderSum.appendChild(orderTotal);
};
