import { quantityChanged, updateCartTotal } from "./cart";
import { myNavBar } from "./functions/navbar";
// import { cartDropDown } from "./functions/cartModal";

window.onload = function () {
  myNavBar();
  // cartDropDown();
};

let orderSum: HTMLDivElement = document.getElementById(
  "order-summary"
) as HTMLDivElement;

let orderQty: HTMLParagraphElement = document.getElementById("p");
orderQty.id = "oder-quantity";
orderQty.addEventListener("change", quantityChanged());
orderQty.innerHTML = qtyInput + "items";

let orderTotal: HTMLParagraphElement = document.createElement("p");
orderTotal.id = "order-total";
orderTotal.addEventListener("change", updateCartTotal());
orderTotal.innerHTML = "Total" + total + ":-";

orderSum.appendChild(orderQty);
orderSum.appendChild(orderTotal);
